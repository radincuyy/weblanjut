const Card = (props) => {
    return (
        <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default Card;