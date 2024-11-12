
import { Outlet } from "react-router-dom"
import { Auth } from "./Auth"


export async function loader({ request }) {
  await Auth (request)
  return null
}

function Protected () {
  return (
    <main>
      <h2>Protected Page</h2>
      <Outlet />
    </main>
  )

}

export default Protected