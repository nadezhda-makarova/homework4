const revealList = document.querySelectorAll('.reveal');
revealList.forEach(element => {
  window.addEventListener('scroll', () => {
    if (element.getBoundingClientRect().bottom < document.documentElement.clientHeight) {
      element.classList.add('reveal_active');
    } else {
      element.classList.remove('reveal_active');
    };
  });
});