import { shallowMount, mount,createLocalVue } from "@vue/test-utils";
import Buefy from "buefy";
import ActivityTag from "@/components/ActivityTag.vue";

// tslint:disable-next-line:typedef
const localVue = createLocalVue();
localVue.use(Buefy);



describe("Activity.Tag",function():void {
        it("Render the activity text and time",function ():void {
                const activityTitle:string = "Test Activity";
                // tslint:disable-next-line:typedef
                const wrapper = mount(ActivityTag,{
                    propsData:{
                        activityTitle:activityTitle,
                        activityTime: "2020-01-21T14:15:00.000Z",
                        activityId:"Tue, 21 Jan 2020 10:51:46 GMT"
                    },
                    localVue
                });
                console.log(wrapper.text());
                expect(wrapper.text()).toBe("Test Activity - 10:15");
        });
});

