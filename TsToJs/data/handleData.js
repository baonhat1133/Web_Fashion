function addlocal(cartPrd) {
    localStorage.setItem("cartProduct", JSON.stringify(cartPrd));
}
;
function getlocal() {
    if (localStorage.getItem("cartProduct")) {
        return JSON.parse(localStorage.getItem("cartProduct"));
    }
    else
        return [];
}
;
export { addlocal, getlocal };
