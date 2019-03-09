const React = require('react');
const { mount } = require('enzyme');

const ContextConsumer = require('../src/ContextConsumer');

const Context1 = React.createContext();
const Context2 = React.createContext();

describe('ContextConsumer', () => {
    it('should call renderProp with all context values', () => {
        const value1 = { value: 1 };
        const value2 = { value: 2 };
        const renderProp = jest.fn();

        mount(
            <Context1.Provider value={ value1 }>
                <Context2.Provider value={ value2 }>
                    <ContextConsumer contexts={[ Context1, Context2 ]}>
                        { renderProp }
                    </ContextConsumer>
                </Context2.Provider>
            </Context1.Provider>
        );

        expect(renderProp).toHaveBeenCalledWith(value1, value2);
    });
});
