import { genericRenderer } from "../../lib/utils.js";

const templateFile = await fetch("src/ui/navbar/template.html.inc");
const template = await templateFile.text();

let navView = {
    render: function (data) {
        let html = "";
        html = template;

        // Attendre que le DOM soit mis à jour avec le template
        setTimeout(() => {
            const burgerLogo = document.getElementById('burger-logo');
            if (burgerLogo) {
                burgerLogo.addEventListener('click', () => {
                    console.log('Burger logo clicked!');
                    // Ajoutez ici le code à exécuter lors du clic
                    const templateFile2 = fetch("src/ui/menu_burger/template.html.inc");
                    templateFile2.then(response => response.text()).then(template2 => {
                        const burgerElement = document.querySelector("#burger");
                        burgerElement.innerHTML = template2;
                        burgerElement.style.display = 'flex';

                        const closeMenu = document.getElementById('close-menu');
                        if (closeMenu) {
                            closeMenu.addEventListener('click', () => {
                                burgerElement.style.display = 'none';
                            });
                        }
                    });
                });
            }
        }, 0);

        return html;
    }
}

export { navView };