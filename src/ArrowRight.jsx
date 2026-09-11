import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M15.1999 10.4899L13.2299 8.51993L10.0199 5.30993C9.33993 4.63993 8.17993 5.11993 8.17993 6.07993V12.3099V17.9199C8.17993 18.8799 9.33993 19.3599 10.0199 18.6799L15.1999 13.4999C16.0299 12.6799 16.0299 11.3199 15.1999 10.4899Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12.9 7.94043L15.52 10.5604C16.29 11.3304 16.29 12.5904 15.52 13.3604L9 19.8704","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M9 4.04004L10.04 5.08004","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M6 9.33017V14.6702C6 17.9902 8.35 19.3402 11.22 17.6902L12.5 16.9502C12.81 16.7702 13 16.4402 13 16.0802V7.92017C13 7.56017 12.81 7.23017 12.5 7.05017L11.22 6.31017C8.35 4.66017 6 6.01017 6 9.33017Z"}),React.createElement("path", {"opacity":"0.4","d":"M14 8.78957V15.2196C14 15.6096 14.42 15.8496 14.75 15.6496L15.85 15.0096C18.72 13.3596 18.72 10.6396 15.85 8.98957L14.75 8.34957C14.42 8.15957 14 8.39957 14 8.78957Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M6 11.9997V9.32968C6 6.01968 8.35 4.65968 11.22 6.31968L13.53 7.65968L15.84 8.99968C18.71 10.6597 18.71 13.3697 15.84 15.0297L13.53 16.3697L11.22 17.7097C8.35 19.3397 6 17.9897 6 14.6697V11.9997Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M8.9 19.1498C8.27 19.1498 7.68 18.9998 7.16 18.6998C5.93 17.9898 5.25 16.5598 5.25 14.6798V9.3298C5.25 7.4498 5.93 6.0198 7.16 5.3098C8.39 4.5998 9.96 4.7298 11.6 5.6698L16.23 8.3398C17.86 9.2798 18.76 10.5798 18.76 11.9998C18.76 13.4198 17.86 14.7198 16.23 15.6598L11.6 18.3298C10.66 18.8798 9.74 19.1498 8.9 19.1498ZM8.9 6.3598C8.53 6.3598 8.19 6.4398 7.9 6.6098C7.16 7.0398 6.75 7.9998 6.75 9.3298V14.6698C6.75 15.9898 7.16 16.9598 7.91 17.3898C8.66 17.8198 9.7 17.6898 10.85 17.0298L15.48 14.3598C16.63 13.6998 17.26 12.8598 17.26 11.9998C17.26 11.1398 16.63 10.2998 15.48 9.6398L10.85 6.9698C10.14 6.5598 9.48 6.3598 8.9 6.3598Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M6 11.9997V9.32968C6 6.01968 8.35 4.65968 11.22 6.31968L13.53 7.65968L15.84 8.99968C18.71 10.6597 18.71 13.3697 15.84 15.0297L13.53 16.3697L11.22 17.7097C8.35 19.3397 6 17.9897 6 14.6697V11.9997Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
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

var ArrowRight = React.forwardRef(function(props, ref) {
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

ArrowRight.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ArrowRight.displayName = 'ArrowRight';

export default ArrowRight;
