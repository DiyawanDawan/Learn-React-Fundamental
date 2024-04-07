// Arrow Function Componen + propertis
const Button = (props) => {
    // console.log(props);
    // eslint-disable-next-line react/prop-types
    const {variantBg = "bg-blue-900", children = "..."} = props
    return (
      <button type="button" className={`-m-2.5 rounded-md p-2.5 ${variantBg}  text-slite-500 text-neutral-50`}>
        {children}
      </button>
    )
  }
  
export default Button