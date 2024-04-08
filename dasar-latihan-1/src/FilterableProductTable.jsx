// function FilterableProductTable() {
//     return (
//       <div className="container">
//         <div className="search-bar__container">
//           <input type="text" placeholder="Search..." />
//           <div className="search-bar__in_stock_checkbox">
//             <input type="checkbox" />
//             <label>Only show products in stock</label>
//           </div>
//         </div>
//         <div className="product-table__container">
//           <table>
//             <tr>
//               <th>Name</th>
//               <th>Price</th>
//             </tr>
//             <tr>
//               <td colSpan="2">
//                 <strong>Sporting Goods</strong>
//               </td>
//             </tr>
//             <tr>
//               <td>Football</td>
//               <td>$49.99</td>
//             </tr>
//             <tr>
//               <td>Baseball</td>
//               <td>$9.99</td>
//             </tr>
//             <tr>
//               <td>Basketball</td>
//               <td>$29.99</td>
//             </tr>
//             <tr>
//               <td colSpan="2">
//                 <strong>Electronics</strong>
//               </td>
//             </tr>
//             <tr>
//               <td>iPod Touch</td>
//               <td>$99.99</td>
//             </tr>
//             <tr>
//               <td>iPhone 5</td>
//               <td>$399.99</td>
//             </tr>
//             <tr>
//               <td>Nexus 7</td>
//               <td>$199.99</td>
//             </tr>
//           </table>
//         </div>
//       </div>
//     );
//   }



// export default FilterableProductTable
// Compotion Component
export default function FilterableProductTable() {
    return (
        <div className="container">
            <SearchBar />
            <ProductTable title="Nama" price="Harga" />
        </div>
    )
}

function SearchBar() {
    return (
        <div className="search-bar__container">
            {/* <input type="text" name="username" id="username" placeholder="Input full name.."/> */}
            <input type="search" name="" id="" placeholder="search..." />
            <div className="search-bar__in_stock_checkbox">
                <input type="checkbox" name="" id="" />
                <label>Only show products in stock</label>
            </div>
        </div>
    )
}

function ProductTable({ title, price }) {
    return (
        <div className="product-table__container">
            <table>
                <tr>
                    <td>{title}</td>
                    <td>{price}</td>
                </tr>
                <ProductCategoryRow name="Sporting Good" />
                <ProductRow name="Footbal" price="$30.00" />
                <ProductRow name="Futsal" price="$3.00" />
                <ProductRow name="Basket Ball" price="$10.00" />
                <ProductCategoryRow name="Electronic" />
                <ProductRow name="Iphon 12" price="$300.00" />
                <ProductRow name="Samsung" price="$100.00" />
            </table>
        </div>
    )
}

const ProductCategoryRow = ({ name }) => {
    return (
        <tr>
            <td colSpan="2"><strong>{name}</strong></td>
        </tr>
    )
}

const ProductRow = ({ name, price }) => {
    return (

        <tr>
            <td>{name}</td>
            <td>{price}</td>
        </tr>

    )
}