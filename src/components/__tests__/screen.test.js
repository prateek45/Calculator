import renderer from 'react-test-renderer';
import Screen from '../screen/screen';

const createNodeMock = el => {
    if (el.type === 'div') {
        const mockEl = document.createElement('div')
        mockEl.style.padding = '0'
        Object.defineProperty(mockEl, 'clientHeight', {
            get() {
                return 100
            },
            enumerable: true,
            configurable: true
        })
        Object.defineProperty(mockEl, 'clientWidth', {
            get() {
                return 300
            },
            enumerable: true,
            configurable: true
        })
        return mockEl
    }
    return null
}

test('Screen with particular value', () => {
    const component = renderer.create(
        <Screen value="53" />, { createNodeMock }
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Screen with particular value_2', () => {
    const component = renderer.create(
        <Screen value={5} />, { createNodeMock }
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});