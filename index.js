$(modal).ready(function() {
    // Handler for .ready() called.
    /* Cache the popup. */
  var modal = document.getElementById("modal");

  /* Show the popup. */
  modal.classList.remove("hidden");

  /* Fade the popup in */
  setTimeout(()=>modal.classList.add("fade-in"));

    /* Fade the popup out */
    modal.classList.remove("fade-in");
    /* Hide the popup. */
    setTimeout(()=>modal.classList.add("hidden"), 300);

  });

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
myBtn.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}