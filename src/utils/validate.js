export const ValidData = (email, password) => {


    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // const isNameValid = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(name);


    if(!isEmailValid) return "Email is not Valid";

    if(!isPasswordValid) return "Password is not Valid";

    // if(!isNameValid) return "Name is not Valid";


    return null;


};