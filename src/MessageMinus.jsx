import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2ZM15.5 12.75H8.5C8.09 12.75 7.75 12.41 7.75 12C7.75 11.59 8.09 11.25 8.5 11.25H15.5C15.91 11.25 16.25 11.59 16.25 12C16.25 12.41 15.91 12.75 15.5 12.75Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M22 8C22 4 20 2 16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V12","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M14.5 12H15.5","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M8.5 12H12","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","opacity":"0.4","d":"M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z"}),React.createElement("path", {"fill":"currentColor","d":"M15.5 11.25H8.5C8.09 11.25 7.75 11.59 7.75 12C7.75 12.41 8.09 12.75 8.5 12.75H15.5C15.91 12.75 16.25 12.41 16.25 12C16.25 11.59 15.91 11.25 15.5 11.25Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M8.5 12H15.5","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M16 22.75H3C2.04 22.75 1.25 21.96 1.25 21V8C1.25 3.58 3.58 1.25 8 1.25H16C20.42 1.25 22.75 3.58 22.75 8V16C22.75 20.42 20.42 22.75 16 22.75ZM8 2.75C4.42 2.75 2.75 4.42 2.75 8V21C2.75 21.14 2.86 21.25 3 21.25H16C19.58 21.25 21.25 19.58 21.25 16V8C21.25 4.42 19.58 2.75 16 2.75H8Z"}),React.createElement("path", {"fill":"currentColor","d":"M15.5 12.75H8.5C8.09 12.75 7.75 12.41 7.75 12C7.75 11.59 8.09 11.25 8.5 11.25H15.5C15.91 11.25 16.25 11.59 16.25 12C16.25 12.41 15.91 12.75 15.5 12.75Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"opacity":"0.4","d":"M8.5 12H15.5","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
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

var MessageMinus = React.forwardRef(function(props, ref) {
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

MessageMinus.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
MessageMinus.displayName = 'MessageMinus';

export default MessageMinus;
