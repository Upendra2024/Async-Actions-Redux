import React, { useEffect } from 'react';
]import { fetchUsers } from '../redux';
import {useSelector,useDispatch} from 'react-redux';

function UserContainer({ userData,fetchUsers }) {
 const userData = useSelector(state =>{ state.user})
  const fetchUsers =useDispatch(dispatch => dispatch(fetchUsers()))
  useEffect(() => {
    fetchUsers()
  }, []);
  return <div>

    
      userData.loading ? (
        <h2>Loading</h2>
      ) : userData.error ? (
        <h2>{userData.error}</h2>
      )  : (
        <div>
          <h2>User List</h2>
        </div>
        {
          userData &&  userData.users && userData.users.map(user =>{
            <p>{user.name}</p>
          })
        }
      )
  
    
  </div>;
}





export default UserContainer;
