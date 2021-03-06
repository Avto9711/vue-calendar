import Vue from "vue";
import Vuex from "vuex";
import {ADD_ACTIVITY, REMOVE_ACTIVITY} from "../Constants";
import Activity from "../Models/Activity";

Vue.use(Vuex);
interface IState {
  activities:Activity[];
}

export default new Vuex.Store({
  state: {
    activities: localStorage.getItem("activities") ? JSON.parse(localStorage.getItem("activities") as string) : []
  } as IState,
  mutations: {
    [ADD_ACTIVITY](state:IState, activity:Activity):void {
        state.activities.push(activity);
        let activities:string = JSON.stringify(state.activities);
        localStorage.setItem("activities",activities);
    },
    [REMOVE_ACTIVITY](state:IState, activityId:number|null):void {
      let index:number = state.activities.findIndex(x=>x.activityId ===  activityId);
      state.activities.splice(index,1);
      let activities:string = JSON.stringify(state.activities);
      localStorage.setItem("activities",activities);
  }
  },
  actions: {
    [ADD_ACTIVITY]({commit}:any, activity:Activity):Promise<any> {
      return new Promise((resolve)=> {
        commit(ADD_ACTIVITY,activity);
        resolve();
      });
    },
    [REMOVE_ACTIVITY]({commit}:any, activityId:number):Promise<any> {
       return new Promise((resolve)=> {
            commit(REMOVE_ACTIVITY,activityId);
            resolve();
       });
    }
  },
  modules: {
  }
});
