import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M22.5303 2.53L19.6403 5.42C19.6403 5.42 19.5903 5.47 19.5703 5.48C19.2603 5.1 18.9103 4.75 18.5303 4.43C18.5303 4.41 18.5603 4.38 18.5803 4.36L21.4703 1.47C21.7603 1.18 22.2403 1.18 22.5303 1.47C22.8203 1.76 22.8203 2.24 22.5303 2.53Z"}),React.createElement("path", {"fill":"currentColor","d":"M19.5704 5.48001C19.2604 5.10001 18.9104 4.75001 18.5304 4.43001C16.5004 2.68001 13.7604 1.72001 10.7804 2.07001C6.2804 2.60001 2.6204 6.25001 2.0804 10.75C1.7404 13.52 2.5404 16.1 4.0704 18.09C4.2504 18.33 4.6104 18.34 4.8204 18.13L7.3904 15.56L6.1604 10.98C6.0604 10.58 6.2904 10.17 6.7004 10.06C7.1004 9.95001 7.5104 10.2 7.6104 10.59L8.6104 14.34L10.6104 12.34L9.6104 8.65001C9.5004 8.25001 9.7404 7.84001 10.1404 7.73001C10.5404 7.62001 10.9504 7.86001 11.0604 8.26001L11.8304 11.12L13.8404 9.11001L13.1604 6.18001C13.0604 5.78001 13.3104 5.37001 13.7204 5.28001C14.1204 5.19001 14.5204 5.44001 14.6204 5.84001L15.2904 8.72001L18.1704 9.39001C18.5704 9.49001 18.8204 9.89001 18.7304 10.29C18.6504 10.64 18.3404 10.87 18.0004 10.87C17.9404 10.87 17.8904 10.87 17.8304 10.85L14.9004 10.17L12.8904 12.18L15.7504 12.95C16.1504 13.06 16.3904 13.47 16.2804 13.87C16.1904 14.21 15.8904 14.43 15.5604 14.43C15.4904 14.43 15.4304 14.42 15.3604 14.4L11.6704 13.4L9.6704 15.4L13.4204 16.4C13.8204 16.5 14.0504 16.91 13.9504 17.31C13.8604 17.65 13.5504 17.87 13.2204 17.87C13.1604 17.87 13.0904 17.86 13.0304 17.85L8.4504 16.62L5.8804 19.19C5.6704 19.4 5.6804 19.76 5.9204 19.94C7.9104 21.47 10.5004 22.27 13.2704 21.93C17.7604 21.38 21.4004 17.74 21.9404 13.24C22.3004 10.27 21.3504 7.52001 19.5804 5.48001H19.5704Z"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M18.3598 19.36C17.2598 20.47 15.8598 21.29 14.2998 21.7L3.2998 10.7C3.7098 9.14001 4.5298 7.74001 5.6398 6.64001L18.3598 19.36Z"}),React.createElement("path", {"opacity":"0.4","d":"M20.6996 15.3C20.2896 16.86 19.4696 18.26 18.3596 19.36L5.63965 6.63999C6.73965 5.52999 8.13965 4.70999 9.69965 4.29999L20.6996 15.3Z"}),React.createElement("path", {"d":"M21.0002 13C21.0002 13.79 20.9002 14.56 20.7002 15.3L9.7002 4.3C10.4402 4.1 11.2102 4 12.0002 4C16.9702 4 21.0002 8.03 21.0002 13Z"}),React.createElement("path", {"d":"M12 4V2","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"opacity":"0.4","d":"M14.3 21.7C13.56 21.9 12.79 22 12 22C7.03 22 3 17.97 3 13C3 12.21 3.1 11.44 3.3 10.7L14.3 21.7Z"}),);
};

var chooseVariant = function(variant, color) {
  switch (variant) {
    case 'Bold':
      return React.createElement(Bold, { color: color });
    case 'Bulk':
      return React.createElement(Bulk, { color: color });
    default:
      return React.createElement(Bold, { color: color });
  }
};

var Ball8 = React.forwardRef(function(props, ref) {
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

Ball8.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Ball8.displayName = 'Ball8';

export default Ball8;
