import axios from 'axios';

import { getHostName } from '.';

const bookmarkUtils = {
  isImageSvg: bookmarkImageUrl =>
    bookmarkImageUrl.slice(
      (Math.max(0, bookmarkImageUrl.lastIndexOf('.')) || Infinity) + 1
    ) === 'svg',

  // return a string (aka URL) of the icon we're going to use
  getFavicon: (bookmarkUrl, callback) => {
    // if the url is https://facebook.com/profile/dog/me
    // it will be facebook.com after
    const bookmarkUrlHostName = getHostName(bookmarkUrl);

    // get the url for the site logo
    axios
      .get(`https://favicongrabber.com/api/grab/${bookmarkUrlHostName}`)
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          const { data } = response;
          console.log('data', data);
          callback(data.icons[0].src);
        }
      });
  },
};

export default bookmarkUtils;
