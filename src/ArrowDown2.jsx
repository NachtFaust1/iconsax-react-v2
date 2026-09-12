import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M17.92 8.17969H11.69H6.07999C5.11999 8.17969 4.63999 9.33969 5.31999 10.0197L10.5 15.1997C11.33 16.0297 12.68 16.0297 13.51 15.1997L15.48 13.2297L18.69 10.0197C19.36 9.33969 18.88 8.17969 17.92 8.17969Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M6.31017 11.22C4.66017 8.35 6.01017 6 9.33017 6H12.0002H14.6702C17.9802 6 19.3402 8.35 17.6802 11.22L16.3402 13.53L15.0002 15.84C13.3402 18.71 10.6302 18.71 8.97017 15.84","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","opacity":"0.4","d":"M15.48 13.2297L11.69 8.17969H6.08C5.12 8.17969 4.64 9.33969 5.32 10.0197L10.5 15.1997C11.33 16.0297 12.68 16.0297 13.51 15.1997L15.48 13.2297Z"}),React.createElement("path", {"fill":"currentColor","d":"M17.92 8.17969H11.69L15.48 13.2297L18.69 10.0197C19.36 9.33969 18.88 8.17969 17.92 8.17969Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12.0001 6H14.6701C17.9801 6 19.3401 8.35 17.6801 11.22L16.3401 13.53L15.0001 15.84C13.3401 18.71 10.6301 18.71 8.97005 15.84L7.63005 13.53L6.29005 11.22C4.66005 8.35 6.01005 6 9.33005 6H12.0001Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M12 18.75C10.58 18.75 9.28 17.85 8.34 16.22L5.67 11.59C4.72 9.96 4.6 8.39 5.31 7.16C6.02 5.93 7.45 5.25 9.33 5.25H14.67C16.55 5.25 17.98 5.93 18.69 7.16C19.4 8.39 19.27 9.97 18.33 11.6L15.66 16.23C14.72 17.85 13.42 18.75 12 18.75ZM9.33 6.75C8 6.75 7.04 7.16 6.61 7.91C6.17 8.66 6.3 9.7 6.96 10.84L9.63 15.47C10.29 16.62 11.13 17.25 11.99 17.25C12.85 17.25 13.69 16.62 14.35 15.47L17.02 10.84C17.68 9.69 17.81 8.65 17.38 7.9C16.95 7.15 15.98 6.74 14.66 6.74H9.33V6.75Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12.0001 6H14.6701C17.9801 6 19.3401 8.35 17.6801 11.22L16.3401 13.53L15.0001 15.84C13.3401 18.71 10.6301 18.71 8.97005 15.84L7.63005 13.53L6.29005 11.22C4.66005 8.35 6.01005 6 9.33005 6H12.0001Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
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

var ArrowDown2 = React.forwardRef(function(props, ref) {
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

ArrowDown2.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ArrowDown2.displayName = 'ArrowDown2';

export default ArrowDown2;
