import Container from "../Elements/Container";

export default function LearningSection(props){
    const {children} = props;
    console.log(props);
    return (
        <section className="learnings_section">
            <Container>
                {children}
            </Container>
    </section>
    )
}
