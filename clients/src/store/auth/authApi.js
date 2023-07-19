import Cookies from "js-cookie";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;


export function loginUser(form){
 
  return new Promise(async(resolve,reject)=>{
     try {

      const res = await fetch(`${apiUrl}/auth/login`, {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "content-type": "application/json",
        }
      })
      if(res){
        const data=await res.json()
        resolve({data})
      }
      else{
        throw new Error
      }
     } catch (error) {
        reject(error)
     }
    })
}

export function fetchUser(token){

  return new Promise(async(resolve,reject)=>{
     try {
       const response=await fetch(`${apiUrl}/user`, {
        headers: {
          Authorization: `Bearer ${token}`
        }})
      if(response){
        const data=await response.json()
        
        resolve({data})
      }
      else{
        throw new Error("Failed to fetch user data");
      }
     } catch (error) {
        reject(error)
     }
    })
}

export function signOut() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('/auth/logout');
      if (response.ok) {
        resolve({ data:'success' });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      console.log(error)
      reject( error );
    }
  });
}
