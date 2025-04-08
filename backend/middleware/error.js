import ErrorHandler from "../utils/errorHandler.js";

export default (err, req, res, next) => {
    let error = {
        statusCode: err?.statusCode || 500,
        message: err?.message || "Internal Server Error",
    };

    // Handling Mongoose CastError (invalid IDs)
    if (err.name === "CastError") {
        const message = `Resource not found. Invalid ${err?.path}`;
        error = new ErrorHandler(message, 404);
    }

    // Handling Mongoose ValidationError (invalid data)
    if (err.name === "ValidationError") {
        const message = Object.values(err.errors).map((value) => value.message).join(", ");
        error = new ErrorHandler(message, 400);
    }

    // Development Mode: Show detailed error stack
    if (process.env.NODE_ENV === "DEVELOPMENT") {
        res.status(error.statusCode).json({
            message: error.message,
            error: err,
            stack: err?.stack,
        });
    }

    // Production Mode: Only show the error message
    if (process.env.NODE_ENV === "PRODUCTION") {
        res.status(error.statusCode).json({
            message: error.message,
        });
    }
};
