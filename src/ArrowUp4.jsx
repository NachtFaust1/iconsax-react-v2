import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.53 12.03C15.38 12.18 15.19 12.25 15 12.25C14.81 12.25 14.62 12.18 14.47 12.03L12.75 10.31V15.5C12.75 15.91 12.41 16.25 12 16.25C11.59 16.25 11.25 15.91 11.25 15.5V10.31L9.53 12.03C9.24 12.32 8.76 12.32 8.47 12.03C8.18 11.74 8.18 11.26 8.47 10.97L11.47 7.97C11.76 7.68 12.24 7.68 12.53 7.97L15.53 10.97C15.82 11.26 15.82 11.74 15.53 12.03Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12 15.5V9.5","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M9 11.5L12 8.5L15 11.5","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","opacity":"0.4","d":"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"}),React.createElement("path", {"fill":"currentColor","d":"M15.53 10.9704L12.53 7.97043C12.24 7.68043 11.76 7.68043 11.47 7.97043L8.47 10.9704C8.18 11.2604 8.18 11.7404 8.47 12.0304C8.76 12.3204 9.24 12.3204 9.53 12.0304L11.25 10.3104V15.5004C11.25 15.9104 11.59 16.2504 12 16.2504C12.41 16.2504 12.75 15.9104 12.75 15.5004V10.3104L14.47 12.0304C14.62 12.1804 14.81 12.2504 15 12.2504C15.19 12.2504 15.38 12.1804 15.53 12.0304C15.82 11.7404 15.82 11.2604 15.53 10.9704Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M12 15.5V9.5","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M9 11.5L12 8.5L15 11.5","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M19.92 15.8001C19.73 15.8001 19.54 15.7301 19.39 15.5801L12.87 9.06008C12.39 8.58008 11.61 8.58008 11.13 9.06008L4.61002 15.5801C4.32002 15.8701 3.84002 15.8701 3.55002 15.5801C3.26002 15.2901 3.26002 14.8101 3.55002 14.5201L10.07 8.00008C11.13 6.94008 12.86 6.94008 13.93 8.00008L20.45 14.5201C20.74 14.8101 20.74 15.2901 20.45 15.5801C20.3 15.7201 20.11 15.8001 19.92 15.8001Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("g", {"opacity":"0.4"},React.createElement("path", {"d":"M12 15.5V9.5","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M9 11.5L12 8.5L15 11.5","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),));
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

var ArrowUp4 = React.forwardRef(function(props, ref) {
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

ArrowUp4.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ArrowUp4.displayName = 'ArrowUp4';

export default ArrowUp4;
