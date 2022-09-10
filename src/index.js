const express = require('express');
const dotenv = require("dotenv");
const bodyParser = require("body-parser")
const logger = require("./config/logger.config")
dotenv.config();
const PORT = process.env.PORT || 8080;
const routes = require('./route/main.route')
const init = async () => {
    try {
        const app = express();
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.use(routes);
        app.use(express.json());
        app.get("/", (_, res) => res.status(200).json({ message: "Backend Active!" }));
        // catch 404 
        app.use((_, res) => res.status(404).json({ message: "Route not found!" }));
        app.listen(PORT || 8080, () => {
            logger.info(`Server running on port: ${PORT}`);
        })
    } catch (error) {
        logger.error("Something went wrong: ", error);
    }
}

init();


const unexpectedErrorHandler = (error) => {
    logger.error(error);
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
    logger.info("SIGTERM received");
});
