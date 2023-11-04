import { DATABASE_ID, COLLECTION_ID } from "./appwrite_id";
import { databases } from "./appwrite";

/**
 * Add a new subscription to the collection as a new document
 */
export async function addSubscription(userId, subscription) {
    try {
        await databases.createDocument(
            DATABASE_ID,
            COLLECTION_ID,
            userId,
            subscription
        );
    } catch (error) {
        console.log("New document creation error: ", error);
    }
}

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
