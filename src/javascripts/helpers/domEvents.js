import showSetup from '../components/joke';
import getJoke from './jokeData';

const domEvents = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id.includes('joke-button')) {
      getJoke().then((jokeArr) => showSetup(jokeArr));
    }
    if (e.target.id.includes('punchline-button')) {
      document.querySelector('#punchline').style.display = 'inline';
      document.querySelector('#button-container').innerHTML = '<a href="#" class="card-link btn btn-primary" id="new-joke-button">GET A NEW JOKE</a>';
    }
    if (e.target.id.includes('new-joke-button')) {
      getJoke().then((jokeArr) => showSetup(jokeArr));
    }
  });
};

export default domEvents;
