function osumichange() {
    document.getElementById("osumi").src = "images/characters/osumi_2.png";
}

/* get the back button element */
const backBtn = document.getElementById('back');

/* uncheck all checkboxes when Back button is clicked */
  backBtn.addEventListener('click', function uncheck() {
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      cb.checked = false;
    });
  });