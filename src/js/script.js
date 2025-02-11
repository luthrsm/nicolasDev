$(document).ready(function () {
    $(".on").click(function () {
        $('.alert').css({
            'transform': 'translateX(0)',
        });
    });

    $(".close").click(function () {
        $('.alert').css({
            'transform': 'translateX(150%)',
        });
    });

    $(".out").click(function () {
        $('.alert').css({
            'transform': 'translateX(150%)',
        });
    })
})


document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            id: 1,
            title: "Magic Coding",
            media: [
                { type: "video", src: "src/videos/magicCoding.mp4" },

            ],
            buttons: [
                { text: "Acessar Site", link: "https://magic-coding.vercel.app" },
                { text: "GitHub", link: "https://github.com/luthrsm/magicCoding" },
            ],
        },
        {
            id: 2,
            title: "Hemoglobina",
            media: [
                { type: "video", src: "src/videos/doadorHemoglobina.mp4" },
                { type: "video", src: "src/videos/hemocentroHemoglobina.mp4" },
            ],
            buttons: [
                { text: "Acessar App", link: "https://drive.google.com/file/d/1amvaaObQgw-b8m4UFx28V1gbj2mlUpc-/view?usp=drive_link" },
                { text: "Repositório GitHub", link: "https://github.com/luthrsm/Hemoglobina" },
            ],
        },
        {
            id: 3,
            title: "Preservateen",
            media: [
                { type: "video", src: "src/videos/preservateen.mp4" },
            ],
            buttons: [
                { text: "Acessar Site", link: "https://preservateen.vercel.app" },
                { text: "Repositório GitHub", link: "https://github.com/luthrsm/PreservaTeen" },
            ],
        },
        {
            id: 4,
            title: "InAlert",
            media: [
                { type: "video", src: "src/videos/inalert.mp4" },
            ],
            buttons: [
                { text: "Repositório GitHub", link: "https://github.com/luthrsm/inAlert" },
            ],
        },
        {
            id: 5,
            title: "RTS Engenharia Elétrica",
            media: [
                { type: "video", src: "src/videos/rts.mp4" },
            ],
            buttons: [
                { text: "Acessar Site", link: "https://rtsengenharia.vercel.app" },
                { text: "GitHub", link: "https://github.com/luthrsm/rtsEngenharia" },
            ],
        },
        // {
        //     id: 6,
        //     title: "Triágil",
        //     media: [
        //         { type: "video", src: "src/videos/triagil.mp4" },
        //     ],
        //     buttons: [
        //         { text: "Acessar Site", link: "https://site1.com" },
        //         { text: "Repositório GitHub", link: "https://github.com/luthrsm/Triagil" },
        //     ],
        // },

        {
            id: 6,
            title: "EC Contabilidade & Assessoria Empresarial ",
            media: [
                { type: "image", src: "src/img/ec1.png" },
                { type: "image", src: "src/img/ec2.png" },
                { type: "image", src: "src/img/ec3.png" },
                { type: "image", src: "src/img/ec4.png" },
                { type: "image", src: "src/img/ec5.png" },
                { type: "image", src: "src/img/ec6.png" },

            ],
            buttons: [
                
            ],
        },

        {
            id: 7,
            title: "TecnoStore",
            media: [
                { type: "image", src: "src/img/TS1.png" },
                { type: "image", src: "src/img/TS2.png" },
                { type: "image", src: "src/img/TS3.png" },
                { type: "image", src: "src/img/TS4.png" },
                { type: "image", src: "src/img/TS5.png" },
                { type: "image", src: "src/img/TS6.png" },
                { type: "image", src: "src/img/TS7.png" },
            ],
            buttons: [
                
            ],
        },
    ];

    const modal = document.getElementById("projectModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalCarousel = document.getElementById("modalCarousel");
    const closeModal = document.querySelector(".closeModal");
    let swiper; // Variável para o Swiper

    // Função para abrir o modal
    document.querySelectorAll(".seeMore").forEach((button) => {
        button.addEventListener("click", (event) => {
            const projectId = event.target.closest(".cardProject").dataset.projectId;
            const project = projects.find((proj) => proj.id == projectId);

            if (project) {
                modalTitle.textContent = project.title;

                // Limpa slides anteriores
                modalCarousel.innerHTML = "";

                // Adiciona slides ao carrossel
                project.media.forEach((item) => {
                    let slide;
                    if (item.type === "image") {
                        slide = `<div class="swiper-slide">
                                    <img src="${item.src}" alt="${project.title}" style="width: 100%; border-radius: 8px;">
                                 </div>`;
                    } else if (item.type === "video") {
                        slide = `<div class="swiper-slide">
                                    <video controls style="width: 100%; border-radius: 8px;">
                                        <source src="${item.src}" type="video/mp4">
                                        Seu navegador não suporta vídeos.
                                    </video>
                                 </div>`;
                    }
                    modalCarousel.innerHTML += slide;
                });

                // Atualiza os botões
                const buttonsContainer = document.getElementById("modalButtons");
                buttonsContainer.innerHTML = ""; // Limpa botões anteriores
                project.buttons.forEach(button => {
                    const btn = document.createElement("button");
                    btn.innerText = button.text;
                    btn.onclick = () => window.open(button.link, "_blank"); // Abre o link em uma nova aba
                    buttonsContainer.appendChild(btn);
                });

                // Inicializa ou atualiza o Swiper
                if (swiper) {
                    swiper.update(); // Atualiza o Swiper com os novos slides
                } else {
                    swiper = new Swiper(".swiper-container", {
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                        loop: true,
                    });
                }

                // Exibe o modal
                modal.classList.remove("hidden");
            }
        });
    });

    // Fecha o modal
    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    // Fecha o modal ao clicar fora dele
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.add("hidden");
        }
    });
});

