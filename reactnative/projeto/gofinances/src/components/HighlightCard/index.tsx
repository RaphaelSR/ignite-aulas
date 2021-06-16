import React from 'react';
import {  } from 'react-native/Libraries/NewAppScreen';

import { Container, Header, Tittle, Icon, Footer, Amount, LastTransaction } from './styles';

export function HighlightCard(){
    return(
        <Container>
            <Header>
                <Tittle>Entradas</Tittle>
                <Icon name="arrow-up-circle"/>
            </Header>

            <Footer>
                <Amount>R$ 17.400,00</Amount>
                <LastTransaction>Última entrada dia 13 de abril</LastTransaction>
            </Footer>
        </Container>
    )
}