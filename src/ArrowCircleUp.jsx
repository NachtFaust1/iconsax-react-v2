import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.06 13.79C15.91 13.94 15.72 14.01 15.53 14.01C15.34 14.01 15.15 13.94 15 13.79L12 10.79L9 13.79C8.71 14.08 8.23 14.08 7.94 13.79C7.65 13.5 7.65 13.02 7.94 12.73L11.47 9.2C11.76 8.91 12.24 8.91 12.53 9.2L16.06 12.73C16.35 13.03 16.35 13.5 16.06 13.79Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M4.87 4.99C3.09 6.79 2 9.27 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C11.31 2 10.64 2.07 9.98 2.2","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M8.47 13.2602L12 9.74023L15.53 13.2602","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"opacity":"0.4","d":"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"}),React.createElement("path", {"d":"M15.53 14.0099C15.34 14.0099 15.15 13.9399 15 13.7899L12 10.7899L9 13.7899C8.71 14.0799 8.23 14.0799 7.94 13.7899C7.65 13.4999 7.65 13.0199 7.94 12.7299L11.47 9.19992C11.76 8.90992 12.24 8.90992 12.53 9.19992L16.06 12.7299C16.35 13.0199 16.35 13.4999 16.06 13.7899C15.91 13.9399 15.72 14.0099 15.53 14.0099Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M8.47021 13.2602L12.0002 9.74023L15.5302 13.2602","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"}),React.createElement("path", {"d":"M15.5299 14.0099C15.3399 14.0099 15.1499 13.9399 14.9999 13.7899L11.9999 10.7899L8.99991 13.7899C8.70991 14.0799 8.22991 14.0799 7.93991 13.7899C7.64991 13.4999 7.64991 13.0199 7.93991 12.7299L11.4699 9.19992C11.7599 8.90992 12.2399 8.90992 12.5299 9.19992L16.0599 12.7299C16.3499 13.0199 16.3499 13.4999 16.0599 13.7899C15.9099 13.9399 15.7199 14.0099 15.5299 14.0099Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"opacity":"0.4","d":"M8.46997 13.2602L12 9.74023L15.53 13.2602","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var chooseVariant = function(variant, color) {
  switch (variant) {
    case 'Linear':
      return React.createElement(Linear, { color: color });
    case 'Bold':
      return React.createElement(Bold, { color: color });
    case 'Broken':
      return React.createElement(Broken, { color: color });
    case 'Bulk':
      return React.createElement(Bulk, { color: color });
    case 'Outline':
      return React.createElement(Outline, { color: color });
    case 'TwoTone':
      return React.createElement(TwoTone, { color: color });
    default:
      return React.createElement(Linear, { color: color });
  }
};

var ArrowCircleUp = React.forwardRef(function(props, ref) {
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

ArrowCircleUp.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ArrowCircleUp.displayName = 'ArrowCircleUp';

export default ArrowCircleUp;
