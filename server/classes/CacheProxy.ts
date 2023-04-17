import AppCache from '../cache';

export default class CacheProxy{
  private _currentKey: string = '';

  constructor(key: string) {
    this._currentKey = key;
  }

  private getCachedResult() {
    return AppCache.get(this._currentKey);
  }

  private keyExists() {
    return AppCache.has(this._currentKey);
  }

  udpateCacheResult(value: any) {
    return AppCache.set(this._currentKey, value);
  }

  getCacheResult() {
    if(this.keyExists()) {
      return this.getCachedResult()
    } else {
      return false;
    }
  }
}