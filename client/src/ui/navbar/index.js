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
                    console.log('Hop ca click sur le menue burger et normalement sa l ouvre');
                    // Ajoutez ici le code à exécuter lors du clic
                    const templateFile2 = fetch("src/ui/menu_burger/template.html.inc");
                    templateFile2.then(response => response.text()).then(template2 => {
                        const burgerElement = document.querySelector("#burger");
                        burgerElement.innerHTML = template2;
                        burgerElement.style.display = 'flex';

                        const closeMenu = document.getElementById('close-menu');
                        if (closeMenu) {
                            closeMenu.addEventListener('click', () => {
                                console.log('Et la ca referme le menue normalement');
                                burgerElement.style.display = 'none';
                            });
                        }

                        // Add click event listener to all <li> elements
                        const listItems = burgerElement.querySelectorAll('#menu-burger-item');
                        listItems.forEach(item => {
                            item.addEventListener('click', () => {
                                console.log('La on click sur :', item.textContent);
                            });
                        });
                    });
                });
            }
        }, 0);

        return html;
    }
}

export { navView };