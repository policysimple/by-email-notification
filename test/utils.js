exports.generateData = (name, email) => {

    return {
        to: [{
            name,
            email,
        }],
        subject: 'Testing node-notification-email',
        text: `Testing node-notification-email service from unit testing at ${Date.now()}`,
        tag: 'Unit Testing'
    }

};
