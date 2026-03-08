const Card = (props) => {
    return (
        <div style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
            <h2>{props.judul}</h2>
            <p>{props.deskripsi}</p>
        </div>
    );
};

export default Card;