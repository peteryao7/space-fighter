function component() {
    let element = document.createElement('div');
    element.innerHTML = "what's up ayy";
    return element;
}

document.body.appendChild(component());