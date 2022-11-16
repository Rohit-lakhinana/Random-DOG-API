var image = document.querySelector('#image');
var button = document.querySelector('button');
button.addEventListener('click', function() {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => showImage(data.message)
)

  function showImage(data) {
  const output = `<img style="width: 100%; height: 100%" src='${data}'>`
  image.innerHTML = output;
}

});