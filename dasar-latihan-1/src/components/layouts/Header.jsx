import NavContainer from "../Fragments/NavContainer"

const Header = ({home, blog, testimonial, learning, about}) =>{
    return (
      <>
        <header>
        {/* TODO header */}
        <NavContainer homo={home} blog={blog} testimonial={testimonial} learning={learning} about={about}/>
      </header>
      <main>
        
      </main>
      </>

    )
}
export default Header