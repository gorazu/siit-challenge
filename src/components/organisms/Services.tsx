import * as React from 'react';
import axios from 'axios';
import { ServicesList } from '../molecules/ServicesList';

export type Price = {
    cost_per_user: number;
    flat_cost: number;
    nb_users_included: number;
};

export type ServiceDTO = {
    id: number;
    logo_url: string;
    website_url: string;
    name: string;
    position: string;
    price: Price;
};

export const fetchServices = async () => {
    const response = await axios.get<ServiceDTO[]>('/services.json');

    return response.data;
};

export const Services = () => {
    const [services, setServices] = React.useState<ServiceDTO[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            const services = await fetchServices();
            setServices(services);
        };

        fetchData();
    }, []);

    if (!Services) return null;

    return (
        <div>
            <h2>Services</h2>
            <ServicesList services={services} />
        </div>
    );
};
