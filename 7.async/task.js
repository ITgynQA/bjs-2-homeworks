class AlarmClock {

	constructor(alarmCollection, intervalId) {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {

		if (!time || !callback) {
			throw new Error("Отсутствуют обязательные аргументы");
		}
		if (this.alarmCollection.some(alarm => alarm.time === time)) {
			console.warn("Уже присутствует звонок на это же время");
		}

		const newAlarm = {
			time,
			callback,
			canCall: true
		};
		this.alarmCollection.push(newAlarm);
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
	}

	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString('ru-Ru', {
			hour: '2-digit',
			minute: '2-digit',
		});
	}

	start() {
		if (this.intervalId) {
			return;
		}
		this.intervalId = setInterval(() => {
			let currentTime = this.getCurrentFormattedTime();

			this.alarmCollection.forEach(alarm => {
				if (alarm.time === currentTime && alarm.canCall) {
					alarm.canCall = false;
					alarm.callback();
				}
			});
		}, 1000);

	}

	resetAllCalls() {
		this.alarmCollection.forEach(alarm => {
			alarm.canCall = true;
		});
	}


	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}


	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}