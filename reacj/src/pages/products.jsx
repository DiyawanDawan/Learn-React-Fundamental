import CardProduct from "../components/Fragments/CardProduct"

const ProductPage = () => {
    return (
        <div className="flex justify-center">
           <CardProduct>
            <CardProduct.Head image="/images/jam.jpg"></CardProduct.Head>
            <CardProduct.Body titel="Jam Tangan">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nobis dolor provident? Possimus libero mollitia aut unde reiciendis facilis laudantium delectus! Veritatis impedit pariatur ducimus facilis rerum unde, repudiandae libero.</CardProduct.Body>
            <CardProduct.Footer price="$40.00">Buy Now</CardProduct.Footer>
           </CardProduct>
        </div>
    )
}

export default ProductPage