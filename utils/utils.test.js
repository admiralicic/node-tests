const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
    let res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
    let res = utils.square(4);

    expect(res).toBe(16).toBeA('number');
});

it('should verify the firstName and lastName are set', () => {
    let user = {location: 'Tuzla', age: 44};

    res = utils.setName(user, 'Admir Alicic');

    expect(res).toInclude({firstName: 'Admir', lastName: 'Alicic'});
});