<template>
    <div>   
        <span @click="addNewActivity()" class="has-text-link calendar-number has-text-left is-pulled-left p-xs m-t-xs" >({{calendarNumber}})</span>
    </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({
    props:{
        calendarNumber:{
            type:Number,
            required:true
        }
    }
})
export default class NewActivity extends Vue {
    constructor(){
        super()
    }
    addNewActivity(){
        console.log("Coronao")
    }
}
</script>