import * as React from 'react';
import styled from 'styled-components';
import { Avatar } from '../atoms/Avatar';
import { UserDTO } from '../organisms/Users';

const ItemContainer = styled.li`
    padding: 0.5rem 1rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    border: 1px solid #e0e0e0;
    border-radius: 2px;
    &:hover {
        background: #fcfcfc;
        cursor: pointer;
    }
`;

const InfosContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export type UserItemProps = {
    user: UserDTO;
};

export const UserItem = ({ user }: UserItemProps) => {
    return (
        <ItemContainer>
            <Avatar src={user.avatar_url} />
            <InfosContainer>
                <span>{user.name}</span>
                <span>{user.position}</span>
            </InfosContainer>
        </ItemContainer>
    );
};
