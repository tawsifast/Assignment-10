import React from 'react';
import { getAllUserList } from '@/lib/api/user';
import UsersTable from './UsersTable';



const AllUsersPage = async () => {
    // Fetch live users array directly on Server Lifecycle execution
    const users = await getAllUserList();
    // const users = data?.users;
    console.log(users);
    
    return (
        <div className="p-6 max-w-7xl mx-auto space-y-6">
            <UsersTable initialUsers={users} />
        </div>
    );
};

export default AllUsersPage;