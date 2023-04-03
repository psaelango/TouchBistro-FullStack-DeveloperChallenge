import React, { FC, FormEvent, useState, useContext } from "react";
import { PrimeNosInfo, PrimeNosContextType, PrimeNosContext } from "../../contexts/PrimeNosContext";
import FormInput from "../../components/Form/FormInput";

const Form: FC = () => {
  const [inputVal, setInputVal] = useState(0);
  const { updatePrimeNosInfo } = useContext(PrimeNosContext) as PrimeNosContextType;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch(`http://127.0.0.1:8000/api/prime/median/${inputVal}`);
    const jsonData = await response.json();

    const updatedPrimeNosInfo: PrimeNosInfo = {
      maxNumRequest: inputVal,
      primeNosList: jsonData.primeNumbers,
      listMedians: jsonData.median
    };
    updatePrimeNosInfo(updatedPrimeNosInfo);
  };

  const reload = () => {
    setInputVal(0);
    const updatedPrimeNosInfo: PrimeNosInfo = {
      maxNumRequest: 0,
      primeNosList: [],
      listMedians: []
    };
    updatePrimeNosInfo(updatedPrimeNosInfo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        type="number"
        label="Find Prime Numbers Upto"
        name="primeUpto"
        autoFocus={true}
        value={inputVal}
        onChange={(e) => setInputVal(Number(e.target.value))}
        min={2}
        max={1000000}
        required
      />
      
      <div className="relative items-center block max-w-sm p-6 dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700">
        <button type="submit">Get Primes</button>
        <span>
          <button type="button" onClick={reload}>Clear</button>
        </span>
      </div>
    </form>
  )
}

export default Form;