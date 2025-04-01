const validationForm = () => {
  document.querySelector('.lesson__form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const inputs = document.querySelectorAll('.lesson__input');
    let hasErrors = false;

    inputs.forEach((input) => {
      switch (input.id) {
        case 'name':
          if (!/^[A-Za-zА-Яа-яЁё\s]+$/.test(input.value.trim())) {
            hasErrors = true;
            input.style.borderBottom = '1px solid #ff121f';
            input.nextElementSibling.style.display = 'block';
          } else {
            input.nextElementSibling.style.display = 'none';
            input.style.borderBottom = '1px solid rgba(255, 255, 255, 0.4)';
          }
          break;

        case 'telph':
          if (!/^(\+\d{1,4})?\d{7,15}$/.test(input.value.trim())) {
            hasErrors = true;
            input.style.borderBottom = '1px solid #ff121f';
            input.nextElementSibling.style.display = 'block';
          } else {
            input.nextElementSibling.style.display = 'none';
            input.style.borderBottom = '1px solid rgba(255, 255, 255, 0.4)';
          }
          break;
      }
    });

    if (!hasErrors) {
      try {
        const formData = new FormData(this);
        const response = await fetch(this.action, {
          method: this.method,
          body: formData
        });

        if (response.ok) {
          inputs.forEach((input) => {
            input.value = '';
          });
        } else {
          throw new Error(`Ошибка отправки формы: ${response.status}`);
        }
      } catch (err) {
        throw new Error(err);
      }
    }
  });
};

export { validationForm };
