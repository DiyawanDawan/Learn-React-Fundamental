import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";
import DeleteButton from "./components/DeleteButton";

export default function ContactItem({imageUrl, name, tag, id, onDelete}) {
    return (
        <div className="contact-item">
            <ContactItemImage imageUrl={imageUrl} name={name}/>
            <ContactItemBody name={name}  tag={tag}/>
            <DeleteButton id={id} onDelete={onDelete}/>
        </div>
    )
}