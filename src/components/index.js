import React from 'react';
import styled from 'styled-components';

export const Header = styled.div`
    background-color: Aquamarine;
    height: 60px;
    padding: 20px;
    color: white;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;

`
export const User = styled.div`
    height: 60px;
    width: 60px;
    background-image: url("http://en.tintin.com/images/tintin/persos/images/milou.png");
    border-radius: 50%;
    background-size: 100% 100%;
    border: solid 1px #222;
`
export const Filters = styled.div`
    border-radius: 20px;
    width: 300px;
    height: 700px;
    box-shadow: 5px 10px 8px 10px #888888; 
    background-color: LightSteelBlue 
`

export const Table = styled.div`
    border-radius: 20px;
    width: 900px;
    height: 700px;
    box-shadow: 5px 10px 8px 10px #888888; 
    background-color: #222;
    position: relative;
    z-index: 4;
`