## The Problem

In today's digital age, it's common for individuals to have multiple active subscriptions for various services. Managing these subscriptions and keeping track of renewal dates and payments can be a daunting task. There's also the risk of overspending due to lack of a consolidated view of all subscriptions.

## Our Solution

**Koinect** is a web application designed to help users manage and keep track of all their active subscriptions (services, rent, etc.) that require recurrent payments.

## Features

- Track all your subscriptions in one place
- Get notified before renewals
- Alerts when approaching spending limits
- Easy to use interface

## Tech Stack

- React (Frontend)
- Appwrite (Backend) for authentication and database
- (MLH Track) GoDaddy for domain name (https://koinect.co)

## Setup Locally

1. Clone the repository
2. `cd` into the cloned repository, and install dependencies using `npm install`
3. Run the dev server using `npm run dev`. The app should now be running on `localhost:5173`.
4. Edit the `src/lib/appwrite_id.js`:

```js
export const PROJECT_ID = "YOUR_PROJECT_ID";
export const ENDPOINT = "https://cloud.appwrite.io/v1";
export const DATABASE_ID = "YOUR_DATABASE_ID";
export const COLLECTION_ID = "YOUR_COLLECTION_ID";
```

The document attributes of the database/colletion is:
```ts
userId: string
subscriptionName: string
price: float
subscriptionMonth: int // 1-12 for Jan-Dec
subscriptionDate: int // 1-31 for day of month
frequency: int // in number of months
```

## About Us

This project is developed by Team Ryuu (Team Id: 6150) for the [hackCBS6](https://hackcbs.tech) hackathon.

Team Members: [Rohit Mehta](https://github.com/r0hitm), [Manmeet Singh](https://github.com/manmeet-ms)
