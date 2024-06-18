// import { NavLink } from 'react-router-dom'

// function Navigation() {
//     return (
//         <nav>
//             <ul>
//                 <li>
//                     <NavLink to='/'>
//                         Tasks
//                     </NavLink>
//                 </li>
//                 <li>
//                     <NavLink to='/users'>
//                         Users
//                     </NavLink>
//                 </li>
//                 <li>
//                     <NavLink to='/photos'>
//                         Photos
//                     </NavLink>
//                 </li>
//             </ul>
//         </nav>
//     )
// }

// export default Navigation

import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you have Bootstrap CSS imported

function Navigation() {
    return (
        <nav className="card text-center">
            <div className="card-header">
                <ul className="nav nav-pills card-header-pills">
                    <li className="nav-item">
                        <NavLink 
                            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} 
                            to='/'
                        >
                            Tasks
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} 
                            to='/users'
                        >
                            Users
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} 
                            to='/photos'
                        >
                            Photos
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;

