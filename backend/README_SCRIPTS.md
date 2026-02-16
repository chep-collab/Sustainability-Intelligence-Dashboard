How to generate a one-page PDF summary and send a donor email

1) Install dependencies
   - From the `backend` folder install optional packages:
     npm install puppeteer nodemailer dotenv

2) Generate an HTML summary (safe, no extra packages required):
   node generate_summary.js
   - Writes `onepage_summary.html` into the backend folder.

3) Generate a PDF summary (optional)
   - If you installed puppeteer, the same command will also write `onepage_summary.pdf`:
     node generate_summary.js

4) Send the donor email (optional)
   - Copy the example env file and fill in SMTP creds:
     cp .env.example .env
     # edit .env and fill SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASS/FROM_EMAIL

   - Then run the send script:
     node send_donor_email.js recipient@example.org
   - If `onepage_summary.pdf` exists it will be attached automatically.

Notes
- The scripts are intentionally lightweight. They read the latest indicator from the MongoDB configured by MONGO_URI in your .env and generate a printable summary.
- If you prefer not to install puppeteer, open `onepage_summary.html` in your browser and "Print to PDF".
