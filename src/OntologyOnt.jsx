import React from 'react';

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","opacity":"0.4","d":"M17.8997 19.6805C16.1797 21.1805 13.9097 22.0705 11.4197 22.0005C6.24974 21.8605 2.21973 17.4105 2.21973 12.2405V5.21052C2.21973 4.76052 2.75973 4.54052 3.06973 4.86052L17.8997 19.6805Z"}),React.createElement("path", {"fill":"currentColor","d":"M6.21973 4.29998C7.92973 2.80998 10.1797 1.92998 12.6497 1.99998C17.7797 2.13998 21.7697 6.54998 21.7697 11.68V18.64C21.7697 19.09 21.2297 19.31 20.9197 18.99L6.21973 4.29998Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M17.9 19.6996C16.2 21.1996 13.9 22.0996 11.4 21.9996C6.19995 21.8996 2.19995 17.3996 2.19995 12.1996V5.19961C2.19995 4.79961 2.69995 4.49961 3.09995 4.79961L17.9 19.6996Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M6.19995 4.29974C7.89995 2.79974 10.2 1.89974 12.6 1.99974C17.7 2.09974 21.7 6.49974 21.7 11.6997V18.6997C21.7 19.0997 21.2 19.3997 20.8 19.0997L6.19995 4.29974Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var chooseVariant = function(variant, color) {
  switch (variant) {
    case 'Linear':
      return React.createElement(Linear, { color: color });
    case 'Bulk':
      return React.createElement(Bulk, { color: color });
    default:
      return React.createElement(Linear, { color: color });
  }
};

var OntologyOnt = React.forwardRef(function(props, ref) {
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

OntologyOnt.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
OntologyOnt.displayName = 'OntologyOnt';

export default OntologyOnt;
