/*  
    This snippet can be used in p5.js projects. Note that all the 'features' you 
    want to have narration describe should be calculated prior to calling 
    describeFeatures().

    Thanks to n-e-o and steen who implemented code like this in their Art Blocks
    generative art project, Time Squared.

*/

function setup() {
  /* 
    ...all your setup code including createCanvas().
  */
  describeFeatures();
}

function describeFeatures() {
  const cnvId = this.canvas.id; // gets the canvas ID
  this.dummyDOM = document.getElementById(cnvId).parentNode; // grabs the location of the canvas's parent node
  let altText = `This text is read by narrator tools and can include in-line ${variables}.`; // inside `` strings, ${x} will insert the value of x.
  let html = `<div id="${cnvId}_description" role="region" aria-label="${altText}"></div>`; // creates an html div
  this.dummyDOM.querySelector(`#${cnvId}`).innerHTML = html; // inserts html div inside the canvas tags
}