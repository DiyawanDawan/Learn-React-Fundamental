import Nav from "./Nav"

const NavContainer = ({classname, home, blog, testimonial, learning, about}) => {
    // const  = props
    // console.log(props);
    return (
        <div className="container">
        <Nav classname={classname} homo={home} blog={blog} testimonial={testimonial} learning={learning} about={about}/>
    </div>
    )
}

export default NavContainer