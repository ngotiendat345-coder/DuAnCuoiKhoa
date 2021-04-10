import React from "react";
import { useForm, FormProvider } from "react-hook-form";
function Form({ children }) {
  const methods = useForm();
  const { handleSubmit, errors, reset } = methods;
  console.log(errors);
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          reset();
        })}
      >
        {children}
      </form>
    </FormProvider>
  );
}
export default Form;
