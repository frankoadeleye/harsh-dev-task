(() => {
  const acc = document.getElementsByClassName("accordion"), l = acc.length;
  for (let i = 0; i < l; i++) {
      acc[i].firstChild.nextSibling.onclick = function () {
          this.classList.toggle("active");
          const panel = this.nextSibling.nextSibling;
          if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
          } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
          } 
      }
  }
})();