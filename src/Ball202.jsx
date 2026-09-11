import React from 'react';

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M21 13C21 8.03 16.97 4 12 4C7.03 4 3 8.03 3 13C3 17.97 7.03 22 12 22C15.45 22 18.45 20.06 19.96 17.2","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M12 4V2","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M4.96094 7.54001C7.73094 9.32001 8.32094 14.96 12.0809 14.96C15.8409 14.96 16.4309 9.42001 19.1009 7.54001","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12 22C16.97 22 21 17.97 21 13C21 8.03 16.97 4 12 4C7.03 4 3 8.03 3 13C3 17.97 7.03 22 12 22Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"opacity":"0.4","d":"M12 4V2","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"opacity":"0.4","d":"M16 13C13.8 13 12 14.8 12 17C12 14.8 10.2 13 8 13C10.2 13 12 11.2 12 9C12 11.2 13.8 13 16 13Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var chooseVariant = function(variant, color) {
  switch (variant) {
    case 'Broken':
      return React.createElement(Broken, { color: color });
    case 'TwoTone':
      return React.createElement(TwoTone, { color: color });
    default:
      return React.createElement(Broken, { color: color });
  }
};

var Ball202 = React.forwardRef(function(props, ref) {
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

Ball202.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Ball202.displayName = 'Ball202';

export default Ball202;
