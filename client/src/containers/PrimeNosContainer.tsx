import { FC } from "react";
import Form from "../pages/PrimesAndMediansPage/PrimeNosForm";
import MedianDisplay from "../pages/PrimesAndMediansPage/MedianDisplay";
import PrimeNosDisplay from "../pages/PrimesAndMediansPage/PrimeNosDisplay";
import PrimeNosContextProvider from "../contexts/PrimeNosContext";

const PrimeNosContainer: FC = () => {
  return (
    <PrimeNosContextProvider>
      <div className="grid gap-4 grid-cols-3 grid-rows-1">
        <div><Form /></div>
        <div><PrimeNosDisplay /></div>
        <div><MedianDisplay /></div>
      </div>
    </PrimeNosContextProvider>
  );
}

export default PrimeNosContainer;
