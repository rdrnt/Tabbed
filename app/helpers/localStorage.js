import ls from 'react-native-local-storage';

const localStorage = {
  getItem: () => {
    console.log('hello');
  },

  saveItem: () => {
    ls.save('test', { dog: '123' }).then(() => {
      ls.get('test').then(data => {
        console.log('the data is', data);
      });
    });
  },
};

export default localStorage;
