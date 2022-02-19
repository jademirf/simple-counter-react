import { shallow } from 'enzyme';
import Button from './';


let wrapper;

beforeEach(() => {
  wrapper = shallow(<Button />);
})

describe('Button dumb component tests', () => {
  test('render a button element', () => {
    expect(wrapper.find('button')).toBeTruthy()
  })
  test('button should have a click event', () => {})
  test('button should receive a id', () => {
    expect(wrapper.props()).toHaveProperty('id')
  })
  test('button should receive a onClick', () => {
    expect(wrapper.props()).toHaveProperty('onClick')
  })
  test('button should receive a children', () => {
    expect(wrapper.props()).toHaveProperty('children')
  })
})