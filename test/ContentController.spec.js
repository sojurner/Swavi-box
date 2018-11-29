import { shallow, mount } from 'vue-test-utils';
import ContentController from '@/components/ContentController';

describe('ContentController', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(ContentController, {
      propsData: {
        info: [{ name: 'Anakin', race: 'human', age: '22' }]
      }
    });
  });
  it('should matchSnapshot() to a', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match name of ContentController', () => {
    expect(wrapper.name()).toBe('ContentController');
  });

  it('should listen for toggleCard', () => {
    wrapper = mount(ContentController, {
      propsData: {
        info: [{ name: 'Anakin', race: 'human', age: '22' }]
      }
    });

    console.log(wrapper.vm);
  });
});
