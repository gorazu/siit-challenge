import * as React from 'react';
import styled from 'styled-components';
import { Avatar } from '../atoms/Avatar';
import { Icon } from '../atoms/Icon';
import { ServiceDTO } from '../organisms/Services';
import { fetchUsers } from '../organisms/Users';

const ItemContainer = styled.li`
    padding: 0.5rem 1rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    border: 1px solid #e0e0e0;
    border-radius: 2px;
    justify-content: space-between;
`;

const HomePageUrlContainer = styled.a`
    padding: 1rem;
    background: transparent;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
`;

const TitleContainer = styled.div`
    flex: 1;
    display: flex;
    gap: 1rem;
    align-items: center;
`;

export type ServiceItemProps = {
    service: ServiceDTO;
};

export const ServiceItem = ({ service }: ServiceItemProps) => {
    const [usersCount, setUsersCount] = React.useState(0);

    React.useEffect(() => {
        const fetchUsersCount = async () => {
            const users = await fetchUsers(service.id);

            setUsersCount(users.length);
        };

        fetchUsersCount();
    }, []);

    const monthlyPrice = React.useMemo(
        () =>
            service.price.flat_cost +
            service.price.cost_per_user *
                (service.price.nb_users_included > usersCount
                    ? 0
                    : usersCount - service.price.nb_users_included),
        [usersCount]
    );

    return (
        <ItemContainer>
            <TitleContainer>
                <Avatar src={service.logo_url} />
                {service.name}
            </TitleContainer>
            <span>Monthly price: {monthlyPrice}</span>
            <HomePageUrlContainer href={service.website_url} target="_blank">
                <Icon>link</Icon>
            </HomePageUrlContainer>
        </ItemContainer>
    );
};
