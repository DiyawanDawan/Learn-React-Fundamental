
import { Link } from "react-router-dom";
import Button from "../Elemets/Buttons/Index"

const CardProduct = (props) => {
    const { children } = props;
    return (
        <div className="w-full  bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
            {children}
        </div>
    )
}
const Head = (props) => {
  
    const { image, id} = props
    return (
        <Link to={`/product/${id}`}>
            <img src={image} alt="product" className="p-4 rounded-t-[30px] h-[20rem] w-full object-cover" />
        </Link>
    )
}

const Body = (props) => {
    const { children, titel } = props
    return (
        <div className="px-5 bp-5 h-full">
            <a href="" >
                <h5 className="text-xl text-white font-semibold tracking-tight">{titel.substring(0 ,30)}...</h5>
                <p className="text-m text-white">{children.substring(0,100)}...</p>
            </a>
        </div>
    )
}
const Footer = (props) => {
    const { children, price, headlerAddToCard ,id} = props
    return (
        <div className="flex items-center justify-between px-5 pb-5 pt-5">
            <span className="text-xl font-bold text-white">{price.toLocaleString('id-ID', {style: 'currency', currency: 'USD'})}</span>
            <Button classname="bg-blue-600 w-1/3 mx-2.5" onClick={() => headlerAddToCard(id)}>{children}</Button>
        </div>
    )
}

CardProduct.Head = Head
CardProduct.Body = Body
CardProduct.Footer = Footer
export default CardProduct