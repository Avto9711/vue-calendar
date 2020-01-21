<template>
  <div class="m-t-md">
    <div class="columns seven-cols is-multiline">
      <div :key="day.dateId" v-for="day in calendarDays" class="column is-1 right-border-gray">
        <CalendarTile v-if="day.day != 0" :calendarNumber="day.day" :dateId="day.dateId" ></CalendarTile>
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

  get calendarDays() {
    var days: any = [];
    let firstDdayNumber = this.days[0].getDay();

    for (let i = 0;  i < firstDdayNumber; i++) {
      days.push({ day: 0, dateId: "0-" + i });
    }

    days =  days.concat(
      this.days.map(x => {
        return {
          day: x.getDate(),
          dateId: x.toString()
        };
      })
    );
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