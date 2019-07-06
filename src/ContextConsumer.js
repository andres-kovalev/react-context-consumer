const React = require('react');

const { useContext } = React;

const ContextConsumer = ({ contexts, args = [], children: renderProp }) => renderProp(
    ...contexts.map(
        context => useContext(context)
    ),
    ...args
);

module.exports = ContextConsumer;
