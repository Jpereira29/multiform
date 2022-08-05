import { FormProvider } from "./context/FormContext";
import { Router } from "./router";

export default function App() {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  )
}