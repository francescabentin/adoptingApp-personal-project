import '../styles/layout/_quienesSomos.scss';

function QuienesSomos({ weather, locate, lifting, onSubmit }) {

    const handleSubmit = (ev) => {
        ev.preventDefault();
        onSubmit(locate);
    }

    const handleLocationChange = (ev) => {
        const value = ev.target.value;
        lifting(value);
    }

    return (
        <>
            <div>
                <form className='form' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Ingrese la ubicación"
                        value={locate}
                        onChange={handleLocationChange}
                    />
                    <button type="submit">Obtener Clima</button>
                </form>
            </div>
            <div className='container'>
                <h1 className='title'>{locate}</h1>
                <span className='span'>{weather}</span>
            </div>
        </>
    )
}

export default QuienesSomos;