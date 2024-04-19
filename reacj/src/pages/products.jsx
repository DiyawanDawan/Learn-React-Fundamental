import CardProduct from "../components/Fragments/CardProduct"

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
        }
    ]
    return (
        <div className="flex justify-center py-4">
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
    )
}

export default ProductPage