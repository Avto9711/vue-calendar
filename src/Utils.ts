import YearMonthDays from "./Models/YearMonthDays";
import MonthCalendar from "./Models/MonthCalendar";
import Month from "./Models/Month";

export default class Utils {
    months: Month[] = [
        {
            month:0, montName:"January",
        },
        {
            month:1, montName:"February",
        },
        {
            month:2, montName:"March",
        },
        {
            month:3, montName:"April",
        },
        {
            month:4, montName:"May",
        },
        {
            month:5, montName:"June",
        },
        {
            month:6, montName:"July",
        },
        {
            month:7, montName:"August",
        },
        {
            month:8, montName:"September",
        },
        {
            month:9, montName:"October",
        },
        {
            month:10, montName:"November",
        },
        {
            month:11, montName:"December",
        },

    ];
 getMonthDays(year:number,month:number):Date[]  {
        let date:Date = new Date(year, month,1);
        let days:Date[] = [];
        while(date.getMonth()=== month) {
            let nDate:Date = new Date(date);
            nDate.setHours(0,0,0);
            days.push(nDate);
            date.setDate(date.getDate()+1);
        }
        return days;
    }

  getYearMonthsDays(year:number):YearMonthDays {
        let yearCalendar:YearMonthDays =  new YearMonthDays();
        yearCalendar.year= year;
        for (let index:number = 0; index < this.months.length; index++) {
            let currentMonth:Month = this.months[index];
            let monthCalendar:MonthCalendar = new MonthCalendar();
            monthCalendar.montName = currentMonth.montName;
            monthCalendar.month = currentMonth.month;
            monthCalendar.days = this.getMonthDays(year,currentMonth.month as number);
            yearCalendar.months.push(monthCalendar);
        }
        return yearCalendar;
    }
}





