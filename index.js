

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// when user hits button, close the modal
button.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}