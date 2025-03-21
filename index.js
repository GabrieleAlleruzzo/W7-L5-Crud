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
        <div class="col col-12 col-sm-6 col-md-4 col-lg-3> 
        <div class="card">
  <img src=" ${game.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">
    ${game.name}
    </h5>
    <p class="card-text"> 
    ${game.description}
    </p>
    <p class="card-text"> 
    ${game.brand}
    </p>
    <p class="card-text"> 
    ${game.price}$
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
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
