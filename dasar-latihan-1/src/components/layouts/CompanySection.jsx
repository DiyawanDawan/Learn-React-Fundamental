import Container from "../Elements/Container";

export default function CompanySection() {
    return (
        <section className="company_section">
            <Container>
                <CompanySectionTitle></CompanySectionTitle>
                <CompanySectionImage />
            </Container>
        </section>
    )
}
function CompanySectionTitle() {
    return (
        <div className="title">
            <h2>Companies That Recruit Our Graduates</h2>
            <p>Our graduates have worked in more than 400 companies around the World</p>
        </div>
    )
}
function CompanySectionImage() {
    return (
        <div className="card-container" >
            <img src="image/Github.png" alt="Github" />
            <img src="image/Group 18.png" alt="PayPal" />
            <img src="image/Linkedin.png" alt="Linkedin" />
            <img src="image/Medium.png" alt="Medium" />
            <img src="image/Group.png" alt="Radis" />
            <img src="image/Reddit.png" alt="Raddit" />
            <img src="image/Microsoft.png" alt="Microsoft" />
            <img className="amazzon" src="image/Amazon.png" alt="Amazon" />
        </div>
    )
}