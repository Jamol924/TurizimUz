function createEl(le, clas) {
    let element = document.createElement(le);
    for(let [key , val] of Object.entries(clas)){

        element.setAttribute(key, val);
    }
    return element;
};

function appen(el, att) {
    att.appendChild(el);
};


export{createEl, appen};