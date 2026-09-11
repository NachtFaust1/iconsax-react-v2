import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M9.32993 6H14.6699C17.9899 6 19.3399 8.35 17.6899 11.22L16.9499 12.5C16.7699 12.81 16.4399 13 16.0799 13H7.91993C7.55993 13 7.22993 12.81 7.04993 12.5L6.30992 11.22C4.65992 8.35 6.00993 6 9.32993 6Z"}),React.createElement("path", {"d":"M8.79006 14H15.2201C15.6101 14 15.8501 14.42 15.6501 14.75L15.0101 15.85C13.3601 18.72 10.6401 18.72 8.99006 15.85L8.35006 14.75C8.16006 14.42 8.40006 14 8.79006 14Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M16.01 12.8502L13.39 15.4702C12.62 16.2402 11.36 16.2402 10.59 15.4702L4.08002 8.9502","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M19.92 8.9502L18.88 9.9902","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M9.33 6H14.67C17.99 6 19.34 8.35 17.69 11.22L16.95 12.5C16.77 12.81 16.44 13 16.08 13H7.92C7.56 13 7.23 12.81 7.05 12.5L6.31 11.22C4.66 8.35 6.01 6 9.33 6Z"}),React.createElement("path", {"opacity":"0.4","d":"M8.79 14H15.22C15.61 14 15.85 14.42 15.65 14.75L15.01 15.85C13.36 18.72 10.64 18.72 8.99 15.85L8.35 14.75C8.16 14.42 8.4 14 8.79 14Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12 16.7996C11.3 16.7996 10.6 16.5296 10.07 15.9996L3.55002 9.47965C3.26002 9.18965 3.26002 8.70965 3.55002 8.41965C3.84002 8.12965 4.32002 8.12965 4.61002 8.41965L11.13 14.9396C11.61 15.4196 12.39 15.4196 12.87 14.9396L19.39 8.41965C19.68 8.12965 20.16 8.12965 20.45 8.41965C20.74 8.70965 20.74 9.18965 20.45 9.47965L13.93 15.9996C13.4 16.5296 12.7 16.7996 12 16.7996Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M19.92 8.9502L13.4 15.4702C12.63 16.2402 11.37 16.2402 10.6 15.4702L4.07996 8.9502","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
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

var ArrowDown4 = React.forwardRef(function(props, ref) {
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

ArrowDown4.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ArrowDown4.displayName = 'ArrowDown4';

export default ArrowDown4;
