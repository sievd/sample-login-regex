class FormValidator {

  constructor() {
    this.usernameElem = document.getElementById("username");
    this.passwordElem = document.getElementById("password");
    this.modalElem = document.getElementById("dialog");
    this.feedbackElem = document.getElementById("text-dialog");
    this.seeIconElem = document.getElementById("see-icon");
    this.notSeeIconElem = document.getElementById("not-see-icon");
  }

  openDialog = () => {
    this._resetInputs();
    this.modalElem.style.display = "block";
  }

  _resetInputs = () => {
    this.usernameElem.value = "";
    this.passwordElem.value = "";
  }

  closeDialog = () => {
    this.modalElem.style.display = "none";
  }

  showPassword = () => {
    this.seeIconElem.style.display = "none";
    this.notSeeIconElem.style.display = "inline-block";
    this.passwordElem.type = "text";
  }

  hidePassword = () => {
    this.seeIconElem.style.display = "inline-block";
    this.notSeeIconElem.style.display = "none";
    this.passwordElem.type = "password";
  }

  validateInputs = () => {
    const isUsernameValid = this._validateUsername(this.usernameElem.value);
    const isPasswordValid = this._validatePassword(this.passwordElem.value);
    if (!(isUsernameValid && isPasswordValid)) {
      this.feedbackElem.innerHTML = "Oh, something went wrong! :-("
    } else {
      this.feedbackElem.innerHTML = "Very good! :-)"
    }
    this.openDialog();
  }
  
  _validateUsername = (value) => {
    const startsWithALetter = value.match(/^[a-zA-Z]/) !== null? true : false;
    const hasBetween3And12Chars = value.length >= 3 && value.length <= 12;
    return startsWithALetter && hasBetween3And12Chars;
  } 
  
  _validatePassword = (value) => {
    const constainsANumber = value.match(/[0-9]/) !== null? true : false;
    const constainsAnUppercaseLetter = value.match(/[A-Z]/) !== null? true : false;
    const constainsALowercaseLetter = value.match(/[a-z]/) !== null? true : false;
    const containsASpecialChar = value.match(/[?!]/) !== null? true : false;
    const hasBetween8And12Chars = value.length >= 8 && value.length <= 12
    return constainsANumber && constainsAnUppercaseLetter 
      && constainsALowercaseLetter  && containsASpecialChar && hasBetween8And12Chars;
  }
}

const formValidator = new FormValidator();
document.getElementById("submit").addEventListener("click", formValidator.validateInputs);
document.getElementById("close").addEventListener("click", formValidator.closeDialog);
document.getElementById("close-button").addEventListener("click", formValidator.closeDialog);
document.getElementById("dialog").addEventListener("click", formValidator.closeDialog);
document.getElementById("see-icon").addEventListener("click", formValidator.showPassword);
document.getElementById("not-see-icon").addEventListener("click", formValidator.hidePassword);
