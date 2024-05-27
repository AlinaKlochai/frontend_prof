const root = ReactDOM.createRoot(document.getElementById("root"));


class Student extends React.Component{
    render() {
        // 2. Использование props(передаем и используем сразу)
        //const { name, age } = this.props;
        return(
            <>
               <h1>Name: {this.props.name} </h1>
               <h2>Age: {this.props.age} </h2>
            </>
        )
    }
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