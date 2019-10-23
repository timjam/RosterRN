import { AsyncStorage } from 'react-native';

const deviceStorage = {
  async saveItem(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      return error;
    }
  },
  async deleteItem(key) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      return error;
    }
  },
  async clearStorage() {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      return error;
    }
  },
};

export default deviceStorage;
