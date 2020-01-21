import MonthCalendar from "./MonthCalendar";

export default class YearMonthDays {
    year:number| null;
    months:Array<MonthCalendar>;

    constructor() {
         this.year = null;
         this.months = [];
    }
}