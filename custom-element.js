class ProjectCard extends HTMLElement {
    connectedCallback() {
        var link = this.attributes.href.value;
        var img = this.attributes.src.value;
        var title = this.attributes.title.value;
        var text = this.attributes.text.value;

        this.innerHTML = `
        <a class="" href="${link}"> <!-- m-4 if not as a component -->
            <div class="h-full bg-secondary project-card-shadow rounded transition duration-500 ease-in-out transform hover:scale-105">
                <div><img class="rounded-t" src="${img}" alt=""></div>
                <div class="p-8">
                    <div class="text-xl font-bold text-white">${title}</div>
                    <div class="pt-4 text-white">${text}</div>
                </div>
            </div>
        </a>`;
    };
};
customElements.define('project-card', ProjectCard);

class StartupCard extends HTMLElement {
    connectedCallback() {
        var link = this.attributes.href.value;
        var img = this.attributes.src.value;
        var title = this.attributes.title.value;
        var text = this.attributes.text.value;
        var marginBottom = this.attributes.mb ? this.attributes.mb.value : 'mb-16';

        this.innerHTML = `
            <div class="${marginBottom}">
                <div class="flex flex-col lg:flex-row mx-8 md:mx-24 transition duration-500 ease-in-out transform hover:scale-105">
                    <div class="flex-1">
                        <a href="${link}">
                            <img src="${img}" alt="${title} platform screenshot" class="w-full lg:rounded-tl-lg lg:rounded-bl-lg rounded-tl-lg rounded-tr-lg lg:rounded-tl-none lg:rounded-tr-none">
                        </a>
                    </div>
                    <div class="flex-1 bg-secondary p-8 lg:rounded-tr-lg lg:rounded-br-lg rounded-bl-lg rounded-br-lg lg:rounded-bl-none">
                        <h2 class="text-3xl font-bold text-white mb-4">${title}</h2>
                        <p class="text-white">${text}</p>
                    </div>
                </div>
            </div>`;
    };
};
customElements.define('startup-card', StartupCard);