const Book = ({ img, title, author, publis, number }) => {
    console.log(number);
    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title} </h2>
            <h4>{author}</h4>
            <span className="number">{`#${number+1}`}</span>
            <span>{publis}</span>
        </article>
    )
}

export default Book