// Form validation utilities

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return 'Email is required';
  if (!emailRegex.test(email)) return 'Please enter a valid email address';
  return '';
};

export const validatePhone = (phone) => {
  // Accept formats: +923337627457, 03337627457, +92-333-7627457, etc.
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,5}[-\s.]?[0-9]{1,5}$/;
  if (!phone) return ''; // Phone is optional in contact form
  if (!phoneRegex.test(phone)) return 'Please enter a valid phone number';
  return '';
};

export const validateRequired = (value, fieldName) => {
  if (!value || value.trim() === '') {
    return `${fieldName} is required`;
  }
  return '';
};

export const validateName = (name, fieldName = 'Name') => {
  if (!name || name.trim() === '') {
    return `${fieldName} is required`;
  }
  if (name.trim().length < 2) {
    return `${fieldName} must be at least 2 characters`;
  }
  if (name.trim().length > 50) {
    return `${fieldName} must be less than 50 characters`;
  }
  return '';
};

export const validateMessage = (message) => {
  if (!message || message.trim() === '') {
    return 'Message is required';
  }
  if (message.trim().length < 10) {
    return 'Message must be at least 10 characters';
  }
  if (message.trim().length > 1000) {
    return 'Message must be less than 1000 characters';
  }
  return '';
};

// Validate entire contact form
export const validateContactForm = (formData) => {
  const errors = {};

  const firstNameError = validateName(formData.firstName, 'First name');
  if (firstNameError) errors.firstName = firstNameError;

  const lastNameError = validateName(formData.lastName, 'Last name');
  if (lastNameError) errors.lastName = lastNameError;

  const emailError = validateEmail(formData.email);
  if (emailError) errors.email = emailError;

  const phoneError = validatePhone(formData.phone);
  if (phoneError) errors.phone = phoneError;

  const messageError = validateMessage(formData.message);
  if (messageError) errors.message = messageError;

  return errors;
};

// Validate booking/quote form
export const validateQuoteForm = (formData, step) => {
  const errors = {};

  if (step === 1) {
    const nameError = validateName(formData.name, 'Full name');
    if (nameError) errors.name = nameError;

    const emailError = validateEmail(formData.email);
    if (emailError) errors.email = emailError;

    const phoneError = validateRequired(formData.phone, 'Phone number');
    if (phoneError) errors.phone = phoneError;
    else {
      const phoneFormatError = validatePhone(formData.phone);
      if (phoneFormatError) errors.phone = phoneFormatError;
    }
  }

  if (step === 2) {
    if (!formData.serviceType) errors.serviceType = 'Please select a service';
    if (!formData.budget) errors.budget = 'Please select a budget range';

    const descriptionError = validateMessage(formData.description);
    if (descriptionError) errors.description = descriptionError.replace('Message', 'Project description');
  }

  return errors;
};
