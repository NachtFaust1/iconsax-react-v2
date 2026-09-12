import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z"}),React.createElement("path", {"fill":"currentColor","d":"M10 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H10C10.41 11.25 10.75 11.59 10.75 12C10.75 12.41 10.41 12.75 10 12.75Z"}),React.createElement("path", {"fill":"currentColor","d":"M22 12.75H14C13.59 12.75 13.25 12.41 13.25 12C13.25 11.59 13.59 11.25 14 11.25H22C22.41 11.25 22.75 11.59 22.75 12C22.75 12.41 22.41 12.75 22 12.75Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12 7.5C9.51 7.5 7.5 9.51 7.5 12C7.5 14.49 9.51 16.5 12 16.5C14.49 16.5 16.5 14.49 16.5 12C16.5 11.31 16.34 10.65 16.07 10.07","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M2 12H7","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M17 12H22","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z"}),React.createElement("g", {"opacity":"0.4"},React.createElement("path", {"fill":"currentColor","opacity":"0.4","d":"M10 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H10C10.41 11.25 10.75 11.59 10.75 12C10.75 12.41 10.41 12.75 10 12.75Z"}),React.createElement("g", {"opacity":"0.4"},React.createElement("path", {"fill":"currentColor","opacity":"0.4","d":"M22 12.75H14C13.59 12.75 13.25 12.41 13.25 12C13.25 11.59 13.59 11.25 14 11.25H22C22.41 11.25 22.75 11.59 22.75 12C22.75 12.41 22.41 12.75 22 12.75Z"}),)));
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M2 12H7","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M17 12H22","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M12 17.25C9.11 17.25 6.75 14.9 6.75 12C6.75 9.1 9.11 6.75 12 6.75C14.89 6.75 17.25 9.1 17.25 12C17.25 14.9 14.89 17.25 12 17.25ZM12 8.25C9.93 8.25 8.25 9.93 8.25 12C8.25 14.07 9.93 15.75 12 15.75C14.07 15.75 15.75 14.07 15.75 12C15.75 9.93 14.07 8.25 12 8.25Z"}),React.createElement("path", {"fill":"currentColor","d":"M7 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H7C7.41 11.25 7.75 11.59 7.75 12C7.75 12.41 7.41 12.75 7 12.75Z"}),React.createElement("path", {"fill":"currentColor","d":"M22 12.75H17C16.59 12.75 16.25 12.41 16.25 12C16.25 11.59 16.59 11.25 17 11.25H22C22.41 11.25 22.75 11.59 22.75 12C22.75 12.41 22.41 12.75 22 12.75Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"opacity":"0.4","d":"M2 12H7","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"opacity":"0.4","d":"M17 12H22","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
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

var Settings = React.forwardRef(function(props, ref) {
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

Settings.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Settings.displayName = 'Settings';

export default Settings;
