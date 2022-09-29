const firstGallery = document.querySelector('.featured-section__gal-1');
const secondGallery = document.querySelector('.featured-section__gal-2');
const thirdGallery = document.querySelector('.featured-section__gal-3');
const forthGallery = document.querySelector('.featured-section__gal-4');

const galleryTitleNav = document.querySelector('.featured-section__list');

// Make carousel work
galleryTitleNav.addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList.contains('featured-section__title-1')) {
    firstGallery.classList.add('featured-section__change');
    firstGallery.style.animation =
      'slide-from-left 0.3s cubic-bezier(0.175, 0.745, 0.425, 1.11)';
    secondGallery.classList.remove('featured-section__change');
    thirdGallery.classList.remove('featured-section__change');
    forthGallery.classList.remove('featured-section__change');
  }
  if (target.classList.contains('featured-section__title-2')) {
    if (firstGallery.classList.contains('featured-section__change')) {
      secondGallery.style.animation =
        'slide-from-right 0.3s cubic-bezier(0.175, 0.745, 0.425, 1.11)';
    }
    if (
      thirdGallery.classList.contains('featured-section__change') ||
      forthGallery.classList.contains('featured-section__change')
    ) {
      secondGallery.style.animation =
        'slide-from-left 0.3s cubic-bezier(0.175, 0.745, 0.425, 1.11';
    }
    secondGallery.classList.add('featured-section__change');
    firstGallery.classList.remove('featured-section__change');
    thirdGallery.classList.remove('featured-section__change');
    forthGallery.classList.remove('featured-section__change');
  }
  if (target.classList.contains('featured-section__title-3')) {
    if (
      firstGallery.classList.contains('featured-section__change') ||
      secondGallery.classList.contains('featured-section__change')
    ) {
      thirdGallery.style.animation =
        'slide-from-right 0.3s cubic-bezier(0.175, 0.745, 0.425, 1.11)';
    }
    if (forthGallery.classList.contains('featured-section__change')) {
      thirdGallery.style.animation =
        'slide-from-left 0.3s cubic-bezier(0.175, 0.745, 0.425, 1.11';
    }
    thirdGallery.classList.add('featured-section__change');
    firstGallery.classList.remove('featured-section__change');
    secondGallery.classList.remove('featured-section__change');
    forthGallery.classList.remove('featured-section__change');
  }
  if (target.classList.contains('featured-section__title-4')) {
    forthGallery.classList.add('featured-section__change');
    forthGallery.style.animation =
      'slide-from-right 0.3s cubic-bezier(0.175, 0.745, 0.425, 1.11)';
    firstGallery.classList.remove('featured-section__change');
    secondGallery.classList.remove('featured-section__change');
    thirdGallery.classList.remove('featured-section__change');
  }
});
