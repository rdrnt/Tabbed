import { Navigation } from 'react-native-navigation';

import Bookmarks from './screens/Bookmarks';
import Settings from './screens/Settings';
import NewBookmark from './screens/NewBookmark';
import BookmarkViewer from './screens/BookmarkViewer';

function registerScreens(store, Provider) {
  Navigation.registerComponent(
    'tabbed.Bookmarks',
    () => Bookmarks,
    store,
    Provider
  );
  Navigation.registerComponent(
    'tabbed.Settings',
    () => Settings,
    store,
    Provider
  );
  Navigation.registerComponent(
    'tabbed.NewBookmark',
    () => NewBookmark,
    store,
    Provider
  );
  Navigation.registerComponent(
    'tabbed.BookmarkViewer',
    () => BookmarkViewer,
    store,
    Provider
  );
}

const tabs = [
  {
    label: 'Bookmarks',
    screen: 'tabbed.Bookmarks',
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
