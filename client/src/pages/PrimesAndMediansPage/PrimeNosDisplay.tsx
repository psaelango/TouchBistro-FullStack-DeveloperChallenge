import { FC, useEffect, useState, useContext } from "react";
import { PrimeNosContext, PrimeNosContextType } from "../../contexts/PrimeNosContext";
import { JSONTree } from 'react-json-tree';

const PrimeNosDisplay: FC = () => {
  const { primeNosInfo } = useContext(PrimeNosContext) as PrimeNosContextType;
  const [primeNos, setPrimeNos] = useState<number[] | undefined>([]);

  useEffect(() => {
    setPrimeNos(primeNosInfo?.primeNosList);
  }, [primeNosInfo]);

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <p className="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white">List of Prime numbers</p>
      <JSONTree data={primeNos || []} />
    </div>
  );
}

export default PrimeNosDisplay;