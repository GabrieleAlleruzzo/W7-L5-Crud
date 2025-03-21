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
    })
    .catch((error) => {
      console.log("qualcosa è andato storto", error);
    });
};

getArray();

class FormConstruct {
  constructor(_name, _brand, _image, _description, _price) {
    this.name = _name;
    this.brand = _brand;
    this.image = _image;
    this.description = _description;
    this.price = _price;
  }
}

const formAddVG = document.getElementById("add-vg");

formAddVG.addEventListener("submit", function (e) {
  e.preventDefault();

  const vgName = document.getElementById("Name");
  const vgBrand = document.getElementById("Brand");
  const vgImage = document.getElementById("Image");
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
});
