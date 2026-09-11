import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.06 14C15.91 14.15 15.72 14.22 15.53 14.22C15.34 14.22 15.15 14.14 15 14L12 11L9 14C8.71 14.29 8.23 14.29 7.94 14C7.65 13.71 7.65 13.23 7.94 12.94L11.47 9.41C11.76 9.12 12.24 9.12 12.53 9.41L16.06 12.94C16.35 13.23 16.35 13.7 16.06 14Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M2 13.04V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M8.46997 13.4604L12 9.94043L15.53 13.4604","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"opacity":"0.4","d":"M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"}),React.createElement("path", {"d":"M15.53 14.2101C15.34 14.2101 15.15 14.1401 15 13.9901L12 10.9901L9 13.9901C8.71 14.2801 8.23 14.2801 7.94 13.9901C7.65 13.7001 7.65 13.2201 7.94 12.9301L11.47 9.40012C11.76 9.11012 12.24 9.11012 12.53 9.40012L16.06 12.9301C16.35 13.2201 16.35 13.7001 16.06 13.9901C15.91 14.1401 15.72 14.2101 15.53 14.2101Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M8.47021 13.4604L12.0002 9.94043L15.5302 13.4604","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"}),React.createElement("path", {"d":"M15.5299 14.2101C15.3399 14.2101 15.1499 14.1401 14.9999 13.9901L11.9999 10.9901L8.99991 13.9901C8.70991 14.2801 8.22991 14.2801 7.93991 13.9901C7.64991 13.7001 7.64991 13.2201 7.93991 12.9301L11.4699 9.40012C11.7599 9.11012 12.2399 9.11012 12.5299 9.40012L16.0599 12.9301C16.3499 13.2201 16.3499 13.7001 16.0599 13.9901C15.9099 14.1401 15.7199 14.2101 15.5299 14.2101Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"opacity":"0.4","d":"M8.46997 13.4604L12 9.94043L15.53 13.4604","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
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

var ArrowSquareUp = React.forwardRef(function(props, ref) {
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

ArrowSquareUp.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ArrowSquareUp.displayName = 'ArrowSquareUp';

export default ArrowSquareUp;
