const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

// const creditCardRegex = /^[0-9]{16}$/;

// const zipCodeRegex = /^\d{5}(-\d{4})?$/;

const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;

const cvvRegex = /^[0-9]{3,4}$/;

export const validateField = (name, value) => {
  const trimmedValue = typeof value === "string" ? value.trim() : value;

  switch (name) {
    case "firstName":
    case "lastName":
      if (!trimmedValue) {
        return "This field is required";
      }
      if (trimmedValue.length < 2) {
        return "Must be at least 2 characters";
      }
      if (!/^[a-zA-Z\s-']+$/.test(trimmedValue)) {
        return "Only letters, spaces, hyphens, and apostrophes are allowed";
      }
      return "";

    case "email":
      if (!trimmedValue) {
        return "Email is required";
      }
      if (!emailRegex.test(trimmedValue)) {
        return "Please enter a valid email address";
      }
      return "";

    case "phone":
      if (!trimmedValue) {
        return "Phone number is required";
      }
      if (!phoneRegex.test(trimmedValue)) {
        return "Please enter a valid phone number";
      }
      return "";

    case "address":
      if (!trimmedValue) {
        return "Address is required";
      }
      if (trimmedValue.length < 5) {
        return "Please enter a complete address";
      }
      return "";

    case "city":
      if (!trimmedValue) {
        return "City is required";
      }
      if (trimmedValue.length < 2) {
        return "Please enter a valid city name";
      }
      return "";

    case "state":
      if (!trimmedValue) {
        return "State is required";
      }
      if (trimmedValue.length < 2) {
        return "Please enter a valid state";
      }
      return "";

    case "zipCode":
      if (!trimmedValue) {
        return "ZIP code is required";
      }
      //   if (!zipCodeRegex.test(trimmedValue)) {
      //     return "Please enter a valid ZIP code";
      //   }
      return "";

    case "cardNumber":
      if (!trimmedValue) {
        return "Card number is required";
      }
      //   if (!creditCardRegex.test(trimmedValue)) {
      //     return "Please enter a valid card number";
      //   }
      return "";

    case "cardExpiry":
      if (!trimmedValue) {
        return "Expiry date is required";
      }
      if (!expiryRegex.test(trimmedValue)) {
        return "Please enter a valid expiry date (MM/YY)";
      }
      const [month, year] = trimmedValue.split("/");
      const expiry = new Date(2000 + parseInt(year), parseInt(month) - 1);
      if (expiry < new Date()) {
        return "Card has expired";
      }
      return "";

    case "cardCVV":
      if (!trimmedValue) {
        return "CVV is required";
      }
      if (!cvvRegex.test(trimmedValue)) {
        return "Please enter a valid CVV";
      }
      return "";

    default:
      return "";
  }
};

export const formatters = {
  phone: (value) => {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return value;
  },

  cardNumber: (value) => {
    const cleaned = value.replace(/\D/g, "");
    const groups = cleaned.match(/(\d{1,4})/g);
    return groups ? groups.join(" ") : value;
  },

  cardExpiry: (value) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + "/" + cleaned.slice(2, 4);
    }
    return cleaned;
  },
};
