function Protectoras({ facts }) {


    const renderFacts = () => {
        return facts.map((data, index) => {
            return (
                <li key={index}> {data.title} </li>
            )
        })
    }


    return (
        <h1> {facts ? renderFacts() : null}</h1>
    )
}

export default Protectoras;