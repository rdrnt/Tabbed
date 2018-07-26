import axios from 'axios';

import { getHostName } from '.';

const bookmarkUtils = {
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

          // if we have more than one icon to go off of
          // find the icon thats a .svg
          if (data.icons.length > 1) {
            const svgIcon = data.icons.filter(icon =>
              icon.src.includes('.svg')
            );
            callback(svgIcon[0].src);
          } else {
            callback(data.icons[0].src);
          }
        }
      });
  },
};

export default bookmarkUtils;
