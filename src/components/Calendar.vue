<template>
  <div class="p-md columns is-multiline">
    <div class="column is-12">
      <b-select v-model="selectedMonth" class="is-inline-block" placeholder="Month">
        <option v-bind:key="month.month" v-for="month in utils.months" :value="month.month">{{month.montName}}</option>
        <!-- <option value="1" :key="1">February</option> -->
      </b-select>
      <b-select v-model="selectedYear" class="is-inline-block" placeholder="Year">
        <option value="2019" key="2019">2019</option>
        <option value="2020" key="2020">2020</option>
      </b-select>
    </div>
    <div class="column">
      <div class="columns">
        <div class="column">Sunday</div>
        <div class="column">Monday</div>
        <div class="column">Tuesday</div>
        <div class="column">Wednesday</div>
        <div class="column">Thursday</div>
        <div class="column">Friday</div>
        <div class="column">Saturday</div>
      </div>
    </div>
    <calendar-row v-if="selectedCalendarMonth" :days="selectedCalendarMonth.days" class="border-buttom-black"></calendar-row>
    <!-- <CalendarRow class="border-buttom-black"></CalendarRow>
    <CalendarRow class="border-buttom-black"></CalendarRow> -->

  </div>
</template>
<script>
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Utils from "../Utils.ts";

import MonthCalendar from "../Models/MonthCalendar";
import YearMonthDays from "../Models/YearMonthDays";
@Component({
  components: {
    CalendarRow: () => import("../components/CalendarRow.vue")
  }
})
export default class Calendar extends Vue {
  selectedYear = new Date().getFullYear();
  selectedMonth = new Date().getMonth();

  yearCalendar = null;
  selectedCalendarMonth = null;

  utils = new Utils();
  constructor() {
    super();
  }
  

  @Watch("selectedMonth")
  selectedMonthChanged(month) {
    this.setCalendarMonth(month)
  }
  @Watch("selectedYear")
  yearChanged(y) {
    this.setCalendarYear(y);
    this.setCalendarMonth(this.selectedMonth);
  }

  mounted(){
    this.setCalendarYear(this.selectedYear);
    this.setCalendarMonth(this.selectedMonth);
  }

  setCalendarYear(year){
    this.yearCalendar = this.utils.getYearMonthsDays(Number(year));
  }
  setCalendarMonth(month){
   this.selectedCalendarMonth = this.yearCalendar.months.find(
      x => x.month == Number(this.selectedMonth)
    );
  }
}
</script>

<style scoped>

</style>