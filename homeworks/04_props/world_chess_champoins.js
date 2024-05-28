// const root = ReactDOM.createRoot(document.getElementById("root"));

// // 2. Принимаем props
// const Champion = ({ name, year }) => {                     //описание компонента
//     return (
//         <>
//             <li>
//                 {/* 3. Использование props */}
//                 <h1>Name: {name}</h1>
//                 <h2>Year: {year} </h2>
//             </li>
//         </>
//     )
// }

// root.render(
//     <>
//         <ul>
//             {/* 1. Передача props */}
//             <Champion name='Wilhelm Steinitz' year={"1886-1894"} />
//             <Champion name='Emanuel Lasker' year={"1894-1921"} />
//             <Champion name=' José Raúl Capablanca y Graupera' year={"1921-1927"} />
//             <Champion name='Alexandre Alekhine' year={"1927-1935"} />
//             <Champion name='Max Euwe' year={"1935-1937"} />
//             <Champion name='Mikhail Botvinnik' year={"1948-1957, 1958-1960, 1961-1963"} />
//             <Champion name='Vasily Smyslov' year={"1957-1958"} />
//             <Champion name='Mihails Tāls' year={"1960-1961"} />
//             <Champion name='Tigran Petrosyan' year={"1963-1969"} />
//             <Champion name='Boris Spasskiy' year={"1969-1972"} />
//             <Champion name='Robert Fischer' year={"1972-1975"} />
//             <Champion name='Harry Kasparov' year={"1985-2006"} />
//         </ul>
//     </>
// )

const { useState } = React;
const root = ReactDOM.createRoot(document.getElementById("root"));

// Image URLs for each champion
const images = {
  'Wilhelm Steinitz': 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Wilhelm_Steinitz2.jpg',
  'Emanuel Lasker': 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Bundesarchiv_Bild_102-00457%2C_Emanuel_Lasker.jpg',
  'José Raúl Capablanca y Graupera': 'https://upload.wikimedia.org/wikipedia/commons/2/24/Jos%C3%A9_Ra%C3%BAl_Capablanca_1931.jpg',
  'Alexandre Alekhine': 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Alexandre_Alekhine_Color.jpg',
  'Max Euwe': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Max_Euwe_%281945%29.jpg/390px-Max_Euwe_%281945%29.jpg',
  'Mikhail Botvinnik': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Mikhail_Botvinnik_1962.jpg/1024px-Mikhail_Botvinnik_1962.jpg',
  'Vasily Smyslov': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Interpolisschaaktoernooi_Tilburg_1819_Smyslov_aan_zet%2C_Bestanddeelnr_929-3630.jpg/1024px-Interpolisschaaktoernooi_Tilburg_1819_Smyslov_aan_zet%2C_Bestanddeelnr_929-3630.jpg',
  'Mihails Tāls': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Hoogovenschaaktoernooi%2C_de_Rus_M._Tal%2C_Bestanddeelnr_920-9788.jpg/1024px-Hoogovenschaaktoernooi%2C_de_Rus_M._Tal%2C_Bestanddeelnr_920-9788.jpg',
  'Tigran Petrosyan': 'https://upload.wikimedia.org/wikipedia/commons/4/41/Tigran_Petrosian_1962.jpg',
  'Boris Spasskiy': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/%D0%91%D0%BE%D1%80%D0%B8%D1%81_%D0%A1%D0%BF%D0%B0%D1%81%D1%81%D0%BA%D0%B8%D0%B9_%D0%B2_%D0%94%D0%B5%D0%BD%D1%8C_%D1%88%D0%B0%D1%85%D0%BC%D0%B0%D1%82_2016.jpeg/1024px-%D0%91%D0%BE%D1%80%D0%B8%D1%81_%D0%A1%D0%BF%D0%B0%D1%81%D1%81%D0%BA%D0%B8%D0%B9_%D0%B2_%D0%94%D0%B5%D0%BD%D1%8C_%D1%88%D0%B0%D1%85%D0%BC%D0%B0%D1%82_2016.jpeg',
  'Robert Fischer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Bobby_Fischer_1972.jpg/1024px-Bobby_Fischer_1972.jpg',
  'Garry Kasparov': 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Garry_Kasparov_European_Union_2023_%28cropped%29.jpg'
};

// Champion component
const Champion = ({ name, year, onHover, onLeave }) => {
  return (
    <li>
      <h1 onMouseEnter={() => onHover(name)} onMouseLeave={onLeave}>
        Name: {name}
      </h1>
      <h2>Year: {year}</h2>
    </li>
  );
};

// Main App component
const App = () => {
  const [hoveredChampion, setHoveredChampion] = useState(null);

  const handleMouseEnter = (name) => {
    setHoveredChampion(name);
  };

  const handleMouseLeave = () => {
    setHoveredChampion(null);
  };

  return (
    <div>
      <ul>
        <Champion name='Wilhelm Steinitz' year={"1886-1894"} onHover={handleMouseEnter} onLeave={handleMouseLeave} />    
        <Champion name='Emanuel Lasker' year={"1894-1921"} onHover={handleMouseEnter} onLeave={handleMouseLeave} />  
        <Champion name='José Raúl Capablanca y Graupera' year={"1921-1927"} onHover={handleMouseEnter} onLeave={handleMouseLeave} />  
        <Champion name='Alexandre Alekhine' year={"1927-1935"} onHover={handleMouseEnter} onLeave={handleMouseLeave} />  
        <Champion name='Max Euwe' year={"1935-1937"} onHover={handleMouseEnter} onLeave={handleMouseLeave} />  
        <Champion name='Mikhail Botvinnik' year={"1948-1957, 1958-1960, 1961-1963"} onHover={handleMouseEnter} onLeave={handleMouseLeave} />  
        <Champion name='Vasily Smyslov' year={"1957-1958"} onHover={handleMouseEnter} onLeave={handleMouseLeave} />  
        <Champion name='Mihails Tāls' year={"1960-1961"} onHover={handleMouseEnter} onLeave={handleMouseLeave} />  
        <Champion name='Tigran Petrosyan' year={"1963-1969"} onHover={handleMouseEnter} onLeave={handleMouseLeave} />  
        <Champion name='Boris Spasskiy' year={"1969-1972"} onHover={handleMouseEnter} onLeave={handleMouseLeave} />  
        <Champion name='Robert Fischer' year={"1972-1975"} onHover={handleMouseEnter} onLeave={handleMouseLeave} />  
        <Champion name='Garry Kasparov' year={"1985-2000"} onHover={handleMouseEnter} onLeave={handleMouseLeave} />                          
      </ul>
      {hoveredChampion && (
        <div>
          <img src={images[hoveredChampion]} alt={hoveredChampion} />
        </div>
      )}
    </div>
  );
};

root.render(<App />);
