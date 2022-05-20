const Tweet = (props) => {
    return (
        <div className="card" style={{ width: "20rem", margin: "20px", float: "left" }}>
            <div className="card-body">
                <h5 className="card-title">@{props.username}</h5>
                <h6 className="card-title">{props.name}</h6>
                <p className="card-text">{props.tweet}</p>
            </div>
        </div>
    )
}