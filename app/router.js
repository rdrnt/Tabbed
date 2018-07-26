import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Bookmarks from './screens/Bookmarks';
import BookmarkViewer from './screens/BookmarkViewer';
import Settings from './screens/Settings';
import NewBookmark from './screens/NewBookmark';

const BookmarkStack = createStackNavigator(
  {
    Bookmark: {
      screen: Bookmarks,
    },
    BookmarkViewer: {
      screen: BookmarkViewer,
    },
    NewBookmark: {
      screen: NewBookmark,
    },
  },
  {
    navigationOptions: {
      // So the header is see through
      headerTransparent: true,
      // View that has no background alpha
      headerBackground: (
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(255,255,255,0.0)',
          }}
        />
      ),
      headerTintColor: '#FFF',
    },
  }
);

const SettingsStack = createStackNavigator({
  Settings: {
    screen: Settings,
  },
});

const RootStack = createBottomTabNavigator(
  {
    Bookmark: BookmarkStack,
    Settings: SettingsStack,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        // We only have two tabs, Settings and Bookmarks
        // So we can just use a ternary operator for now
        const iconName =
          routeName === 'Bookmark'
            ? `ios-bookmarks${focused ? '' : '-outline'}`
            : `ios-options${focused ? '' : '-outline'}`;
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default RootStack;
