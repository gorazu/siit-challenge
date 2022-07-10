import * as React from 'react';
import { UserDTO } from '../organisms/Users';
import styled from 'styled-components';
import { UserItem } from './UserItem';

const ListContainer = styled.ul`
    list-style: none;
    padding: 0;
    > li + li {
        margin-top: 0.5rem;
    }
`;

export type UsersListProps = {
    users: UserDTO[];
};

export const UsersList = ({ users }: UsersListProps) => {
    return (
        <ListContainer>
            {users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </ListContainer>
    );
};
