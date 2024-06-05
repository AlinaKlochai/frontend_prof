import { Component } from 'react';
import { IUserJson } from './UserList';

export class User extends Component<{person: IUserJson}> {
    render() {
        //проверка получили ли props
        //console.log(this.props);

        const { name, email, phone, address: { city }, company: { name: companyName} } = this.props.person;
 
        // const { name, email, phone, address: { city }, company:{ name: companyName}  } = this.props.person;

        return (
            <div className='border border-primary-subtle w-50 my-2 p-2 task-container'>
     
                <h2>{name}</h2>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>City: {city}</p>
                <p>Company: {companyName}</p>
            </div>
        );
    }
}

export default User;

