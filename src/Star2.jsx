import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M18.0841 11.612C18.4509 11.6649 18.4509 12.3351 18.0841 12.388C14.1035 12.9624 12.9624 14.1035 12.388 18.0841C12.3351 18.4509 11.6649 18.4509 11.612 18.0841C11.0376 14.1035 9.89647 12.9624 5.91594 12.388C5.5491 12.3351 5.5491 11.6649 5.91594 11.612C9.89647 11.0376 11.0376 9.89647 11.612 5.91594C11.6649 5.5491 12.3351 5.5491 12.388 5.91594C12.9624 9.89647 14.1035 11.0376 18.0841 11.612Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12.84 8.04C12.41 6.65 12.21 4.72 12 2C11.33 10.78 10.78 11.33 2 12C10.78 12.67 11.33 13.22 12 22C12.67 13.22 13.22 12.67 22 12C18.51 11.74 16.32 11.49 14.91 10.74","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M18.0841 11.612C18.4509 11.6649 18.4509 12.3351 18.0841 12.388C14.1035 12.9624 12.9624 14.1035 12.388 18.0841C12.3351 18.4509 11.6649 18.4509 11.612 18.0841C11.0376 14.1035 9.89647 12.9624 5.91594 12.388C5.5491 12.3351 5.5491 11.6649 5.91594 11.612C9.89647 11.0376 11.0376 9.89647 11.612 5.91594C11.6649 5.5491 12.3351 5.5491 12.388 5.91594C12.9624 9.89647 14.1035 11.0376 18.0841 11.612Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M22 12C13.22 12.67 12.67 13.22 12 22C11.33 13.22 10.78 12.67 2 12C10.78 11.33 11.33 10.78 12 2C12.67 10.78 13.22 11.33 22 12Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12 22.75C11.61 22.75 11.28 22.45 11.25 22.06C10.61 13.65 10.35 13.39 1.94 12.75C1.55 12.72 1.25 12.39 1.25 12C1.25 11.61 1.55 11.28 1.94 11.25C10.35 10.61 10.61 10.35 11.25 1.94C11.28 1.55 11.61 1.25 12 1.25C12.39 1.25 12.72 1.55 12.75 1.94C13.39 10.35 13.65 10.61 22.06 11.25C22.45 11.28 22.75 11.61 22.75 12C22.75 12.39 22.45 12.72 22.06 12.75C13.65 13.39 13.39 13.65 12.75 22.06C12.72 22.45 12.39 22.75 12 22.75ZM7.82 12C10.25 12.62 11.38 13.75 12 16.18C12.62 13.74 13.75 12.62 16.18 12C13.75 11.38 12.62 10.25 12 7.82C11.38 10.26 10.25 11.38 7.82 12Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"opacity":"0.4","d":"M22 12C13.22 12.67 12.67 13.22 12 22C11.33 13.22 10.78 12.67 2 12C10.78 11.33 11.33 10.78 12 2C12.67 10.78 13.22 11.33 22 12Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M22 12C13.22 12.67 12.67 13.22 12 22C11.33 13.22 10.78 12.67 2 12","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
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

var Star2 = React.forwardRef(function(props, ref) {
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

Star2.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Star2.displayName = 'Star2';

export default Star2;
