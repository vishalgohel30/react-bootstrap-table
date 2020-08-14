import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import ReactBootstrapTable from '../Components/ReactBootstrapTable';

import { columns, features } from './constants';

// Styled Components
const Title = styled.h1`
    font-family: sans-serif;
    text-align: center;
    margin-top: 50px;
`;

const Table = () => {
    const [shipmentsList, setState] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/shipments')
            .then(({ status = '', data = [] }) => {
                if (status === 200) {
                    setState(data);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (<>
        <Title>React Table</Title>
        <ReactBootstrapTable
            data={shipmentsList}
            features={features}
            columns={columns}
        />
    </>
    )
}

export default Table;