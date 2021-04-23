'use strict';

// Задача 1

function parseCount (value) {
    if (isNaN(Number.parseInt(value))) {
        throw new Error('Невалидное значение')
    }
    return Number.parseInt(value);
}

function validateCount (value) {
    try {
        return parseCount(value);
    } catch(err) {
        return err
    }
}

// Задача 2

class Triangle {
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if ((this.a + this.b) < this.c || (this.a + this.c) < this.b || (this.b + this.c) < this.a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter () {
        return this.a + this.b + this.c;
    }

    getArea () {
        let p = 0.5 * (this.a + this.b + this.c);
        let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return parseFloat(s.toFixed(3));
    }    
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return {
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            },
            getArea () {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}