import List from "./List"

const NavList = ({ home, blog, testimonial, learning, about }) => {
    // const } = props
    // console.log(props);
    return (
        <div className="nav-list">
            <List homo={home} blog={blog} testimonial={testimonial} learning={learning} about={about} />
        </div>
    )
}

export default NavList