import { useEffect, useRef, useState } from "react";
import Button from "../components/Elemets/Buttons/Index"
import CardProduct from "../components/Fragments/CardProduct"
import { getProduct } from "../services/product.services";
// import { getUsernem } from "../services/auth";
import { useLogin } from "../hooks/useLogin";
// import { data } from "autoprefixer";
// import Counter from "../components/Fragments/Counter"
// import ListNavItem from "../components/Fragments/ListNavItem"
// const products = [
//     {
//         id: 1,
//         name: 'Jam Tangan',
//         price: 10000,
//         image: "/images/jam.jpg",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nobis dolor provident? Possimus libero mollitia aut unde reiciendis facilis laudantium delectus! Veritatis impedit pariatur ducimus facilis rerum unde, repudiandae libero."
//     },
//     {
//         id: 2,
//         name: 'Jam Tangan',
//         price: 10000,
//         image: "/images/jam.jpg",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nobis dolor provident? Possimus libero mollitia aut unde reiciendis facilis laudantium delectus! Veritatis impedit pariatur ducimus facilis rerum unde, repudiandae libero."
//     },
//     {
//         id: 3,
//         name: 'Jam Tangan',
//         price: 20000,
//         image: "/images/jam.jpg",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nobis dolor provident? Possimus libero mollitia aut unde reiciendis facilis laudantium delectus! Veritatis impedit pariatur ducimus facilis rerum unde, repudiandae libero."
//     }
// ]
const ProductPage = () => {

    const [card, setCard] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [products, setProduct] = useState([])
    // const [userneme, setUsername] = useState("")
    const userneme = useLogin()
    useEffect(() => {
        setCard(JSON.parse(localStorage.getItem('card')) || [])
    }, []);
    useEffect(() => {
        if (card.length > 0 && products.length > 0) {
            const sum = card.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                if (product) {
                    return acc + product.price * item.qnt;
                }
                return acc; // If product is not found, return the accumulator unchanged
            }, 0);
            setTotalPrice(sum);
            localStorage.setItem('card', JSON.stringify(card));
        }
    }, [card, products]);
   
    const headlerLogOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('password')
        window.location.href = '/login'
    }
    const headlerAddToCard = (id) => {
        if (card.find((item) => item.id === id)) {
            setCard(card.map((item) => item.id === id ? { ...item, qnt: item.qnt + 1 } : item))

        } else {
            setCard([...card, { id, qnt: 1 }])
        }
    }

    // useRef
    const totalPriceRef = useRef(null)
    useEffect(() => {
        if ( products.length > 0 && card.length > 0) {
            totalPriceRef.current.style.display= "table-row"
        } else {
            
            totalPriceRef.current.style.display= "none"
        }
    }, [card, products])

    useEffect(() => {
        getProduct((data) => {
            // console.log(data);
            setProduct(data)
        })
    }, [])
    console.log(totalPriceRef);
    return (
        <>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                {userneme}
                <Button classname="ml-5 bg-black pl-8 pr-8 pb-3 pt-3" onClick={headlerLogOut}>LogOut</Button>
            </div>


            <div className="justify-center flex py-5">
                <div className="grid w-4/6 flex-wrap grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    {products.length > 0 && products.map((product) => {
                        return (
                            <CardProduct key={product.id}>
                                <CardProduct.Head image={product.image} id={product.id} />
                                <CardProduct.Body titel={product.title}>{product.description}</CardProduct.Body>
                                <CardProduct.Footer price={product.price} id={product.id} headlerAddToCard={headlerAddToCard}>Buy Now</CardProduct.Footer>
                            </CardProduct>
                        )
                    })}
                </div>
                <div className="w-2/6">
                    <h1 className="text-3xl font-mono text-green-500 ml-1 mb-2">Card</h1>
                    <table className="border-separate text-left table-auto border-spacing-x-7">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody className="border-b-2">
                            {products.length > 0 && card.map((item) => {
                                // console.log(item.qnt);
                                const product = products.find((product) => product.id === item.id)
                                if (!product) {
                                    // Handle the case where product is not found
                                    return null; // Or any other appropriate action
                                }
                                return (
                                    <tr key={item.id} >
                                        <td>{product.title.substring(0,11)}</td>
                                        <td>{product.price.toLocaleString('id-ID', { style: 'currency', currency: 'USD' })}</td>
                                        <td>{item.qnt}</td>
                                        <td>{(item.qnt * product.price).toLocaleString('id-ID', { style: 'currency', currency: 'USD' })}</td>
                                    </tr>
                                )
                            })}
                            <tr ref={totalPriceRef}>
                                <td colSpan={3} className="font-bold">Total Price</td>
                                <td className="font-bold">{totalPrice.toLocaleString('id-ID', { style: 'currency', currency: 'USD' })}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* <Counter></Counter> */}
        </>
    )
}

export default ProductPage