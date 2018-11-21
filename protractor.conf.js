const tsNode = require('ts-node');
const path = require('path');

exports.config = {
    framework: 'jasmine2',

    capabilities: {
        browserName: 'chrome'
    },

    directConnect: true,

    specs: ['e2e/specs/*.spec.ts'],

    onPrepare: () => {
        tsNode.register({
            project: path.resolve(process.cwd(), './tsconfig.json')
        });

        browser.waitForAngularEnabled(false);
        browser
            .manage()
            .timeouts()
            .implicitlyWait(3000);
        browser
            .manage()
            .window()
            .setSize(1920, 1080);
    }
};
