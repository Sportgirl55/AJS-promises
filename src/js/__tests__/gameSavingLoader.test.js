import GameSavingLoader from '../gameSavingLoader';

test('check the promise',
  async () => {
    const gameSave = await GameSavingLoader.load();
    const expected = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}';
    expect(gameSave).toEqual(expected);
  });

// test('should handle errors', async () => {
//   expect.assertions(1);
//   try {
//     const data = await GameSavingLoader.load();
//   }
//   catch (e) {
//     expect(e).toEqual(new Error("I can't, I have paws"));
//   }
// });
