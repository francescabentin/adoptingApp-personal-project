import '../styles/layout/_weather.scss';

function Weather({ weather, locate, lifting, onSubmit }) {

    const handleSubmit = (ev) => {
        ev.preventDefault();
        onSubmit(locate);
    }

    const handleLocationChange = (ev) => {
        const value = ev.target.value;
        lifting(value);
    }

    return (
        < div className='page'>
            <div className='container'>
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
            <div className='container2'>
                <h1 className='title'>{locate}</h1>
                <span className='span'>{weather}*</span>
            </div>
        </div>
    )
}

export default Weather;