/*
 * Строка типо “file:///<path-to-your-project>/index.html?firstName=Иван&lastName=Иванов&email=example@mail.com&gender=male”
 * Не работает в хроме. Я проверял все в Mozilla.
 */
window.onload = function() {
    let search = new URLSearchParams(location.search);

    if (search.has("firstName")) {
        document.getElementById("first-name").value = search.get("firstName");
    }

    if (search.has("lastName")) {
        document.getElementById("last-name").value = search.get("lastName");
    }

    if (search.has("email")) {
        document.getElementById("email").value = search.get("email");
    }

    if (search.get("gender") === "male") {
        document.getElementById("gender-male").checked = true;
    }
}
