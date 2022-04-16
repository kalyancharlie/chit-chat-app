const isLogging = process.env.REACT_APP_LOG_MODE === 'true' ? true : false;

const log = (...message) => {
    // console.log('log mode' + isLogging)
    if (isLogging) {
        console.log(...message);
    }
}

export default log