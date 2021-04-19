const showPunchline = (item) => {
  document.querySelector('#app').innerHTML = `<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">${item.setup}</p>
    <p class="card-text">${item.punchline}</p>
    <div id="button-container" class="mt-auto>
        <a href="#" class="btn btn-primary" id="new-joke-button">GET NEW JOKE</a>
    </div>
  </div>
</div>`;
};

export default showPunchline;
