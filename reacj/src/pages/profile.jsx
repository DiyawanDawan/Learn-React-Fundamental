import { useLogin } from "../hooks/useLogin"

const Profile = () => {
    const username = useLogin()
  return (
    <div>
        <h1>Profile</h1>
        <h2>{username}</h2>
    </div>
  )
}

export default Profile