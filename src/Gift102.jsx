import React from 'react';

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M9.78 4.22H4.22C3 4.22 2 5.22 2 6.44V19.77C2 20.99 3 21.99 4.22 21.99H9.78C11 21.99 12 20.99 12 19.77V6.44C12 5.22 11 4.22 9.78 4.22Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M4.7793 2L6.9993 4.22L9.2193 2","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M7 22V4.22","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("g", {"opacity":"0.4"},React.createElement("path", {"d":"M19.78 4.22H14.22C13 4.22 12 5.22 12 6.44V19.77C12 20.99 13 21.99 14.22 21.99H19.78C21 21.99 22 20.99 22 19.77V6.44C22 5.22 21 4.22 19.78 4.22Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M14.7793 2L16.9993 4.22L19.2193 2","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M17 22V4.22","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),));
};

var chooseVariant = function(variant, color) {
  switch (variant) {
    case 'TwoTone':
      return React.createElement(TwoTone, { color: color });
    default:
      return React.createElement(TwoTone, { color: color });
  }
};

var Gift102 = React.forwardRef(function(props, ref) {
  var variant = props.variant,
      color = props.color,
      size = props.size,
      rest = Object.assign({}, props);
  delete rest.variant;
  delete rest.color;
  delete rest.size;

  return React.createElement("svg", Object.assign({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref: ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant(variant, color));
});

Gift102.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Gift102.displayName = 'Gift102';

export default Gift102;
