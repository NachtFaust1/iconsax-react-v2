import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M19.5804 5.47C19.4304 5.28 19.2604 5.1 19.0804 4.92C18.9004 4.74 18.7204 4.57 18.5304 4.42C14.6004 1.04 8.64043 1.21 4.92043 4.92C1.03043 8.82 1.03043 15.18 4.92043 19.08C8.82043 22.97 15.1804 22.97 19.0804 19.08C22.7904 15.36 22.9604 9.4 19.5804 5.47ZM17.3304 10.9C16.4832 11.7555 15.1961 11.9749 14.1149 11.5528C14.006 11.5103 13.8164 11.7172 13.8725 11.8198C14.7662 13.4539 14.5255 15.5749 13.1504 16.95C11.4804 18.62 8.72043 18.62 7.05043 16.95C5.38043 15.17 5.38043 12.52 7.05043 10.85C8.39267 9.50776 10.4414 9.24423 12.0578 10.066C12.1628 10.1195 12.3818 9.90943 12.3386 9.79973C11.9341 8.77192 12.1881 7.57428 13.1004 6.67C14.2504 5.52 16.1904 5.52 17.3304 6.67C18.4804 7.81 18.4804 9.74999 17.3304 10.9Z"}),React.createElement("path", {"d":"M22.5303 2.53L19.6403 5.42C19.6403 5.42 19.6003 5.46 19.5803 5.47C19.4303 5.28 19.2603 5.1 19.0803 4.92C18.9003 4.74 18.7203 4.57 18.5303 4.42C18.5503 4.4 18.5603 4.38 18.5803 4.36L21.4703 1.47C21.7603 1.18 22.2403 1.18 22.5303 1.47C22.8203 1.76 22.8203 2.24 22.5303 2.53Z"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"opacity":"0.4","d":"M21 13C21 17.97 16.97 22 12 22C7.03 22 3 17.97 3 13C3 8.03 6.63 4.41 11.25 4.03C11.5 4.01 11.75 4 12 4C12.25 4 12.5 4.01 12.75 4.03C17.37 4.41 21 8.28 21 13Z"}),React.createElement("path", {"d":"M12.75 2V4.03C12.5 4.01 12.25 4 12 4C11.75 4 11.5 4.01 11.25 4.03V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2Z"}),React.createElement("path", {"d":"M12 12.52C13.52 12.52 14.75 11.29 14.75 9.77C14.75 8.25 13.52 7.02 12 7.02C10.48 7.02 9.25 8.25 9.25 9.77C9.25 11.29 10.48 12.52 12 12.52Z"}),React.createElement("path", {"d":"M12.0002 18.98C13.9802 18.98 15.5902 17.37 15.5902 15.39C15.5902 13.41 13.9802 11.8 12.0002 11.8C10.0202 11.8 8.41016 13.41 8.41016 15.39C8.41016 17.37 10.0202 18.98 12.0002 18.98Z"}),);
};

var chooseVariant = function(variant, color) {
  switch (variant) {
    case 'Bold':
      return React.createElement(Bold, { color: color });
    case 'Bulk':
      return React.createElement(Bulk, { color: color });
    default:
      return React.createElement(Bold, { color: color });
  }
};

var Ball6 = React.forwardRef(function(props, ref) {
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

Ball6.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Ball6.displayName = 'Ball6';

export default Ball6;
