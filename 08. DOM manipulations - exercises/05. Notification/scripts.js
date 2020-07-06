function notify(message) {
    let div = document.createElement('div');
    div.textContent = message;

    let divNotification = document.getElementById('notification');

    divNotification.appendChild(div);
    divNotification.style.display = 'block';

  setTimeout(() => {
    divNotification.style.display = 'none';
  }, 2000);
}
