import Button from "../Elements/Button"

export default function ServicesBody() {
    return (
        <section className="hero">
            <Services />
            <HeaderServices />
         </section>
    )
}
const HeaderServices = () => {
    return (
        <div className="services-header">
            <img src="image/header_img.png" alt="service" />
        </div>
    )
}

const Services = () => {
    return (
        <div className="services">
            <p className="sub-titel">Suxzmakeiteasy</p>
            <h2 className="title">Find Your Way Of Success</h2>
            <p className="desckripsi">We help you to increase self-confidence and train yourself in a direction, and
                make you more creative in developing a work</p>
            {/* <button type="button" className="btn-get-start"></button> */}
            {/* <button type="button" className="btn-service">Our Services</button> */}
            <Button classname="btn-get-start">Get Started</Button>
            <Button classname="btn-service">Our Services</Button>
        </div>
    )
}