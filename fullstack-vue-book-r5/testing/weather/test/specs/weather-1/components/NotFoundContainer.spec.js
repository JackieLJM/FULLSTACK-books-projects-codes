import NotFoundContainer from '@/components/NotFoundContainer';
import { shallow } from 'vue-test-utils';

describe('NotFoundContainer.vue', () => {
  it('should display the appropriate not found message', () => {
    const wrapper = shallow(NotFoundContainer);
    expect(
      wrapper.html()
    ).to.contain(
     '<h1 class="subtitle is-size-3">Sorry, this route does not exist :(</h1>'
    );
  });
});
