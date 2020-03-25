[![ci](https://img.shields.io/circleci/build/github/andres-kovalev/react-context-consumer.svg?style=flat-square&logo=circleci)](https://circleci.com/gh/andres-kovalev/react-context-consumer)
[![codecov](https://img.shields.io/codecov/c/github/andres-kovalev/react-context-consumer.svg?style=flat-square&logo=codecov&token=1280f2cf41a24522add9857967be2a73)](https://codecov.io/gh/andres-kovalev/react-context-consumer)
[![downloads](https://img.shields.io/npm/dm/react-context-consumer.svg?style=flat-square&logo=data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDAwcHgiIGhlaWdodD0iNDAwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiCj48ZyBmaWxsPSJ3aGl0ZSI+PHBhdGggZD0iTTM3OSwxODAuNWgtMTAydi0xMDBoLTE1M3YxMDBoLTEwMmwxNzguNSwxNzguNWwxNzguNSwtMTc4LDUiLz48L2c+PC9zdmc+Cg==)](https://www.npmjs.com/package/react-context-consumer)
[![node](https://img.shields.io/node/v/react-context-consumer.svg?style=flat-square&logo=node.js&color=007ec6)](https://nodejs.org/)
[![npm](https://img.shields.io/npm/v/react-context-consumer.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/react-context-consumer)
[![MIT](https://img.shields.io/npm/l/react-context-consumer.svg?color=007ec6&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAA5ElEQVR4AY3SJWyDcRQE8G+MsnIg63XNmMm2ZuB9xjyv5tWYfAZ2TD6tGW9qzHCX3H9bX4rJz7y7K3t8NK20OT7ogHnYl3ndfK5nRwFYgxf4Nl6UBVzfjcoholIiEXbdsBS2TCERdks5HIaPVIfqDnN4HCO8gUm5iZEfc/gYI+gBT3pi5I8M3szxE0LgSYg303ljcGqOtAHFshEjP+VwOkbwCvXyGiOf5rASrkwQhhIJm4zdKg4zYBDe/z8j72Te0bu6GRxSIUzAHXxBF3jSpdudOoX2/5oDQVgEP3ji1y3Ijhv9ABp7euvVsybrAAAAAElFTkSuQmCC&style=flat-square)](https://github.com/andres-kovalev/react-context-consumer/blob/master/LICENSE)
[![npm bundle size](https://img.shields.io/bundlephobia/min/react-context-consumer.svg?style=flat-square&logo=data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDAwcHgiIGhlaWdodD0iNDAwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnIGZpbGw9IndoaXRlIj48cGF0aCBkPSJNNzUsMzBoMTc1bDEwMCwxMDB2MjQwaC0yNzV2LTI0MCIvPjwvZz48ZyBmaWxsPSIjREREIj48cGF0aCBkPSJNMjUwLDMwbDEwMCwxMDBoLTEwMHYtMTAwIi8+PC9nPjwvc3ZnPgo=)](https://www.npmjs.com/package/react-context-consumer)

# react-context-consumer

Small and lightweight context consumer for your class-components

[Demo](https://codesandbox.io/s/react-context-consumer-playground-ctnrq)

## Installation

As any other npm package `react-context-consumer` can be added to your project by following command:

```bash
npm i -S react-context-consumer
```

It requires any version of [react](https://www.npmjs.com/package/react) with new context API support as peer dependency, so it should be installed as well.

```bash
npm i -S react
```

## Overview

With new [Context API](https://reactjs.org/docs/context.html#api) to consume several contexts we need to put several context consumers in our component (one for each context):

```js
import React, { Component } from 'react';

class MyComponent extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <LocaleContext.Consumer>
                        {locale => (
                            <StorageContext.Consumer>
                                {storage => (
                                    // render component using theme, locale and storage
                                )}
                            </StorageContext.Consumer>
                        )}
                    </LocaleContext.Consumer>
                )}
            </ThemeContext.Consumer>
        );
    }
}
```

`react-context-consumer` helps to simplify `render()` function in such situations. Just pass several contexts into `contexts` prop and consume all of them at once:

```js
import React, { Component } from 'react';
import ContextConsumer from 'react-context-consumer';

class MyComponent extends Component {
    render() {
        return (
            <ContextConsumer contexts={[ ThemeContext, LocaleContext, StorageContext ]}>
                {(theme, locale, storage) => {
                    // render component using theme, locale and storage
                }}
            </ContextConsumer>
        );
    }
}
```

I guess, it looks nicer =)

### Additional arguments for renderProp function

Let's imagine we already have a component using react context consumers and custom render prop with additional arguments like this one:

```js
class CustomComponent extends React.Component {
    ...

    renderComponent(someValue) {
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <LocaleContext.Consumer>
                        {
                            locale => this.renderComponentWithContext(theme, locale, someValue)
                        }
                    </LocaleContext.Consumer>
                )}
            </ThemeContext.Consumer>
        )
    }

    renderComponentWithContext(theme, locale, someValue) {
        ...
    }
}
```

You can now just pass all needed additional arguments using `args` prop:

```js
class CustomComponent extends React.Component {
    ...

    renderComponent(someValue) {
        return (
            <ContextConsumer contexts={[ ThemeContext, LocaleContext ]} args={[ someValue ]}>
                {this.renderComponentWithContext}
            </ContextConsumer>
        )
    }

    ...
}
```
