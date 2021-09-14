import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import styled from 'styled-components';
import ProfileStories from './ProfilesStories';

const StoriesMenu = () => {

    const StoriesMenu = styled.View`
        width: 100%;
        height: 85px;
    `

    return ( 
        <>
            <ScrollView style = {{ flexDirection: 'row' }} horizontal={true}>
                <StoriesMenu style={{ borderBottomWidth: 2, borderBottomColor: "#eee", flexDirection: 'row'}}>
                    <ProfileStories/>
                    <ProfileStories/>
                    <ProfileStories/>
                    <ProfileStories/>
                    <ProfileStories/>
                    <ProfileStories/>
                </StoriesMenu>
            </ScrollView>
        </>
     );
}
 
export default StoriesMenu;