const tooltipSuccess = document.querySelector('.tooltip-success');
const tooltipError = document.querySelector('.tooltip-error');
const requestUrl = 'http://localhost:9090/api/registration';

export const sendRequest = (body, values) => {
  fetch(requestUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())

    .then((res) => {
      if (res.status === 'success') {
        console.log(JSON.stringify(res));
        tooltipSuccess.classList.add('visible');
        tooltipSuccess.innerText = res.message;
        values.reset();
        setTimeout(() => {
          tooltipSuccess.classList.remove('visible');
        }, 5000);
      } else if (res.status === 'error') {
        console.log(JSON.stringify(res));
        tooltipError.classList.add('visible');
        tooltipError.innerText = res.message;
        setTimeout(() => {
          tooltipError.classList.remove('visible');
        }, 3000);
      }
    })
    .catch((error) => console.error(error));
};
