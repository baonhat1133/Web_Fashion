export function addlocal(cartPrd) {
    localStorage.setItem("cartProduct", JSON.stringify(cartPrd));
}
;
export function addlocalTotalPrd(total) {
    localStorage.setItem("totalProduct", JSON.stringify(total));
}
export function getlocal() {
    if (localStorage.getItem("cartProduct")) {
        return JSON.parse(localStorage.getItem("cartProduct"));
    }
    else
        return [];
}
;
export function getlocalTotalPrd() {
    if (localStorage.getItem("totalProduct")) {
        return JSON.parse(localStorage.getItem("totalProduct"));
    }
    else
        return 0;
}
;
