// import { ProductData } from "./data/product.js";
// import { ProductView } from "./ui/product/index.js";
import { navView } from "./ui/navbar/index.js";

// import '../dist/style.css';


let C = {}


C.init = async function () {
    // let data = await ProductData.fetchAll();

    // let html = ProductView.render(data);
    // document.querySelector("#main").innerHTML = html;

    let html2 = navView.render();
    document.querySelector("#nav").innerHTML = html2;
}


C.init();