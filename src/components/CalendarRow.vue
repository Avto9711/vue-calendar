<template>
  <div class="m-t-md">
    <div class="columns seven-cols is-multiline">
      <div :key="day.dateId" v-for="day in calendarDays" class="column is-1 border-gray">
        <CalendarTile v-if="day.day != 0" :calendarNumber="day.day" :dateId="day.dateId" :isDiffMonth="day.isDiffMonth"></CalendarTile>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  components: {
    CalendarTile: () => import("../components/CalendarTile.vue")
  }
})
export default class CalendarRow extends Vue {
  @Prop() days!: Array<Date>;
  @Prop() dateId!: string;

  constructor() {
    super();
  }
  get currentDay() {
    return new Date().getDay();
  }
  get calendarDays() {
    var days: any = [];
    let firstDdayNumber = this.days[0].getDay();
    var firstDay = this.days[0];

    for (let i = firstDdayNumber ; i > 0; i--) {
      var lastDate = new Date(firstDay);
      lastDate.setDate(firstDay.getDate() - i);

      days.push({ day: lastDate.getDate(), dateId: lastDate.toString(), isDiffMonth : true });
    }

    days = days.concat(
      this.days.map(x => {
        return {
          day: x.getDate(),
          dateId: x.toString()
        };
      })
    );
    let lastDay= this.days[this.days.length-1];
    let lastDayNumber = lastDay.getDay();
    let startDays = 7 - (lastDayNumber + 1);

     for (let i = 1 ; i <= startDays; i++) {
      var lastDate = new Date(lastDay);
      lastDate.setDate(lastDate.getDate() + i);

      days.push({ day: lastDate.getDate(), dateId: lastDate.toString(), isDiffMonth : true });
    }

    return days;
  }
}
</script>

<style scoped>
@media (min-width: 768px) {
  .seven-cols .is-1,
  .seven-cols .is-1,
  .seven-cols .is-1 {
    width: 100%;
    *width: 100%;
  }
}

@media (min-width: 992px) {
  .seven-cols .is-1,
  .seven-cols .is-1,
  .seven-cols .is-1 {
    width: 14.285714285714285714285714285714%;
    *width: 14.285714285714285714285714285714%;
  }
}

/**
 *  The following is not really needed in this case
 *  Only to demonstrate the usage of @media for large screens
 */
@media (min-width: 1200px) {
  .seven-cols .is-1,
  .seven-cols .is-1,
  .seven-cols .is-1 {
    width: 14.285714285714285714285714285714%;
    *width: 14.285714285714285714285714285714%;
  }
}
</style>