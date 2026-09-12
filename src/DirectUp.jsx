import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M17.0199 21.2897L13.5399 19.5497C12.5699 19.0697 11.4399 19.0697 10.4699 19.5497L6.98991 21.2897C3.99991 22.7797 0.849913 19.5697 2.40991 16.6197L3.22991 15.0797C3.33991 14.8697 3.51991 14.6997 3.73991 14.5997L16.3799 8.89969C16.8999 8.66969 17.5099 8.87969 17.7699 9.37969L21.5799 16.6197C23.1399 19.5697 19.9999 22.7797 17.0199 21.2897Z"}),React.createElement("path", {"fill":"currentColor","d":"M15.6 7.68953L7.31996 11.4195C6.38996 11.8395 5.44996 10.8395 5.92996 9.93953L8.96996 4.16953C10.26 1.71953 13.76 1.71953 15.05 4.16953L16.12 6.20953C16.4 6.75953 16.16 7.43953 15.6 7.68953Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M3.0698 16.3C1.6198 19.05 4.5498 22.04 7.3298 20.65L10.5698 19.03C11.4698 18.58 12.5298 18.58 13.4298 19.03L16.6698 20.65C19.4498 22.04 22.3698 19.05 20.9298 16.3L14.8298 4.71C13.6298 2.43 10.3698 2.43 9.1698 4.71L5.4998 11.68","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M17.0202 21.2897L13.5402 19.5497C12.5702 19.0697 11.4402 19.0697 10.4702 19.5497L6.99016 21.2897C4.00016 22.7797 0.850157 19.5697 2.41016 16.6197L3.23016 15.0797C3.34016 14.8697 3.52016 14.6997 3.74016 14.5997L16.3802 8.89969C16.9002 8.66969 17.5102 8.87969 17.7702 9.37969L21.5802 16.6197C23.1402 19.5697 20.0002 22.7797 17.0202 21.2897Z"}),React.createElement("path", {"fill":"currentColor","opacity":"0.4","d":"M15.6 7.68953L7.31996 11.4195C6.38996 11.8395 5.44996 10.8395 5.92996 9.93953L8.96996 4.16953C10.26 1.71953 13.76 1.71953 15.05 4.16953L16.12 6.20953C16.4 6.75953 16.16 7.43953 15.6 7.68953Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M9.17005 4.71L3.07005 16.3C1.62005 19.05 4.55005 22.04 7.33005 20.65L10.57 19.03C11.47 18.58 12.53 18.58 13.43 19.03L16.67 20.65C19.45 22.04 22.37 19.05 20.93 16.3L14.83 4.71C13.63 2.43 10.37 2.43 9.17005 4.71Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M18.1201 21.75C17.5201 21.75 16.9101 21.61 16.3301 21.32L13.0901 19.7C12.4101 19.36 11.5901 19.36 10.9001 19.7L7.66009 21.32C6.10009 22.1 4.30009 21.8 3.08009 20.55C1.86009 19.3 1.59009 17.5 2.41009 15.95L8.51009 4.36C9.19009 3.06 10.5301 2.25 12.0001 2.25C13.4701 2.25 14.8101 3.06 15.4901 4.36L21.5901 15.95C22.4001 17.5 22.1401 19.3 20.9201 20.55C20.1501 21.34 19.1501 21.75 18.1201 21.75ZM12.0001 17.94C12.6101 17.94 13.2101 18.08 13.7601 18.35L17.0001 19.97C18.1701 20.56 19.2401 20.11 19.8401 19.49C20.4401 18.87 20.8701 17.8 20.2601 16.64L14.1601 5.05C13.7301 4.24 12.9201 3.75 12.0001 3.75C11.0801 3.75 10.2701 4.24 9.84009 5.06L3.74009 16.65C3.13009 17.81 3.55009 18.89 4.16009 19.5C4.77009 20.11 5.83009 20.56 7.00009 19.98L10.2401 18.36C10.7901 18.08 11.3901 17.94 12.0001 17.94Z"}),);
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

var DirectUp = React.forwardRef(function(props, ref) {
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

DirectUp.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
DirectUp.displayName = 'DirectUp';

export default DirectUp;
