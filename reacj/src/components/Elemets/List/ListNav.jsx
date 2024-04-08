const ListItem = () => {
    return (
        <ul className="flex text-center justify-evenly">
            <li className="py-5 font-bold"><a className="text-violet-50 hover:text-gray-500" href="#">Home</a></li>
            <li className="py-5 font-bold"><a className="text-violet-50 hover:text-gray-500" href="#">Product</a></li>
            <li className="py-5 font-bold"><a className="text-violet-50 hover:text-gray-500" href="#">Services</a></li>
            <li className="py-5 font-bold"><a className="text-violet-50 hover:text-gray-500" href="#">Blogs</a></li>
            <li className="py-5 font-bold"><a className="text-violet-50 hover:text-gray-500" href="#">Contact</a></li>
        </ul>
    )
}

export default ListItem