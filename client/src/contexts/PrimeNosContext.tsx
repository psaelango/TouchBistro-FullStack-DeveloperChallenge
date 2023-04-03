import { FC, useState, createContext, PropsWithChildren } from "react";

export interface PrimeNosInfo {
  maxNumRequest: number,
  primeNosList: number[],
  listMedians: number[]
}

export interface PrimeNosContextType {
  primeNosInfo: PrimeNosInfo;
  updatePrimeNosInfo: (info: PrimeNosInfo) => void;
}

export const PrimeNosContext = createContext<PrimeNosContextType | null>(null);

const PrimeNosContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [primeNosInfo, setPrimeNosInfo] = useState<PrimeNosInfo>({
    maxNumRequest: 0,
    primeNosList: [],
    listMedians: []
  });

  const updatePrimeNosInfo = (info: PrimeNosInfo) => {
    setPrimeNosInfo(info);
  }

  return (
    <PrimeNosContext.Provider value={{primeNosInfo, updatePrimeNosInfo}}>
      {children}
    </PrimeNosContext.Provider>
  )
};

export default PrimeNosContextProvider;