const form = document.forms.example
const actives = document.querySelectorAll(`.active_box`)
const user = {}

form.onsubmit = (e) => {
    e.preventDefault()
    const fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })
    console.log(user);
    alert(`Данные сохранены`)
}
