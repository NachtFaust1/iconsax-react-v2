import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM13.33 17H10.66C10.25 17 9.91 16.66 9.91 16.25C9.91 15.84 10.25 15.5 10.66 15.5H13.33C13.74 15.5 14.08 15.84 14.08 16.25C14.08 16.66 13.75 17 13.33 17ZM16 12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75ZM18 8.5H6C5.59 8.5 5.25 8.16 5.25 7.75C5.25 7.34 5.59 7 6 7H18C18.41 7 18.75 7.34 18.75 7.75C18.75 8.16 18.41 8.5 18 8.5Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M10 7H21","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round"}),React.createElement("path", {"d":"M3 7H6","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round"}),React.createElement("path", {"d":"M6 12H18","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round"}),React.createElement("path", {"d":"M10 17H14","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","opacity":"0.4","d":"M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"}),React.createElement("path", {"fill":"currentColor","d":"M18 8.5H6C5.59 8.5 5.25 8.16 5.25 7.75C5.25 7.34 5.59 7 6 7H18C18.41 7 18.75 7.34 18.75 7.75C18.75 8.16 18.41 8.5 18 8.5Z"}),React.createElement("path", {"fill":"currentColor","d":"M16 12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z"}),React.createElement("path", {"fill":"currentColor","d":"M13.3302 17H10.6602C10.2502 17 9.91016 16.66 9.91016 16.25C9.91016 15.84 10.2502 15.5 10.6602 15.5H13.3302C13.7402 15.5 14.0802 15.84 14.0802 16.25C14.0802 16.66 13.7502 17 13.3302 17Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M3 7H21","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round"}),React.createElement("path", {"d":"M6 12H18","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round"}),React.createElement("path", {"d":"M10 17H14","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z"}),React.createElement("path", {"fill":"currentColor","d":"M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"}),React.createElement("path", {"fill":"currentColor","d":"M14 17.75H10C9.59 17.75 9.25 17.41 9.25 17C9.25 16.59 9.59 16.25 10 16.25H14C14.41 16.25 14.75 16.59 14.75 17C14.75 17.41 14.41 17.75 14 17.75Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M3 7H21","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round"}),React.createElement("path", {"opacity":"0.34","d":"M6 12H18","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round"}),React.createElement("path", {"d":"M10 17H14","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round"}),);
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

var Sort = React.forwardRef(function(props, ref) {
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

Sort.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Sort.displayName = 'Sort';

export default Sort;
