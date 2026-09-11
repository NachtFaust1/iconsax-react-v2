import React from 'react';

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M22.0004 2L19.1104 4.89","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M4.92012 19.08C8.82012 22.98 15.1701 22.98 19.0701 19.08C22.9701 15.18 22.9701 8.83001 19.0701 4.93001C15.1701 1.03 8.82012 1.03 4.92012 4.93001C1.02012 8.83001 1.02012 15.18 4.92012 19.08Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M9.7104 14.29C9.2104 13.29 8.4904 10.35 10.2804 8.56C11.0704 7.77 12.3604 7.77 13.1504 8.56C13.6204 9.03 13.8104 9.67 13.7204 10.28C14.3304 10.19 14.9704 10.39 15.4404 10.85C16.2304 11.64 16.2304 12.92 15.4404 13.72C13.6504 15.51 10.7104 14.79 9.7104 14.29Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M19.1108 5.64C18.9208 5.64 18.7308 5.57 18.5808 5.42C18.2908 5.13 18.2908 4.65 18.5808 4.36L21.4708 1.47C21.7608 1.18 22.2408 1.18 22.5308 1.47C22.8208 1.76 22.8208 2.24 22.5308 2.53L19.6408 5.42C19.4908 5.57 19.3008 5.64 19.1108 5.64Z"}),React.createElement("path", {"d":"M15.1093 15.86C14.9193 15.86 14.7293 15.79 14.5793 15.64C13.0993 14.16 10.7893 14.16 9.3093 15.64C9.0193 15.93 8.5393 15.93 8.2493 15.64C8.0993 15.49 8.0293 15.3 8.0293 15.11C8.0293 14.92 8.0993 14.73 8.2493 14.58C8.9693 13.86 9.3593 12.93 9.3593 11.94C9.3593 10.95 8.9593 10.02 8.2493 9.30001C8.0993 9.15001 8.0293 8.96001 8.0293 8.77001C8.0293 8.58001 8.0993 8.39001 8.2493 8.24001C8.5393 7.95001 9.0193 7.95001 9.3093 8.24001C10.7893 9.72001 13.0993 9.72001 14.5793 8.24001C14.8693 7.95001 15.3393 7.95001 15.6293 8.24001C15.9193 8.52001 15.9393 8.99001 15.6593 9.29001C14.2693 10.77 14.2593 13.2 15.6393 14.58C15.9293 14.87 15.9293 15.35 15.6393 15.64C15.4893 15.79 15.2993 15.86 15.1093 15.86ZM11.9393 13.03C12.3793 13.03 12.8193 13.09 13.2493 13.2C13.0693 12.38 13.0693 11.52 13.2693 10.69C12.4293 10.91 11.5493 10.92 10.7093 10.71C10.8093 11.11 10.8593 11.52 10.8593 11.94C10.8593 12.36 10.8093 12.77 10.7093 13.17C11.1093 13.07 11.5293 13.02 11.9393 13.02V13.03Z"}),React.createElement("path", {"d":"M12.0005 22.75C9.25055 22.75 6.49055 21.7 4.39055 19.6C0.200547 15.41 0.200547 8.59 4.39055 4.39C8.59055 0.199997 15.4105 0.199997 19.6105 4.39C23.8005 8.58 23.8005 15.41 19.6105 19.6C17.5105 21.7 14.7605 22.75 12.0005 22.75ZM5.45055 18.55C9.06055 22.16 14.9305 22.16 18.5405 18.55C22.1505 14.94 22.1505 9.07 18.5405 5.46C14.9305 1.85 9.06055 1.85 5.45055 5.46C1.84055 9.07 1.84055 14.94 5.45055 18.55Z"}),);
};

var chooseVariant = function(variant, color) {
  switch (variant) {
    case 'Linear':
      return React.createElement(Linear, { color: color });
    case 'Outline':
      return React.createElement(Outline, { color: color });
    default:
      return React.createElement(Linear, { color: color });
  }
};

var Ball242 = React.forwardRef(function(props, ref) {
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

Ball242.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Ball242.displayName = 'Ball242';

export default Ball242;
