import React from 'react';
import {  } from 'react-native/Libraries/NewAppScreen';

import { Container, Header, Tittle, Icon, Footer, Amount, LastTransaction } from './styles';

interface Props {
    title: string;
    amount: string;
    lastTransaction: string;
    type: 'up' | 'down' | 'total';
}

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign'
}


export function HighlightCard({type, title, amount, lastTransaction} : Props){
    return(
        <Container type={type}>
            <Header>
                <Tittle type={type}>{title}</Tittle>
                <Icon name={icon[type]} type={type}/>
            </Header>

            <Footer>
                <Amount type={type}>{amount}</Amount>
                <LastTransaction type={type}>{lastTransaction}</LastTransaction>
            </Footer>
        </Container>
    )
}