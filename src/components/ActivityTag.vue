<template>
    <div>   
        <b-tag      
            :type="activityColor"
            attached
            closable
            @close="closeTag()"
            aria-close-label="Close tag">
            {{truncateText ? activityTitle.substring(0,15) + '... '+  '- ' +  activityTime : activityTitle +" - "+ activityTime}}
        </b-tag>   
    </div>
</template>
<script>
import {Component, Vue} from 'vue-property-decorator';
@Component({
    props:{
        activityTitle:{
            type:String,
            required:true
        },
        activityColor:{
            type:String,
            default:"is-warning"
        },
        truncateText:{
            type:Boolean,
            default:false
        },
        activityTime:{
            type:String,
            default:"All day"
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
        console.log("Close tag pressed");
            this.$buefy.toast.open({
            message: 'Something happened correctly!',
            type: 'is-success'
        })
    }
}
</script>