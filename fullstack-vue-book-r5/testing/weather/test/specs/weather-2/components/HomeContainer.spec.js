import HomeContainer from '@/components/HomeContainer';
import {shallow} from 'vue-test-utils';

describe('HomeContainer.vue', () => {
  it('should display the appropriate index message', () => {
    const wrapper = shallow(HomeContainer);
    expect(
      wrapper.html()
    ).to.contain(
     '<h1 class="subtitle is-size-3">Pick a city below to see the weather!</h1>'
    );
  });
});
