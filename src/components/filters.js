import React from 'react';
import styled from 'styled-components';

export const FilterHeader = styled.h3`
    text-decoration: underline;
`
export default class FilterOptions extends React.Component {
    state = {
        filter: ''
    }
    render()
    {
        return (
            <div>
                <div>
                    <label id="priority" className="prioirty">Priority</label>
                    <select id="prioritySelect" className="prioritySelect">
                        <option value="1">Red</option>
                        <option value="0.5">Amber</option>
                        <option value="0">Green</option>
                    </select>
                </div>
                <div>
                    <label id="groups" className="groups">Groups</label>
                    <label id="youngLabel">Young</label>
                    <input type="checkbox" id="young" className="checkbox" value="young"/>
                </div>
                <div>
                    <label id="middleLabel">Middle</label>
                    <input type="checkbox" id="Middle" className="checkbox" value="middle"/>
                </div>
                <div>
                    <label id="oldLabel">Old</label>
                    <input type="checkbox" id="Old" className="checkbox" value="old"/>
                </div>
           
                <div>
                    <label id="fields" className="fields">Fields</label>
                        <label id="moneyLabel" text="Money"/>
                        <input type="checkbox" id="money" className="checkbox" value="money"/>
                </div>
                <div>
                    <label id="reportingLabel">Reporting</label>
                    <input type="checkbox" id="reporting" className="checkbox" value="reporting"/>
                </div>
                <div>
                    <label id="locationLabel">Money</label>
                    <input type="checkbox" id="location" className="checkbox" value="location"/>
                </div>
                <div>
                    <label id="callLabel">Calls</label>
                    <input type="checkbox" id="call" className="checkbox" value="call"/>
                </div>
                <div>
                    <label id="websiteHitsLabel">Website Hits</label>
                    <input type="checkbox" id="websiteHits" className="checkbox" value="hits"/>
                </div>  
                <div>
                    <button type="button" onclick="onSearch_click">Search</button>
                </div>
        </div>
        )
    }
}
