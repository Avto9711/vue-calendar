<template>
    <div>   
        <div  @click="isComponentModalActive = true" class="has-text-info see-more-text">See more activities</div>

        <b-modal :active="isComponentModalActive"
                 has-modal-card
                 trap-focus
                 aria-role="dialog"
                 aria-modal>
                 <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Activites</p>
                    </header>
                    <section class="modal-card-body">
                            <ActivityTag 
                            v-for="(activity,index) in activites" 
                            :key="index" 
                            class="m-t-xs" 
                            :activityId="activity.activityId"
                            activityColor="is-danger" 
                            :activityTime="activity.activityTime" 
                            :activityTitle="activity.activityName"></ActivityTag>

                            <!-- <ActivityTag class="m-t-xs" activityColor="is-danger" activityTime="10:AM" activityTitle="Birthday"></ActivityTag>
                            <ActivityTag class="m-t-xs" activityColor="is-danger" activityTime="10:AM" activityTitle="Birthday"></ActivityTag> -->
                    </section>
                    <footer class="modal-card-foot">
                      <button class="button" type="button" @click="closeModal()">Close</button>
                    </footer>
                </div>
        </b-modal>
    </div>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    components:{
        ActivityTag: ()=>import("./ActivityTag.vue")
    }
})
export default class ActivityDetail extends Vue  {
    @Prop() activites;
    isComponentModalActive = false
    constructor(){
        super()
    }

    closeModal(){
        this.isComponentModalActive = false
    }
}
</script>

<style scoped >
   .see-more-text{
       cursor: pointer;
   } 
</style>