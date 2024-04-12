import ContactItem from "./ContactItem"

export default function ContactList({contacts, onDelete}) {
    return (
        <div className="contact-list">
            {contacts.map(contact => {
                return  <ContactItem key={contact.id} onDelete={onDelete} {...contact}/>
            })}
        </div>
    )
}