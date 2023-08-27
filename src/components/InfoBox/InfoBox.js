import React from 'react';
import { Buttons } from './Buttons';
import { HeyThere } from './HeyThere';
import { NameBox } from './NameBox';
import { MyInfo } from './MyInfo';

export const InfoBox = () =>{
    return(
        <div id = "Home" style={{
            paddingBottom:"8%",
            paddingTop:"4%"
        }}>
            <HeyThere/>
            <NameBox/>
            <MyInfo/>
            <br/><br/><br/>
            <Buttons/>
        </div>
    )
}