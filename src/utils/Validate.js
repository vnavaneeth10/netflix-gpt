


export const checkValidData = (email, password) => {
    //passing parameters for the checkValidData function with params (email, password)

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
        //This will return whether isEmailValid true or not

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
        //This will return whether isPasswordValid true or not

    if(!isEmailValid) return "Email Id is not valid";
        //return result after checking isEmailValid is valid or not
    
    if(!isPasswordValid) return "Password is not valid"
        //return result after checking isPasswordValid is valid or not

    return null;
        //returning null if all other condition fails
    
}

