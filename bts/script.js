// Placeholder: You can add dynamic features later, e.g., pause on hover
console.log("BTS Army site is running!");
function joinArmy() {
  const name = document.getElementById("fanName").value.trim();
  const email = document.getElementById("fanEmail").value.trim();

  if (name === "" || email === "") return false;

  const message = `Welcome to the BTS ARMY, ${name}! 💜`;
  document.getElementById("joinMessage").textContent = message;

  // Optional: Clear form
  document.getElementById("joinForm").reset();

  return false; // prevent actual form submission
}

function postComment() {
  const input = document.getElementById("commentInput");
  const commentText = input.value.trim();

  if (commentText === "") return;

  const commentDiv = document.createElement("div");
  commentDiv.className = "comment";
  commentDiv.textContent = commentText;

  document.getElementById("commentsContainer").appendChild(commentDiv);

  // Clear input
  input.value = "";

  // Auto remove after animation
  setTimeout(() => {
    commentDiv.remove();
  }, 6000); // match CSS fadeOut duration
}
