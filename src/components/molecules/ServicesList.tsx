import * as React from 'react';
import { ServiceDTO } from '../organisms/Services';
import styled from 'styled-components';
import { ServiceItem } from './ServiceItem';

const ListContainer = styled.ul`
    list-style: none;
    padding: 0;
    > li + li {
        margin-top: 0.5rem;
    }
`;

export type ServicesListProps = {
    services: ServiceDTO[];
};

export const ServicesList = ({ services }: ServicesListProps) => {
    return (
        <ListContainer>
            {services.map((service) => (
                <ServiceItem key={service.id} service={service} />
            ))}
        </ListContainer>
    );
};
