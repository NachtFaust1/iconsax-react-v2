import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"}),React.createElement("path", {"d":"M22.0001 9C22.0001 11.74 20.4301 14.11 18.1401 15.25C17.8301 15.41 17.4801 15.16 17.4501 14.82C17.1101 10.37 13.6001 6.89 9.18007 6.55C8.83007 6.52 8.59008 6.17 8.75008 5.86C9.89008 3.57 12.2601 2 15.0001 2C18.8701 2 22.0001 5.13 22.0001 9Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M15 16C18.866 16 22 12.866 22 9C22 5.13401 18.866 2 15 2C11.134 2 8 5.13401 8 9C8 12.866 11.134 16 15 16Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10"}),React.createElement("path", {"d":"M5.09003 9.2C6.21003 8.45 7.55 8 9 8C12.87 8 16 11.13 16 15C16 18.87 12.87 22 9 22C5.13 22 2 18.87 2 15C2 14.29 2.09999 13.61 2.29999 12.97","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"opacity":"0.4","d":"M15 16C18.866 16 22 12.866 22 9C22 5.13401 18.866 2 15 2C11.134 2 8 5.13401 8 9C8 12.866 11.134 16 15 16Z"}),React.createElement("path", {"d":"M9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M15 16C18.866 16 22 12.866 22 9C22 5.13401 18.866 2 15 2C11.134 2 8 5.13401 8 9C8 12.866 11.134 16 15 16Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10"}),React.createElement("path", {"d":"M9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M15 16.75C10.73 16.75 7.25 13.27 7.25 9C7.25 4.73 10.73 1.25 15 1.25C19.27 1.25 22.75 4.73 22.75 9C22.75 13.27 19.27 16.75 15 16.75ZM15 2.75C11.55 2.75 8.75 5.55 8.75 9C8.75 12.45 11.55 15.25 15 15.25C18.45 15.25 21.25 12.45 21.25 9C21.25 5.55 18.45 2.75 15 2.75Z"}),React.createElement("path", {"d":"M9 22.75C4.73 22.75 1.25 19.27 1.25 15C1.25 10.73 4.73 7.25 9 7.25C13.27 7.25 16.75 10.73 16.75 15C16.75 19.27 13.27 22.75 9 22.75ZM9 8.75C5.55 8.75 2.75 11.55 2.75 15C2.75 18.45 5.55 21.25 9 21.25C12.45 21.25 15.25 18.45 15.25 15C15.25 11.55 12.45 8.75 9 8.75Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"opacity":"0.4","d":"M15 16C18.866 16 22 12.866 22 9C22 5.13401 18.866 2 15 2C11.134 2 8 5.13401 8 9C8 12.866 11.134 16 15 16Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10"}),React.createElement("path", {"d":"M9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10"}),);
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

var CeloCelo = React.forwardRef(function(props, ref) {
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

CeloCelo.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
CeloCelo.displayName = 'CeloCelo';

export default CeloCelo;
