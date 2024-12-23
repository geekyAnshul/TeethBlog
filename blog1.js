document.getElementById("read-more").addEventListener("click", function () {
    const hiddenText = document.getElementById("hidden-text");
    if (hiddenText.classList.contains("hidden")) {
      hiddenText.classList.remove("hidden");
      this.textContent = "READ LESS";
    } else {
      hiddenText.classList.add("hidden");
      this.textContent = "READ MORE";
    }
  });
  