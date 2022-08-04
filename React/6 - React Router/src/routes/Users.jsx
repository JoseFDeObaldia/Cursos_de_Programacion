import { getAllUsers } from '../users';
import { Link, useSearchParams } from 'react-router-dom';

const estilos = {
    margin: '5px'
};


const Users = () => {
    const users = getAllUsers();
    const [searchParams, setSearchParams] = useSearchParams();

    const filter = searchParams.get("filter") ?? "";
    const handleFilter = e => {
        setSearchParams({filter: e.target.value});
    }

    return(
        <div>

            <h1>Users</h1>
            <input value={searchParams.get("filter")} type='text' placeholder='Filtrar' style={estilos} onChange={handleFilter}/>

            <hr/>

            <ul>
                {users.filter(user => {
                    if(!filter) {return true}
                    else {
                        const name = user.name.toLowerCase();
                        return name.includes(filter.toLowerCase())}
                }).map(user => 

                    <li key={user.id}> 
                        <h2><Link to={"/users/" + user.id}>{user.name}</Link></h2>
                    </li>
                    
                )}

            </ul>
        </div>
    );
}

export default Users;