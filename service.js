const Mali = require('mali');
const path = require('path');
const { error, log } = console;
const { name, version } = require("./package.json");
const { emailDataValidation } = require('./validation');
const PROTO_PATH = path.resolve(__dirname, './node_modules/by-email-notification-sdk/proto/by/notificationemail/v1/by_email_notification.proto');

const {
    PORT,
    PROVIDERS_PRIORITY,
    MAX_ATTEMPTS,
    MAX_ATTEMPTS_PER_PROVIDER
} = process.env;

const allowedProviders = ['postmark', 'sendgrid', 'mailgun'];

async function sendEmail(ctx) {

    try {

        const data = ctx.req;
        const providers = PROVIDERS_PRIORITY ? PROVIDERS_PRIORITY.split(' ') : [];

        if (providers.length === 0) {

            throw new Error('There are not providers');

        }

        const validation = emailDataValidation.validate(data);

        if (validation.error) {

            throw new Error('Error in the payload');

        }

        let indexProvider = 0;
        let wasSent = false;
        let attempts = 0;
        let attemptsByProvider = 0;

        do {

            try {

                attempts += 1;
                attemptsByProvider += 1;

                if (!allowedProviders.includes(providers[indexProvider])) {

                    throw new Error('The selected provider is not allowed.');

                }

                const { send } = require(`./providers/${providers[indexProvider].toLowerCase()}/index.js`);
                log('log@service.js:sendEmail: sending email: ', `attempt ${attempts}`);
                const resultSend = await send(process.env, data);
                wasSent = true;

            } catch (err) {

                error('error@service.js:sendEmail: error sending email: ', err.message);

                if (attempts >= MAX_ATTEMPTS) {

                    throw new Error('Max attemps were reached');

                }

                if (attemptsByProvider >= MAX_ATTEMPTS_PER_PROVIDER) {

                    indexProvider = indexProvider === providers.length - 1 ? 0 : indexProvider + 1;
                    attemptsByProvider = 0;

                }

            }

        } while (!wasSent);

        ctx.res = { status: 'success', message: 'The message was sent', info: { send: true }, error: null };

    } catch (err) {

        error(`error@service.js:sendEmail`, err.message);
        ctx.res = { status: 'error', message: 'The email was not sent', info: null, error: err.message };

    }

}

function main() {
    const app = new Mali(PROTO_PATH)
    app.use({ sendEmail });
    app.start(`0.0.0.0:${PORT}`);
    log(`service ${name}@${version} is running by port ${PORT}`);
}

main();