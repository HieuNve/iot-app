import React from 'react';
import PropTypes from 'prop-types';
import {Container, Temp, TempValue, Title} from "./style";

const BoxTemperature = ({title, temperature, humidity}) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Temp>Temperature (°C)</Temp>
            <TempValue>{temperature}</TempValue>
            <Temp>Humidity ( % )</Temp>
            <TempValue>{humidity}</TempValue>
        </Container>
    );
};

BoxTemperature.propTypes = {};

export default BoxTemperature;