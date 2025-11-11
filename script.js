function addComment(blogNumber) {
  // get elements by concatenated id strings
  var nameInput = document.getElementById("name" + blogNumber);
  var commentInput = document.getElementById("comment" + blogNumber);
  var commentList = document.getElementById("commentList" + blogNumber);

  // safety: check elements exist
  if (!nameInput || !commentInput || !commentList) {
    alert("Something went wrong: comment fields not found for blog " + blogNumber);
    return;
  }

  // read and trim values
  var name = nameInput.value.trim();
  var comment = commentInput.value.trim();

  if (name === "" || comment === "") {
    alert("Please enter both your name and comment.");
    return;
  }

  // create and append comment
  var li = document.createElement("li");
  li.innerHTML = "<strong>" + escapeHtml(name) + "</strong>: " + escapeHtml(comment);
  commentList.appendChild(li);

  // clear inputs
  nameInput.value = "";
  commentInput.value = "";
}

// small helper to prevent HTML injection if a user types < or >
function escapeHtml(str) {
  return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
}
// Highlight blog when navigating or clicking
document.querySelectorAll('.blog-post').forEach(post => {
  post.addEventListener('click', () => {
    // remove highlight from all blogs
    document.querySelectorAll('.blog-post').forEach(p => p.classList.remove('highlight'));
    // add to selected one
    post.classList.add('highlight');

    // remove animation class after it plays, so it can replay next time
    setTimeout(() => post.classList.remove('highlight'), 800);
  });
});


// ========== HAMBURGER MENU TOGGLE ==========
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('show');
});
