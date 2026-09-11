import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M17.9 19.6805C16.18 21.1805 13.91 22.0705 11.42 22.0005C6.24998 21.8605 2.21997 17.4105 2.21997 12.2405V5.21052C2.21997 4.76052 2.75998 4.54052 3.06998 4.86052L17.9 19.6805Z"}),React.createElement("path", {"d":"M6.21997 4.29998C7.92997 2.80998 10.18 1.92998 12.65 1.99998C17.78 2.13998 21.77 6.54997 21.77 11.68V18.64C21.77 19.09 21.23 19.31 20.92 18.99L6.21997 4.29998Z"}),);
};

var chooseVariant = function(variant, color) {
  switch (variant) {
    case 'Bold':
      return React.createElement(Bold, { color: color });
    default:
      return React.createElement(Bold, { color: color });
  }
};

var OntologyKnowledgeStructureConceptMapSemanticsInformation = React.forwardRef(function(props, ref) {
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

OntologyKnowledgeStructureConceptMapSemanticsInformation.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
OntologyKnowledgeStructureConceptMapSemanticsInformation.displayName = 'OntologyKnowledgeStructureConceptMapSemanticsInformation';

export default OntologyKnowledgeStructureConceptMapSemanticsInformation;
