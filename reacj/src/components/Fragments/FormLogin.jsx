import Button from "../Elemets/Buttons/Index"
import InputForm from "../Elemets/Input/Index"

const FormLogin = () => {
    return (
        <form action="">
            <InputForm label='Email' type="email" placeholder="example@gmail.com" name="email" />
            <InputForm label="Password" type="password" name="password" placeholder="********"/>
            <Button classname="bg-blue-700 w-full" >Login</Button>
      </form>
    )
}
export default FormLogin