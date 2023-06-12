const ingressos = []

selectCard = (selector) => {
    let element = document.querySelector(selector);
    element.classList.toggle("card-selected");

    if (ingressos.includes(selector)) {
        ingressos.pop(selector);
    }else{
        ingressos.push(selector);
    }
}
 showSelectedCards = () =>{
    if (ingressos.length > 0) {
        alert(`Ingressos Selecionado ${ingressos}`)
    }else{
        alert(`Nenhum ingresso selecionado`)
    }
}