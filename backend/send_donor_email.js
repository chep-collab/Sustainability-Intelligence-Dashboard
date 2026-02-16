import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT || 587;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const FROM_EMAIL = process.env.FROM_EMAIL || 'no-reply@yourorg.org';

if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
  console.error('Missing SMTP configuration in environment. Please copy backend/.env.example -> .env and fill in SMTP_* values.');
  process.exit(1);
}

async function sendMail({ to, subject, text, html, attachments = [] }) {
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465, // true for 465, false for other ports
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  });

  const info = await transporter.sendMail({
    from: FROM_EMAIL,
    to,
    subject,
    text,
    html,
    attachments
  });

  console.log('Message sent:', info.messageId);
  return info;
}

async function main() {
  const donor = process.argv[2] || 'recipient@example.org';
  const subject = 'Live demo: Sustainability Indicators Dashboard (SID) — Quick 15‑minute walkthrough';

  const md = fs.readFileSync(path.join(process.cwd(), '..', 'DONOR_EMAIL.md'), 'utf8');

  // If a PDF summary exists, attach it
  const pdfPath = path.join(process.cwd(), 'onepage_summary.pdf');
  const attachments = [];
  if (fs.existsSync(pdfPath)) attachments.push({ filename: 'SID_Summary.pdf', path: pdfPath });

  await sendMail({
    to: donor,
    subject,
    text: md,
    html: md.replace(/\n/g, '<br/>'),
    attachments
  });
}

if (require.main === module) {
  main().catch(err => { console.error(err); process.exit(1); });
}

export default sendMail;
