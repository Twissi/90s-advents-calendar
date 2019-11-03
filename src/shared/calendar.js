class Calendar {
  constructor(newDate) {
    const overwriteDate = new Date(newDate);
    if (overwriteDate) {
      this.today = overwriteDate;
    } else {
      this.today = new Date(Date.now());
    }
  }

  todaysDay() {
    return this.today.getDate();
  }

  todaysMonth() {
    return this.today.getMonth() + 1;
  }

  isDecember() {
    return this.todaysMonth() === 12;
  }

  daysBeforeChristmas() {
    if (this.isDecember()) {
      const dayToday = this.todaysDay();
      return 24 - dayToday;
    }

    return null;
  }
}

export default Calendar;
