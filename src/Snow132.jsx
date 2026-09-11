import React from 'react';

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12 22V14.78","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M12 9.22V2","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M21.9993 12H14.7793","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M9.22 12H2","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M10.0006 14L4.89062 19.11","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M19.1109 4.89001L16.3809 7.62001","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M14.7807 12C14.7807 12.78 14.4507 13.44 14.0007 14C13.4407 14.44 12.7807 14.78 12.0007 14.78C11.2207 14.78 10.5607 14.45 10.0007 14C9.4407 13.44 9.2207 12.78 9.2207 12C9.2207 11.22 9.5507 10.56 10.0007 10C10.5607 9.56 11.2207 9.22 12.0007 9.22C12.7807 9.22 13.4407 9.55 14.0007 10C14.4407 10.56 14.7807 11.22 14.7807 12Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M19.11 19.11L14 14","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M10.0006 10L4.89062 4.89001","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var chooseVariant = function(variant, color) {
  switch (variant) {
    case 'Broken':
      return React.createElement(Broken, { color: color });
    default:
      return React.createElement(Broken, { color: color });
  }
};

var Snow132 = React.forwardRef(function(props, ref) {
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

Snow132.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Snow132.displayName = 'Snow132';

export default Snow132;
