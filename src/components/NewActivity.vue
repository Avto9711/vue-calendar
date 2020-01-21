<template>
    <div>   
        <span @click="openModal()" class="has-text-link calendar-number has-text-left is-pulled-left p-xs m-t-xs" >({{calendarNumber}})</span>
        <b-modal :active="isComponentModalActive"
                    has-modal-card
                    trap-focus
                    aria-role="dialog"
                    aria-modal>
                    <div class="modal-card" >
                        <header class="modal-card-head">
                            <p class="modal-card-title">Add new Activity</p>
                        </header>
                        <section class="modal-card-body">
                            <b-field  label="Activity name">
                                <b-input v-model="model.activityName"></b-input>
                            </b-field>
                                <b-field label="Select activity time">
                                <b-timepicker
                                    rounded
                                    placeholder="Click to select..."
                                    icon="clock"
                                    v-model="model.activityTime"
                                    hour-format="24">
                                </b-timepicker>
                            </b-field>
                        </section>
                        <footer class="modal-card-foot is-pulled-right">
                        <button type="is-primary" class="button"  @click="addNewActivity">Save</button>
                        <button class="button" type="button" @click="isComponentModalActive = false">Close</button>
                        </footer>
                    </div>
            </b-modal>
    
    
    </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import {ADD_ACTIVITY} from "../Constants";
import Activity from "../Models/Activity";

@Component({
    props:{
        calendarNumber:{
            type:Number,
            required:true
        },
        dateId:{
            type:String,
            required:true
        }
    }
})
export default class NewActivity extends Vue {
    constructor(){
        super()
    }
    model = new Activity();
    isComponentModalActive = false

    openModal(){
        this.isComponentModalActive = true
    }

    addNewActivity(){
        this.model.dateId = this.dateId;
        this.model.activityId = new Date().toGMTString();
        this.$store.dispatch(ADD_ACTIVITY,this.model).then(()=>{
                this.model = new Activity();
                this.$buefy.toast.open({    
                message: 'Activity added successfully',
                type: 'is-success'
            })
        });
    }
}
</script>

<style scoped >
    .modal-card-body{
        overflow:initial;
    }
    /* .height-fixed {
        height: 500px;
    } */
</style>