export const errorHandler = (err, req, res, next) => {
    const error = new Error()
    error.statusCode = err.statusCode
    error.message = err.message
    return error
}