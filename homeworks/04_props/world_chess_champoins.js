const root = ReactDOM.createRoot(document.getElementById("root"));

const Champion = ({ name, year }) => {
    return (
        <div style={{ border: '1px solid black'}}>
            <h1 style={{ textAlign: 'center' }}>name: {name}</h1>
            <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>years: {year}</h2>
        </div>


    );
}

const AllChampions = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>World Chess Champions 1886-2006:</h1>

            <Champion name="Wilhelm Steinitz" year="1886-1894" />
            <Champion name="Emanuel Lasker" year="1894-1921" />
            <Champion name="José Raúl Capablanca y Graupera" year="1921-1927" />
            <Champion name="Alexandre Alekhine" year="1927-1935" />
            <Champion name="Max Euwe" year="1935-1937" />
            <Champion name="Mikhail Botvinnik" year="1948-1957, 1958-1960, 1961-1963" />
            <Champion name="Vasily Smyslov" year="1957-1958" />
            <Champion name="Mihails Tāls" year="1960-1961" />
            <Champion name="Tigran Petrosyan" year="1963-1969" />
            <Champion name="Boris Spasskiy" year="1969-1972" />
            <Champion name="Robert Fischer" year="1972-1975" />
            <Champion name="Harry Kasparov" year="1985-2006" />

        </div>
    );
}

root.render(<AllChampions />);

