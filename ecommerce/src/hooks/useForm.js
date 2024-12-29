import { useCallback, useState } from "react";
import { formatters, validateField } from "../utils/validation";

const useForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;

      const formatter = formatters[name];
      const formattedValue = formatter ? formatter(value) : value;

      setValues((prev) => ({
        ...prev,
        [name]: formattedValue,
      }));
      if (touched[name]) {
        const error = validateField(name, formattedValue);
        setErrors((prev) => ({
          ...prev,
          [name]: error,
        }));
      }
    },
    [touched]
  );

  const handleBlur = useCallback((event) => {
    const { name, value } = event.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};
    let isValid = true;

    Object.keys(values).forEach((name) => {
      const error = validateField(name, values[name]);
      if (error) {
        isValid = false;
        newErrors[name] = error;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [values]);

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm,
    resetForm,
    setValues,
  };
};

export default useForm;
