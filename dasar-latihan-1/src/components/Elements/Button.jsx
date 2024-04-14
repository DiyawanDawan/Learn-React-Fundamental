const Button = ({classname, children}) => {
    return (
        <div className="btn">
            {/* <ButtonElemt classname={classname}>{children}<ButtonElemt/> */}
            <ButtonElemt classname={classname}>{children}</ButtonElemt>
        </div>
    )
}

const ButtonElemt = ({classname, children}) => {
    return (
        <button type="button" className={classname}>{children}</button>
    )
}

Button.ButtonElemt = ButtonElemt
export default Button