import React from 'react';
import styled from 'styled-components';

import Select from 'react-select';

export const FilterHeader = styled.h3`
    text-decoration: underline;
`
export default class FilterOptions extends React.Component {
    state = {
        current: '',
        value: '',
        moneyClicked: false
    }
    priorityChange = (e) => {
        console.log(e); 
        this.setState({
            current: 'priority',
            value: e.label
        })
    }

    onSubmit = () => {
        console.log(this.state);
        this.props.changeFilter(this.state.current, 'Red', this.state.moneyClicked)
        this.setState({
            current: '',
            value: '',
            moneyClicked: false
        })
    }

    render() {
        return (
            <div>
                <div>
                    <label id="priority" className="prioirty">Priority</label>
                    <Select 
                        value={this.state.current === 'priority' ? this.state.value : null}
                        onChange={this.priorityChange}
                        options={[{ value: 'red', label: 'Red' },
                    { value: 'orange', label: 'Orange' },
                    { value: 'green', label: 'Green' }]} />
                </div>
                <div>
                    <label id="groups" className="groups">Groups</label>
                    <label id="youngLabel">Young</label>
                    <input type="checkbox" id="young" className="checkbox" value="young" />
                </div>
                <div>
                    <label id="middleLabel">Middle</label>
                    <input type="checkbox" id="Middle" className="checkbox" value="middle" />
                </div>
                <div>
                    <label id="oldLabel">Old</label>
                    <input type="checkbox" id="Old" className="checkbox" value="old" />
                </div>

                <div>
                    <label id="fields" className="fields">Fields</label>
                    <label id="moneyLabel" text="Money" />
                    <input type="checkbox" id="money" className="checkbox" value="money" />
                </div>
                <div>
                    <label id="reportingLabel">Reporting</label>
                    <input type="checkbox" id="reporting" className="checkbox" value="reporting" />
                </div>
                <div>
                    <label id="locationLabel">Money</label>
                    <input type="checkbox" id="location" onClick={()=> {
                        this.setState({moneyClicked: !this.state.moneyClicked})
                    }} className="checkbox" />
                </div>
                <div>
                    <label id="callLabel">Calls</label>
                    <input type="checkbox" id="call" className="checkbox" value="call" />
                </div>
                <div>
                    <label id="websiteHitsLabel">Website Hits</label>
                    <input type="checkbox" id="websiteHits" className="checkbox" value="hits" />
                </div>
                <div>
                    <button type="button" onClick={this.onSubmit}>Search</button>
                </div>
            </div>
        )
    }
}
