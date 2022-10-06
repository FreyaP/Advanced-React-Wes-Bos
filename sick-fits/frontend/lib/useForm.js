import { useState } from 'react';

export default function useForm(initial = {}) {
  // create custom hook
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    // ensure inputs don't change to string
    let { value, name, type } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      [value] = e.target.files;
    }
    setInputs({
      // copy existing
      ...inputs,
      // overwrite new values
      [name]: value,
    });
  }
  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    // turn to array, map and set each value to empty, turn back into an object
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }

  // return to surface
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
