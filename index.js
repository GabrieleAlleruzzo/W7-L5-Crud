const getArray = function () {
  const url = "https://striveschool-api.herokuapp.com/api/product/";

  fetch(url, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMmYxNDM4MzRiZjAwMTUwMDA3MDgiLCJpYXQiOjE3NDI1NDg3NTYsImV4cCI6MTc0Mzc1ODM1Nn0.txRYbfatdCHSr7QY1e6m8yWneThxcDr0EFQ3WrfCKTE",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("bho");
      }
    })
    .then((data) => {
      console.log("Dati ricevuti:", data);

      const row = document.getElementById("d-cards");
      data.forEach((game) => {
        row.innerHTML += ` 
        <div class=" col col-12  col-md-6 col-lg-3 p-0 mb-4"> 
        <div class="card shadow rounded" >
  <img src=" ${game.imageUrl}" class="card-img-top" alt="vg img thumbnail" >
  <div class="card-body p-2" style>
    <h3 class="card-title text-capitalize mt-1">
    ${game.name}
    </h5>
    <p class="card-text"> 
    ${game.description}
    </p>
    <p class="card-text fst-italic fw-medum "> 
    ${game.brand}
    </p>
    <p class="card-text text-danger fw-bold"> 
    ${game.price}$
    </p>
    <a href="#" class="btn btn-danger">Show Details</a>
  </div>
</div>
        </div>
        `;
      });
    })
    .catch((error) => {
      console.log("qualcosa è andato storto", error);
    });
};

getArray();
