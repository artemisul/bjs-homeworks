'use strict';

// Зажача 1

console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

let getNames = () => weapons.map(weapon => weapon.name);

let getCountReliableWeapons = (strength) => weapons.filter(weapon => weapon.durability > strength).length;

let hasReliableWeapons = (strength) => weapons.some(weapon => weapon.durability > strength);

let getReliableWeaponsNames = (strength) => weapons.filter(weapon => weapon.durability > strength).map(weapon => weapon.name);

let getTotalDamage = () => weapons.map(weapon => weapon.getDamage ()).reduce((sum, item) => sum + item);

// Задача 2

