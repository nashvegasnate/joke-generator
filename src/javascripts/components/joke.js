const showSetup = (item) => {
  document.querySelector('#app').innerHTML = `<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">${item.setup}</p>
    <p class="card-text" id="punchline" style="display: none;">${item.punchline}</p>
    <div id="button-container" class="mt-auto>
        <a href="#" class="btn btn-primary" id="punchline-button">GET PUNCHLINE</a>
    </div>
  </div>
</div>`;
};

export default showSetup;
