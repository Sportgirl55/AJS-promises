import GameSavingLoader from './gameSavingLoader';

GameSavingLoader.load().then((saving) => saving, (error) => error);
