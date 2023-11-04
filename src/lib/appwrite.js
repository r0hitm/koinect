/* src/lib/appwrite.js */
import { Client, Databases, Account, Role, Permission } from "appwrite";
import {
    PROJECT_ID,
    ENDPOINT,
    DATABASE_ID,
    COLLECTION_ID,
} from "./appwrite_id";

const client = new Client();
client.setEndpoint(ENDPOINT).setProject(PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);

// FOR DEBUG:
let promise = databases.listDocuments(DATABASE_ID, COLLECTION_ID);

promise.then(
    function (response) {
        console.log("Database log: ", response);
    },
    function (error) {
        console.log("Database error: ", error);
    }
);
