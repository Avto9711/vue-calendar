<template>
    <div class="" >
        <div class="is-inline-block m-b-md w-100">
            <!-- <span class=" has-text-link	 calendar-number has-text-left is-pulled-left p-xs m-t-xs" >(27)</span> -->
            <NewActivity :calendarNumber="27"></NewActivity>

        </div>

            <div class="columns is-centered is-multiline  ">
                <div class="column is-12 p-t-none">
                    <ActivityTag truncateText  activityColor="is-danger" activityTime="10:AM" activityTitle="Wendy's Birthdayzxzxczxczxc" class="m-l-lg p-t-none" ></ActivityTag>
                </div>
                <div class="column is-12 p-t-none">
                    <ActivityTag class="m-l-lg p-t-none" activityColor="is-danger" activityTitle="Birthday"></ActivityTag>
                </div>

                <div class="column is-12">
                    <ActivityDetail></ActivityDetail>
                </div>
                
            </div>
        
    </div>
</template>
<script>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    components:{
        ActivityDetail: ()=>import("./ActivityDetail.vue"),
        ActivityTag: ()=>import("./ActivityTag.vue"),
        NewActivity: ()=>import("./NewActivity.vue"),
    }
})
 export default class CalendarTile extends Vue{
     constructor(){
         super();
     }
}
</script>
<style>
    .calendar-number{
        text-decoration: underline;
        cursor: pointer;
    }
</style>