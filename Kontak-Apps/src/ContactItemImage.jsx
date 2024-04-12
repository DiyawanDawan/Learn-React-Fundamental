
export default function ContactItemImage({imageUrl, name}) {
    return (
        <div className="contact-item__image">
            <img src={imageUrl} alt={name} />
        </div>
    )
}