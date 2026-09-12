import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M19.6299 7.24039C19.9299 7.71039 19.7699 8.34039 19.2899 8.63039L18.6999 8.98039L5.58991 16.8404C5.10991 17.1304 4.47991 16.9704 4.19991 16.4804C3.19991 14.7404 2.74991 12.6204 3.13991 10.4004C3.79991 6.63039 6.89991 3.63039 10.6899 3.09039C14.4399 2.56039 17.8299 4.36039 19.6299 7.24039Z"}),React.createElement("path", {"fill":"currentColor","d":"M20.8899 13.4298C20.2099 17.6798 16.4499 20.9298 12.1399 20.9998C10.2399 21.0298 8.47991 20.4798 7.01991 19.4898C6.39991 19.0798 6.41991 18.1598 7.05991 17.7798L19.4699 10.4898C20.1199 10.1098 20.9199 10.5498 20.9799 11.2998C21.0299 11.9998 20.9999 12.7098 20.8899 13.4298Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M5.25 6.04C3.85 7.63 3 9.72 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3C11.29 3 10.6 3.08 9.94 3.24","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M20.12 8.13L18.7 8.98L4.76 17.34C3.66 15.85 3 14 3 12C3 7.03 7.03 3 12 3C15.58 3 18.68 5.1 20.12 8.13Z"}),React.createElement("path", {"fill":"currentColor","opacity":"0.4","d":"M20.9999 11.9997C20.9999 16.9697 16.9699 20.9997 11.9999 20.9997C9.52992 20.9997 7.29992 20.0097 5.66992 18.3897L5.75992 18.3397L19.6999 9.97969L20.6299 9.42969C20.8699 10.2497 20.9999 11.1097 20.9999 11.9997Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M12 21.75C6.62 21.75 2.25 17.38 2.25 12C2.25 6.62 6.62 2.25 12 2.25C17.38 2.25 21.75 6.62 21.75 12C21.75 17.38 17.38 21.75 12 21.75ZM12 3.75C7.45 3.75 3.75 7.45 3.75 12C3.75 16.55 7.45 20.25 12 20.25C16.55 20.25 20.25 16.55 20.25 12C20.25 7.45 16.55 3.75 12 3.75Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
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

var Record = React.forwardRef(function(props, ref) {
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

Record.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Record.displayName = 'Record';

export default Record;
