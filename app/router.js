import { Navigation } from 'react-native-navigation';

import Home from './screens/Home';
import Settings from './screens/Settings';

function registerScreens() {
  Navigation.registerComponent('tabbed.Home', () => Home);
  Navigation.registerComponent('tabbed.Settings', () => Settings);
}

const tabs = [
  {
    label: 'Bookmarks',
    screen: 'tabbed.Home',
    icon: require('./assets/images/bookmark.png'),
    selectedIcon: require('./assets/images/bookmark.png'),
    title: 'Bookmarks',
  },
  {
    label: 'Settings',
    screen: 'tabbed.Settings',
    icon: require('./assets/images/settings.png'),
    selectedIcon: require('./assets/images/settings.png'),
    title: 'Settings',
  },
];

export { registerScreens, tabs };
