import React from 'react';
import styled from 'styled-components';

export const TableStyles = styled.div`
    width: 900px;
    height: 700px;
    position: relative;
`


export const TableRowStyle = styled.div`
    height:70px;
    position: relative;
    border-left: solid 10px blue;
    background-color: MintCream;
    padding: 10px;
    margin: 20px;
    max-width: 100%;
    box-shadow: 2px 2px 2px 2px #888888;
`

class Table extends React.Component{
    render()
    {
        return (
            <TableStyles>
            {this.props.tabledata.map(element=> <TableRowStyle />)}
            </TableStyles>
        )
    }
}

export default Table;