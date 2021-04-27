'use stricr';

class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {

        if (!id) throw new Error('Невозможно идентифицировать будильник, параметр id не передан');

        if (this.alarmCollection.some(alarm => alarm.id == id)) {
          console.error('Будильник с таким id уже существует');
          return;
        }
    
        this.alarmCollection.push({ time, callback, id });   
    }

    removeClock(id) {        
            this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id != id);
            return this.alarmCollection.findIndex(alarm => alarm.id != id) !== -1;
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0, -3);
    }

    start() {
        let checkClock = alarm => {
            let now = this.getCurrentFormattedTime();
            if (alarm.time === now) {
                alarm.callback();
            }
        }
        if (!this.timerId) {
            setInterval(() => {
                this.alarmCollection.forEach(alarm => {
                    this.timerID = checkClock(alarm);
                })
            }, 1000);
        }
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        return this.alarmCollection.forEach((alarm, id) => console.log(`Будильник № ${id + 1} заведен на ${alarm.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    let phoneAlarm = new AlarmClock();

    phoneAlarm.addClock('09:00', () => console.log('Пора вставать'), 1);
    phoneAlarm.addClock('09:01', () => {
        console.log('Давай, вставай уже');
        phoneAlarm.removeClock(2);
    }, 2);
    phoneAlarm.addClock('09:05', () => {
        console.log('Вставай, а то проспишь');
        phoneAlarm.clearAlarms();
        phoneAlarm.printAlarms();
    }, 3);

    phoneAlarm.start();
}

testCase();