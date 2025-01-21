export const nameValidations =(name)=>{
    if(!name){
        return "Name field cannot be empyt!!!"
    }
    if(name.length <3 ){
        return "Name should be more than 5 characters"
    }
    return null
}

export const emailValidations = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return "Email field cannot be empty!";
    }
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }
    return null;
  };


  export const passwordValidations = (password) => {
    if (!password) {
      return "Password field cannot be empty!";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    return null;
  };


  export const dateValidations = (date) => {
    if (!date) {
      return "Date field cannot be empty!";
    }
  return null
}