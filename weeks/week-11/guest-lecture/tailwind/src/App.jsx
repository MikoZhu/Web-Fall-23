import { TailwindUi } from "./components/TailwindUi";
import { BeakerIcon } from "@heroicons/react/24/solid";
import { FlowbiteNavBar } from "./components/FlowbiteNavBar";
export const App = () => {
  return (
    <>
      <h1 className="text-red-100 text-4xl mb-4 font-poppins">Vite + React</h1>
      <p className="text-4xl text-diego-500 mb-4 hover:text-blue-600">
        This simple to instAll :)
      </p>
      <BeakerIcon className="h-6 w-6 text-red-500 mb-4" />
      <TailwindUi />
      <FlowbiteNavBar />
    </>
  );
};
