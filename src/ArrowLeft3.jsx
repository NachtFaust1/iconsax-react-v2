import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M18 9.33017V14.6702C18 17.9902 15.65 19.3402 12.78 17.6902L11.5 16.9502C11.19 16.7702 11 16.4402 11 16.0802V7.92017C11 7.56017 11.19 7.23017 11.5 7.05017L12.78 6.31017C15.65 4.66017 18 6.01017 18 9.33017Z"}),React.createElement("path", {"fill":"currentColor","d":"M10.0001 8.78957V15.2196C10.0001 15.6096 9.58006 15.8496 9.25006 15.6496L8.15006 15.0096C5.28006 13.3596 5.28006 10.6396 8.15006 8.98957L9.25006 8.34957C9.58006 8.15957 10.0001 8.39957 10.0001 8.78957Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M11.19 7.94043L8.56999 10.5604C7.79999 11.3304 7.79999 12.5904 8.56999 13.3604L15.09 19.8804","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M15.09 4.04004L14.05 5.08004","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M18 9.33017V14.6702C18 17.9902 15.65 19.3402 12.78 17.6902L11.5 16.9502C11.19 16.7702 11 16.4402 11 16.0802V7.92017C11 7.56017 11.19 7.23017 11.5 7.05017L12.78 6.31017C15.65 4.66017 18 6.01017 18 9.33017Z"}),React.createElement("path", {"fill":"currentColor","opacity":"0.4","d":"M10 8.78957V15.2196C10 15.6096 9.58 15.8496 9.25 15.6496L8.15 15.0096C5.28 13.3596 5.28 10.6396 8.15 8.98957L9.25 8.34957C9.58 8.15957 10 8.39957 10 8.78957Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"}),React.createElement("path", {"fill":"currentColor","d":"M15.5 12.75H9.5C9.09 12.75 8.75 12.41 8.75 12C8.75 11.59 9.09 11.25 9.5 11.25H15.5C15.91 11.25 16.25 11.59 16.25 12C16.25 12.41 15.91 12.75 15.5 12.75Z"}),React.createElement("path", {"fill":"currentColor","d":"M11.4999 15.7504C11.3099 15.7504 11.1199 15.6804 10.9699 15.5304L7.96994 12.5304C7.67994 12.2404 7.67994 11.7604 7.96994 11.4704L10.9699 8.47043C11.2599 8.18043 11.7399 8.18043 12.0299 8.47043C12.3199 8.76043 12.3199 9.24043 12.0299 9.53043L9.55994 12.0004L12.0299 14.4704C12.3199 14.7604 12.3199 15.2404 12.0299 15.5304C11.8799 15.6804 11.6899 15.7504 11.4999 15.7504Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("g", {"opacity":"0.4"},React.createElement("path", {"d":"M15.5 12H9.5","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M11.5 9L8.5 12L11.5 15","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),));
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

var ArrowLeft3 = React.forwardRef(function(props, ref) {
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

ArrowLeft3.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ArrowLeft3.displayName = 'ArrowLeft3';

export default ArrowLeft3;
