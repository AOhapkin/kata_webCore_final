let dropdownTechBlock = document.querySelectorAll('.tech-list__item--hidden');
let dropdownTechButton = document.querySelector('.tech__button');
let windowInnerWidth = document.documentElement.clientWidth;

if (windowInnerWidth < 1016) {
		dropdownTechBlock[0].classList.toggle('hidden');

    dropdownTechButton.addEventListener('click', () => {
        let btnText = 'Скрыть';
        for (let i = 0; i < 6; i++) {
            if (dropdownTechBlock[i].classList.contains('hidden')) {
                dropdownTechBlock[i].classList.toggle('hidden');
                dropdownTechButton.textContent = btnText;
                dropdownTechButton.setAttribute(
                    'style',
                    'background-image: url(assets/up.svg)'
                );
            } else {
                dropdownTechBlock[i].classList.toggle('hidden');
                dropdownTechButton.textContent = 'Показать все';
                dropdownTechButton.removeAttribute('style');
            }
        }
    });
} else {
    dropdownTechButton.addEventListener('click', () => {
        let btnText = 'Скрыть';
        for (let i = 1; i < 6; i++) {
            if (dropdownTechBlock[i].classList.contains('hidden')) {
                dropdownTechBlock[i].classList.toggle('hidden');
                dropdownTechButton.textContent = btnText;
                dropdownTechButton.setAttribute(
                    'style',
                    'background-image: url(assets/up.svg)'
                );
            } else {
                dropdownTechBlock[i].classList.toggle('hidden');
                dropdownTechButton.textContent = 'Показать все';
                dropdownTechButton.removeAttribute('style');
            }
        }
    });
}