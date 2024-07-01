import React from "react";

const Hello = () => {
// writing code without jsx/ using React
//the react library offers a create element method that has
//3 parameters; 1.string of html tag to be rendered, 2.any optional property 3.children for the html element
//the create element can be nested when one uses several html elements

return React.createElement('div', null, 'Hello Elvin')
}

export default Hello;


