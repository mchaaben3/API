import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProfileCard from './ProfileCard';

const UserList = () => {
    const [listUsers, setListUsers] = useState([]);
    const fetchListUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setListUsers(res.data))
            .catch(res => console.error())
    }
    useEffect(() => {
        fetchListUsers()

    }, [])
    return (
        <>
        <h1 className="py-5 text-8xl text-center text-gradient bg-gradient-to-r from-white via-black to-white">User List</h1><hr />
        <div className="px-10 mt-0 flex flex-wrap ">
            {listUsers.map((user, index)=>
               
                    <ProfileCard user={user} key={index} />
            
                 
            )}
               
         </div>
         </>
    )
}

export default UserList
