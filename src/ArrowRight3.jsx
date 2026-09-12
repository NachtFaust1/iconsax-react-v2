import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM18.53 12.53L14.24 16.82C14.09 16.97 13.9 17.04 13.71 17.04C13.52 17.04 13.33 16.97 13.18 16.82C12.89 16.53 12.89 16.05 13.18 15.76L16.19 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H16.19L13.18 8.24C12.89 7.95 12.89 7.47 13.18 7.18C13.47 6.89 13.95 6.89 14.24 7.18L18.53 11.47C18.67 11.61 18.75 11.8 18.75 12C18.75 12.2 18.67 12.39 18.53 12.53Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M14.43 5.92969L20.5 11.9997L14.43 18.0697","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M11.01 12H20.33","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M3.5 12H6.97","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","opacity":"0.4","d":"M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"}),React.createElement("path", {"fill":"currentColor","d":"M18.53 11.4704L14.24 7.18039C13.95 6.89039 13.47 6.89039 13.18 7.18039C12.89 7.47039 12.89 7.95039 13.18 8.24039L16.19 11.2504H6C5.59 11.2504 5.25 11.5904 5.25 12.0004C5.25 12.4104 5.59 12.7504 6 12.7504H16.19L13.18 15.7604C12.89 16.0504 12.89 16.5304 13.18 16.8204C13.33 16.9704 13.52 17.0404 13.71 17.0404C13.9 17.0404 14.09 16.9704 14.24 16.8204L18.53 12.5304C18.67 12.3904 18.75 12.2004 18.75 12.0004C18.75 11.8004 18.67 11.6104 18.53 11.4704Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M14.4302 5.92969L20.5002 11.9997L14.4302 18.0697","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M3.5 12H20.33","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M14.4301 18.8201C14.2401 18.8201 14.0501 18.7501 13.9001 18.6001C13.6101 18.3101 13.6101 17.8301 13.9001 17.5401L19.4401 12.0001L13.9001 6.46012C13.6101 6.17012 13.6101 5.69012 13.9001 5.40012C14.1901 5.11012 14.6701 5.11012 14.9601 5.40012L21.0301 11.4701C21.3201 11.7601 21.3201 12.2401 21.0301 12.5301L14.9601 18.6001C14.8101 18.7501 14.6201 18.8201 14.4301 18.8201Z"}),React.createElement("path", {"fill":"currentColor","d":"M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M14.4301 5.92969L20.5001 11.9997L14.4301 18.0697","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"opacity":"0.4","d":"M3.5 12H20.33","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
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

var ArrowRight3 = React.forwardRef(function(props, ref) {
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

ArrowRight3.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ArrowRight3.displayName = 'ArrowRight3';

export default ArrowRight3;
