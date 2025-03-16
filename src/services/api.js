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



export async function createNewUser(email, password, name = "mehdifury", avatar = "https://picsum.photos/800") {
  const {data} = await client.post("/users",{
    email , password , name ,avatar
  })
  return data
}


const products = axios.create({
  baseURL : "https://api.escuelajs.co/api/v1"
})

export async function getProducts () {
  const {data} = await products("/products?limit=12&offset=24")
  return data
}