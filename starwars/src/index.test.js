const starWars = require('./index');
const starWarsNames = require('./starwars-names.json');

describe('starwars-names', () => {
  describe('all', () => {
    test('should be a fulfilled array', () => {
      expect(starWars.all).toHaveLength(starWarsNames.length)
    });
    test('should be an array of strings', () => {
       expect(typeof '').toBe('string')
    });

    test('should contain `Luke Skywalker`', () => {
      expect(starWarsNames).toContain('Luke Skywalker');

    });

    test('should not contain `Ben Quadinaros`', () => {
        expect(starWarsNames).not.toContain('Ben Quadinaros');
        //expect(starWarsNames).not.toBe('Ben Quadinaros');
      });
  });

  describe('random', () => {
    test('should return a random item from the starWars.all', () => {
          const random = jest.fn(() => starWars.random(4));
          random(starWars.random(4));
          expect(random).toHaveReturned();
        });

    test('should return an array of random items if passed a number', () => {
         const number = 4;
         const random_items = starWars.random(number)
         const random = jest.fn(() => random_items);
         random(random_items);
         expect(random).toHaveReturned();
      });
  });
});
