import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
import StoriesMenu from './components/StoriesMenu'
import TopMenu from './components/TopMenu';
import Post from './components/Post';
import BottomMenu from './components/BottomMenu';

export default function App() {
  return (
    <>
    <StatusBar
      barStyle={"dark-content"}
    />
      <SafeAreaView>
        <View>
          <TopMenu/>
          <StoriesMenu/>
        </View>
    
        <ScrollView>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </ScrollView>
      </SafeAreaView>
      <BottomMenu/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
