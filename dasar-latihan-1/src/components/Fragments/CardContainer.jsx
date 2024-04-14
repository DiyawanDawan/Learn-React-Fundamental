import Card from "../Elements/Card";

export default function CardContainer({linkBtn, cardTitle, propsClas, children, imgBody}) {
    return (
            <Card linkBtn={linkBtn} propsClas={propsClas} cardTitle={cardTitle} imgBody={imgBody}>{children}</Card>
    )
}