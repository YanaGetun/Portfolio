const archiveTrack = document.querySelector(".archive-track");
const archivePrev = document.querySelector(".archive-prev");
const archiveNext = document.querySelector(".archive-next");

if (archiveTrack && archivePrev && archiveNext) {

    const archiveStep = 278;

    const originalItems = Array.from(
        archiveTrack.querySelectorAll(".archive-item")
    );

    const itemCount = originalItems.length;

    // Делаем несколько копий ленты
    originalItems.forEach(item => {
        archiveTrack.appendChild(item.cloneNode(true));
    });

    originalItems.forEach(item => {
        archiveTrack.appendChild(item.cloneNode(true));
    });


    function getSetWidth() {
        const first = archiveTrack.children[0];
        const nextSet = archiveTrack.children[itemCount];

        return nextSet.offsetLeft - first.offsetLeft;
    }


    const setWidth = getSetWidth();

    // Начинаем с первой группы
    archiveTrack.scrollLeft = setWidth;


    function normalizePosition() {

        if (archiveTrack.scrollLeft >= setWidth * 2) {
            archiveTrack.scrollLeft -= setWidth;
        }

        if (archiveTrack.scrollLeft <= 0) {
            archiveTrack.scrollLeft += setWidth;
        }

    }


    archiveNext.addEventListener("click", () => {

        archiveTrack.scrollBy({
            left: archiveStep,
            behavior: "smooth"
        });

        setTimeout(normalizePosition, 450);

    });


    archivePrev.addEventListener("click", () => {

        archiveTrack.scrollBy({
            left: -archiveStep,
            behavior: "smooth"
        });

        setTimeout(normalizePosition, 450);

    });

}