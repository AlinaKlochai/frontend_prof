import { Component } from 'react'
import User from './User';


// rce-r-react c-component e-export аббревиатура для создание этого шаблона
export class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoading: false
        };
    }
    //что должно произойти с компонентом

    componentDidMount() {
        this.setState({ isLoading: true });
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                this.setState({ users: data, isLoading: false })
            })
            .catch(error => {
                console.error('Error fetching users:', error);
                this.setState({ isLoading: false });
            });
    }

    render() {
        const { users, isLoading } = this.state;

        // Если isLoading равно true, показываем "Loading..."
        if (isLoading) {
            return (
                //отображения спинера
                <div className="spinner-border text-primary" role="status">    
                    <span className="visually-hidden">Loading...</span>
                </div>
            );
        }

        
        return (
            <div className='text-center d-flex flex-column align-items-center'>
                 <h1 className='text-center'>Users:</h1>
                {users.map(user => (
                    <User key={user.id} user={user} />
                ))}
            </div>
        );
    }
}

export default UserList