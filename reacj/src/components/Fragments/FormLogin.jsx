import { useEffect, useRef, useState } from "react"
import Button from "../Elemets/Buttons/Index"
import InputForm from "../Elemets/Input/Index"
import { auth } from "../../services/auth"


const FormLogin = () => {
    const [loginFailed, setLoginFailed] = useState("")
    const headlerLogin = (e) => {
        e.preventDefault();
        const data = {
            username: e.target.username.value,
            password: e.target.password.value,
        };
        auth(data, (status, res) => {
            if (status) {
                localStorage.setItem("token", res);
                // Clear the loginFailed state if login is successful
                window.location.href = "/product"
                setLoginFailed("");
            } else {
                setLoginFailed(res.response.data);
                console.log(res.response.data);
            }
        });
    };
    
   const usernameRef = useRef(null)
   useEffect(() => {
    usernameRef.current.focus();
   }, [])
    return (
        <form action="" onSubmit={headlerLogin}>
            <InputForm label='Username' type="text" placeholder="Username" name="username" ref={usernameRef}/>
            <InputForm label="Password" type="password" name="password" placeholder="********"/>
            <Button classname="bg-blue-700 w-full" type="submit">Login</Button>
            {loginFailed && <p className="text-red-500 text-center mt-4">{loginFailed}</p>}
      </form>
    )
}
export default FormLogin