import { useState } from "react";

export default function useInput(initalValue) {
  const [value, setValue] = useState(initalValue);

  const bind = {
    value,
    onChange: (e) => {
      console.log(e.target.value);
      setValue(e.target.value);
    },
  };
  const reset = () => {
    setValue("");
  };

  return [value, bind, reset];
}
