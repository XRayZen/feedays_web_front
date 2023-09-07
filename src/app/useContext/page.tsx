import UserDisplay from "./UserDisplay"
import UserProvider from "./UserProvider"

export default function page() {
  const userInfo = {
    name: 'John Doe',
    age: 42,
  }

  return (
    <UserProvider userInfo={userInfo}>
      <UserDisplay />
    </UserProvider>
  )
}

