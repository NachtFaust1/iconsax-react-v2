import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M17.02 2.7202L13.54 4.4602C12.57 4.9402 11.44 4.9402 10.47 4.4602L6.97997 2.7102C3.99997 1.2202 0.849974 4.4402 2.40997 7.3902L3.22997 8.9302C3.33997 9.1402 3.51997 9.3102 3.73997 9.4102L16.39 15.1002C16.91 15.3302 17.52 15.1202 17.78 14.6202L21.59 7.3802C23.14 4.4402 20 1.2202 17.02 2.7202Z"}),React.createElement("path", {"fill":"currentColor","d":"M15.6 16.3093L7.31996 12.5793C6.38996 12.1593 5.44996 13.1593 5.92996 14.0593L8.96996 19.8293C10.26 22.2793 13.76 22.2793 15.05 19.8293L16.12 17.7893C16.4 17.2393 16.16 16.5693 15.6 16.3093Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M3.0698 7.70015C1.6198 4.95015 4.5498 1.96015 7.3298 3.35015L10.5698 4.97015C11.4698 5.42015 12.5298 5.42015 13.4298 4.97015L16.6698 3.35015C19.4498 1.96015 22.3698 4.95015 20.9298 7.70015L14.8298 19.2901C13.6298 21.5701 10.3698 21.5701 9.1698 19.2901L5.4998 12.3201","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M17.0202 2.7202L13.5402 4.4602C12.5702 4.9402 11.4402 4.9402 10.4702 4.4602L6.98022 2.7102C4.00022 1.2202 0.850218 4.4402 2.41022 7.3902L3.23022 8.9302C3.34022 9.1402 3.52022 9.3102 3.74022 9.4102L16.3902 15.1002C16.9102 15.3302 17.5202 15.1202 17.7802 14.6202L21.5902 7.3802C23.1402 4.4402 20.0002 1.2202 17.0202 2.7202Z"}),React.createElement("path", {"fill":"currentColor","opacity":"0.4","d":"M15.6 16.3093L7.31996 12.5793C6.38996 12.1593 5.44996 13.1593 5.92996 14.0593L8.96996 19.8293C10.26 22.2793 13.76 22.2793 15.05 19.8293L16.12 17.7893C16.4 17.2393 16.16 16.5693 15.6 16.3093Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M9.17005 19.2901L3.07005 7.70015C1.62005 4.95015 4.55005 1.96015 7.33005 3.35015L10.57 4.97015C11.47 5.42015 12.53 5.42015 13.43 4.97015L16.67 3.35015C19.45 1.96015 22.37 4.95015 20.93 7.70015L14.83 19.2901C13.63 21.5701 10.37 21.5701 9.17005 19.2901Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M12.0001 21.7508C10.5301 21.7508 9.19009 20.9408 8.51009 19.6408L2.41009 8.05078C1.59009 6.50078 1.86009 4.70078 3.08009 3.45078C4.30009 2.20078 6.10009 1.90078 7.66009 2.68078L10.9001 4.30078C11.5801 4.64078 12.4001 4.64078 13.0901 4.30078L16.3301 2.68078C17.9001 1.90078 19.7001 2.20078 20.9201 3.45078C22.1401 4.70078 22.4101 6.50078 21.5901 8.05078L15.4901 19.6408C14.8101 20.9408 13.4701 21.7508 12.0001 21.7508ZM5.88009 3.75078C5.17009 3.75078 4.55009 4.09078 4.15009 4.50078C3.55009 5.12078 3.12009 6.19078 3.73009 7.35078L9.83009 18.9408C10.2601 19.7608 11.0701 20.2508 11.9901 20.2508C12.9101 20.2508 13.7201 19.7608 14.1501 18.9408L20.2501 7.35078C20.8601 6.19078 20.4401 5.11078 19.8301 4.50078C19.2301 3.89078 18.1701 3.44078 16.9901 4.02078L13.7501 5.64078C12.6401 6.19078 11.3301 6.19078 10.2201 5.64078L6.99009 4.02078C6.61009 3.83078 6.23009 3.75078 5.88009 3.75078Z"}),);
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
    default:
      return React.createElement(Linear, { color: color });
  }
};

var DirectDown = React.forwardRef(function(props, ref) {
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

DirectDown.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
DirectDown.displayName = 'DirectDown';

export default DirectDown;
