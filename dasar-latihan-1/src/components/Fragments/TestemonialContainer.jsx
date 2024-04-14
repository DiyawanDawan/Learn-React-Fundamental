import Card from "../Elements/Card";

const TestemonialConaner = (props) => {
    const { cardTitle,  subtitle, img, classImage, children } = props
    console.log(props);
    return (
          <Card cardTitle={cardTitle} subtitle={subtitle} classImage={classImage} img={img}>{children}</Card>
    )
}

function TestemonialLearnig() {
    return (
        <div className="testemonial-learning">
            <p className="testemonial">Testemonial</p>
            <h2 className="testemonial-titel">Our Alumni Say</h2>
            <p className="testemonial-desc">These are the words of people who have taken our className </p>
        </div>
    )
}

TestemonialConaner.TestemonialLearnig = TestemonialLearnig
export default TestemonialConaner;