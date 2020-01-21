export default class Activity {
    activityId:string | null;
    dateId:string | null;
    activityName:string| null;
    activityTime:string| null;

    constructor() {
        this.activityId = null;
        this.dateId = null;
        this.activityName = null;
        this.activityTime = null;
    }
    isValid():boolean {
        return !!this.activityName && !!this.activityTime;
    }
}