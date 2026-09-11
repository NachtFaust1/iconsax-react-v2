import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M18.6801 13.9802L15.4701 10.7702L13.5101 8.80023C12.6801 7.97023 11.3301 7.97023 10.5001 8.80023L5.32007 13.9802C4.64007 14.6602 5.13007 15.8202 6.08007 15.8202H11.6901H17.9201C18.8801 15.8202 19.3601 14.6602 18.6801 13.9802Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M16.01 11.1496L13.4 8.52965C12.63 7.75965 11.37 7.75965 10.6 8.52965L4.08002 15.0496","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M19.92 15.0498L18.88 14.0098","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"opacity":"0.4","d":"M15.48 10.7702L11.69 15.8202H6.08C5.12 15.8202 4.64 14.6602 5.32 13.9802L10.5 8.80023C11.33 7.97023 12.68 7.97023 13.51 8.80023L15.48 10.7702Z"}),React.createElement("path", {"d":"M17.92 15.8195H11.69L15.48 10.7695L18.69 13.9795C19.36 14.6595 18.88 15.8195 17.92 15.8195Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M19.9201 15.0496L13.4001 8.52965C12.6301 7.75965 11.3701 7.75965 10.6001 8.52965L4.08008 15.0496","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"}),React.createElement("path", {"d":"M12 16.25C11.59 16.25 11.25 15.91 11.25 15.5V9.5C11.25 9.09 11.59 8.75 12 8.75C12.41 8.75 12.75 9.09 12.75 9.5V15.5C12.75 15.91 12.41 16.25 12 16.25Z"}),React.createElement("path", {"d":"M14.9999 12.2504C14.8099 12.2504 14.6199 12.1804 14.4699 12.0304L11.9999 9.56043L9.52994 12.0304C9.23994 12.3204 8.75994 12.3204 8.46994 12.0304C8.17994 11.7404 8.17994 11.2604 8.46994 10.9704L11.4699 7.97043C11.7599 7.68043 12.2399 7.68043 12.5299 7.97043L15.5299 10.9704C15.8199 11.2604 15.8199 11.7404 15.5299 12.0304C15.3799 12.1804 15.1899 12.2504 14.9999 12.2504Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M19.92 15.0496L13.4 8.52965C12.63 7.75965 11.37 7.75965 10.6 8.52965L4.08002 15.0496","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
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

var ArrowUp3 = React.forwardRef(function(props, ref) {
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

ArrowUp3.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ArrowUp3.displayName = 'ArrowUp3';

export default ArrowUp3;
