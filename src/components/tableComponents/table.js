import React from 'react';
import styled from 'styled-components';

import './table.css';

export const TableStyles = styled.div`
    width: 900px;
    height: 700px;
    position: relative;
`


export const TableRowStyle = styled.div`
    height:70px;
    position: relative;
    border-left: solid 10px blue;
    background-color: #DAF7A6;
    font-weight:bold;
    padding-left:3px;
    padding-right:3px;
    margin: 20px;
    max-width: 100%;
    box-shadow: 2px 2px 2px 2px #888888;
    ${props => props.score > 66 ? 'border-left: solid 10px red;': props.score > 33 ? 'border-left: solid 10px orange;' : 'border-left: solid 10px green;'}
`

const TableRow = (customer) => (
    <div className="table-row">
        <div>{customer.customer.name}</div>
        <div>{customer.customer.email}</div>
        <div>{Math.floor(customer.customer.score*100)}</div>
    </div>
)

class Table extends React.Component{
    render()
    {
        return (
            <TableStyles>
            {this.props.tabledata.map(el=>{console.log(el); return el}).sort(function (a, b) {
                if (a.score !== b.score) {
                    return b.score - a.score; // descending
                  }
                  return a.score - b.score
            }).map(element=>
                
                <TableRowStyle score={Math.floor(element.score*100)}>
                {console.log(element)}
                    <TableRow customer={element}/>
                </TableRowStyle>)}
            </TableStyles>
        )
    }
}

export default Table;