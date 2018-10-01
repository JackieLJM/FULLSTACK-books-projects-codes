import App from '@/App';
import { shallow, createLocalVue } from 'vue-test-utils';
import Vuex from 'vuex';

describe('App.vue', () => {
  let wrapper;
  let store;
  let getters;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    getters = {
      loading: () => { return false }
    }

    store = new Vuex.Store({
      getters
    });

    wrapper = shallow(App, {
      localVue,
      store
    });
  });

  it("should display the current day's date", () => {
    const formattedDate = new Date().toDateString();
    expect(wrapper.html()).to.contain(formattedDate);
  });
});
