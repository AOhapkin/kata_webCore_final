let dropdownBrandsBlock = document.querySelectorAll('.brands-list__item--hidden');
let dropdownBrandsButton = document.querySelector('.brands__button');
let windowInnerWidth = document.documentElement.clientWidth;

if (windowInnerWidth < 1016) {
    dropdownBrandsBlock[0].classList.toggle('hidden');

    dropdownBrandsButton.addEventListener('click', () => {
        let btnText = 'Скрыть';
        for (let i = 1; i < 3; i++) {
            if (dropdownBrandsBlock[i].classList.contains('hidden')) {
                dropdownBrandsBlock[i].classList.toggle('hidden');
                dropdownBrandsButton.textContent = btnText;
                dropdownBrandsButton.setAttribute(
                    'style',
                    'background-image: url(assets/up.svg)'
                );
            } else {
                dropdownBrandsBlock[i].classList.toggle('hidden');
                dropdownBrandsButton.textContent = 'Показать все';
                dropdownBrandsButton.removeAttribute('style');
            }
        }
    });
} else {
    dropdownBrandsButton.addEventListener('click', () => {
        let btnText = 'Скрыть';
        for (let i = 0; i < 3; i++) {
            if (dropdownBrandsBlock[i].classList.contains('hidden')) {
                dropdownBrandsBlock[i].classList.toggle('hidden');
                dropdownBrandsButton.textContent = btnText;
                dropdownBrandsButton.setAttribute(
                    'style',
                    'background-image: url(assets/up.svg)'
                );
            } else {
                dropdownBrandsBlock[i].classList.toggle('hidden');
                dropdownBrandsButton.textContent = 'Показать все';
                dropdownBrandsButton.removeAttribute('style');
            }
        }
    });
}