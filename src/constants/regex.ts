// Regular expression for name (all letters, both Latin and Cyrillic, apostrophe, hyphen, and spaces)
export const nameRegex = /^[\p{Alphabetic}'\-\s]+$/u;

// Regular expressions for each password requirement
export const upperCaseRegex = /[A-Z]/;
export const lowerCaseRegex = /[a-z]/;
export const numberRegex = /\d/;
export const specialCharRegex = /[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>/?]/;

// Phone number: +380001234567
export const phoneRegex = /^\+?\d{12}$/;

// RFC 5322 email regex (simplified without comments, allow Capital)
export const emailRegex =
  /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9]{2,}$/;
