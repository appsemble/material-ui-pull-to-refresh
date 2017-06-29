import PropTypes from 'prop-types';
import React from 'react';

import RefreshIndicator from './RefreshIndicator';


const initialState = {
  busy: false,
  touchStart: null,
  drag: 0,
  dragging: false,
};


/**
 * A component that can be pulled in order to refresh content.
 */
export default class PullToRefresh extends React.Component {
  static propTypes = {
    /**
     * The child nodes to render inside the element.
     *
     * **Note**: The refresh indicator will be prepended to the children.
     */
    children: PropTypes.node,
    /**
     * How much to move the refresh indicator down compared to how much the user drags down.
     */
    dragMultiplier: PropTypes.number,
    /**
     * The size of the drag indicator in pixels.
     */
    indicatorSize: PropTypes.number,
    /**
     * The maximum amount that the refresh indicator can be dragged down.
     */
    maxDrag: PropTypes.number,
    /**
     * A function to run when the indicator is pulled down and released.
     *
     * The function may either be synchronous or return a promise.
     */
    onRefresh: PropTypes.func.isRequired,
    /**
     * Additional styling for the container element.
     *
     * `overflowY` will be set by this component.
     */
    style: PropTypes.shape(),
    /**
     * The maximum offset which the user may have scrolled down.
     *
     * If this is set to a positive integer, the pulling down of the refresh indicator will start
     * before the user hits the top of the scrolled element.
     */
    topOffset: PropTypes.number,
  };

  static defaultProps = {
    children: null,
    dragMultiplier: 0.75,
    indicatorSize: 40,
    maxDrag: 350,
    style: {},
    topOffset: 0,
  };

  state = initialState;

  onTouchStart = (event) => {
    if (!this.state.busy && this.el.scrollTop <= this.props.topOffset) {
      this.setState({
        touchStart: event.touches[0],
      });
    }
  };

  onTouchMove = (event) => {
    if (!this.state.touchStart) {
      return;
    }
    const drag = Math.max(0, event.touches[0].clientY - this.state.touchStart.clientY);
    if (drag !== 0) {
      this.setState({
        drag: Math.min(drag, this.props.maxDrag),
        dragging: true,
      });
    } else if (!this.state.dragging) {
      this.reset();
    }
  };

  onTouchEnd = () => {
    const { maxDrag, onRefresh } = this.props;
    if (!this.state.busy) {
      if (this.state.drag >= maxDrag * 0.9) {
        this.setState({
          busy: true,
          drag: this.props.maxDrag / 2,
          touchStart: null,
        });
        Promise.resolve()
          .then(onRefresh)
          .then(this.reset, this.reset);
      } else {
        this.reset();
      }
    }
  };

  ref = (element) => {
    this.el = element;
  };

  reset = () => {
    this.setState(initialState);
  };

  render() {
    const {
      children,
      dragMultiplier,
      indicatorSize,
      maxDrag,
      onRefresh,
      style,
      topOffset,
      ...props
    } = this.props;
    return (
      <div
        {...props}
        ref={this.ref}
        style={{
          ...style,
          overflowY: this.state.dragging ? 'hidden' : 'scroll',
        }}
        onTouchStart={this.onTouchStart}
        onTouchMove={this.onTouchMove}
        onTouchEnd={this.onTouchEnd}
      >
        <RefreshIndicator
          busy={this.state.busy}
          size={indicatorSize}
          drag={this.state.drag * dragMultiplier}
        />
        {children}
      </div>
    );
  }
}
