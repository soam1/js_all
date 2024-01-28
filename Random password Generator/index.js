
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = `abcdefghijklmnopqrstuvwxyz`;
    const uppercaseChars = `ABCDEFGHIJKLMNOPQRSTUVZXYZ`;
    const numberChars = `0123456789`;
    const symbolChars = `!@#$%^&*_-`
    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";
    // console.log(allowedChars);
    if (length <= 0) {
        return `password length must be atleast 8`;
    }
    if (allowedChars === 0) {
        return `At least one set of characters need to be selected`;
    }
    for (let i = 0; i < length; ++i) {
        let random = Math.floor(Math.random() * allowedChars.length) + 1;
        password += allowedChars.charAt(random);
    }

    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
console.log(`Generated password ${password}`);
