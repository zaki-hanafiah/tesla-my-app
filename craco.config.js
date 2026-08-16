/* craco.config.js */
const CracoAlias = require("craco-alias");
const CracoEnvPlugin = require('craco-plugin-env')

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: "options",
                baseUrl: "src", // this is from where all search in files will start
                aliases: {
                    // "@SharedComponents": "./components/shared", // TODO: add shared components path from src folder
                }
            }
        },
        {
            plugin: CracoEnvPlugin,
            options: {
                variables: {}
            }
        }
    ],
    style: {
        postcss: {
            env: {
                autoprefixer: {
                    cascade: true,
                },
            },
        },
    },
}