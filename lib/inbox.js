/* eslint-disable no-multiple-empty-lines */
const faker = require('faker');

let counter = 0;
const sound = new Audio('open-ended.mp3');
const hasNewMessage = () => Math.random() <= 0.20;

const newMessage = () => {
  const message1 = {
    subject: faker.company.catchPhrase(),
    sender: faker.name.findName(),
    email: faker.internet.email()
  };
  const message2 = {
    subject: faker.company.catchPhrase(),
    sender: faker.name.findName(),
    email: faker.internet.email()
  };
  const array = [message1, message2];
  return array[Math.floor(Math.random() * 2)];
};

const appendMessageToDom = (message) => {
  const emailString = `
    <div class='list-group-item row message read d-flex align-items-center'>
      <div class="col-2 col-xl-1 center">
        <img
          class="img-thumbnail border-1"
          style="border-radius: 50%; width: 45px; height: 45px"
          src="${faker.image.avatar()}">
        </img>
      </div>
    <div class='col-3'>${message.subject}</div><div class='col-3'>${message.sender}</div><div class='col-2 col-md-3' style="word-wrap: break-word">${message.email}</div><div class="col-1 status"><i class="fas fa-circle"></i></div></div>`;
  return emailString;
};


const refresh = () => {
  if (hasNewMessage()) {
    counter += 1;
    document.querySelector('#count').innerText = `(${counter})`;
    sound.play();
    document.querySelector('#inbox').insertAdjacentHTML('beforeend', appendMessageToDom(newMessage()));
  }
};



















// Do not remove these lines:
document.addEventListener("DOMContentLoaded", () => {
  setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
});

module.exports = { hasNewMessage, newMessage };
