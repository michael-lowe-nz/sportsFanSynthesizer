console.log('Hello there')

document.getElementById('showMapButton').addEventListener('click', toggleHidden)

function toggleHidden () {
  document.getElementById('map').className = 'container'
}
