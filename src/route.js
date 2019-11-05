import {templateLogin} from "./views/templateLogin.js";
import {templateGoogle} from "./views/templateGoogle.js";
import {templateHome} from "./views/templateHome.js";
import {templateRegister} from "./views/templateRegister.js";

const changeRouter = (hash) => {
    if(hash === ''){
        return showTemplate('#/home');
    }

    if(hash === '#/login'){
        return showTemplate(hash);
    }
    if(hash === '#/loginGoogle'){
        return showTemplate(hash);
    }
    if(hash ==='#/register'){
        return showTemplate(hash);
    }
};

const showTemplate = (hash) =>{
    const router = hash.substring(2);
    const containerRoot= document.getElementById("root");
    containerRoot.innerHTML = "";

switch (router){
    case 'login':
        containerRoot.appendChild(templateLogin());
    break;

    case 'loginGoogle':
        containerRoot.appendChild(templateGoogle());
    break;

    case 'home':
        containerRoot.appendChild(templateHome());
    break;

    case 'register':
        containerRoot.appendChild(templateRegister());
    break;

    default:
        containerRoot.innerHTML = `<h3>Error 404</h3>`;
}
}

export const initRouter = () =>{
    window.addEventListener('load', changeRouter(window.location.hash))

    if('onhashchange' in window){
        window.onhashchange = () => {
          changeRouter(window.location.hash);  
        }
        
    }
}