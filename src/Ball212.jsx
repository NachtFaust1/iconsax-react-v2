import React from 'react';

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M21.9994 2L19.1094 4.89","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M21.15 7.96C19.6 4.45 16.09 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M5.18945 18.81L5.29945 18.7L8.41945 15.58L11.5395 12.46L14.6595 9.34","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M13.2206 17.11L8.22063 15.78L6.89062 10.78","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M15.5598 13.67L11.4498 12.56L10.3398 8.45","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M18.0006 10.11L14.6706 9.33L13.8906 6","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"opacity":"0.4","d":"M21.9994 2L19.1094 4.89","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"opacity":"0.4","d":"M4.89062 19.11L9.56063 14.44","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M8.02997 12.69L11.2 15.86C11.72 16.38 12.62 16.18 12.85 15.47L14.47 10.69C14.73 9.91 13.99 9.16 13.2 9.42L8.41997 11.04C7.71997 11.28 7.50997 12.17 8.02997 12.69Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M4.91914 19.08C8.81914 22.98 15.1691 22.98 19.0691 19.08C22.9691 15.18 22.9691 8.83001 19.0691 4.93001C15.1691 1.03 8.81914 1.03 4.91914 4.93001C1.01914 8.83001 1.01914 15.18 4.91914 19.08Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var chooseVariant = function(variant, color) {
  switch (variant) {
    case 'Broken':
      return React.createElement(Broken, { color: color });
    case 'TwoTone':
      return React.createElement(TwoTone, { color: color });
    default:
      return React.createElement(Broken, { color: color });
  }
};

var Ball212 = React.forwardRef(function(props, ref) {
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

Ball212.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Ball212.displayName = 'Ball212';

export default Ball212;
