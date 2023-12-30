const pinCodeValidations = (pin)=>/^(\d{4}|\d{6})$/.test(pin);

const nameValidation = (name)=>/^[a-zA-Z]+(?:[ -][a-zA-Z]+)*$/.test(name);

const addressValidation = (address)=>/^[a-zA-Z0-9\s,'.#-]+$/.test(address);

const districtValidation = (district)=>/^[a-zA-Z\s'-]+$/.test(district);

const mobileValidation = (number) => /^[6-9]\d{9}$/.test(number);


const addressFormValidation = (obj)=>{
    if( !nameValidation(obj?.name) ) return "name";
    if( !mobileValidation(obj?.phone) ) return "phone";
    if( !addressValidation(obj?.address) ) return "address";
    if( !districtValidation(obj?.district) ) return "district";
    if( !nameValidation(obj?.state) ) return "state";
    console.log(obj)
    if( !pinCodeValidations(obj?.pinCode) ) return "pincode";
    return false;
}

export {addressFormValidation}