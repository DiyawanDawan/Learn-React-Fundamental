import Button from "../Elemets/Buttons/Index";
import InputForm from "../Elemets/Input/Index";

const FormRegister = () => {
    return (
        <form action="">
            <InputForm label="Full Name" name="name" type="text" placeholder="Input your name"/>
            <InputForm label="Email" name="email" type="email" placeholder="example@gmail.com" />
            <InputForm label="Password" name="password" type="password" placeholder="********"/>
            <InputForm label="Confirm password" type="password" name="confirm" placeholder="********"/>
            <Button classname="bg-blue-700">Register</Button>
        </form>
    )
}

export default FormRegister;