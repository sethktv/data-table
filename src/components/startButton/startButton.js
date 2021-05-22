
const StartButton = ({ getData }) => {
    const smallUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
    const bigUrl = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'

    return (
        <div>
            <h1 style={{ display: 'flex', justifyContent: "center" }}
            >
                Таблица данных
            </h1>

            <div style={{ display: 'flex', justifyContent: "center" }}>
                <button
                    onClick={() => (getData(smallUrl))}
                    type="button"
                    className="btn btn-primary btn-sm m-3"
                >
                    Маленький объем
                </button>

                <button
                    onClick={() => (getData(bigUrl))}
                    type="button"
                    className="btn btn-secondary btn-sm m-3"
                >
                    Большой объем
                </button>
            </div>
        </div>
    )
}
export default StartButton