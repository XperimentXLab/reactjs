import { Auth } from "./Auth"


export async function loader({ request }) {
  await Auth (request)
  return null
}

function NestedProtected () {
  return (
    <main>
      <h2>Nested Protected Page</h2>
    </main>
  )
}

export default NestedProtected