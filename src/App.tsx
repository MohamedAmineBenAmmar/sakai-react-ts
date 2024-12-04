import { LayoutProvider } from "@/layouts/context/layoutcontext";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "@/styles/layout/layout.scss";
import "@/styles/demo/Demos.scss";
import { RouterProvider } from "react-router";
import { router } from "@/router";

function App() {
  return (
    <>
      <PrimeReactProvider>
        <LayoutProvider>
          <RouterProvider router={router} />
        </LayoutProvider>
      </PrimeReactProvider>
    </>
  );
}

export default App;
