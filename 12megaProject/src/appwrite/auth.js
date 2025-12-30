import { Client, Account, ID } from "appwrite";
import config from "../config/config";

// const client = new Client()
//     .setEndpoint(config.appwriteUrl) // Your API Endpoint
//     .setProject(config.appwriteProjectID);                 // Your project ID

// const account = new Account(client);

// const user = await account.create({
//     userId: ID.unique(), 
//     email: 'pankhaniyaharsh222@gmail.com', 
//     password: 'password'
// });

export class AuthService {
    client = new Client()
    account;

    constructor() {
        this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectID);
        this.account = new Account(this.client)
    }
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                // call another method
                return this.login({ email, password })
            } else {
                return userAccount
            }
        } catch (error) {
            throw error
        }
    }
    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error
        }
    }
    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            if (error.code === 401) {
                return null
            }
            console.log("appwrite service : get currentusere : error : ", error);
            throw error
        }
        return null
    }
    async logOut() {
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("appwrite service : logout : error : ", error);
            throw error
        }
    }
}
const authService = new AuthService()
export default authService
