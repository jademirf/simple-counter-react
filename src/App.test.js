import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';


configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
})

describe('Counter page structure', () => {
  test('render a header element', () => {
    expect(wrapper.find('header')).toBeTruthy()
  })
  test('renders the title of counter', () => {
    expect(wrapper.find('h1').text()).toMatch(/Counter app/i)
  });
  test('renders the counter inital value', () => {
    expect(wrapper.find('#counter-value').text()).toBe('0')
  })
})

describe('counter click button tests', () => {
  test('render a button to increment counter', () => {
    expect(wrapper.find('#increment-btn').text()).toBe('+1')
  })
  test('render a button to decrement counter', () => {
    expect(wrapper.find('#decrement-btn').text()).toBe('-1')
  })
  test('render click event to increment button', () => {
    wrapper.find('#increment-btn').simulate('click')
    expect(wrapper.find('#counter-value').text()).toBe("1")
  })
  test('render click event to decrement button', () => {
    const initialValue = wrapper.find('#counter-value').text()
    wrapper.find('#decrement-btn').simulate('click')
    expect(wrapper.find('#counter-value').text()).toBe((initialValue-1).toString())
  })
})