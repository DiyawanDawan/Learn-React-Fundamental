/* eslint-disable react/prop-types */
import Input from "./Input"
import Label from "./Label"

const InputForm = (prop) => {
    const { label, type, name, placeholder } = prop;
// console.log(prop);
    return (
        <div className="mb-6">
            <Label htmlFor={name}>{label}</Label>
            <Input type={type} placeholder={placeholder} name={name}/>
        </div>
    )
}

export default InputForm