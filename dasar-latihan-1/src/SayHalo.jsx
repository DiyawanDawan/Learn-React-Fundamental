export default function SayHalo({ name, company, children }) {
    // const  = props
    return (
        <>
            <p>
                Hello, {name} from {company}!
            </p>
            <p>{children}</p>
            <div>
                <p>{children}</p>
            </div>
        </>
    )
}