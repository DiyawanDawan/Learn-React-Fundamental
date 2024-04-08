import Button from "../Elemets/Buttons/Index"

const CardProduct = (props) => {
    const { children } = props;
    return (
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
            {children}
        </div>
    )
}
const Head = (props) => {
    const { image } = props
    return (
        <a href="">
            <img src={image} alt="product" className="p-4 rounded-t-[23px]" />
        </a>
    )
}

const Body = (props) => {
    const { children, titel } = props
    return (
        <div className="px-5 bp-5">
            <a href="" ><h5 className="text-xl text-white font-semibold tracking-tight">{titel}</h5>
                <p className="text-m text-white">{children}</p>
            </a>
        </div>
    )
}
const Footer = (props) => {
    const { children, price } = props
    return (
        <div className="flex items-center justify-between px-5 pb-5 pt-5">
            <span className="text-xl font-bold text-white">{price}</span>
            <Button classname="bg-blue-600 w-1/2">{children}</Button>
        </div>
    )
}

CardProduct.Head = Head
CardProduct.Body = Body
CardProduct.Footer = Footer
export default CardProduct