import validateTelephonNumbers from "../validateTelephonNumbers";

test.each([
    ["8 (927) 000-00-00", "+79270000000"],
    ["+7 960 888 00 00", "+79608880000"],
    ["+86 000 000 0000", "+860000000000"],
])("Testing telephon numbers", (number, expected) => {
    const recieved = validateTelephonNumbers(number);
    expect(recieved).toBe(expected);
});