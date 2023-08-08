// Add your code here
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const formDataObject = {};

    for (let [name, value] of formData) {
      formDataObject[name] = value;
    }

    console.dir(formDataObject);

    form.reset();
  });
});
