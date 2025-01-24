const app = require("./app");
const connectDatabase = require("./db/Database");

// Handling uncaught Exception when setting up backend server
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server for handling uncaught exception");
});

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "config/.env",
    });
}

// Connect Database
connectDatabase();

// Create Server
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

// Unhandled promise rejection
process.on("unhandledRejection", (err) => {
    console.error(`Unhandled Rejection: ${err.message}`);
    console.log("Shutting down the server due to unhandled promise rejection.");

    server.close(() => {
        process.exit(1); // Exit with failure code
    });
});