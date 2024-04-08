/* __________________________________________________ ACCORDION _______________________________________________ */
(() => {
  const acc = document.getElementsByClassName("accordion"),
    l = acc.length;
  for (let i = 0; i < l; i++) {
    acc[i].firstChild.nextSibling.onclick = function () {
      this.classList.toggle("active");
      const panel = this.nextSibling.nextSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    };
  }
})();
/* __________________________________________________ ACTIVE-TAB _______________________________________________ */
function activeTab(itemList) {
  let acctOptions = document.querySelectorAll(itemList);
  for (var i = 0; i < acctOptions.length; i++) {
    acctOptions[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}
activeTab(`.top-section .features-section .features-section-wrap .main-features .feature-item`);
