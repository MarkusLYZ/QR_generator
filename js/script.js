const form = document.getElementById("generate_form");
const qr = document.getElementById("qrcode");

const onGenerateSubmit = (e) => {
  e.preventDefault();
  clearUI();

  const url = document.getElementById("url").value;
  const size = document.getElementById("size").value;

  if (url === "") {
    alert("Please enter URL");
  } else {
    showSpinner();

    setTimeout(() => {
      hideSpinner();
      generateQRCode(url, size);
      setTimeout(() => {
        const saveUrl = qr.querySelector("img").src;
        createSaveBtn(saveUrl);
      });
    }, 1000);
  }
  console.log(url, size);
};
const hideSpinner = () => {
  document.getElementById("spinner").style.display = "none";
};
hideSpinner();

const showSpinner = () => {
  document.getElementById("spinner").style.display = "block";
};

const generateQRCode = (url, size) => {
  const qrcode = new QRCode("qrcode", {
    text: url,
    wideth: size,
    height: size,
  });
};

const clearUI = () => {
  qr.innerHTML = "";
  const saveLink = document.getElementById('save-link');
  if (saveLink){
    saveLink.remove();
  }
};

const createSaveBtn = (saveUrl) => {
  const link = document.createElement("a");
  link.id = "save-link";
  link.classList =
    "bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5";
  link.href = saveUrl;
  link.download = "qrcode";
  link.innerHTML = "Save Image";
  document.getElementById("generated").appendChild(link);
};

if (form) {
  form.addEventListener("submit", onGenerateSubmit);
} else {
  console.log("form doesnt exist");
}
