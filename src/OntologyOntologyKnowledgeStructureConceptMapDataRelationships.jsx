import React from 'react';

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M2.2207 6.98075V5.20075C2.2207 4.75075 2.76071 4.53076 3.07071 4.85076L17.9007 19.6807C16.1807 21.1807 13.9107 22.0707 11.4207 22.0007C6.25072 21.8607 2.2207 17.4108 2.2207 12.2408V11.0808","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M6.2207 4.29998C7.9307 2.80998 10.1807 1.92998 12.6507 1.99998C17.7807 2.13998 21.7707 6.54997 21.7707 11.68V18.64C21.7707 19.09 21.2307 19.31 20.9207 18.99L6.2207 4.29998Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var chooseVariant = function(variant, color) {
  switch (variant) {
    case 'Broken':
      return React.createElement(Broken, { color: color });
    default:
      return React.createElement(Broken, { color: color });
  }
};

var OntologyOntologyKnowledgeStructureConceptMapDataRelationships = React.forwardRef(function(props, ref) {
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

OntologyOntologyKnowledgeStructureConceptMapDataRelationships.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
OntologyOntologyKnowledgeStructureConceptMapDataRelationships.displayName = 'OntologyOntologyKnowledgeStructureConceptMapDataRelationships';

export default OntologyOntologyKnowledgeStructureConceptMapDataRelationships;
