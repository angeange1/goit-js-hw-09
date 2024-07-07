const form = document.querySelector(".feedback-form")
const email = form.elements.email
const message = form.elements.message

const storedInputs = JSON.parse(localStorage.getItem("feedback-form-state"))

email.value = (storedInputs && storedInputs.email) ? storedInputs.email : ""
message.value = (storedInputs && storedInputs.message) ? storedInputs.message : ""

form.addEventListener("input", addToLocal)

function addToLocal() {
    const values = {
    email: email.value.trim(),
    message: message.value.trim()
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(values))
}

form.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    if (email.value.trim() === "" || message.value.trim() === "") { alert("Please fill all the fields") }
    else {console.log(JSON.parse(localStorage.getItem("feedback-form-state")))}
    localStorage.removeItem("feedback-form-state")
    form.reset()    
}


// ??Послідовність у Обробці Даних: Ви добре зробили, що використали JSON.parse для перевірки збереження, але також важливо ефективніше обробляти потенційне значення null. Розгляньте використання тернарного оператора чи логічного І (&&) для спрощення присвоєння значень email.value та message.value.

// Використання localStorage.clear(): У вашому обробнику подання ви використовуєте localStorage.clear(), що очищає все сховище, а не тільки дані, пов'язані з формою. Це може несвідомо очистити інші дані, збережені в локальному сховищі. Краще використовувати localStorage.removeItem(), щоб видалити конкретні елементи.