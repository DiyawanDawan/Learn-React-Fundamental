export default function AboutBody() {
    return (
        <section className="about">
            <AboutImg />
            <AboutUs />
        </section>
    )
}

function AboutImg() {
    return (
        <div className="about-img">
            <img className="img" src="image/woman2 1.png" alt="Abot Iamge Woman" />
            <div className="card">
                <div className="card-body">
                    <img src="image/Ellipse 2.png" alt="" className="card-img" />
                    <div className="card-title">
                        <h3>Sarah Manrope</h3>
                        <p>Designer</p>
                        <i className="fa-solid fa-star fa-lg"></i>
                        <i className="fa-solid fa-star fa-lg"></i>
                        <i className="fa-solid fa-star fa-lg"></i>
                        <i className="fa-solid fa-star fa-lg"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

function AboutUs() {
    return (
        <div className="about-us">
            <div className="title">
                <p className="dest-about">About Us</p>
                <h2>We Help Improve Your Work Experience</h2>
                <p className="desckripsi">We help you to increase self-confidence and train yourself in a direction.</p>
                <ul>
                    <li><div className="icon"><i className="fa-solid fa-check icons"></i></div> <p>Study and produce creation to get a job</p></li>
                    <li><div className="icon"><i className="fa-solid fa-check icons"></i></div> <p>Up to date material and created by expert creators</p></li>
                    <li><div className="icon"><i className="fa-solid fa-check icons"></i></div><p>Complete classes and projects and get a certificate from us</p></li>
                </ul>
            </div>
        </div>
    )
}