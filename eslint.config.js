const customConfig = require("./index.js");

module.exports = [
    ...customConfig,
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        languageOptions: {
            ecmaVersion: 6,
            parserOptions: {
                sourceType: "module",
                project: ["tsconfig.json"],
            }
        }
    }
];
