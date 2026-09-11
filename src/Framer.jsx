import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M4.5 10.4901V16.4301C4.5 16.7401 4.64 17.0401 4.87 17.2401L10.23 21.83C10.93 22.43 12 21.9301 12 21.0201V16.9201H16.91C17.86 16.9201 18.34 15.7701 17.67 15.0901L12 9.42008H5.57001C4.98001 9.41008 4.5 9.89005 4.5 10.4901Z"}),React.createElement("path", {"d":"M18.43 1.91016H7.09004C6.14004 1.91016 5.66003 3.06014 6.33003 3.74014L12 9.41016H18.43C19.02 9.41016 19.5 8.93015 19.5 8.34015V2.98016C19.5 2.39016 19.02 1.91016 18.43 1.91016Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M5 10.52V9H19V2H5L19 16H5V15.22","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M12 16V22L5 16H12Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M4.5 10.4901V16.4301C4.5 16.7401 4.64 17.0401 4.87 17.2401L10.23 21.8301C10.93 22.4301 12 21.9301 12 21.0201V16.9201H16.91C17.86 16.9201 18.34 15.7701 17.67 15.0901L12 9.42008H5.57001C4.98001 9.41008 4.5 9.89008 4.5 10.4901Z"}),React.createElement("path", {"opacity":"0.4","d":"M18.4298 1.91016H7.0898C6.1398 1.91016 5.65979 3.06016 6.32979 3.74016L11.9998 9.41016H18.4298C19.0198 9.41016 19.4998 8.93015 19.4998 8.34015V2.98015C19.4998 2.39015 19.0198 1.91016 18.4298 1.91016Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M5 2L19 16H5V9H19V2H5Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M12 16V22L5 16H12Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M19 16.75H5C4.59 16.75 4.25 16.41 4.25 16V9C4.25 8.59 4.59 8.25 5 8.25H10.19L4.47 2.53C4.26 2.32 4.19 1.98999 4.31 1.70999C4.43 1.42999 4.7 1.25 5 1.25H19C19.41 1.25 19.75 1.59 19.75 2V9C19.75 9.41 19.41 9.75 19 9.75H13.81L19.53 15.47C19.74 15.68 19.81 16.01 19.69 16.29C19.57 16.57 19.3 16.75 19 16.75ZM5.75 15.25H17.19L11.69 9.75H5.75V15.25ZM12.31 8.25H18.25V2.75H6.81L12.31 8.25Z"}),React.createElement("path", {"d":"M11.9999 22.75C11.8199 22.75 11.6499 22.69 11.5099 22.57L4.50991 16.57C4.26991 16.37 4.18991 16.03 4.28991 15.74C4.39991 15.45 4.67989 15.25 4.98989 15.25H11.9899C12.3999 15.25 12.7399 15.59 12.7399 16V22C12.7399 22.29 12.5699 22.56 12.2999 22.68C12.2099 22.73 12.1099 22.75 11.9999 22.75ZM7.0299 16.75L11.2499 20.37V16.75H7.0299Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M5 2L19 16H5V9H19V2H5Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"opacity":"0.4","d":"M12 16V22L5 16H12Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
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

var Framer = React.forwardRef(function(props, ref) {
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

Framer.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Framer.displayName = 'Framer';

export default Framer;
