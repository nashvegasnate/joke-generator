import jokeGenerator from '../../../images/jokeGenerator.jpeg';

const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div class="card" style="width: 18rem;">
    <div class="card-body d-flex flex-column">
        <img src="${jokeGenerator}" class="card-img-top" alt="...">
      <div id="button-container" class="mt-auto">
        <a href="#" class="card-link btn btn-primary" id="joke-button">GET A JOKE</a>
      </div>
    </div>
  </div>`;
};

export default domBuilder;
