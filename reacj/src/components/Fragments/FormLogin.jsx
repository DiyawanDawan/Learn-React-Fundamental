import Button from "../Elemets/Buttons/Index"
import InputForm from "../Elemets/Input/Index"

const FormLogin = () => {
    const headlerLogin = (e) => {
        e.preventDefault()
        localStorage.setItem('email', e.target.email.value)
        localStorage.setItem('password', e.target.password.value)
        window.location.href = "/product"
        console.log(e.target.email.value);
        console.log('Login Ok');
    }
    return (
        <form action="" onSubmit={headlerLogin}>
            <InputForm label='Email' type="email" placeholder="example@gmail.com" name="email" />
            <InputForm label="Password" type="password" name="password" placeholder="********"/>
            <Button classname="bg-blue-700 w-full" type="submit">Login</Button>
      </form>
    )
}
export default FormLogin