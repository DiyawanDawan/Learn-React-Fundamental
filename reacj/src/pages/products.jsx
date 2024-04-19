import Button from "../components/Elemets/Buttons/Index"
import CardProduct from "../components/Fragments/CardProduct"
// import ListNavItem from "../components/Fragments/ListNavItem"

const ProductPage = () => {
    const products = [
        {
            id: 1,
            title: 'Jam Tangan',
            price: "Rp.10000",
            image: "/images/jam.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nobis dolor provident? Possimus libero mollitia aut unde reiciendis facilis laudantium delectus! Veritatis impedit pariatur ducimus facilis rerum unde, repudiandae libero."
        },
        {
            id: 2,
            title: 'Jam Tangan',
            price: "Rp.20000",
            image: "/images/jam.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nobis dolor provident? Possimus libero mollitia aut unde reiciendis facilis laudantium delectus! Veritatis impedit pariatur ducimus facilis rerum unde, repudiandae libero."
        },
        {
            id: 3,
            title: 'Jam Tangan',
            price: "Rp.20000",
            image: "/images/jam.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nobis dolor provident? Possimus libero mollitia aut unde reiciendis facilis laudantium delectus! Veritatis impedit pariatur ducimus facilis rerum unde, repudiandae libero."
        }
    ]
    const email = localStorage.getItem('email')
    const headlerLogOut = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password')
        window.location.href = '/login'
    }
    return (
        <>
        <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
            {email}
            <Button classname="ml-5 bg-black pl-8 pr-8 pb-3 pt-3" onClick={headlerLogOut}>LogOut</Button>
        </div>
       
        <div className="flex justify-center py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => {
               return (
                <CardProduct key={product.id}>
                    <CardProduct.Head image={product.image}></CardProduct.Head>
                    <CardProduct.Body titel={product.title}>{product.description}</CardProduct.Body>
                    <CardProduct.Footer price={product.price}>Buy Now</CardProduct.Footer>
                </CardProduct>
               )
            })}
        </div>
        </>
    )
}

export default ProductPage