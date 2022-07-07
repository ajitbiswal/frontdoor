export const regexNameLength = new RegExp("^.{3,}$")
export const regexEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$")
export const regexPasswordLength = new RegExp("^.{8,}$")
export const regexPasswordNumber = new RegExp("^(?=.*[0-9]).+$")
export const regexPasswordUppercase = new RegExp("^(?=.*[A-Z]).+$")
export const regexPasswordSpecial = new RegExp("^(?=.*[$&+,:;=?@#|'`~<>_{}.^*()%!]).+$")


   





    // const validatePassword = (password: String) => {
    //     const length = password.length >= 8
    // } 