class ProjectCard extends HTMLElement {
    connectedCallback() {
        var link = this.attributes.href.value;
        var img = this.attributes.src.value;
        var title = this.attributes.title.value;
        var text = this.attributes.text.value;

        this.innerHTML = `
        <a class="" href="${link}"> <!-- m-4 if not as a component -->
            <div class="h-full bg-gray-200 project-card-shadow rounded transition duration-500 ease-in-out transform hover:scale-105">
                <div><img class="rounded-t" src="${img}" alt=""></div>
                <div class="p-8">
                    <div class="text-xl font-bold">${title}</div>
                    <div class="pt-4">${text}</div>
                </div>
            </div>
        </a>`;
    };
};
customElements.define('project-card', ProjectCard);