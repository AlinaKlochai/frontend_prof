import { Component } from 'react';

export class User extends Component {
    render() {
        //проверка получили ли props
        //console.log(this.props);
        //eslint-disable-next-line react/prop-types
        const { name, email, phone, address: { city }, company:{ name: companyName}  } = this.props.person;

        //  if (!person) {
        //     return <div>No user data</div>;
        // }

        
        return (
            <div className='border border-primary-subtle w-50 my-2 p-2 task-container'>
               {/* eslint-disable-next-line react/prop-types */} 
                <h2>{name}</h2>
                {/* eslint-disable-next-line react/prop-types */} 
                <p>Email: {email}</p>
                {/* eslint-disable-next-line react/prop-types */} 
                <p>Phone: {phone}</p>
                {/* eslint-disable-next-line react/prop-types */} 
                <p>City: {city}</p>
                <p>Company: {companyName}</p>
            </div>
        );
    }
}

export default User;