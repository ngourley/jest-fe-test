// Dawg was not assigned to window, but is a global variable
// so it can be accessed using it class variable, but not via the window
// like how Kat is available

console.assert(Dawg, `Dawg is a global variable`);
console.assert(Kat, `Kat is a global variable`);

console.assert(!window.Dawg, `Dawg is not on the window`);
console.assert(window.Kat, `Kat is on the window`);