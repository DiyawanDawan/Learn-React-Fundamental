import Container from "../components/Elements/Container"
import CardContainer from "../components/Fragments/CardContainer"
import ContainerLearning from "../components/Fragments/ContainerLearning"
import TestemonialConaner from "../components/Fragments/TestemonialContainer"
import About from "../components/layouts/About"
import CompanySection from "../components/layouts/CompanySection"
import Footer from "../components/layouts/Footer"
import Header from "../components/layouts/Header"
import Hero from "../components/layouts/Hero"
import LearningSection from "../components/layouts/LearningsSection"
import SelectionStart from "../components/layouts/SectionStart"

import JasonAdd from '../image/Ellipse 3 (3).png';

export default function HomePage() {
    return (
        <>
            <Header homo="Home" blog="Blogs" testimonial="Testimonial" learning="Learning" about="About As"></Header>
            <Hero />
            <LearningSection>
                <ContainerLearning />
                <div className="card-container">
                    <CardContainer linkBtn="Starter" propsClas="btn-card" cardTitle="Sea More" imgBody={JasonAdd}>Free className access for that start learning code and design/</CardContainer>
                    <CardContainer linkBtn="Starter" propsClas="btn-card" cardTitle="Sea More" imgBody={JasonAdd}>Free className access for that start learning code and design/</CardContainer>
                </div>
            </LearningSection>
            <About />
            <CompanySection />
            <Container>
                <div className="card-container">
                    <TestemonialConaner classImage="img" cardTitle="Jason Todd" subtitle="Entrepreneur" img={JasonAdd}>“The mentor is cool, how to convey each material is also detailed and easy to understand..”</TestemonialConaner>
                    <TestemonialConaner cardTitle="Jason Todd" subtitle="Entrepreneur" img={JasonAdd}>“The mentor is cool, how to convey each material is also detailed and easy to understand..”</TestemonialConaner>
                    <TestemonialConaner cardTitle="Jason Todd" subtitle="Entrepreneur" img={JasonAdd}>“The mentor is cool, how to convey each material is also detailed and easy to understand..”</TestemonialConaner>
                </div>
            </Container>
            <SelectionStart></SelectionStart>
            <Footer></Footer>
        </>
    )
}
