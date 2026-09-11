import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M11.97 2C6.44997 2 1.96997 6.48 1.96997 12C1.96997 17.52 6.44997 22 11.97 22C17.49 22 21.97 17.52 21.97 12C21.97 6.48 17.5 2 11.97 2ZM12 16.23C9.65997 16.23 7.76997 14.34 7.76997 12C7.76997 9.66 9.65997 7.77 12 7.77C14.34 7.77 16.23 9.66 16.23 12C16.23 14.34 14.34 16.23 12 16.23Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M16.23 11.9995C16.23 9.65953 14.34 7.76953 12 7.76953C9.66002 7.76953 7.77002 9.65953 7.77002 11.9995C7.77002 14.3395 9.66002 16.2295 12 16.2295C12.57 16.2295 13.11 16.1195 13.6 15.9195","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"opacity":"0.4","d":"M11.9702 22C17.4931 22 21.9702 17.5228 21.9702 12C21.9702 6.47715 17.4931 2 11.9702 2C6.44737 2 1.97021 6.47715 1.97021 12C1.97021 17.5228 6.44737 22 11.9702 22Z"}),React.createElement("path", {"d":"M12 16.2295C14.3362 16.2295 16.23 14.3357 16.23 11.9995C16.23 9.66337 14.3362 7.76953 12 7.76953C9.66386 7.76953 7.77002 9.66337 7.77002 11.9995C7.77002 14.3357 9.66386 16.2295 12 16.2295Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44712 2 1.96997 6.47715 1.96997 12C1.96997 17.5228 6.44712 22 11.97 22Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M12 16.2295C14.3362 16.2295 16.23 14.3357 16.23 11.9995C16.23 9.66337 14.3362 7.76953 12 7.76953C9.66386 7.76953 7.77002 9.66337 7.77002 11.9995C7.77002 14.3357 9.66386 16.2295 12 16.2295Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M11.97 22.75C6.04997 22.75 1.21997 17.93 1.21997 12C1.21997 6.07 6.04997 1.25 11.97 1.25C17.89 1.25 22.72 6.07 22.72 12C22.72 17.93 17.9 22.75 11.97 22.75ZM11.97 2.75C6.86997 2.75 2.71997 6.9 2.71997 12C2.71997 17.1 6.86997 21.25 11.97 21.25C17.07 21.25 21.22 17.1 21.22 12C21.22 6.9 17.07 2.75 11.97 2.75Z"}),React.createElement("path", {"d":"M12 16.9795C9.25002 16.9795 7.02002 14.7495 7.02002 11.9995C7.02002 9.24953 9.25002 7.01953 12 7.01953C14.75 7.01953 16.98 9.24953 16.98 11.9995C16.98 14.7495 14.75 16.9795 12 16.9795ZM12 8.51953C10.08 8.51953 8.52002 10.0795 8.52002 11.9995C8.52002 13.9195 10.08 15.4795 12 15.4795C13.92 15.4795 15.48 13.9195 15.48 11.9995C15.48 10.0795 13.92 8.51953 12 8.51953Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M11.9702 22C17.4931 22 21.9702 17.5228 21.9702 12C21.9702 6.47715 17.4931 2 11.9702 2C6.44737 2 1.97021 6.47715 1.97021 12C1.97021 17.5228 6.44737 22 11.9702 22Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"opacity":"0.4","d":"M12 16.2295C14.3362 16.2295 16.23 14.3357 16.23 11.9995C16.23 9.66337 14.3362 7.76953 12 7.76953C9.66386 7.76953 7.77002 9.66337 7.77002 11.9995C7.77002 14.3357 9.66386 16.2295 12 16.2295Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
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

var RecordCircle = React.forwardRef(function(props, ref) {
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

RecordCircle.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
RecordCircle.displayName = 'RecordCircle';

export default RecordCircle;
