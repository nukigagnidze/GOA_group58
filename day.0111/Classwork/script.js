// 1
const img = document.querySelector("img");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const imgUrls = [
    "./images/house1.jfif",
    "./images/house2.jfif",
    "./images/house3.jfif",
    "./images/house4.jfif",
];

let index = 0;

function updateImage() {
    img.src = imgUrls[index];
}

nextBtn.addEventListener("click", () => {
    index = (index + 1) % imgUrls.length;
    updateImage();
});

prevBtn.addEventListener("click", () => {
    index = (index - 1 + imgUrls.length) % imgUrls.length;
    updateImage();
});

// 2
const form = document.getElementById("textForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const userInput = formData.get("message");

    console.log("მომხმარებლის შეტყობინება:", userInput);
});