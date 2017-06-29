import { range } from 'lodash';
import { AppBar, Card, CardText } from 'material-ui';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';

import PullToRefresh from '../../src/PullToRefresh';


function sleep() {
  return new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
}


export default function App() {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <div className="body">
        <AppBar title="Hello" />
        <PullToRefresh className="container" onRefresh={sleep} >
          {range(100).map(item => (
            <Card className="card" key={item}>
              <CardText>
                Item {item}
              </CardText>
            </Card>
            ))}
        </PullToRefresh>
      </div>
    </MuiThemeProvider>
  );
}
