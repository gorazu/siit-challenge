import * as React from 'react';
import { UserDTO } from '../organisms/Users';
import styled from 'styled-components';
import { UserItem } from './UserItem';
import { UserFilters, UsersFilters } from './UsersFilters';

const ListContainer = styled.ul`
    list-style: none;
    padding: 0;
    > li + li {
        margin-top: 0.5rem;
    }
`;

export type UsersListProps = {
    users: UserDTO[];
    filters: UserFilters;
    onChangeFilters: (filters: UserFilters) => void;
};

export const UsersList = ({ users, filters, onChangeFilters }: UsersListProps) => {
    return (
        <>
            <UsersFilters filters={filters} onChange={onChangeFilters} />
            <ListContainer>
                {users.map((user) => (
                    <UserItem key={user.id} user={user} />
                ))}
            </ListContainer>
        </>
    );
};
