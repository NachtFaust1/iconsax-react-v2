import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M20.62 8.7C19.58 4.07 15.54 2 12 2C12 2 12 2 11.99 2C8.45999 2 4.42999 4.07 3.37999 8.69C2.19999 13.85 5.35999 18.22 8.21999 20.98C9.27999 22 10.64 22.51 12 22.51C13.36 22.51 14.72 22 15.77 20.98C18.63 18.22 21.79 13.86 20.62 8.7ZM15.28 9.53L11.28 13.53C11.13 13.68 10.94 13.75 10.75 13.75C10.56 13.75 10.37 13.68 10.22 13.53L8.71999 12.03C8.42999 11.74 8.42999 11.26 8.71999 10.97C9.00999 10.68 9.48999 10.68 9.77999 10.97L10.75 11.94L14.22 8.47C14.51 8.18 14.99 8.18 15.28 8.47C15.57 8.76 15.57 9.24 15.28 9.53Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M9.25 11.5L10.75 13L14.75 9","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M5.97996 4.30006C10.35 0.190061 18.82 1.60006 20.38 8.51006C21.53 13.5901 18.37 17.8901 15.6 20.5501C13.59 22.4901 10.41 22.4901 8.38996 20.5501C5.62996 17.8801 2.45996 13.5801 3.61996 8.50006","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","opacity":"0.4","d":"M20.6202 8.7C19.5802 4.07 15.5402 2 12.0002 2C12.0002 2 12.0002 2 11.9902 2C8.46024 2 4.43024 4.07 3.38024 8.69C2.20024 13.85 5.36024 18.22 8.22024 20.98C9.28024 22 10.6402 22.51 12.0002 22.51C13.3602 22.51 14.7202 22 15.7702 20.98C18.6302 18.22 21.7902 13.86 20.6202 8.7Z"}),React.createElement("path", {"fill":"currentColor","d":"M10.7499 13.7495C10.5599 13.7495 10.3699 13.6795 10.2199 13.5295L8.71994 12.0295C8.42994 11.7395 8.42994 11.2595 8.71994 10.9695C9.00994 10.6795 9.48994 10.6795 9.77994 10.9695L10.7499 11.9395L14.2199 8.46945C14.5099 8.17945 14.9899 8.17945 15.2799 8.46945C15.5699 8.75945 15.5699 9.23945 15.2799 9.52945L11.2799 13.5295C11.1299 13.6795 10.9399 13.7495 10.7499 13.7495Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M3.61995 8.49C5.58995 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z","stroke":"currentColor","strokeWidth":"1.5"}),React.createElement("path", {"d":"M9.25 11.5L10.75 13L14.75 9","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M11.9999 22.76C10.5199 22.76 9.02993 22.2 7.86993 21.09C4.91993 18.25 1.65993 13.72 2.88993 8.33C3.99993 3.44 8.26993 1.25 11.9999 1.25C11.9999 1.25 11.9999 1.25 12.0099 1.25C15.7399 1.25 20.0099 3.44 21.1199 8.34C22.3399 13.73 19.0799 18.25 16.1299 21.09C14.9699 22.2 13.4799 22.76 11.9999 22.76ZM11.9999 2.75C9.08993 2.75 5.34993 4.3 4.35993 8.66C3.27993 13.37 6.23993 17.43 8.91993 20C10.6499 21.67 13.3599 21.67 15.0899 20C17.7599 17.43 20.7199 13.37 19.6599 8.66C18.6599 4.3 14.9099 2.75 11.9999 2.75Z"}),React.createElement("path", {"fill":"currentColor","d":"M10.7499 13.7495C10.5599 13.7495 10.3699 13.6795 10.2199 13.5295L8.71994 12.0295C8.42994 11.7395 8.42994 11.2595 8.71994 10.9695C9.00994 10.6795 9.48994 10.6795 9.77994 10.9695L10.7499 11.9395L14.2199 8.46945C14.5099 8.17945 14.9899 8.17945 15.2799 8.46945C15.5699 8.75945 15.5699 9.23945 15.2799 9.52945L11.2799 13.5295C11.1299 13.6795 10.9399 13.7495 10.7499 13.7495Z"}),);
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
    default:
      return React.createElement(Linear, { color: color });
  }
};

var LocationTick = React.forwardRef(function(props, ref) {
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

LocationTick.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
LocationTick.displayName = 'LocationTick';

export default LocationTick;
