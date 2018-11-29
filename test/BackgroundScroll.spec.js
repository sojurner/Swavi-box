import { shallow } from 'vue-test-utils';
import BackgroundScroll from '@/components/BackgroundScroll/index.vue';
import expect from 'expect';

describe('BackgroundScroll', () => {
  it('defaults to a', () => {
    let wrapper = shallow(BackgroundScroll);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
