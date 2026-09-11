import React from 'react';

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M3 13C3 17.97 7.03 22 12 22C16.97 22 21 17.97 21 13C21 8.03 16.97 4 12 4C8.16 4 4.88 6.41 3.59 9.8","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M12 4V2","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M12.0004 14.2C13.4404 14.2 14.6004 13.04 14.6004 11.6C14.6004 10.16 13.4404 9 12.0004 9C10.5604 9 9.40039 10.16 9.40039 11.6C9.40039 13.04 10.5604 14.2 12.0004 14.2Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M11.9996 22C14.1496 22 15.8996 20.25 15.8996 18.1C15.8996 15.95 14.1496 14.2 11.9996 14.2C9.84961 14.2 8.09961 15.95 8.09961 18.1C8.09961 20.25 9.84961 22 11.9996 22Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"opacity":"0.4","d":"M12 4V2","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M12 22C7.03 22 3 17.97 3 13C3 8.03 7.03 4 12 4C16.97 4 21 8.03 21 13C21 17.97 16.97 22 12 22Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M21 13C21 9.28 17.98 6.27 14.27 6.27C10.56 6.27 7.54004 9.29 7.54004 13","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M7.53027 13C7.53027 15.39 9.46027 17.32 11.8503 17.32C14.2403 17.32 16.1703 15.39 16.1703 13","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M22.0004 2L19.1104 4.89","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M4.88965 19.11L9.55965 14.44","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M8.02997 12.69L11.2 15.86C11.72 16.38 12.62 16.18 12.85 15.47L14.47 10.69C14.73 9.91 13.99 9.16 13.2 9.42L8.41997 11.04C7.71997 11.28 7.50997 12.17 8.02997 12.69Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M4.92012 19.08C8.82012 22.98 15.1701 22.98 19.0701 19.08C22.9701 15.18 22.9701 8.83001 19.0701 4.93001C15.1701 1.03 8.82012 1.03 4.92012 4.93001C1.02012 8.83001 1.02012 15.18 4.92012 19.08Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12 22.75C6.62 22.75 2.25 18.38 2.25 13C2.25 7.62 6.62 3.25 12 3.25C17.38 3.25 21.75 7.62 21.75 13C21.75 18.38 17.38 22.75 12 22.75ZM12 4.75C7.45 4.75 3.75 8.45 3.75 13C3.75 17.55 7.45 21.25 12 21.25C16.55 21.25 20.25 17.55 20.25 13C20.25 8.45 16.55 4.75 12 4.75Z"}),React.createElement("path", {"d":"M12 4.75C11.59 4.75 11.25 4.41 11.25 4V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V4C12.75 4.41 12.41 4.75 12 4.75Z"}),React.createElement("path", {"d":"M12 17.75C11.59 17.75 11.25 17.41 11.25 17C11.25 15.21 9.79 13.75 8 13.75C7.59 13.75 7.25 13.41 7.25 13C7.25 12.59 7.59 12.25 8 12.25C9.79 12.25 11.25 10.79 11.25 9C11.25 8.59 11.59 8.25 12 8.25C12.41 8.25 12.75 8.59 12.75 9C12.75 10.79 14.21 12.25 16 12.25C16.41 12.25 16.75 12.59 16.75 13C16.75 13.41 16.41 13.75 16 13.75C14.21 13.75 12.75 15.21 12.75 17C12.75 17.41 12.41 17.75 12 17.75ZM10.56 13C11.14 13.37 11.63 13.86 12 14.44C12.37 13.86 12.86 13.37 13.44 13C12.86 12.63 12.37 12.14 12 11.56C11.63 12.14 11.14 12.63 10.56 13Z"}),);
};

var chooseVariant = function(variant, color) {
  switch (variant) {
    case 'Linear':
      return React.createElement(Linear, { color: color });
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

var Ball272 = React.forwardRef(function(props, ref) {
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

Ball272.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Ball272.displayName = 'Ball272';

export default Ball272;
