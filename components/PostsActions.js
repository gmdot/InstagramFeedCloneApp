import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import styled from 'styled-components';

const PostsActions = () => {

    const PostsActions = styled.View`
        width: 100%;
        height: 50px;
    `

    return ( 
        <>
            <PostsActions style = {{ flexDirection: 'row' }}>
                <Image
                    style = {{ width: 24, height: 21, top: 15, left: 10, marginRight: 20}}
                    source = {require('../img/HeartLike.png')}
                />
                <Image
                    style = {{ width: 21, height: 21, top: 15, left: 10 }}
                    source = {require('../img/Comments.png')}
                />
                <Image
                    style = {{ width: 25, height: 25, top: 12, left: 27 }}
                    source = {require('../img/directInstagram.png')}
                />
                <Image
                    style = {{ width: 30, height: 30, position: 'absolute', right: 8, top: 11 }}
                    source = {require('../img/favoritesIcon.png')}
                />
            </PostsActions>
        </>
     );
}
 
export default PostsActions;