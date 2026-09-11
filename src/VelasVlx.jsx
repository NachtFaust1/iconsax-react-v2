import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M21 3.15039H3C2.59 3.15039 2.25 3.49039 2.25 3.90039C2.25 4.31039 2.59 4.65039 3 4.65039H21C21.41 4.65039 21.75 4.31039 21.75 3.90039C21.75 3.49039 21.41 3.15039 21 3.15039Z"}),React.createElement("path", {"d":"M4.0399 6.24023H19.9699C20.8499 6.24023 21.3799 7.21023 20.8999 7.95023L12.9399 20.3402C12.4999 21.0202 11.5099 21.0202 11.0699 20.3402L3.10988 7.95023C2.62988 7.21023 3.1599 6.24023 4.0399 6.24023Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M2 3.03125H22","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M3.69939 8.99937L3.10937 8.06937C2.62937 7.32937 3.16939 6.35938 4.03939 6.35938H19.9694C20.8494 6.35938 21.3794 7.32937 20.8994 8.06937L12.9394 20.4594C12.4994 21.1394 11.5094 21.1394 11.0694 20.4594L5.80938 12.2794","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M21 3.15039H3C2.59 3.15039 2.25 3.49039 2.25 3.90039C2.25 4.31039 2.59 4.65039 3 4.65039H21C21.41 4.65039 21.75 4.31039 21.75 3.90039C21.75 3.49039 21.41 3.15039 21 3.15039Z"}),React.createElement("path", {"d":"M4.04006 6.24023H19.9701C20.8501 6.24023 21.38 7.21023 20.9 7.95023L12.9401 20.3402C12.5001 21.0202 11.5101 21.0202 11.0701 20.3402L3.10006 7.95023C2.63006 7.21023 3.16006 6.24023 4.04006 6.24023Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M2 3H22","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M4 6.40039H20C20.9 6.40039 21.4 7.40039 20.9 8.10039L12.9 20.5004C12.5 21.2004 11.5 21.2004 11 20.5004L3 8.10039C2.6 7.30039 3.2 6.40039 4 6.40039Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M22 3.7793H2C1.59 3.7793 1.25 3.4393 1.25 3.0293C1.25 2.6193 1.59 2.2793 2 2.2793H22C22.41 2.2793 22.75 2.6193 22.75 3.0293C22.75 3.4393 22.41 3.7793 22 3.7793Z"}),React.createElement("path", {"d":"M11.9999 21.7194C11.3599 21.7194 10.7799 21.3994 10.4299 20.8694L2.4699 8.47938C2.0999 7.90938 2.0799 7.17938 2.3999 6.57938C2.7299 5.97938 3.3499 5.60938 4.0299 5.60938H19.9599C20.6399 5.60938 21.2699 5.97938 21.5899 6.57938C21.9199 7.17938 21.8899 7.90938 21.5199 8.47938L13.5599 20.8694C13.2199 21.3994 12.6399 21.7194 11.9999 21.7194ZM4.03991 7.10938C3.84991 7.10938 3.7499 7.23938 3.7199 7.29938C3.6899 7.35938 3.62991 7.50937 3.72991 7.66937L11.6899 20.0594C11.7799 20.1994 11.9199 20.2294 11.9899 20.2294C12.0599 20.2294 12.1999 20.2094 12.2899 20.0594L20.2499 7.66937C20.3499 7.50937 20.2899 7.35938 20.2599 7.29938C20.2299 7.23938 20.1399 7.10938 19.9399 7.10938H4.03991Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M2 3.0293H22","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"opacity":"0.4","d":"M4.0399 6.35938H19.9699C20.8499 6.35938 21.3799 7.32937 20.8999 8.06937L12.9399 20.4594C12.4999 21.1394 11.5099 21.1394 11.0699 20.4594L3.10988 8.06937C2.62988 7.32937 3.1599 6.35938 4.0399 6.35938Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
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

var VelasVlx = React.forwardRef(function(props, ref) {
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

VelasVlx.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
VelasVlx.displayName = 'VelasVlx';

export default VelasVlx;
