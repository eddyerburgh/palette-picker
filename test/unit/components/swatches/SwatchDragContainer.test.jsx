import { mount } from 'enzyme';
import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import SwatchDragContainer from '../../../../src/components/swatches/SwatchDragContainer';

const wrapInTestContext = DecoratedComponent => DragDropContext(HTML5Backend)( // eslint-disable-line new-cap,max-len
        class extends Component { // eslint-disable-line react/prefer-stateless-function
          render() {
            return <DecoratedComponent {...this.props} />;
          }
        }
    );

const WrappedSwatchDragContainer = wrapInTestContext(SwatchDragContainer);

describe('<SwatchDragContainer />', () => {
  it('has className swatch--props.height', () => {
    const wrapper = mount(<WrappedSwatchDragContainer height="third" />);
    expect(wrapper.find('.swatch')).to.have.className('swatch--third');
  });

  it('renders div with class color-dark if props.fontColor is dark', () => {
    const wrapper = mount(<WrappedSwatchDragContainer fontColor="dark" />);
    expect(wrapper.find('.swatch').hasClass('color-dark')).to.equal(true);
  });

  it('renders div with class color-light if props.fontColor is light', () => {
    const wrapper = mount(<WrappedSwatchDragContainer fontColor="light" />);
    expect(wrapper.find('.swatch').hasClass('color-light')).to.equal(true);
  });
});
