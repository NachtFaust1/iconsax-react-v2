import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M20.95 14.55L14.56 20.94C13.16 22.34 10.86 22.34 9.45001 20.94L3.06001 14.55C1.66001 13.15 1.66001 10.85 3.06001 9.44L9.45001 3.05C10.85 1.65 13.15 1.65 14.56 3.05L20.95 9.44C22.35 10.85 22.35 13.15 20.95 14.55Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M6.73976 18.2398L3.05977 14.5598C1.65977 13.1598 1.65977 10.8598 3.05977 9.44978L9.44978 3.05977C10.8498 1.65977 13.1498 1.65977 14.5598 3.05977L20.9498 9.44978C22.3498 10.8498 22.3498 13.1498 20.9498 14.5598L14.5598 20.9498C13.1598 22.3498 10.8598 22.3498 9.44978 20.9498","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M20.9498 14.55L14.5598 20.94C13.1598 22.34 10.8598 22.34 9.44978 20.94L3.05977 14.55C1.65977 13.15 1.65977 10.85 3.05977 9.44001L9.44978 3.05C10.8498 1.65 13.1498 1.65 14.5598 3.05L20.9498 9.44001C22.3498 10.85 22.3498 13.15 20.9498 14.55Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M20.95 14.55L14.56 20.94C13.16 22.34 10.86 22.34 9.45002 20.94L3.06001 14.55C1.66001 13.15 1.66001 10.85 3.06001 9.44001L9.45002 3.05C10.85 1.65 13.15 1.65 14.56 3.05L20.95 9.44001C22.35 10.85 22.35 13.15 20.95 14.55Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M11.9998 22.7495C10.8298 22.7495 9.73977 22.2995 8.91977 21.4795L2.52975 15.0895C1.70975 14.2695 1.25977 13.1695 1.25977 12.0095C1.25977 10.8495 1.70975 9.7495 2.52975 8.9295L8.91977 2.53949C9.73977 1.71949 10.8398 1.26953 11.9998 1.26953C13.1598 1.26953 14.2597 1.71949 15.0797 2.53949L21.4698 8.9295C22.2898 9.7495 22.7397 10.8495 22.7397 12.0095C22.7397 13.1695 22.2898 14.2695 21.4698 15.0895L15.0797 21.4795C14.2597 22.2995 13.1698 22.7495 11.9998 22.7495ZM11.9998 2.74951C11.2298 2.74951 10.5098 3.04953 9.97977 3.57953L3.58975 9.96948C3.04975 10.5095 2.75977 11.2295 2.75977 11.9895C2.75977 12.7495 3.05975 13.4795 3.58975 14.0095L9.97977 20.3995C11.0498 21.4695 12.9497 21.4695 14.0197 20.3995L20.4098 14.0095C20.9498 13.4695 21.2397 12.7595 21.2397 11.9895C21.2397 11.2195 20.9398 10.4995 20.4098 9.96948L14.0197 3.57953C13.4897 3.04953 12.7698 2.74951 11.9998 2.74951Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M20.9498 14.55L14.5598 20.94C13.1598 22.34 10.8598 22.34 9.44978 20.94L3.05977 14.55C1.65977 13.15 1.65977 10.85 3.05977 9.44001L9.44978 3.05C10.8498 1.65 13.1498 1.65 14.5598 3.05L20.9498 9.44001C22.3498 10.85 22.3498 13.15 20.9498 14.55Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
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

var Component = React.forwardRef(function(props, ref) {
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

Component.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Component.displayName = 'Component';

export default Component;
