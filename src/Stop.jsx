import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M20.36 7.78L4.54 17.28C3.93 17.65 3.11 17.28 3.03 16.57C3.01 16.38 3 16.19 3 16V8C3 5 5 3 8 3H16C19 3 20.23 4.54 20.81 6.65C20.93 7.09 20.74 7.55 20.36 7.78Z"}),React.createElement("path", {"d":"M20.9999 11.09V16C20.9999 19 18.9999 21 15.9999 21H7.99991C7.07991 21 6.20991 20.75 5.46991 20.31C4.82991 19.94 4.86991 19 5.49991 18.62L19.4799 10.23C20.1499 9.83001 20.9999 10.31 20.9999 11.09Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M3 9.3C3 4.8 4.8 3 9.3 3H14.7C19.2 3 21 4.8 21 9.3V14.7C21 19.2 19.2 21 14.7 21H9.3C4.8 21 3 19.2 3 14.7V13.99","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M20.9 7.66L20.12 8.13L19.63 8.43L18.7 8.98L4.76 17.34L4.67 17.39L4.14 17.71L3.53 18.08C3.17 17.19 3 16.07 3 14.7V9.3C3 4.8 4.8 3 9.3 3H14.7C18.61 3 20.48 4.36 20.9 7.66Z"}),React.createElement("path", {"opacity":"0.4","d":"M21 9.2002V14.7002C21 19.2002 19.2 21.0002 14.7 21.0002H9.29998C6.85998 21.0002 5.20998 20.4702 4.22998 19.2602L4.52998 19.0802L5.13998 18.7102L5.66998 18.3902L5.75998 18.3402L19.7 9.9802L20.63 9.4302L21 9.2002Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M9.3 21H14.7C19.2 21 21 19.2 21 14.7V9.3C21 4.8 19.2 3 14.7 3H9.3C4.8 3 3 4.8 3 9.3V14.7C3 19.2 4.8 21 9.3 21Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M14.7 21.75H9.3C4.36 21.75 2.25 19.64 2.25 14.7V9.3C2.25 4.36 4.36 2.25 9.3 2.25H14.7C19.64 2.25 21.75 4.36 21.75 9.3V14.7C21.75 19.64 19.64 21.75 14.7 21.75ZM9.3 3.75C5.2 3.75 3.75 5.2 3.75 9.3V14.7C3.75 18.8 5.2 20.25 9.3 20.25H14.7C18.8 20.25 20.25 18.8 20.25 14.7V9.3C20.25 5.2 18.8 3.75 14.7 3.75H9.3Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M9.3 21H14.7C19.2 21 21 19.2 21 14.7V9.3C21 4.8 19.2 3 14.7 3H9.3C4.8 3 3 4.8 3 9.3V14.7C3 19.2 4.8 21 9.3 21Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
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

var Stop = React.forwardRef(function(props, ref) {
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

Stop.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Stop.displayName = 'Stop';

export default Stop;
