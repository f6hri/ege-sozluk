// lib/appwrite.js
import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6678b23400365bb6eee8');

const account = new Account(client);
const databases = new Databases(client);

export { client, account, databases };
