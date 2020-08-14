import React from 'react';
import styled from 'styled-components';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

// Styled Components
const Div = styled.div`
    margin: 100px;
`;

// React Bootstrap Table 
const ReactBootstrapTable = ({ data = [], columns = [], features: { defaultSortName = {}, pagination = false, search = false } = {} } = {}) => (
    <Div>
        <BootstrapTable
            data={data}
            pagination={pagination}
            search={search}
            options={defaultSortName}>
            {(columns || []).map((a, index) => <TableHeaderColumn
                key={index}
                dataField={(a.dataField || "")}
                dataSort={(a.dataSort || false)}
                isKey={(a.key || false)}>{(a.text || "")}</TableHeaderColumn>)
            }
        </BootstrapTable></Div>);

export default ReactBootstrapTable;