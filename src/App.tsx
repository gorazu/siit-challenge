import * as React from 'react';
import styled from 'styled-components';
import { Users } from './components/organisms/Users';

const Title = styled.h1`
    color: #8e44ad;
`;

const AppContainer = styled.div`
    font-family: Roboto;
`;

const App = () => {
    return (
        <AppContainer>
            <Title>Siit Dashboard</Title>
            <Users />
        </AppContainer>
    );
};

export default App;
