/* eslint-disable react/prop-types */
import { forwardRef } from "react"
import Input from "./Input"
import Label from "./Label"

const InputForm = forwardRef((prop, ref) => {
    const { label, type, name, placeholder} = prop;
// console.log(prop);
    return (
        <div className="mb-6">
            <Label htmlFor={name}>{label}</Label>
            <Input type={type} placeholder={placeholder} name={name} ref={ref}/>
        </div>
    )
})
InputForm.displayName = 'InputForm';

export default InputForm