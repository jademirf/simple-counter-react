import { shallow } from 'enzyme';
import App from './App';


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
    expect(wrapper.find('#increment-btn').text()).toBeTruthy()
  })
  test('render a button to decrement counter', () => {
    expect(wrapper.find('#decrement-btn').text()).toBeTruthy()
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