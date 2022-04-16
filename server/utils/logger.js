const isLogging = process.env.LOG_MODE === 'true' ? true : false;

const log = (...message) => {
    if (isLogging) {
        console.log(...message);
    }
}

module.exports = log