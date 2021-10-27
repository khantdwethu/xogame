const xuserInput = document.getElementById("x_user");
const ouserInput = document.getElementById("o_user");

function InputValid(value1, value2) {
    return ((value1.trim().length != 0) && (value2.trim().length != 0)) ? true : false;
}

function setLoaclStorage(usrDetail) {
    localStorage.setItem('usrOne', `${usrDetail.usrOne}`);
    localStorage.setItem('usrTwo', `${usrDetail.usrTwo}`);
}

function isValidSumbitDetail() {
    xuserInputValue = xuserInput.value;
    ouserInputValue = ouserInput.value;
    if (InputValid(xuserInputValue, ouserInputValue)) {
        setLoaclStorage({
            'usrOne': xuserInputValue,
            'usrTwo': ouserInputValue
        });
        return true;
    } else {
        event.preventDefault();
        alert("Check Plyer Name")
        return false;
    }


}