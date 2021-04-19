import jokeGenerator from '../../../images/jokeGenerator.jpeg';

const showPunchline = (item) => {
  document.querySelector('#app').innerHTML = `<div class="card" style="width: 18rem;">
  <div class="card-body">
  <img src="${jokeGenerator}" class="card-img-top" alt="...">
  <h5 class="card-title">Card title</h5>
    <p class="card-text">${item.setup}</p>
    <p class="card-text">${item.punchline}</p>
    <div id="button-container" class="mt-auto>
        <a href="#" class="card-link btn btn-primary" id="new-joke-button">GET NEW JOKE</a>
    </div>
  </div>
</div>`;
};

export default showPunchline;
