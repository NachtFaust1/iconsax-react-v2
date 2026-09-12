import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM18 12.75H7.81L10.82 15.76C11.11 16.05 11.11 16.53 10.82 16.82C10.67 16.97 10.48 17.04 10.29 17.04C10.1 17.04 9.91 16.97 9.76 16.82L5.47 12.53C5.33 12.39 5.25 12.2 5.25 12C5.25 11.8 5.33 11.61 5.47 11.47L9.76 7.18C10.05 6.89 10.53 6.89 10.82 7.18C11.11 7.47 11.11 7.95 10.82 8.24L7.81 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M15.5 12H9.5","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M11.5 9L8.5 12L11.5 15","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","opacity":"0.4","d":"M7.81 2H16.18C19.83 2 22 4.17 22 7.81V16.18C22 19.82 19.83 21.99 16.19 21.99H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2Z"}),React.createElement("path", {"fill":"currentColor","d":"M5.47 11.4704L9.76 7.18039C10.05 6.89039 10.53 6.89039 10.82 7.18039C11.11 7.47039 11.11 7.95039 10.82 8.24039L7.81 11.2504H18C18.41 11.2504 18.75 11.5904 18.75 12.0004C18.75 12.4104 18.41 12.7504 18 12.7504H7.81L10.82 15.7604C11.11 16.0504 11.11 16.5304 10.82 16.8204C10.67 16.9704 10.48 17.0404 10.29 17.0404C10.1 17.0404 9.91 16.9704 9.76 16.8204L5.47 12.5304C5.33 12.3904 5.25 12.2004 5.25 12.0004C5.25 11.8004 5.33 11.6104 5.47 11.4704Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var chooseVariant = function(variant, color) {
  switch (variant) {
    case 'Bold':
      return React.createElement(Bold, { color: color });
    case 'Broken':
      return React.createElement(Broken, { color: color });
    case 'Bulk':
      return React.createElement(Bulk, { color: color });
    case 'TwoTone':
      return React.createElement(TwoTone, { color: color });
    default:
      return React.createElement(Bold, { color: color });
  }
};

var ArrowLeft4 = React.forwardRef(function(props, ref) {
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

ArrowLeft4.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ArrowLeft4.displayName = 'ArrowLeft4';

export default ArrowLeft4;
