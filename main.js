// basic remote fetch example

document.addEventListener('DOMContentLoaded', init);

function init() {
  fetch("https://www.colr.org/json/colors/random/7")
  .then(response => response.json()) 
  .then(data => {
    let myColors = [];
    data.colors.forEach(item => {
      myColors.push("#" + item.hex); 
    });
    //console.log('colors:', myColors);
    //document.body.style.backgroundColor = `#${data.new_color}`;
  }).catch(err => {
    console.error('oops', err.message);
  });
}
