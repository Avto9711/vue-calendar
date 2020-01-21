export default class MonthCalendar {
    month:number|null;
    montName:string|null;
    days:Date[];
    constructor() {
        this.montName = null;
        this.month = null;
        this.days = [];
    }
}