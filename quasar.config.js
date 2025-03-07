module.exports = function (/* ctx */) {
    return {
        env: {
            APP_ENV: process.env.APP_ENV || "development",
        },
        define: {
            __APP_ENV__: JSON.stringify(
                process.env.APP_ENV || "development"
            ),
        },
    };
};
