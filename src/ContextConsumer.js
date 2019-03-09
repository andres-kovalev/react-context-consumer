const React = require('react');

const ContextConsumer = ({ contexts, children: renderProp }) => {
    const render = contexts.reduce(
        (reduced, { Consumer }) => (...args) => React.createElement(Consumer, {
            children: arg => reduced(arg, ...args)
        }), renderProp
    );

    return render();
};

module.exports = ContextConsumer;
