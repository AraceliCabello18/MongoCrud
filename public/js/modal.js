const myModal = new bootstrap.Modal(document.getElementById('modalContacto'))
const on = (element,event,selector, handler) =>{
    element.addEventListener(event,(e)=>{
        if (e.target.closest(selector)) {
            handler(e)
        }
    })
}
on(document, "click","#btnEditar", (e)=>{
    const fila =e.target.parentNode.parentNode
    edit_id.value = fila.children[0].innerHTML
    edit_nombre.value = fila.children[1].innerHTML
    edit_email.value = fila.children[2].innerHTML
    edit_telefono.value = fila.children[3].innerHTML
    myModal.show()
})