import { mount } from 'vue-test-utils';
import ContentCard from '@/components/ContentCard';

describe('ContentCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ContentCard, {
      propsData: {
        content: { Name: 'anakin', Race: 'human', Ethnicity: 'Nordic' }
      }
    });
  });

  it('should matchSnapshot() to a', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the name of ContentCard', () => {
    expect(wrapper.name()).toBe('ContentCard');
  });
});
