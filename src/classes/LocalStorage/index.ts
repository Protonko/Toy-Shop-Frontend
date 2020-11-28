export default class LocalStorage {
  static DATA_KEY: string;

  static clearData() {
    return localStorage.removeItem(this.DATA_KEY);
  }

  static setData(data: any) {
    return localStorage.setItem(this.DATA_KEY, JSON.stringify(data))
  }

  static setValue(key: string, value: any) {
    const data = this.getData();
    data[key] = value;

    return this.setData(data);
  }

  static removeValue(key: string) {
    const data = this.getData();
    delete data[key];

    return this.setData(data);
  }

  static getData(defaultValue = {}) {
    try {
      const data = localStorage.getItem(this.DATA_KEY);

      return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
      console.warn(e);
    }

    return defaultValue;
  }
}
