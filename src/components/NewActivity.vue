<template>
    <div>   
        <span @click="addNewActivity()" class="has-text-link calendar-number has-text-left is-pulled-left p-xs m-t-xs" >({{calendarNumber}})</span>
        <b-modal :active="isComponentModalActive"
                    has-modal-card
                    trap-focus
                    aria-role="dialog"
                    aria-modal>
                    <div class="modal-card" style="width: auto">
                        <header class="modal-card-head">
                            <p class="modal-card-title">Add new Activity</p>
                        </header>
                        <section class="modal-card-body">
                            <b-field  label="Activty Name">
                                <b-input v-model="model.activityName"></b-input>
                            </b-field>
                                <b-field label="Select time">
                                <b-timepicker
                                    rounded
                                    placeholder="Click to select..."
                                    icon="clock"
                                    v-model="model.activityTime"
                                    hour-format="24">
                                </b-timepicker>
                            </b-field>
                        </section>
                        <footer class="modal-card-foot">
                        <button class="button" type="button" @click="isComponentModalActive = false">Close</button>
                        </footer>
                    </div>
            </b-modal>
    
    
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
    model = {
        dayId:"20208545",
        activityName:null,
        activityTime:null
    }
    isComponentModalActive = false

    addNewActivity(){
        this.isComponentModalActive = true
    }
}
</script>

<style >
    /* .height-fixed {
        height: 500px;
    } */
</style>