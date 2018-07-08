import TouchID from 'react-native-touch-id';

const biometrics = {
  authenticate: callback => {
    console.log(TouchID);
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
  },
};

export default biometrics;
