const faqButtonTabs = document.querySelectorAll('.faq__tabs-button');
const faqButtonAccordions = document.querySelectorAll('.faq__accordion-button');
const accordionItems = document.querySelectorAll('.faq__accordion-item');

const calculateHeightContainer = () => {
  const faqPanelHeight = document.querySelectorAll('.faq__accordion-panel');

  faqPanelHeight.forEach((panel) => {
    if (!panel.classList.contains('faq__accordion-panel--active')) {
      panel.style.maxHeight = '0';
      panel.style.minHeight = '0';
    }
  });

  const faqPanelHeightActive = document.querySelector('.faq__accordion-panel--active');
  const interval = setInterval(() => {
    faqPanelHeightActive.style.overflow = 'hidden';
    faqPanelHeightActive.style.maxHeight = '';
    faqPanelHeightActive.style.minHeight = '';
    faqPanelHeightActive.style.minHeight = `${faqPanelHeightActive.clientHeight}px`;
    setTimeout(() => {
      clearInterval(interval);
    }, 300);
  }, 10);

};

const switchesFaqTab = () => {
  faqButtonTabs.forEach((tab) => {
    const accordionItem = document.querySelector('.faq__accordion-panel .faq__accordion-item');
    accordionItem.setAttribute('open', 'true');
    tab.addEventListener('click', () => {
      const buttonId = tab.dataset.targetId;
      if(buttonId) {
        const tabPane = document.querySelector(`.faq__accordion-panel[data-id='${buttonId}']`);
        const activeButton = document.querySelector('.faq__tabs-button--active');

        activeButton.removeAttribute('tabindex', '-1');
        activeButton.classList.remove('faq__tabs-button--active');

        const activeTab = document.querySelector('.faq__accordion-panel--active');

        activeTab.classList.remove('faq__accordion-panel--active');
        tab.classList.add('faq__tabs-button--active');
        tab.setAttribute('tabindex', '-1');
        tabPane.classList.add('faq__accordion-panel--active');

        calculateHeightContainer();
      }
    });
  });
};

const switchesFaqAccordion = () => {
  let isAnimation = false;
  accordionItems.forEach((item) => {
    item.addEventListener('click', (event) => event.preventDefault());
  });

  faqButtonAccordions.forEach((accordion) => {

    accordion.addEventListener('click', () => {
      const parent = accordion.closest('.faq__accordion-item');
      const accordionText = parent.querySelector('p');

      if(!isAnimation && !parent.hasAttribute('open')) {
        const parentClose = parent.closest('.faq__accordion-item');
        const startHeight = `${parentClose.getBoundingClientRect().height}px`;

        accordionText.style.maxHeight = `${accordionText.scrollHeight}px`;
        parent.setAttribute('open', true);
        accordion.classList.add('faq__accordion-button--active');

        const parentOpen = parent.closest('.faq__accordion-item[open="true"]');
        const endHeight = `${parentOpen.offsetHeight}px`;

        if (parentClose.animation) {
          parentClose.animation.cancel();
        }

        isAnimation = true;

        parentClose.animation = parentClose.animate(
          { height: [startHeight, endHeight] },
          { duration: 200, easing: 'ease' }
        );

        parentClose.animation.onfinish = function() {
          isAnimation = false;
        };
      }else if(!isAnimation && parent.hasAttribute('open')) {
        const parentOpen = parent.closest('.faq__accordion-item[open="true"]');
        const endHeight = `${parentOpen.offsetHeight}px`;

        parent.removeAttribute('open');
        accordion.classList.remove('faq__accordion-button--active');

        const parentClose = parent.closest('.faq__accordion-item');
        const startHeight = `${parentClose.getBoundingClientRect().height}px`;

        if (parentClose.animation) {
          parentClose.animation.cancel();
        }

        isAnimation = true;

        parentClose.animation = parentClose.animate(
          { height: [endHeight, startHeight] },
          { duration: 200, easing: 'ease' }
        );

        parentClose.animation.onfinish = function() {
          isAnimation = false;
          accordionText.style.maxHeight = '0';
        };
      }
      calculateHeightContainer();
    });
  });
};

const removeFocus = () => {
  const activeTabDetails = document.querySelectorAll('.faq__accordion-panel--active details');
  accordionItems.forEach((item) => {
    item.setAttribute('tabindex', '-1');
  });

  activeTabDetails.forEach((detail) => {
    if(activeTabDetails) {
      detail.removeAttribute('tabindex');
    }
  });
};

const switchesTabsAndAccordion = () => {
  switchesFaqTab();
  switchesFaqAccordion();
  calculateHeightContainer();
  removeFocus();
};

export {switchesTabsAndAccordion};
