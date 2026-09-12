import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M16.59 7.41L6.30996 17.69C5.82996 18.17 5.00996 18.06 4.71996 17.45C4.19996 16.38 3.89996 15.17 3.89996 13.9C3.87996 8.38 9.47996 3.66 11.38 2.21C11.75 1.93 12.25 1.93 12.61 2.21C13.48 2.87 15.11 4.24 16.64 6.04C16.98 6.44 16.96 7.04 16.59 7.41Z"}),React.createElement("path", {"fill":"currentColor","d":"M20.1 13.9103C20.1 18.3703 16.47 22.0003 12 22.0003C10.21 22.0003 8.53996 21.4203 7.18996 20.4203C6.69996 20.0603 6.65996 19.3403 7.08996 18.9103L17.16 8.84026C17.63 8.37026 18.42 8.47026 18.74 9.05026C19.56 10.5603 20.11 12.2003 20.1 13.9103Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M3.8999 13.9C3.8999 18.36 7.52991 22 11.9999 22C16.4699 22 20.0999 18.37 20.0999 13.91C20.1299 8.47996 14.4999 3.66996 12.6099 2.20996","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M12.61 2.21C12.25 1.93 11.75 1.93 11.39 2.21C10.01 3.26 6.66996 6.04 4.95996 9.6","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M16.59 7.41L6.30996 17.69C5.82996 18.17 5.00996 18.06 4.71996 17.45C4.19996 16.38 3.89996 15.17 3.89996 13.9C3.87996 8.38 9.47996 3.66 11.38 2.21C11.75 1.93 12.25 1.93 12.61 2.21C13.48 2.87 15.11 4.24 16.64 6.04C16.98 6.44 16.96 7.04 16.59 7.41Z"}),React.createElement("path", {"fill":"currentColor","opacity":"0.4","d":"M20.1 13.9103C20.1 18.3703 16.47 22.0003 12 22.0003C10.21 22.0003 8.53996 21.4203 7.18996 20.4203C6.69996 20.0603 6.65996 19.3403 7.08996 18.9103L17.16 8.84026C17.63 8.37026 18.42 8.47026 18.74 9.05026C19.56 10.5603 20.11 12.2003 20.1 13.9103Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12.61 2.21C12.25 1.93 11.75 1.93 11.39 2.21C9.49004 3.66 3.88003 8.39 3.91003 13.9C3.91003 18.36 7.54004 22 12.01 22C16.48 22 20.11 18.37 20.11 13.91C20.12 8.48 14.5 3.67 12.61 2.21Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M12 22.75C7.12003 22.75 3.15003 18.78 3.15003 13.9C3.12003 8.17 8.58002 3.4 10.93 1.61C11.56 1.13 12.44 1.13 13.07 1.61C15.42 3.43 20.88 8.26 20.85 13.91C20.85 18.78 16.88 22.75 12 22.75ZM12 2.75C11.95 2.75 11.89 2.77 11.84 2.81C10.15 4.1 4.63004 8.71 4.66004 13.9C4.66004 17.96 7.96004 21.25 12.01 21.25C16.06 21.25 19.36 17.96 19.36 13.91C19.39 8.79 13.86 4.12 12.16 2.81C12.1 2.77 12.05 2.75 12 2.75Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12.6098 2.21C12.2498 1.93 11.7498 1.93 11.3898 2.21C9.4898 3.66 3.87979 8.39 3.90979 13.9C3.90979 18.36 7.53979 22 12.0098 22C16.4798 22 20.1098 18.37 20.1098 13.91C20.1198 8.48 14.4998 3.67 12.6098 2.21Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10"}),);
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

var Drop = React.forwardRef(function(props, ref) {
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

Drop.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Drop.displayName = 'Drop';

export default Drop;
