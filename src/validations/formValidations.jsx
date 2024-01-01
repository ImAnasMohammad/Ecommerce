const pinCodeValidations = (pin)=>/^(\d{4}|\d{6})$/.test(pin);

const nameValidation = (name)=>/^[a-zA-Z]+(?:[ -][a-zA-Z]+)*$/.test(name);

const emailValidation = (email)=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const addressValidation = (address)=>/^[a-zA-Z0-9\s,'.#-]+$/.test(address);

const districtValidation = (district)=>/^[a-zA-Z\s'-]+$/.test(district);

const mobileValidation = (number) => /^[6-9]\d{9}$/.test(number);


const addressFormValidation = (obj)=>{
    if( !nameValidation(obj?.name) ) return "name";
    if( !mobileValidation(obj?.phone) ) return "phone";
    if( !addressValidation(obj?.address) ) return "address";
    if( !districtValidation(obj?.district) ) return "district";
    if( !nameValidation(obj?.state) ) return "state";
    if( !pinCodeValidations(obj?.pinCode) ) return "pincode";
    return false;
}

const profileValidation = (obj)=>{

    if( !nameValidation(obj?.fname) ) return "fname";
    if( !nameValidation(obj?.lname) ) return "lname";
    if( !mobileValidation(obj?.phone) ) return "phone";
    if( !emailValidation(obj?.email) ) return "email";
    if( !nameValidation(obj?.state) ) return "state";
    if( !(obj?.gender===0 || obj?.gender===1) ) return "gender";
    return false;
}

export {addressFormValidation,profileValidation}