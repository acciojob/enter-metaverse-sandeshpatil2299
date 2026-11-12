const enterBtn = document.querySelector("#enterBtn");

enterBtn.addEventListener("click", () => {
    const status = document.querySelector("#status");

    const heading = document.createElement("h1");
    heading.id = "status";                   // keep the id so tests can still find it
    heading.textContent = "Entered Metaverse";

    status.replaceWith(heading);
});