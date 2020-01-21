<template>
  <div class>
    <div class="is-inline-block m-b-md w-100">
      <!-- <span class=" has-text-link	 calendar-number has-text-left is-pulled-left p-xs m-t-xs" >(27)</span> -->
      <NewActivity :dateId="dateId" :calendarNumber="calendarNumber" :isDiffMonth="isDiffMonth"></NewActivity>
    </div>

    <div class="columns is-centered is-multiline">
      <div class="column is-12 p-t-none">
        <ActivityTag v-for="(activity,index) in twoFirstTwoTags"
          truncateText
          :key="index"
          :activityId="activity.activityId"
          :activityTime="activity.activityTime"
          :activityTitle="activity.activityName"
          class="m-l-lg p-t-none"
         
        ></ActivityTag>
      </div>
      <!-- <div class="column is-12 p-t-none">
        <ActivityTag class="m-l-lg p-t-none" activityColor="is-danger" activityTitle="Birthday"></ActivityTag>
      </div> -->

      <div class="column is-12">
        <ActivityDetail v-if="tagsByDateId.length > 2" :activites="tagsByDateId" :dateId="dateId"></ActivityDetail>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Activity from "../Models/Activity";

@Component({
  components: {
    ActivityDetail: () => import("./ActivityDetail.vue"),
    ActivityTag: () => import("./ActivityTag.vue"),
    NewActivity: () => import("./NewActivity.vue")
  }
})
export default class CalendarTile extends Vue {
  @Prop() calendarNumber!: number;
  @Prop() dateId!: string;
  @Prop() isDiffMonth!: boolean;

  constructor() {
    super();
  }
  get tagsByDateId(){
    return this.$store.state.activities.filter((x: Activity) => {
        return x.dateId == this.dateId;
    });
  }
  get twoFirstTwoTags(){
      return this.tagsByDateId.slice(0,2);
  }
  
 
}
</script>
<style scoped>
.calendar-number {
  text-decoration:underline;
  cursor: pointer;
}
</style>