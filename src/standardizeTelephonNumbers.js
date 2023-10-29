export default function standardizeTelephonNumbers(phoneNumber) {
    const standardizedNumber = phoneNumber.replace(/[()_ -]/g, '').replace(/^[8]/, '+7');
    return standardizedNumber;
}
