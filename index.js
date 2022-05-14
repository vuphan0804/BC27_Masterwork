// Header Dropdown
// When user click button, show dropdown content
myFunction = () => {
  document.getElementById("myDropdown").classList.toggle("show-dropdown");
};

// Close the dropdown when clicks outside
window.onclick = (e) => {
  if (!e.target.matches(".drop-btn")) {
    const myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show-dropdown")) {
      myDropdown.classList.remove("show-dropdown");
    }
  }
};
// Header Scroll
// When user scroll page more 0, header will set height.
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  header.classList.toggle("sticky-header", window.scrollY > 0);
});
