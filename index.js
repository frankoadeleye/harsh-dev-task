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
function activeTab(itemListClass, itemCommonClass) {
  let acctOptions = document.querySelectorAll(itemListClass);
  for (var i = 0; i < acctOptions.length; i++) {
    acctOptions[i].addEventListener("click", function () {
      var current = document.getElementsByClassName(`${itemCommonClass} active`);
      current[0].className = current[0].className.replace(" active", "");
      const parentElement = this.closest(`.${itemCommonClass}`);
      parentElement.className += " active";
    });
  }
}
activeTab(`.top-section .features-section .features-section-wrap .main-features .feature-item`,'feature-item');
activeTab(`.sub-footer-section .pricing-section .pricing-section-wrap .items-wrap .pricing-item`,'pricing-item');
