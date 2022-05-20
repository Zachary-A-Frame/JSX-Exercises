const Person = (props) => {

    return (
        <div className="card" style={{ width: "20rem", margin: "20px", float: "left" }}>
            <div className="card-body">
                <p className="card-title">Learn more about this person</p>
                <p className="card-title">{props.name.slice(0, 6)} aged {props.age}</p>
                <p className="card-text">{(props.age >= 18) ? "Get out and vote!" : "Hurry up and turn 18!"}</p>
                <p>{props.name}s hobbies include:</p>
                <ul>
                    {props.hobbies.map(hobby => <li>{hobby}</li>)}
                </ul>
            </div>
        </div>
    )
}