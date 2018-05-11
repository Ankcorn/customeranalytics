import React from 'react';
import styled from 'styled-components';

export const FilterHeader = styled.h3`
    text-decoration: underline;
`
class Filters extends React.Component {
    render()
    {
        return (
            <div>
                <label id="priority" className="prioirty" text="Priority"/>
            </div>
            <div>
                <select id="prioritySelect" className="prioritySelect">
                    <option text="Red" value="1"/>
                    <option text="Amber" value="0.5"/>
                    <option text="Green" value="0" />
                </select>
            </div>
            <div>
           <label id="groups" className="groups" text="Groups"/>
        
            <div>
                <label id="youngLabel" text="Young"/>
                <input type="checkbox" id="young" className="checkbox" value="young"/>
            </div>
            <div>
                <label id="middleLabel" text="Middle"/>
                <input type="checkbox" id="Middle" className="checkbox" value="middle"/>
            </div>
            <div>
                <label id="oldLabel" text="Old"/>
                <input type="checkbox" id="Old" className="checkbox" value="old"/>
            </div>
            </div>
            <div>
                <label id="fields" className="fields" text="Fields"/>
                <div>
                    <label id="moneyLabel" text="Money"/>
                    <input type="checkbox" id="money" className="checkbox" value="money"/>
                </div>
                <div>
                    <label id="reportingLabel" text="Reporting"/>
                    <input type="checkbox" id="reporting" className="checkbox" value="reporting"/>
                </div>
                <div>
                    <label id="locationLabel" text="Money"/>
                    <input type="checkbox" id="location" className="checkbox" value="location"/>
                </div>
                <div>
                    <label id="callLabel" text="Calls"/>
                    <input type="checkbox" id="call" className="checkbox" value="call"/>
                </div>
                <div>
                    <label id="websiteHitsLabel" text="Website Hits"/>
                    <input type="checkbox" id="websiteHits" className="checkbox" value="hits"/>
                </div>
            </div>
            <div>
                <input type="button" id="search" text="Search" onclick="onSearch_click"/>
            </div>

             
        )
    }
}
