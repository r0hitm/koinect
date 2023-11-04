/* src/lib/appwrite.js */
import { Client, Databases, Account } from "appwrite";
import {
    PROJECT_ID,
    ENDPOINT
} from "./appwrite_id";

const client = new Client();
client.setEndpoint(ENDPOINT).setProject(PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);
