import * as React from 'react';
import axios from 'axios';
import { UsersList } from '../molecules/UsersList';

export type UserDTO = {
    id: number;
    avatar_url: string;
    name: string;
    position: string;
    service_ids: number[];
};

const fetchUsers = async () => {
    const response = await axios.get<UserDTO[]>('/users.json');

    return response.data;
};

export const Users = () => {
    const [users, setUsers] = React.useState<UserDTO[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            const users = await fetchUsers();
            setUsers(users);
        };

        fetchData();
    }, []);

    if (!users) return null;

    return (
        <div>
            <h2>Users</h2>
            <UsersList users={users} />
        </div>
    );
};
