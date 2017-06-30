import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';
import PropTypes from 'prop-types';
import React from 'react';


const iconStyle = {
  width: '100%',
  height: '100%',
};


export default class RefreshIndicator extends React.Component {
  static propTypes = {
    /**
     * An indicator on whether or not the indicator is busy.
     *
     * If true, a circular progress will be tendered, otherwise a refresh icon.
     */
    busy: PropTypes.bool.isRequired,
    /**
     * The diameter of the refresh indicator.
     */
    size: PropTypes.number.isRequired,
    /**
     * How much the refresh indicator has been pulled down.
     */
    drag: PropTypes.number.isRequired,
  };

  render() {
    const { busy, size, drag } = this.props;
    return (
      <Paper
        style={{
          position: 'relative',
          margin: `0 auto ${-size}px`,
          top: drag - size,
          width: size,
          height: size,
          zIndex: 1000000,
        }}
        circle
      >
        {busy ? (
          <CircularProgress
            size={size * 0.8}
            style={{
              margin: '0 auto',
              position: 'absolute',
              left: 0,
              right: 0,
              top: size * 0.1,
            }}
          />
        ) : (
          <NavigationRefresh style={{
            ...iconStyle,
            transition: null,
            transform: `rotate(${drag}deg)`,
          }}
          />
        )}
      </Paper>
    );
  }
}
