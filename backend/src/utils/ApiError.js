class ApiError extends Error {
    statusCode = 500
    constructor(statusCode, msg) {
        super(msg)
        this.statusCode = statusCode
        this.message = msg;

        //Error.
    }
}

module.exports = ApiError