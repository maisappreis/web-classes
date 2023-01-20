
const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    ul: '#5e35b1',
    ol: '#fbc02d',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    header: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}


// vai criar um código para conseguir ver quais são as TAGS da página 'classeTag.html'

document.querySelectorAll('.tag').forEach(box => {
    const tagName = box.tagName.toLowerCase()

    box.style.borderColor = colors.get(tagName)

    if(!box.classList.contains('nolabel')) { // se o 'nolabel' NÃO estiver presente, executa essa função. label = rótulo/marcação
        const label = document.createElement('label') // ele está criando uma TAG HTML usando JavaScript
        label.style.backgroundColor = colors.get(tagName) // e ele vai colocar essa tag 'label' dentro de todos os elementos marcados com 'class=tag'
        label.innerHTML = tagName // 'tagName' é colocado dentro de 'label'.
        box.insertBefore(label, box.childNodes[0]) // ele vai inserir antes do primeiro elemento que estiver dentro do meu elemento box.
    }
})