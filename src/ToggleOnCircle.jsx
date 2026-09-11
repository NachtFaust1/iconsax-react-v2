import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M13.86 3.85938H10.14C5.65 3.85938 2 7.50938 2 11.9994C2 16.4894 5.65 20.1394 10.14 20.1394H13.86C18.35 20.1394 22 16.4894 22 11.9994C22 7.50938 18.35 3.85938 13.86 3.85938ZM13.86 16.4194C11.42 16.4194 9.44 14.4394 9.44 11.9994C9.44 9.55938 11.42 7.57938 13.86 7.57938C16.3 7.57938 18.28 9.55938 18.28 11.9994C18.28 14.4394 16.3 16.4194 13.86 16.4194Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M14 20C18.42 20 22 16.42 22 12C22 7.58 18.42 4 14 4H10C5.58 4 2 7.58 2 12C2 16.08 5.05 19.44 8.99 19.94","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M14 8C11.79 8 10 9.79 10 12C10 14.21 11.79 16 14 16C16.21 16 18 14.21 18 12C18 11.52 17.91 11.05 17.76 10.62","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"opacity":"0.4","d":"M10.14 3.85938H13.86C18.35 3.85938 22 7.50938 22 11.9994C22 16.4894 18.35 20.1394 13.86 20.1394H10.14C5.65 20.1394 2 16.4894 2 11.9994C2 7.50938 5.65 3.85938 10.14 3.85938Z"}),React.createElement("path", {"d":"M13.8599 16.4201C16.301 16.4201 18.2799 14.4412 18.2799 12.0001C18.2799 9.55898 16.301 7.58008 13.8599 7.58008C11.4188 7.58008 9.43994 9.55898 9.43994 12.0001C9.43994 14.4412 11.4188 16.4201 13.8599 16.4201Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M10 4H14C18.42 4 22 7.58 22 12C22 16.42 18.42 20 14 20H10C5.58 20 2 16.42 2 12C2 7.58 5.58 4 10 4Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M14 16C16.2091 16 18 14.2091 18 12C18 9.79086 16.2091 8 14 8C11.7909 8 10 9.79086 10 12C10 14.2091 11.7909 16 14 16Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M14 20.75H10C5.17 20.75 1.25 16.82 1.25 12C1.25 7.18 5.17 3.25 10 3.25H14C18.83 3.25 22.75 7.18 22.75 12C22.75 16.82 18.83 20.75 14 20.75ZM10 4.75C6 4.75 2.75 8 2.75 12C2.75 16 6 19.25 10 19.25H14C18 19.25 21.25 16 21.25 12C21.25 8 18 4.75 14 4.75H10Z"}),React.createElement("path", {"d":"M14 16.75C11.38 16.75 9.25 14.62 9.25 12C9.25 9.38 11.38 7.25 14 7.25C16.62 7.25 18.75 9.38 18.75 12C18.75 14.62 16.62 16.75 14 16.75ZM14 8.75C12.21 8.75 10.75 10.21 10.75 12C10.75 13.79 12.21 15.25 14 15.25C15.79 15.25 17.25 13.79 17.25 12C17.25 10.21 15.79 8.75 14 8.75Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M10 4H14C18.42 4 22 7.58 22 12C22 16.42 18.42 20 14 20H10C5.58 20 2 16.42 2 12C2 7.58 5.58 4 10 4Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"opacity":"0.4","d":"M14 16C16.2091 16 18 14.2091 18 12C18 9.79086 16.2091 8 14 8C11.7909 8 10 9.79086 10 12C10 14.2091 11.7909 16 14 16Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
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

var ToggleOnCircle = React.forwardRef(function(props, ref) {
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

ToggleOnCircle.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ToggleOnCircle.displayName = 'ToggleOnCircle';

export default ToggleOnCircle;
