// Задача 1

function getSolutions(a, b, c) {
    let D = b ** 2 - 4 * a * c;
    let x1;
    let x2;
    if (D < 0) {
        return {
            D: D,
            roots: []
        }
    } else if (D === 0) {
        x1 = -b / (2 * a);
        return {
            D: D,
            roots: [x1]
        }
    } else {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        return {
            D: D,
            roots: [x1, x2]
        }
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.roots.length === 0) {
        console.log('Уравнение не имеет вещественных корней');
    } else if (result.roots.length === 1) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

// Задача 2

let data = {
    algebra: [ 2, 4, 5, 2, 3, 4 ],
    geometry: [ 2, 4, 5 ],
    russian: [ 3, 3, 4, 5 ],
    physics: [ 5, 5 ],
    music: [ 2, 2, 6 ],
    english: [ 4, 4, 3 ],
    poetry: [ 5, 3, 4 ],
    chemistry: [ 2 ],
    french: [ 4, 4 ]
}

function getAverageMark(marks) {
    if (marks.length > 0) {
        return marks.reduce((previousValue, currentValue) => currentValue += previousValue) / marks.length;
    } else {
        return 0;
    }
}

function getAverageScore(data) {
    if (Object.keys(data).length > 0 || data.length > 0) {
        let newArr = {};
        let averageScore = 0;
        let sum = 0;
        let arr = Object.entries(data).reduce(function(previousValue, currentValue) {
            averageScore= getAverageMark(currentValue[1]);
            sum += averageScore;
            return newArr[Object.values(currentValue)[0]] = averageScore;        
        }, 0)
       newArr['average'] = (sum / Object.keys(newArr).length)
       return newArr        
    } else if (Object.keys(data).length == 0) {
        return {'average': 0}
    } else {
        return 0;
    }
}

