const root = ReactDOM.createRoot(document.getElementById("root"));

// 2. Принимаем props
const Student = ({ name, age }) => {                     //описание компонента
    return (
        <>
            {/* 3. Использование props */}
            <h1>Name: {name}</h1>
            <h2>Age: {age} </h2>
        </>
    )
}

root.render(                     //экземпляр компонента
    <>
      {/* 1. Передача props */}
      <Student name='Peter' age={23 + 5} />                            
      <Student name='Mary' age={34} />
      <Student name='Boris' age={56} />
      <Student name='Katy' age={45} />
    </>
)