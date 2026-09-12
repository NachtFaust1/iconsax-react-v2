import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M9.32993 18H14.6699C17.9899 18 19.3399 15.65 17.6899 12.78L16.9499 11.5C16.7699 11.19 16.4399 11 16.0799 11H7.91993C7.55993 11 7.22993 11.19 7.04993 11.5L6.30992 12.78C4.65992 15.65 6.00993 18 9.32993 18Z"}),React.createElement("path", {"fill":"currentColor","d":"M8.79006 9.99957H15.2201C15.6101 9.99957 15.8501 9.57957 15.6501 9.24957L15.0101 8.14957C13.3601 5.27957 10.6401 5.27957 8.99006 8.14957L8.35006 9.24957C8.16006 9.57957 8.40006 9.99957 8.79006 9.99957Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M17.69 12.7803C19.35 15.6503 17.99 18.0003 14.68 18.0003H12H9.32998C6.01998 18.0003 4.65998 15.6503 6.31998 12.7803L7.65998 10.4703L8.99998 8.16031C10.66 5.29031 13.37 5.29031 15.03 8.16031","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M9.32999 18H14.67C17.99 18 19.34 15.65 17.69 12.78L16.95 11.5C16.77 11.19 16.44 11 16.08 11H7.91999C7.55999 11 7.22999 11.19 7.04999 11.5L6.30999 12.78C4.65999 15.65 6.00999 18 9.32999 18Z"}),React.createElement("path", {"fill":"currentColor","opacity":"0.4","d":"M8.79 9.99957H15.22C15.61 9.99957 15.85 9.57957 15.65 9.24957L15.01 8.14957C13.36 5.27957 10.64 5.27957 8.99 8.14957L8.35 9.24957C8.16 9.57957 8.4 9.99957 8.79 9.99957Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12.0002 18.0003H9.33017C6.02017 18.0003 4.66017 15.6503 6.32017 12.7803L7.66017 10.4703L9.00017 8.16031C10.6602 5.29031 13.3702 5.29031 15.0302 8.16031L16.3702 10.4703L17.7102 12.7803C19.3702 15.6503 18.0102 18.0003 14.7002 18.0003H12.0002Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M14.67 18.75H9.33005C7.45005 18.75 6.02005 18.07 5.31005 16.84C4.60005 15.61 4.73005 14.03 5.67005 12.4L8.34005 7.77C9.28005 6.15 10.58 5.25 12 5.25C13.42 5.25 14.72 6.15 15.66 7.78L18.33 12.41C19.27 14.04 19.4 15.62 18.69 16.85C17.98 18.07 16.55 18.75 14.67 18.75ZM12 6.75C11.14 6.75 10.3 7.38 9.64005 8.53L6.97005 13.16C6.31005 14.31 6.18005 15.35 6.61005 16.1C7.04005 16.85 8.01005 17.26 9.33005 17.26H14.67C15.99 17.26 16.96 16.85 17.39 16.1C17.82 15.35 17.69 14.31 17.03 13.16L14.36 8.53C13.7 7.38 12.86 6.75 12 6.75Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12 18.0003H9.33004C6.02005 18.0003 4.66005 15.6503 6.32005 12.7803L7.66004 10.4703L9.00005 8.16031C10.66 5.29031 13.37 5.29031 15.03 8.16031L16.37 10.4703L17.71 12.7803C19.37 15.6503 18.01 18.0003 14.7 18.0003H12Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
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

var ArrowUp = React.forwardRef(function(props, ref) {
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

ArrowUp.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ArrowUp.displayName = 'ArrowUp';

export default ArrowUp;
