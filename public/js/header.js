window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY === 0) {
      header.classList.remove("scrolled-header");
    } else {
      header.classList.add("scrolled-header");
    }
});