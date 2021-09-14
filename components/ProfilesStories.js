import React from 'react';
import { Image, Text } from 'react-native';
import styled from 'styled-components';

const ProfileStories = () => {

    const ProfileStories = styled.View`
        width: 55px;
        height: 55px;
        border-radius: 50px;
        left: 10px;
        top: 8px;
        margin-right: 20px;
    `

    return ( 
        <>
            <ProfileStories>
                <Image
                    style = {{ width: 55, height: 55, borderRadius: 50, borderWidth: 4, borderColor: '#eee' }}
                    source = {require('../img/MainProfile.jpeg')}
                />
                <Text style = {{ fontSize: 11 }}>Your Story</Text>
            </ProfileStories>
        </>
     );
}
 
export default ProfileStories;