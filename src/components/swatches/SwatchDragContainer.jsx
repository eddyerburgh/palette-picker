// @flow

import React, { Component } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import Swatch from './Swatch';

type CardSourceProps = {
    index: string,
    id: string,
}

type Props = {
    connectDragSource: Function,
    connectDropTarget: Function,
    height: string,
    fontColor: string
}

const cardSource = {
  beginDrag(props: CardSourceProps) {
    return {
      index: props.index,
      id: props.id,
    };
  },
};

const cardTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if (dragIndex === hoverIndex) {
      return;
    }

    const hoverBoundingRect = component.swatchContainer.getBoundingClientRect();

    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 4;

    const clientOffset = monitor.getClientOffset();

    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    props.moveSwatch(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex; // eslint-disable-line no-param-reassign
  },
};

class SwatchDragContainer extends Component {
  props: Props;
  swatchContainer: Node;

  render() {
    return this.props.connectDragSource(this.props.connectDropTarget((
      <div
        ref={element => (this.swatchContainer = element)}
        className={`swatch hoverable swatch--${this.props.height} color-${this.props.fontColor}`}
      >
        <Swatch {...this.props} />
      </div>
        )));
  }
}

export default DragSource('swatch', cardSource, (connect, monitor) => ({ // eslint-disable-line new-cap
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))(
    DropTarget('swatch', cardTarget, connect => ({ // eslint-disable-line new-cap
      connectDropTarget: connect.dropTarget(),
    }))(SwatchDragContainer)
);

