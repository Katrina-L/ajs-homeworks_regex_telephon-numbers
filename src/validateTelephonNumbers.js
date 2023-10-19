export default function validateTelephonNumbers(number) {
    number = number.replace(/[()_ -]/g, '');
    number = number.replace(/^[8]/, '+7');
    return number;
}