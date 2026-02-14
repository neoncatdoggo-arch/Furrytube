// Function to filter videos based on search input
function searchVideos() {
  // Get the value typed in the search bar and convert to lowercase
  const input = document.getElementById("search").value.toLowerCase();

  // Get all video cards
  const videos = document.getElementsByClassName("video-card");

  // Loop through each video card
  for (let i = 0; i < videos.length; i++) {
    // Get the title of the video from the data-title attribute
    const title = videos[i].getAttribute("data-title").toLowerCase();

    // Show video if title includes search input, hide if not
    if (title.includes(input)) {
      videos[i].style.display = "block";
    } else {
      videos[i].style.display = "none";
