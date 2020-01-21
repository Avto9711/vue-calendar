<template>
  <div>
    <span
      @click="openModal()"
      :class="{
          'has-background-primary has-text-white':isCurrentDay,
          'has-text-grey-lighter':isDiffMonth
          }"
      class="calendar-number has-text-centered is-pulled-left p-xs m-t-xs"
    >{{calendarNumber}}</span>
    <b-modal
      :active.sync="isComponentModalActive"
      has-modal-card
      trap-focus
      aria-role="dialog"
      aria-modal
    >
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Add new Activity</p>
        </header>
        <section class="modal-card-body">
          <b-field label="Activity name">
            <b-input v-model="model.activityName"></b-input>
          </b-field>
          <b-field label="Select activity time">
            <b-timepicker
              rounded
              placeholder="Click to select..."
              icon="clock"
              v-model="model.activityTime"
              hour-format="24"
            ></b-timepicker>
          </b-field>
        </section>
        <footer class="modal-card-foot is-pulled-right">
          <b-button type="is-primary" @click="validate">Save</b-button>
          <button class="button" type="button" @click="isComponentModalActive = false">Close</button>
        </footer>
      </div>
    </b-modal>
  </div>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";
import { ADD_ACTIVITY } from "../Constants";
import Activity from "../Models/Activity";

@Component({
  props: {
    calendarNumber: {
      type: Number,
      required: true
    },
    dateId: {
      type: String,
      required: true
    },
    isDiffMonth: {
      type: Boolean,
      required: false
    }
  }
})
export default class NewActivity extends Vue {
  constructor() {
    super();
  }
  model = new Activity();
  isComponentModalActive = false;

  openModal() {
    this.isComponentModalActive = true;
  }
  validate() {
    if (this.model.isValid()) {
      this.addNewActivity();
    } else {
      this.$buefy.toast.open({
        message: "Please check required fields",
        type: "is-danger"
      });
    }
  }
  addNewActivity() {
    this.model.dateId = this.dateId;
    this.model.activityId = new Date().toGMTString();
    this.$store.dispatch(ADD_ACTIVITY, this.model).then(() => {
      this.model = new Activity();
      this.$buefy.toast.open({
        message: "Activity added successfully",
        type: "is-success"
      });
    });
  }
  get isCurrentDay() {
    return (
      new Date().toLocaleDateString() ===
      new Date(this.dateId).toLocaleDateString()
    );
  }
}
</script>

<style scoped >
.modal-card-body {
  overflow: initial;
}
.calendar-number {
  width: 45px;
  border-radius: 50%;
  font-size: 25px;
  color: #7957d5;
}
.calendar-number:hover {
  cursor: pointer;
  background-color: #e8e8e8;
}
</style>