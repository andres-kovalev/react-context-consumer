const React = require('react');

const { useContext } = React;

const ContextConsumer = ({ contexts, children: renderProp }) => renderProp(
    ...contexts.map(
        context => useContext(context)
    )
);

module.exports = ContextConsumer;
