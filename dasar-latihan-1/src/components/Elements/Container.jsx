const Container = (props) => {
    const {children} = props
    // console.log(props);
    return (
        <div className="container">
            {children}
        </div>
    )
}

export default Container