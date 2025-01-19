const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        const isActive = this.classList.contains("active");

        Array.from(acc).forEach((el) => {
            el.classList.remove("active");
            const panel = el.nextElementSibling;
            if (panel) {
                panel.style.display = "none";
            }
        });

        if (!isActive) {
            this.classList.add("active");
            const panel = this.nextElementSibling;
            if (panel) {
                panel.style.display = "block";
            }
        }
    });
}