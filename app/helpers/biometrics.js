import TouchID from 'react-native-touch-id';

const biometrics = {
  authenticate: callback => {
    console.log(TouchID);
    TouchID.isSupported()
      .then(biometryType => {
        // Success code
        if (biometryType === 'FaceID') {
          console.log('FaceID is supported.');
        } else {
          console.log('TouchID is supported.');
        }
      })
      .catch(error => {
        // Failure code
        console.log(error);
      });
    /*
    TouchID.authenticate('to demo this react-native component')
      .then(success => {
        // Success code
        console.log('succysess', success);
        callback(true);
      })
      .catch(error => {
        // Failure code
        console.log('Error in biometrics', error);
        callback(false);
      });
      */
  },
};

export default biometrics;
