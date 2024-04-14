export default function Card({cardTitle, img, linkBtn, propsClas, subtitle, children}) {
    return (
        <div className="card">
            <div className="card-body">
                <img className="card-img" src="image/image 2.png" alt="Starter" />
                    <h3 className="card-titel">{cardTitle}</h3>
                    <h4 className="sub-titel">{subtitle}</h4>
                    <p className="card-desc">{children}</p>
                <a href="#" className={propsClas}>{linkBtn}</a>
            </div>
            <img src={img} alt={img} />
        </div>
    )
}
