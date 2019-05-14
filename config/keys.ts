const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const DB_NAME = process.env.DB_NAME;
const DB_HOST = process.env.DB_HOST;

export const MONGO_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@${DB_HOST}/${DB_NAME}`;
