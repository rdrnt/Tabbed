import { isIphoneX } from 'react-native-iphone-x-helper';
import { Header } from 'react-navigation';

// https://github.com/react-navigation/react-navigation/blob/master/examples/NavigationPlayground/js/StackWithTranslucentHeader.js

const getHeaderInset = () => {
  const NOTCH_HEIGHT = isIphoneX() ? 25 : 0;

  const BASE_HEADER_HEIGHT = Header.HEIGHT;

  const HEADER_HEIGHT = BASE_HEADER_HEIGHT + NOTCH_HEIGHT;

  return {
    contentInset: { top: HEADER_HEIGHT },
    contentOffset: { y: -HEADER_HEIGHT },
  };
};

export default getHeaderInset;
