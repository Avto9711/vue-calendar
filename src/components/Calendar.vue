<template>
    <div class=" p-md columns is-multiline">
        <div class="column">
            <div class="columns ">
                <div class="column ">Sunday</div>
                <div class="column ">Monday</div>
                <div class="column ">Tuesday</div>
                <div class="column ">Wednesday</div>
                <div class="column ">Thursday</div>
                <div class="column ">Friday</div>
                <div class="column">Saturday</div>
            </div>
        </div>
        <CalendarRow></CalendarRow>
        <CalendarRow></CalendarRow>
        
        
    </div>
</template>
<script>

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    components:{
        CalendarRow: ()=> import("../components/CalendarRow.vue")
    }
})
export default class Calendar extends Vue {
        constructor(){
            super();
        }
}
</script>

<style scoper>

</style>