import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.06 11.17L12.53 14.7C12.38 14.85 12.19 14.92 12 14.92C11.81 14.92 11.62 14.85 11.47 14.7L7.94 11.17C7.65 10.88 7.65 10.4 7.94 10.11C8.23 9.82 8.71 9.82 9 10.11L12 13.11L15 10.11C15.29 9.82 15.77 9.82 16.06 10.11C16.35 10.4 16.35 10.87 16.06 11.17Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M2 12.99V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M8.46997 10.6396L12 14.1596L15.53 10.6396","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","opacity":"0.4","d":"M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"}),React.createElement("path", {"fill":"currentColor","d":"M12 14.9103C11.81 14.9103 11.62 14.8403 11.47 14.6903L7.94 11.1603C7.65 10.8703 7.65 10.3903 7.94 10.1003C8.23 9.81031 8.71 9.81031 9 10.1003L12 13.1003L15 10.1003C15.29 9.81031 15.77 9.81031 16.06 10.1003C16.35 10.3903 16.35 10.8703 16.06 11.1603L12.53 14.6903C12.38 14.8403 12.19 14.9103 12 14.9103Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M8.47021 10.6396L12.0002 14.1596L15.5302 10.6396","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"}),React.createElement("path", {"fill":"currentColor","d":"M11.9999 14.9103C11.8099 14.9103 11.6199 14.8403 11.4699 14.6903L7.93991 11.1603C7.64991 10.8703 7.64991 10.3903 7.93991 10.1003C8.22991 9.81031 8.70991 9.81031 8.99991 10.1003L11.9999 13.1003L14.9999 10.1003C15.2899 9.81031 15.7699 9.81031 16.0599 10.1003C16.3499 10.3903 16.3499 10.8703 16.0599 11.1603L12.5299 14.6903C12.3799 14.8403 12.1899 14.9103 11.9999 14.9103Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"opacity":"0.4","d":"M8.46997 10.6396L12 14.1596L15.53 10.6396","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
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

var ArrowSquareDown = React.forwardRef(function(props, ref) {
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

ArrowSquareDown.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ArrowSquareDown.displayName = 'ArrowSquareDown';

export default ArrowSquareDown;
