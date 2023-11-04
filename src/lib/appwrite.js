/* src/lib/appwrite.js */
import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6546142c62b7ca3fd4c1");

export const account = new Account(client);
export const databases = new Databases(client);