class FormConstruct {
  constructor(_name, _brand, _imageUrl, _description, _price) {
    this.name = _name;
    this.brand = _brand;
    this.imageUrl = _imageUrl;
    this.description = _description;
    this.price = _price;
  }
}

const formAddVG = document.getElementById("add-vg");

formAddVG.addEventListener("submit", function (e) {
  e.preventDefault();

  const vgName = document.getElementById("Name");
  const vgBrand = document.getElementById("Brand");
  const vgImage = document.getElementById("ImageUrl");
  const vgDescription = document.getElementById("Description");
  const vgPrice = document.getElementById("Price");

  const addVGObj = new FormConstruct(
    vgName.value,
    vgBrand.value,
    vgImage.value,
    vgDescription.value,
    vgPrice.value
  );
  console.log("dati del form", addVGObj);

  const url = "https://striveschool-api.herokuapp.com/api/product/";

  fetch(url, {
    method: "POST",
    body: JSON.stringify(addVGObj),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMmYxNDM4MzRiZjAwMTUwMDA3MDgiLCJpYXQiOjE3NDI1NDg3NTYsImV4cCI6MTc0Mzc1ODM1Nn0.txRYbfatdCHSr7QY1e6m8yWneThxcDr0EFQ3WrfCKTE",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("SALVATAGGIO COMPLETATO!");
        formAddVG.reset();
      } else {
        throw new Error("bho");
      }
    })
    .catch((err) => {
      console.log("qualcosa è andato storto", err);
    });
});
