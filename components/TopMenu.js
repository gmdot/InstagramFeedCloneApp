import React from 'react';
import { Image, StyleSheet } from 'react-native';
import styled from 'styled-components';

const TopMenu = () => {

    const TopMenu = styled.View`
        width: 100%;
        height: 55px;
    `

    return ( 
        <>
            <TopMenu>
                <Image
                    style = {{ width: 30, height: 25, position: 'absolute', left: 15, top: 17}}
                    source = {require('../img/cameraInstagram.png')}
                />
                <Image
                    style = {{ width: 150, height: 50, alignSelf: 'center', top: 7 }}
                    source = {require('../img/instagramLogo.png')}
                />
                <Image
                    style = {{ width: 35, height: 35, position: 'absolute', right: 10, top: 15 }}
                    source = {require('../img/directInstagram.png')}
                />
            </TopMenu>
        </>
     );
}
 
export default TopMenu;