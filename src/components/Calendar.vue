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
        <CalendarRow class="border-buttom-black"></CalendarRow>
        <CalendarRow class="border-buttom-black"></CalendarRow>
        <CalendarRow class="border-buttom-black"> </CalendarRow>

        <div class="column is-12 m-t-md">    
            <b-button type="is-info"
            class="m-r-md"
                icon-left="arrow-left">
                Previous month
            </b-button>
            <b-button type="is-info"
                icon-right="arrow-right">
                Next month
            </b-button>
        </div>
        
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

<style scoped>
.border-buttom-black{
    border-bottom: 1px solid black;
}
</style>