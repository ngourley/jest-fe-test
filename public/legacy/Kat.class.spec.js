import { Kat } from './Kat.class';

test('adds 1 + 2 to equal 3', () => {
    const name = 'bob';
    const bob = new Kat(name);
    expect(bob.getName()).toBe(name);
});