import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M15.2 7.16L7.19995 3.7V2.75C7.19995 2.34 6.85995 2 6.44995 2C6.03995 2 5.69995 2.34 5.69995 2.75V21.25C5.69995 21.66 6.03995 22 6.44995 22C6.85995 22 7.19995 21.66 7.19995 21.25V17.29L15.42 13.23C15.42 13.23 15.42 13.23 15.43 13.23C17.09 12.37 17.98 11.26 17.93 10.09C17.88 8.92 16.91 7.88 15.2 7.16Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M5.1499 2V22","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M16.3499 4C19.0499 4 19.6499 5.5 17.7499 7.4L16.5499 8.6C15.7499 9.4 15.7499 10.7 16.5499 11.4L17.7499 12.6C19.6499 14.5 18.9499 16 16.3499 16H5.1499","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M5.1499 4H11.9999","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M5.1499 22C4.7399 22 4.3999 21.66 4.3999 21.25V2.75C4.3999 2.34 4.7399 2 5.1499 2C5.5599 2 5.8999 2.34 5.8999 2.75V21.25C5.8999 21.66 5.5599 22 5.1499 22Z"}),React.createElement("path", {"opacity":"0.4","d":"M18.02 12.3294L16.8 11.1094C16.51 10.8594 16.34 10.4894 16.33 10.0794C16.31 9.62938 16.49 9.17938 16.82 8.84938L18.02 7.64937C19.06 6.60938 19.45 5.60938 19.12 4.81938C18.8 4.03938 17.81 3.60938 16.35 3.60938H5.15002C4.94002 3.61937 4.77002 3.78938 4.77002 3.99938V15.9994C4.77002 16.2094 4.94002 16.3794 5.15002 16.3794H16.35C17.79 16.3794 18.76 15.9394 19.09 15.1494C19.42 14.3494 19.04 13.3594 18.02 12.3294Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M5.15002 2V22","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M5.15002 4H16.35C19.05 4 19.65 5.5 17.75 7.4L16.55 8.6C15.75 9.4 15.75 10.7 16.55 11.4L17.75 12.6C19.65 14.5 18.95 16 16.35 16H5.15002","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M6.44995 22.75C6.03995 22.75 5.69995 22.41 5.69995 22V2C5.69995 1.59 6.03995 1.25 6.44995 1.25C6.85995 1.25 7.19995 1.59 7.19995 2V22C7.19995 22.41 6.85995 22.75 6.44995 22.75Z"}),React.createElement("path", {"d":"M6.95005 17.7504C6.67005 17.7504 6.41005 17.6004 6.28005 17.3304C6.10005 16.9604 6.25005 16.5104 6.62005 16.3304L14.92 12.2304C16.14 11.6004 16.83 10.8404 16.8 10.1304C16.77 9.44036 16.03 8.73036 14.76 8.19036L6.66005 4.69036C6.27005 4.52036 6.10005 4.08036 6.26005 3.70036C6.42005 3.32036 6.87005 3.14036 7.25005 3.31036L15.35 6.81036C17.85 7.87036 18.27 9.31036 18.3 10.0704C18.35 11.4004 17.39 12.6404 15.6 13.5604L7.29005 17.6704C7.18005 17.7304 7.06005 17.7504 6.95005 17.7504Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M5.1499 2V22","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"opacity":"0.34","d":"M5.1499 4H16.3499C19.0499 4 19.6499 5.5 17.7499 7.4L16.5499 8.6C15.7499 9.4 15.7499 10.7 16.5499 11.4L17.7499 12.6C19.6499 14.5 18.9499 16 16.3499 16H5.1499","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
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

var Flag = React.forwardRef(function(props, ref) {
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

Flag.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Flag.displayName = 'Flag';

export default Flag;
