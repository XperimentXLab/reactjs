import { redirect } from "react-router-dom"

export async function Auth(request) {
  const pathname = new URL(request.url).pathname
  const isLoggedIn = localStorage.getItem("loggedin")
  console.log(pathname)
  
  if (!isLoggedIn) {
    throw redirect(`/login?redirectTo=${pathname}`)
  }

  console.log("Login succesfull")
  return null
}