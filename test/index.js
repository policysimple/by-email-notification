const assert = require("assert");
const RGPCClient = require('node-grpc-client');
const path = require("path");
const SERVER_URL = "localhost";
const SERVER_PORT = process.env.PORT || 3000;
const { error, log } = console;
const PROTO_PATH = path.resolve(__dirname, '../node-notification-email-service.proto');
const { generateData } = require('./utils');

describe("Unit testing - node-notificaiton-email-service", () => {

    let clientEmailNotification;

    before(() => {

        clientEmailNotification = new RGPCClient(
            PROTO_PATH,
            'cuemby.notificationemail.v1',
            'NotificationEmailAPI',
            `${SERVER_URL}:${SERVER_PORT}`,
            { keepCase: false }
        );

    });

    it("An email should be sent", async () => {

        try {

            const data = generateData('Santiago', 'santiago.yepes@cuemby.com');
            const expectedResponse = {
                status: 'success',
                message: `The message was sent`
            };
            const res = await clientEmailNotification.sendEmailSync(data);
            assert.equal(expectedResponse.status, res.status);
            assert.equal(expectedResponse.message, res.message);

        } catch (err) {

            error('err: ', err);

        }

    });

    it("An email should not be sent: Bad payload", async () => {

        try {

            const data = generateData('Santiago', 'santiago.yepescuemby.com');
            const expectedResponse = {
                status: 'error',
                message: `The email was not sent`
            };
            const res = await clientEmailNotification.sendEmailSync(data);
            assert.equal(expectedResponse.status, res.status);
            assert.equal(expectedResponse.message, res.message);

        } catch (err) {

            error('err: ', err);

        }

    });

});
