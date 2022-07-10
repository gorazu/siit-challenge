import * as React from 'react';
import styled from 'styled-components';
import { Services } from './components/organisms/Services';
import { Users } from './components/organisms/Users';

const Title = styled.h1`
    color: #8e44ad;
`;

const AppContainer = styled.div`
    font-family: Roboto;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`;

const App = () => {
    return (
        <AppContainer>
            <Title>Siit Dashboard</Title>
            <Grid>
                <Users />
                <Services />
            </Grid>
        </AppContainer>
    );
};

export default App;
