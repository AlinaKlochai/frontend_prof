import { Component } from 'react';

export class User extends Component {
    render() {
        //eslint-disable-next-line react/prop-types
        const { user } = this.props;

         if (!user) {
            return <div>No user data</div>;
        }

        
        return (
            <div className='border border-primary-subtle w-50 my-2 p-2 task-container'>
               {/* eslint-disable-next-line react/prop-types */} 
                <h2>{user.name}</h2>
                {/* eslint-disable-next-line react/prop-types */} 
                <p>Email: {user.email}</p>
                {/* eslint-disable-next-line react/prop-types */} 
                <p>Phone: {user.phone}</p>
                {/* eslint-disable-next-line react/prop-types */} 
                <p>Company: {user.company.name}</p>

            </div>
        );
    }
}

export default User;