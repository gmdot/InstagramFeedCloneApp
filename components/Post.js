import React from 'react';
import { Image, Text } from 'react-native';
import styled from 'styled-components';

const Post = () => {

    const Post = styled.View`
        width: 100%;
        height: 220px;
        background: #eee;
        margin-top: 10px;
    `

    return ( 
        <>
            <Post>
                <Image
                    style = {{ width: '100%', height: 220 }}
                    source = {require('../img/WonderfulTrip.jpeg')}
                />
            </Post>
        </>
     );
}
 
export default Post;