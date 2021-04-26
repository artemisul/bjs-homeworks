'use strict';

// Задача 1

console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

let getNames = () => weapons.map(weapon => weapon.name);

let getCountReliableWeapons = (strength) => weapons.filter(weapon => weapon.durability > strength).length;

let hasReliableWeapons = (strength) => weapons.some(weapon => weapon.durability > strength);

let getReliableWeaponsNames = (strength) => weapons.filter(weapon => weapon.durability > strength).map(weapon => weapon.name);

let getTotalDamage = () => weapons.map(weapon => weapon.getDamage ()).reduce((sum, item) => sum + item);

// Задача 2

function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    sleep(100);    
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0) 
}

let compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);

function memorize(fn, limit) {
    let memory = [];
    return function (...args) {
        let findResult = memory.find((i) => compareArrays(i.args, args));
        if (findResult) {
            return findResult.result;
        }
        let result = fn(...args);
        if (memory.length === limit) {
            memory.unshift();
        }
        memory.push({args, result});
        return result;
    }
}
