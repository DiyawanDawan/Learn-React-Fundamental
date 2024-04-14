const List = ({home, blog, testimonial, learning, about}) =>{
    return (
        <ul>
            <Li>{home}</Li>
            <Li>{blog}</Li>
            <Li>{testimonial}</Li>
            <Li>{learning}</Li>
            <Li>{about}</Li>
     </ul>
    )
}

const Li = ({children}) =>{
    // const {home, blog, testimonial, learning, about} = props
    // console.log(props);
    return (
        <>
            <li><a href="#">{children}</a></li>
            {/* <li><a href="#">{blog}</a></li>
            <li><a href="#">{testimonial}</a></li>
            <li><a href="#">{learning}</a></li>
            <li><a href="#">{about}</a></li> */}
        </>
    )
}

export default List;