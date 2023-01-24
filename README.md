# SendGrid Sample

Create the template:

1. Create a SendGrid account
2. Create a dynamic email template
3. Edit the dynamic email template with a format and message of your choice

For integration, you'll need a sender. Options are:

- Domain (recommended for production)
- Single Sender (quick start)

Follow the process accordingly for your choice.

Create the `.env` file:

```sh
SENDGRID_API_KEY="<KEY>"
SENDER="<SENDER EMAIL>"
TO="<RECIPIENT EMAIL>"
```

Install and run the code:

```sh
npm install
node app.js
```
