import * as React from 'react';
import axios from 'axios';
import { UsersList } from '../molecules/UsersList';
import { UserFilters } from '../molecules/UsersFilters';

export type UserDTO = {
    id: number;
    avatar_url: string;
    name: string;
    position: string;
    service_ids: number[];
};

export const fetchUsers = async (serviceId?: number) => {
    const response = await axios.get<UserDTO[]>(
        `/users.json${serviceId ? `?service_id=${serviceId}` : ''}`
    );

    return response.data;
};

export const Users = () => {
    const [users, setUsers] = React.useState<UserDTO[]>([]);
    const [usersFilters, setUsersFilters] = React.useState<UserFilters>();

    React.useEffect(() => {
        const fetchData = async () => {
            const users = await fetchUsers(usersFilters?.serviceId);
            setUsers(users);
        };

        fetchData();
    }, [usersFilters]);

    if (!users) return null;

    return (
        <div>
            <h2>Users</h2>
            <UsersList users={users} filters={usersFilters} onChangeFilters={setUsersFilters} />
        </div>
    );
};
