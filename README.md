# SendGrid Sample

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
