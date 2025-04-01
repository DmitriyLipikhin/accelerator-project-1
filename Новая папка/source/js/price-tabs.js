const buttonTabs = document.querySelectorAll('.price__month-button');
const buttonsPrice = document.querySelectorAll('.price-card__button');

const removeFocus = () => {
  const buttonsPriceActive = document.querySelectorAll('.price-tabs__list--active .price-card__button');
  buttonsPrice.forEach((button) => {
    button.setAttribute('tabindex', '-1');
  });

  buttonsPriceActive.forEach((button) => {
    if(buttonsPriceActive) {
      button.removeAttribute('tabindex');
    }
  });
};

const switchesTab = () => {
  removeFocus();
  buttonTabs.forEach((button) => {

    button.addEventListener('click', () => {
      const buttonId = button.dataset.targetId;
      if(buttonId) {
        const tabPane = document.querySelector(`.price-tabs__list[data-id='${buttonId}']`);
        const activeButton = document.querySelector('.price__month-button--active');

        activeButton.removeAttribute('tabindex');
        activeButton.classList.remove('price__month-button--active');

        const activeTab = document.querySelector('.price-tabs__list--active');

        activeTab.classList.remove('price-tabs__list--active');
        button.classList.add('price__month-button--active');

        button.setAttribute('tabindex', '-1');
        tabPane.classList.add('price-tabs__list--active');
        removeFocus();
      }
    });
  });
};

export {switchesTab};
