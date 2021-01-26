import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  // eslint-disable-next-line class-methods-use-this
  static load() {
    return read().then((data) => json(data));
  }
}
