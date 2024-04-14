import Button from "../Elements/Button"
import Logo from "../Elements/Logo"
import NavList from "../Elements/NavList"
import logo from '../../image/favicon.png';
 const Nav = ({home, blog, testimonial, learning, about}) => {
    return (
        <nav>
           <Logo logo={logo}/>
           <NavList homo={home} blog={blog} testimonial={testimonial} learning={learning} about={about}/>
           <Button classname="btn-login">Log In</Button>
           <Button classname="btn-signup">Sign Up</Button>
        </nav>
       
    )
}
export default Nav