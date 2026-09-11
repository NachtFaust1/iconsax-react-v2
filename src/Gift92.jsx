import React from 'react';

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M9.78 4.22H4.22C2.99 4.22 2 5.21 2 6.44V19.77C2 21 2.99 21.99 4.22 21.99H9.78C11.01 21.99 12 21 12 19.77V6.44C12 5.21 11.01 4.22 9.78 4.22Z"}),React.createElement("path", {"d":"M6.99973 4.97C6.80973 4.97 6.61973 4.9 6.46973 4.75L4.24973 2.53C3.95973 2.24 3.95973 1.76 4.24973 1.47C4.53973 1.18 5.01973 1.18 5.30973 1.47L6.99973 3.16L8.68973 1.47C8.97973 1.18 9.45973 1.18 9.74973 1.47C10.0397 1.76 10.0397 2.24 9.74973 2.53L7.52973 4.75C7.37973 4.9 7.18973 4.97 6.99973 4.97Z"}),React.createElement("g", {"opacity":"0.4"},React.createElement("path", {"d":"M19.78 12H14.22C12.99 12 12 12.99 12 14.22V19.78C12 21.01 12.99 22 14.22 22H19.78C21.01 22 22 21.01 22 19.78V14.22C22 12.99 21.01 12 19.78 12Z"}),React.createElement("path", {"d":"M16.9997 12.75C16.8097 12.75 16.6197 12.68 16.4697 12.53L14.2497 10.31C13.9597 10.02 13.9597 9.54 14.2497 9.25C14.5397 8.96 15.0197 8.96 15.3097 9.25L16.9997 10.94L18.6897 9.25C18.9797 8.96 19.4597 8.96 19.7497 9.25C20.0397 9.54 20.0397 10.02 19.7497 10.31L17.5297 12.53C17.3797 12.68 17.1897 12.75 16.9997 12.75Z"}),));
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("g", {"opacity":"0.4"},React.createElement("path", {"d":"M2 14.33C2.67 13.55 3.67 13 4.78 13C6.78 13 8.34 14.56 8.34 16.56","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M8.43945 16.56C8.43945 14.56 9.99945 13 11.9995 13C13.9995 13 15.5595 14.56 15.5595 16.56","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M15.5605 16.56C15.5605 14.56 17.1205 13 19.1205 13C20.2305 13 21.2305 13.56 21.9005 14.33","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M18 22H6C3.8 22 2 20.2 2 18V11.56C2 9.36 3.8 7.56 6 7.56H18C20.2 7.56 22 9.36 22 11.56V18C22 20.2 20.2 22 18 22Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M12.0095 6.26C12.0095 3.91 13.6395 2 15.6595 2C16.5195 2 17.2295 2.7 17.2295 3.57C17.2295 5.46 14.8895 7 11.9995 7C9.10953 7 6.76953 5.46 6.76953 3.57C6.76953 2.71 7.46953 2 8.34953 2C10.3695 2 11.9995 3.91 11.9995 6.26","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),));
};

var chooseVariant = function(variant, color) {
  switch (variant) {
    case 'Bulk':
      return React.createElement(Bulk, { color: color });
    case 'TwoTone':
      return React.createElement(TwoTone, { color: color });
    default:
      return React.createElement(Bulk, { color: color });
  }
};

var Gift92 = React.forwardRef(function(props, ref) {
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

Gift92.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Gift92.displayName = 'Gift92';

export default Gift92;
