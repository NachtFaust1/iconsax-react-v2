import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.06 11.27L12.53 14.8C12.38 14.95 12.19 15.02 12 15.02C11.81 15.02 11.62 14.95 11.47 14.8L7.94 11.27C7.65 10.98 7.65 10.5 7.94 10.21C8.23 9.92 8.71 9.92 9 10.21L12 13.21L15 10.21C15.29 9.92 15.77 9.92 16.06 10.21C16.35 10.5 16.35 10.97 16.06 11.27Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M4.87 4.99C3.09 6.79 2 9.27 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C11.31 2 10.64 2.07 9.98 2.2","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M8.46997 10.7402L12 14.2602L15.53 10.7402","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","opacity":"0.4","d":"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"}),React.createElement("path", {"fill":"currentColor","d":"M12 15.0099C11.81 15.0099 11.62 14.9399 11.47 14.7899L7.94 11.2599C7.65 10.9699 7.65 10.4899 7.94 10.1999C8.23 9.90992 8.71 9.90992 9 10.1999L12 13.1999L15 10.1999C15.29 9.90992 15.77 9.90992 16.06 10.1999C16.35 10.4899 16.35 10.9699 16.06 11.2599L12.53 14.7899C12.38 14.9399 12.19 15.0099 12 15.0099Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M8.47021 10.7402L12.0002 14.2602L15.5302 10.7402","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"}),React.createElement("path", {"fill":"currentColor","d":"M11.9999 15.0099C11.8099 15.0099 11.6199 14.9399 11.4699 14.7899L7.93991 11.2599C7.64991 10.9699 7.64991 10.4899 7.93991 10.1999C8.22991 9.90992 8.70991 9.90992 8.99991 10.1999L11.9999 13.1999L14.9999 10.1999C15.2899 9.90992 15.7699 9.90992 16.0599 10.1999C16.3499 10.4899 16.3499 10.9699 16.0599 11.2599L12.5299 14.7899C12.3799 14.9399 12.1899 15.0099 11.9999 15.0099Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"opacity":"0.4","d":"M8.46997 10.7402L12 14.2602L15.53 10.7402","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
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

var ArrowCircleDown = React.forwardRef(function(props, ref) {
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

ArrowCircleDown.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ArrowCircleDown.displayName = 'ArrowCircleDown';

export default ArrowCircleDown;
