import React from 'react';
import { Image, Text } from 'react-native';
import styled from 'styled-components';

const ProfilePost = () => {

    const ProfilePost = styled.View`
        border-radius: 50px;
        margin-top: 10px;
        margin-left: 10px;
    `

    return ( 
        <>
            <ProfilePost style = {{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    style = {{ width: 35, height: 35, borderRadius: 50, borderWidth: 3, borderColor: '#eee' }}
                    source = {require('../img/ProfileTwo.jpeg')}
                />
                <Text style = {{ fontSize: 15, fontWeight: 'bold', marginLeft: 5 }}>Jacob</Text>
                <Image
                    style = {{ width: 20, height: 20, position: 'absolute', right: 16 }}
                    source = {require('../img/ThreePoints.png')}
                />
            </ProfilePost>
        </>
     );
}
 
export default ProfilePost;