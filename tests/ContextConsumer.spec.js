const React = require('react');
const { mount } = require('enzyme');

const ContextConsumer = require('../src/ContextConsumer');

const Context1 = React.createContext();
const Context2 = React.createContext();
const value1 = { value: 1 };
const value2 = { value: 2 };

describe('ContextConsumer', () => {
    it('should call renderProp with all context values', () => {
        const renderProp = jest.fn(
            () => <div />
        );

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

    it('should call renderProp with additional args when provided', () => {
        const value3 = { value: 3 };
        const value4 = { value: 4 };
        const renderProp = jest.fn(
            () => <div />
        );

        mount(
            <Context1.Provider value={ value1 }>
                <Context2.Provider value={ value2 }>
                    <ContextConsumer contexts={[ Context1, Context2 ]} args={[ value3, value4 ]}>
                        { renderProp }
                    </ContextConsumer>
                </Context2.Provider>
            </Context1.Provider>
        );

        expect(renderProp).toHaveBeenCalledWith(value1, value2, value3, value4);
    });
});
