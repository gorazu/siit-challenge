import * as React from 'react';
import styled from 'styled-components';
import { Tag } from '../atoms/Tag';
import { fetchServices, ServiceDTO } from '../organisms/Services';

const Container = styled.div`
    border: 1px solid #e0e0e0;
    padding: 0 1.5rem 1rem;
    border-radius: 2px;
`;

const FiltersContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;

const ValuesContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export type UserFilters = {
    serviceId: number | undefined;
};

export type UsersFiltersProps = {
    filters?: UserFilters;
    onChange: (filters: UserFilters) => void;
};

export const UsersFilters = ({ filters, onChange }: UsersFiltersProps) => {
    const [services, setServices] = React.useState<ServiceDTO[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            const services = await fetchServices();
            setServices(services);
        };

        fetchData();
    }, []);

    return (
        <Container>
            <h3>Filters</h3>
            <FiltersContainer>
                <span>Services</span>
                <ValuesContainer>
                    <Tag
                        selected={filters?.serviceId === undefined}
                        onClick={() => onChange({ ...filters, serviceId: undefined })}
                    >
                        All
                    </Tag>
                    {services.map((service) => (
                        <Tag
                            key={service.id}
                            selected={filters?.serviceId === service.id}
                            onClick={() => onChange({ ...filters, serviceId: service.id })}
                        >
                            {service.name}
                        </Tag>
                    ))}
                </ValuesContainer>
            </FiltersContainer>
        </Container>
    );
};
