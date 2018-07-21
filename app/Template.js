import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import Bookmarks from './screens/Bookmarks';
import BookmarkViewer from './screens/BookmarkViewer';
import Settings from './screens/Settings';

import store from './store';

class HomeScreen extends React.Component {
  componentDidMount() {
    console.log('okay!');
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const BookmarkStack = createStackNavigator({
  Bookmark: {
    screen: Bookmarks,
  },
  BookmarkViewer: {
    screen: BookmarkViewer,
  },
});

const SettingsStack = createStackNavigator({
  Settings: {
    screen: Settings,
  },
});

const RootStack = createBottomTabNavigator({
  Bookmark: BookmarkStack,
  Settings: SettingsStack,
});

const Template = () => (
  <Provider store={store}>
    <RootStack />
  </Provider>
);

export default Template;
