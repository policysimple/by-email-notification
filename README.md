# grpc-node-notification-email

Service to send email notifications.

## Support services

This service does not require the support of the other services.

## Pendings

* Use **node-notification-email-service.proto** from an external source.

## Providers

* Postmark
* SendGrid
* MailGun

## How to add new providers

- On **service.js** file you have the include the name of your provider in the array *allowedProviders*

``` bash
const allowedProviders = ['postmark', 'sendgrid', 'mailgun', 'newprovider'];
```

- Inside the folder providers you have to create a new folder with the name of your provider (The same added in previous step).

- Inside the folder you have to create the file **index.js** which will export the function **send**. The function **send** will receive two params. The first one are all environment variables of the service, and the second one the information about the mail.

``` bash

'use strict';

const send = async (configData, emailData) => {

    const {
        PROVIDERNAME_ENV_VAR_1,
        PROVIDERNAME_ENV_VAR_2
    } = configData;

    // Logic

    const resultSendEmail = await someFnWhichSendEmail(emailData);

    return resultSendEmail;

};

exports.send = send;

```

### Tips
- Related environment variables should start with the name of the provider. Eg `MYPROVIDERNAME_API_KEY=abc` `MYPROVIDERNAME_EMAIL_FORM=myemail@mydomain.com`

- Inside the folder of you *provider*, you can create the **utils.js** file where you can create functions to standarize the email data, add extra data, or add validations.

## How to test

You will need two consoles/terminals.

* In the first one you should run `npm run start`.
* In the second one you should run `npm run test`.

important notes:
* **Please try to not exaggerate the unit test of this service, this service could run out the free plans quickly or could be charge some price.**

* This service could fails if the free quota is run out (In the case of a free account in the used provider) or if the environment variables of the providers are not well defined. **Please, if the unit test fails, check first your free quota and your environment variables**
