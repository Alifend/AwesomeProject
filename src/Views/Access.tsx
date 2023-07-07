import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  useWindowDimensions,
} from 'react-native';
import Login from './Login';
import Register from './Register';
import {SceneMap, TabView, TabBar, TabBarProps} from 'react-native-tab-view';

const createRenderScene = navigation => {
  return ({route}) => {
    switch (route.key) {
      case 'first':
        return <Login navigation={navigation} prop2="Value 2" />;
      case 'second':
        return <Register navigation={navigation} prop2="Value 2" />;
      default:
        return null;
    }
  };
};

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#0DA54B'}}
    style={{backgroundColor: 'white'}}
    labelStyle={{color: 'black'}}
  />
);

const AccessScreen = ({navigation}) => {
  console.log(navigation);
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Login'},
    {key: 'second', title: 'Register'},
  ]);
  const renderScene = createRenderScene(navigation);

  return (
    <View
      style={{
        height: '100%',
      }}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </View>
  );
};

export default AccessScreen;
