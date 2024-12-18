const showMoreBtn = document.getElementById('showMoreBtn')
const hiddenTabletSlides = document.querySelectorAll('.hidden-tablet')
const hiddenDesktopSlides = document.querySelectorAll('.hidden-desktop')

let isExpanded = localStorage.getItem('isExpanded') === 'true'

function updateVisibility() {
  const windowWidth = window.innerWidth

  if (windowWidth <= 769) {
  } else if (windowWidth > 769 && windowWidth < 1440) {
    hiddenTabletSlides.forEach((slide) => {
      slide.style.display = isExpanded ? 'block' : 'none'
    })
    hiddenDesktopSlides.forEach((slide) => {
      slide.style.display = 'none'
    })
  } else if (windowWidth >= 1440) {
    // Для десктопов
    hiddenTabletSlides.forEach((slide) => {
      slide.style.display = 'block'
    })
    hiddenDesktopSlides.forEach((slide) => {
      slide.style.display = isExpanded ? 'block' : 'none'
    })
  }
}

function updateButtonText() {
  const buttonText = showMoreBtn.querySelector('.show-more_text')
  buttonText.innerText = isExpanded ? 'Скрыть' : 'Показать все' // Обновляем текст кнопки
}

function updateButtonMoreImg() {
  showMoreImg.style.transform = isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' // Поворачиваем изображение
}

showMoreBtn.addEventListener('click', function () {
  isExpanded = !isExpanded // Переключаем состояние
  updateVisibility() // Обновляем видимость
  updateButtonText() // Обновляем текст кнопки

  localStorage.setItem('isExpanded', isExpanded) // Сохраняем состояние в localStorage
})

// Инициализация видимости при загрузке страницы
updateVisibility()

// Обновление видимости при изменении размера окна
window.addEventListener('resize', updateVisibility)
