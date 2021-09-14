import React from 'react';
import { Image, StyleSheet } from 'react-native';
import styled from 'styled-components';

const BottomMenu = () => {

    const BottomMenu = styled.View`
        width: 100%;
        height: 75px;
        background: #fff;
        position: absolute;
        bottom: 0px;
        margin: 0;
    `

    const Image = styled.Image `
        top: -10px;
    `

    return ( 
        <>
                <BottomMenu style = {{ borderTopWidth: 2, borderTopColor: '#eee', flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style = {{ width: 50, height: 30, left: 13 }}
                        source = {require('../img/homeInstagram.png')}
                    />
                    <Image
                        style = {{ width: 25, height: 25, left: 55 }}
                        source = {require('../img/searchInstagram.png')}
                    />
                    <Image
                        style = {{ width: 53, height: 53, left: 93 }}
                        source = {require('../img/uploadInstagram.png')}
                    />
                    <Image
                        style = {{ width: 28, height: 24, left: 130 }}
                        source = {require('../img/HeartLike.png')}
                    />
                    <Image
                        style = {{ width: 35, height: 35, borderRadius: 50, borderWidth: 2, borderColor: '#eee', left: 180 }}
                        source = {require('../img/MainProfile.jpeg')}
                    />
                </BottomMenu>
        </>
     );
}
 
export default BottomMenu;