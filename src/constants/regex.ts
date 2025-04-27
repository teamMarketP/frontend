// Regular expression for name (all letters, both Latin and Cyrillic, apostrophe, hyphen)
// export const nameRegex = /^[\p{Alphabetic}'-]*$/u;

// Regular expression for name (all letters, both Latin and Cyrillic, apostrophe, hyphen, and spaces)
export const nameRegex = /^[\p{Alphabetic}'\-\s]*$/u;

// Regular expressions for each password requirement
export const upperCaseRegex = /[A-Z]/;
export const lowerCaseRegex = /[a-z]/;
export const numberRegex = /\d/;
export const specialCharRegex = /[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>/?]/;

// Phone number mask: +38 (XXX) XXX-XX-XX
// export const phoneRegex = /^\+38\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;

// Phone number mask: +380001234567
export const phoneRegex = /^\+?\d{12}$/;

// RFC 5322 email regex (simplified without comments, no Capital)
// export const emailRegex =
//   /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+([a-zA-Z0-9]{2,})$/;

export const emailRegex =
  /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9]{2,}$/;
