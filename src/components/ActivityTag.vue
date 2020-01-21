<template>
    <div class="field">   
        <b-tag      
            :type="activityColor"
            attached
            closable
            @close="closeTag()"
            aria-close-label="Close">
            {{truncateText ? activityTitle.substring(0,15) + '... '+  '- ' +  hourFormated  : activityTitle +" - "+ hourFormated }}
        
        </b-tag>   
    </div>
</template>
<script>
import {Component, Vue} from 'vue-property-decorator';
import moment from 'moment';
import {REMOVE_ACTIVITY} from "../Constants";

@Component({
    props:{
        activityTitle:{
            type:String,
            required:true
        },
        activityColor:{
            type:String,
            default:"is-primary"
        },
        truncateText:{
            type:Boolean,
            default:false
        },
        activityTime:{
            type: [String, Date],
            default:"All day"
        },
        activityId:{
            type:String,
            required:true
        },
        activityType:{
            type:String,
            default:"is-info",
            validator: function (value) {
                     return ['is-white', 'is-black', 
                     'is-light',' is-dark', 
                     'is-primary', 'is-info', 
                     'is-success',' is-warning', 'is-danger'].indexOf(value) !== -1
      }
        }
    }
})
export default class ActivityTag extends Vue  {
    constructor(){
        super()
    }

    closeTag(){
        this.$store.dispatch(REMOVE_ACTIVITY,this.activityId).then(()=>{
            this.$buefy.toast.open({    
                message: 'Activity deleted successfully',
                type: 'is-success'
            })
        })
    }

     get hourFormated(){
        return moment(this.activityTime).format("HH:mm");
    }
}
</script>
