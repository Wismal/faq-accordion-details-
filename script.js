const detailsElements = document.querySelectorAll("details");



detailsElements.forEach(detail => {
  detail.addEventListener('click', () => {

    detailsElements.forEach(d => {
      if (d !== detail) {
        d.removeAttribute('open');
      }
    });
  });
});