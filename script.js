// Форма обратной связи

const form = document.getElementById("contact-form");
const statusText = document.getElementById("form-status");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        statusText.textContent = "Заполните все поля.";
        statusText.style.color = "#D2232A";
        return;
    }

    if (!email.includes("@")) {
        statusText.textContent = "Введите корректный email.";
        statusText.style.color = "#D2232A";
        return;
    }

    const subject = encodeURIComponent("Сообщение с портфолио");

    const body = encodeURIComponent(
        "Имя: " + name +
        "\nEmail: " + email +
        "\nСообщение: " + message
    );

    statusText.textContent =
        "Сообщение подготовлено. Отправьте его через почтовое приложение.";

    statusText.style.color = "#1A7CF5";

    window.location.href =
        "mailto:taya@blum.su?subject=" + subject + "&body=" + body;
});
// Интерактивная фотогалерея

const overlay = document.createElement("div");
overlay.className = "lightbox";

const largeImage = document.createElement("img");
largeImage.alt = "Увеличенная фотография";

overlay.appendChild(largeImage);
document.body.appendChild(overlay);

document.querySelectorAll(".gallery img, .holland-preview, img[src='img/airalert.jpg']").forEach(function (image) {
    image.addEventListener("click", function () {
        largeImage.src = image.src;
        largeImage.alt = image.alt;
        overlay.classList.add("active");
    });

});

overlay.addEventListener("click", function () {
    overlay.classList.remove("active");
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        overlay.classList.remove("active");
    }
});