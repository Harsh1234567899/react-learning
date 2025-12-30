import { Client, ID ,Databases ,Storage ,Query } from "appwrite";
import config from "../config/config";

export class Service{
    client = new Client()
    databases
    bucket

    constructor(){
        this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectID);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }
    async createPost ({title,slug ,content , featuredimage , status , userId}){
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollactionId,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("appwrite : create post : error" ,error)
        }
    }

    async updatePost(slug,{title,content ,featuredimage ,status}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollactionId,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status
                }
            )
        } catch (error) {
            console.log("appwrite : update post : error" ,error)
        }
    }
    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollactionId,
                slug,
            )
            return true
        } catch (error) {
            console.log("appwrite : delete post : error" ,error)
            return false
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollactionId,
                slug,
            )
        } catch (error) {
            console.log("appwrite : get post : error" ,error)
            return false
        }
    }
    async getAllPost(querys = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollactionId,
                querys
            )
        } catch (error) {
            console.log("appwrite : get all post : error" ,error)
            return false
        }
    }
    // file upload
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("appwrite : upload file : error" ,error)
            return false
        }
    } 
    async deleteFile(fileID){
        try {
             await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileID
            )
            return true
        } catch (error) {
            console.log("appwrite : delete file : error" ,error)
            return false
        }
    } 
    getFileView(fileID){
        // if (!fileID) {
        //     return null
        // }
        const file = this.bucket.getFileView(
            config.appwriteBucketId,
            fileID
        )
        console.log(file);
        
        return file
    }   
}

 const service2 = new Service()
export default service2