import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");

form.addEventListener("input", throttle(function () {
    let email = form.email.value;
    let message = form.message.value;
    let obj = JSON.stringify({ email: email, message: message });
    localStorage.setItem("feedback-form-state", obj);
    console.log(obj);
}, 500));
if (localStorage.getItem("feedback-form-state")) {
    let obj = JSON.parse(localStorage.getItem("feedback-form-state"));
    form.email.value = obj.email;
    form.message.value = obj.message;
}
form.addEventListener("submit", function() {
    console.log({email: form.email.value, message: form.message.value});
    form.email.value = "";
    form.message.value = "";
    localStorage.clear();
 });