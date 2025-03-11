import axios from "axios";



const client = axios.create({
    baseURL : "https://api.escuelajs.co/api/v1"
})

export async function userAuth(email , password){
    const {data} =await client.post("/auth/login" ,{
      email,password
    })
    return data
}