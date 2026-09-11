import React from 'react';

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M22.0004 2L19.1104 4.89","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M11.1103 12.89C12.2203 14 14.1103 14 15.2203 12.89C16.3303 11.78 16.3303 9.88999 15.2203 8.77999C14.1103 7.66999 12.2203 7.66999 11.1103 8.77999C9.89031 9.99999 9.89031 11.78 11.1103 12.89Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M4.8902 19.11C6.5602 20.78 9.3302 20.78 11.0002 19.11C12.6702 17.44 12.6702 14.67 11.0002 13C9.3302 11.33 6.5602 11.33 4.8902 13C3.2202 14.67 3.2202 17.33 4.8902 19.11Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M4.92012 19.08C8.82012 22.98 15.1701 22.98 19.0701 19.08C22.9701 15.18 22.9701 8.83001 19.0701 4.93001C15.1701 1.03 8.82012 1.03 4.92012 4.93001C1.02012 8.83001 1.02012 15.18 4.92012 19.08Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var chooseVariant = function(variant, color) {
  switch (variant) {
    case 'Linear':
      return React.createElement(Linear, { color: color });
    default:
      return React.createElement(Linear, { color: color });
  }
};

var Ball182 = React.forwardRef(function(props, ref) {
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

Ball182.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Ball182.displayName = 'Ball182';

export default Ball182;
