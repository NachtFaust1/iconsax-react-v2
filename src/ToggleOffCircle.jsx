import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M13.86 3.85938H10.14C5.65 3.85938 2 7.50938 2 11.9994C2 16.4894 5.65 20.1394 10.14 20.1394H13.86C18.35 20.1394 22 16.4894 22 11.9994C22 7.50938 18.35 3.85938 13.86 3.85938ZM10.14 16.4194C7.7 16.4194 5.72 14.4394 5.72 11.9994C5.72 9.55938 7.7 7.57938 10.14 7.57938C12.58 7.57938 14.56 9.55938 14.56 11.9994C14.56 14.4394 12.58 16.4194 10.14 16.4194Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M10 20C5.58 20 2 16.42 2 12C2 7.58 5.58 4 10 4H14C18.42 4 22 7.58 22 12C22 16.08 18.95 19.44 15.01 19.94","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M10 8C12.21 8 14 9.79 14 12C14 14.21 12.21 16 10 16C7.79 16 6 14.21 6 12C6 11.52 6.09 11.05 6.24 10.62","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","opacity":"0.4","d":"M13.86 3.85938H10.14C5.65 3.85938 2 7.50938 2 11.9994C2 16.4894 5.65 20.1394 10.14 20.1394H13.86C18.35 20.1394 22 16.4894 22 11.9994C22 7.50938 18.35 3.85938 13.86 3.85938Z"}),React.createElement("path", {"fill":"currentColor","d":"M10.1402 16.4201C12.5813 16.4201 14.5602 14.4412 14.5602 12.0001C14.5602 9.55898 12.5813 7.58008 10.1402 7.58008C7.69912 7.58008 5.72021 9.55898 5.72021 12.0001C5.72021 14.4412 7.69912 16.4201 10.1402 16.4201Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M10 4H14C18.42 4 22 7.58 22 12C22 16.42 18.42 20 14 20H10C5.58 20 2 16.42 2 12C2 7.58 5.58 4 10 4Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M10 16C12.2091 16 14 14.2091 14 12C14 9.79086 12.2091 8 10 8C7.79086 8 6 9.79086 6 12C6 14.2091 7.79086 16 10 16Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M14 20.75H10C5.17 20.75 1.25 16.82 1.25 12C1.25 7.18 5.17 3.25 10 3.25H14C18.83 3.25 22.75 7.18 22.75 12C22.75 16.82 18.83 20.75 14 20.75ZM10 4.75C6 4.75 2.75 8 2.75 12C2.75 16 6 19.25 10 19.25H14C18 19.25 21.25 16 21.25 12C21.25 8 18 4.75 14 4.75H10Z"}),React.createElement("path", {"fill":"currentColor","d":"M10 16.75C7.38 16.75 5.25 14.62 5.25 12C5.25 9.38 7.38 7.25 10 7.25C12.62 7.25 14.75 9.38 14.75 12C14.75 14.62 12.62 16.75 10 16.75ZM10 8.75C8.21 8.75 6.75 10.21 6.75 12C6.75 13.79 8.21 15.25 10 15.25C11.79 15.25 13.25 13.79 13.25 12C13.25 10.21 11.79 8.75 10 8.75Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M10 4H14C18.42 4 22 7.58 22 12C22 16.42 18.42 20 14 20H10C5.58 20 2 16.42 2 12C2 7.58 5.58 4 10 4Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"opacity":"0.4","d":"M10 16C12.2091 16 14 14.2091 14 12C14 9.79086 12.2091 8 10 8C7.79086 8 6 9.79086 6 12C6 14.2091 7.79086 16 10 16Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
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

var ToggleOffCircle = React.forwardRef(function(props, ref) {
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

ToggleOffCircle.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ToggleOffCircle.displayName = 'ToggleOffCircle';

export default ToggleOffCircle;
