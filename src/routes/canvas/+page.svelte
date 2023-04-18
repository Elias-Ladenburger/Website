<script>
  import { browser } from "$app/environment";
  if (browser) {
    const slices = document.querySelectorAll(".slice");
    const modalContainer = document.querySelector(".modal-container");
    const modalTitle = document.querySelector(".modal-title");
    const modalDescription = document.querySelector(".modal-description");

    slices.forEach((slice) => {
      slice.addEventListener("click", () => {
        if (slice instanceof HTMLElement) {
          const value = slice.dataset.value;
          const title = `Slice ${value}`;
          const description = `This is the additional information for slice ${value}.`;
          modalTitle.textContent = title;
          modalDescription.textContent = description;
          modalContainer.style.display = "block";
        }
      });
    });

    modalContainer.addEventListener("click", (event) => {
      if (event.target === modalContainer) {
        modalContainer.style.display = "none";
      }
    });
  }
</script>

<div class="pie-chart-container">
  <div class="pie-chart">
    <div class="slice first-slice bg-navy hover:opacity-70 focus:cursor-pointer" data-value="Pains"><span>Pains</span></div>
    <div class="slice second-slice bg-teal hover:opacity-70 focus:cursor-pointer" data-value="Gains"><span>Gains</span></div>
    <div class="slice third-slice bg-emphasis hover:opacity-70 focus:cursor-pointer" data-value="Tasks"><span>Tasks</span></div>
  </div>
</div>

<div class="modal-container">
  <div class="modal">
    <h2 class="modal-title">Some title</h2>
    <p class="modal-description text-navy" />
  </div>
</div>

<style>
  .pie-chart-container {
    position: relative;
    width: 300px;
    height: 300px;
    margin: 0 auto;
  }

  .pie-chart {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }

  .slice {
    position: absolute;
    width: 100%;
    height: 100%;
    clip: rect(0, 150px, 300px, 0);
    border-radius: 50%;
  }

  .slice span {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    font-weight: bold;
    color: white;
  }

  .slice:nth-child(1) {
    transform: rotate(-120deg);
  }

  .slice:nth-child(1) span {
    color: black;
  }

  .slice:nth-child(2) {
    z-index: 1;
  }

  .slice:nth-child(2) span {
    color: white;
  }

  .slice:nth-child(3) {
    transform: rotate(180deg);
  }

  .slice:nth-child(3) span {
    color: white;
  }

  .modal-container {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 600px;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    text-align: center;
  }

  .modal-title {
    margin-top: 0;
  }

  .modal-description {
    margin-bottom: 0;
  }
</style>
