const elemAction = document.querySelectorAll('.font-size');

elemAction.forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    const dataSize = element.getAttribute('data-size');
    document.querySelector('.font-size_active').classList.remove('font-size_active');
    const content = document.querySelector('.book__content');
    content.setAttribute('class', 'book__content');
    if (dataSize) {
      content.classList.add(`book_fs-${dataSize}`);
    };
    e.target.classList.add('font-size_active');
  });
});