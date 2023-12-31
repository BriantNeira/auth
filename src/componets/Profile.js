import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile =()=> {
    const {user, isautenthicated, isLoading} = useAuth0();

    if (isLoading){
        return <div> Cargando...</div>
    }
    return (
        isautenthicated&&(
        <div>
            <img src={user.picture} alt={user.name} />
            <h2> {user.name} </h2>
            <p>Correo Electronico: {user.email}</p>

        </div>
        )
    );
    
}
 
export default Profile;