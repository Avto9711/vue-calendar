<template>
    <div class="m-t-md" >   
        <div class="columns">
            <div class="column right-border-gray ">
                <CalendarTile ></CalendarTile>
            </div>
            <div class="column right-border-gray">
                <CalendarTile ></CalendarTile>
            </div>
            <div class="column right-border-gray">
                <CalendarTile ></CalendarTile>
            </div>
            <div class="column right-border-gray">
                <CalendarTile ></CalendarTile>
            </div>
            <div class="column right-border-gray">
                <CalendarTile ></CalendarTile>
            </div>
            <div class="column right-border-gray">
                <CalendarTile ></CalendarTile>
            </div>
            <div class="column ">
                <CalendarTile ></CalendarTile>
            </div>

        </div>

    </div>
</template>
<script>
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
    components:{
        CalendarTile: ()=> import("../components/CalendarTile.vue")
    }
})
export default class CalendarRow extends Vue {
    constructor(){
        super()
    }
}
</script>