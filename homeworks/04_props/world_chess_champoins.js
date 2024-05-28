const root = ReactDOM.createRoot(document.getElementById("root"));

// 2. Принимаем props
const Champion = ({ name, year }) => {                     //описание компонента
    return (
        <>
            <li>
                {/* 3. Использование props */}
                <h1>name: {name}</h1>
                <h2>year: {year} </h2>
            </li>
        </>
    )
}
// Определяем главный компонент приложения
const AllChampions = () => {
    return (
        <div>
            <h1>World Chess Champions 1886-2006:</h1> {/* Добавляем заголовок */}
            <ul>
                {/* 1.Передаем props в компонент Champion */}
                <Champion name='Wilhelm Steinitz' year={"1886-1894"} />
                <Champion name='Emanuel Lasker' year={"1894-1921"} />
                <Champion name='José Raúl Capablanca y Graupera' year={"1921-1927"} />
                <Champion name='Alexandre Alekhine' year={"1927-1935"} />
                <Champion name='Max Euwe' year={"1935-1937"} />
                <Champion name='Mikhail Botvinnik' year={"1948-1957, 1958-1960, 1961-1963"} />
                <Champion name='Vasily Smyslov' year={"1957-1958"} />
                <Champion name='Mihails Tāls' year={"1960-1961"} />
                <Champion name='Tigran Petrosyan' year={"1963-1969"} />
                <Champion name='Boris Spasskiy' year={"1969-1972"} />
                <Champion name='Robert Fischer' year={"1972-1975"} />
                <Champion name='Harry Kasparov' year={"1985-2006"} /> 
            </ul>
        </div>
    );
} 

// Рендер компонента AllChampions в корневой элемент
root.render(<AllChampions />);
