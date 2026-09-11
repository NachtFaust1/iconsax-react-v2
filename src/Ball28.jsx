import React from 'react';

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M22.0004 2L19.1104 4.89","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M15.1103 15.11C13.3303 13.33 10.5503 13.33 8.78027 15.11C10.5603 13.33 10.5603 10.55 8.78027 8.78C10.5603 10.56 13.3403 10.56 15.1103 8.78C13.4403 10.56 13.4403 13.45 15.1103 15.11Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M4.92012 19.08C8.82012 22.98 15.1701 22.98 19.0701 19.08C22.9701 15.18 22.9701 8.83001 19.0701 4.93001C15.1701 1.03 8.82012 1.03 4.92012 4.93001C1.02012 8.83001 1.02012 15.18 4.92012 19.08Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var chooseVariant = function(variant, color) {
  switch (variant) {
    case 'Linear':
      return React.createElement(Linear, { color: color });
    default:
      return React.createElement(Linear, { color: color });
  }
};

var Ball28 = React.forwardRef(function(props, ref) {
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

Ball28.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Ball28.displayName = 'Ball28';

export default Ball28;
