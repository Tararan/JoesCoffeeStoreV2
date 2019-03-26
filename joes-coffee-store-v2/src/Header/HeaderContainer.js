import React, { Component } from 'react';
import  Header from './Header';
import { headerContent } from './headerContent';

export default class HeaderContainer extends Component {
    render() {
        return(
        <div>
        {headerContent.map((item, i) => {
        return(
            <Header  key={`Header-key-${i}`}
                videomp4 = { item.videomp4.replace(/\s/g, "") }
                videowebm = { item.videowebm.replace(/\s/g, "") }
                header = { item.header }
                subheader = { item.subheader }
                videoposter = { item.videoposter }
            />
        )
            })}
        </div>
        )
    }
}