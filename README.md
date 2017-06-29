# material-ui-pull-to-refresh

[![Greenkeeper badge](https://badges.greenkeeper.io/appsemble/material-ui-pull-to-refresh.svg)](https://greenkeeper.io/)

> Pull to refresh for react based on material-ui.

[![Build Status](https://travis-ci.org/appsemble/material-ui-pull-to-refresh.svg?branch=master)](https://travis-ci.org/appsemble/material-ui-pull-to-refresh)


## Installation

Install `material-ui-pull-to-refresh`.

```sh
npm install material-ui-pull-to-refresh
```

Then install its peer dependencies, if you haven't already:

```sh
npm install react material-ui
```


## Usage

```js
import PullToRefresh from 'material-ui-pull-to-refresh';
import React from 'react';


export default function App({children, onRefresh}) {
  return (
    <PullToRefresh onRefresh={onRefresh}>
      {children}
    </PullToRefresh>
  );
}
```

For a fully functional demo, clone this project, run `npm install` and run `npm start`.


## `PullToRefresh`

A component that can be pulled in order to refresh content.

| prop               | type        | default | required           | description
| ------------------ | :---------: | :-----: | :----------------: | -----------
| **children**       | `ReactNode` | `null`  |                    | The child nodes to render inside the element.  **Note**: The refresh indicator will be prepended to the children.
| **dragMultiplier** | `Number`    | `0.75`  |                    | How much to move the refresh indicator down compared to how much the user drags down.
| **indicatorSize**  | `Number`    | `40`    |                    | The size of the drag indicator in pixels.
| **maxDrag**        | `Number`    | `350`   |                    | The maximum amount that the refresh indicator can be dragged down.
| **onRefresh**      | `Function`  |         | :heavy_check_mark: | A function to run when the indicator is pulled down and released.  The function may either be synchronous or return a promise.
| **style**          | `Shape`     | `{}`    |                    | Additional styling for the container element.  `overflowY` will be set by this component.
| **topOffset**      | `Number`    | `0`     |                    | The maximum offset which the user may have scrolled down.  If this is set to a positive integer, the pulling down of the refresh indicator will start before the user hits the top of the scrolled element.


## License

MIT
