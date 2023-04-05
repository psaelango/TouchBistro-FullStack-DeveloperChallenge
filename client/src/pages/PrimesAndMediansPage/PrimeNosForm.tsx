import React, { FC, FormEvent, useState, useContext } from "react";
import { PrimeNosInfo, PrimeNosContextType, PrimeNosContext } from "../../contexts/PrimeNosContext";
import FormInput from "../../components/Form/FormInput";
import LongWaitLoader from "../../components/Loaders/LongWaitLoader";
import FetchTimeDisplay from "../../components/Loaders/FetchTimeDisplay";

const PrimeNosForm: FC = () => {
  const PRIME_MEDIAN_URL = process.env.REACT_APP_PRIME_MEDIAN_SIEVE_ALGO_URL || '';

  const [inputVal, setInputVal] = useState(0);
  const [loadingData, setLoadingData] = useState(false);
  const [fetchTime, setFetchTime] = useState(0);
  const { primeNosInfo, updatePrimeNosInfo } = useContext(PrimeNosContext) as PrimeNosContextType;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoadingData(true);
    setFetchTime(0);
    var startTime = (new Date()).getTime();
    const response: Response = await fetch(`${PRIME_MEDIAN_URL}${inputVal}`);
    const jsonData = await response.json();
    if (response.status !== 200) {
      alert(JSON.stringify(jsonData));
      return;
    }
    var endTime = (new Date()).getTime();
    setFetchTime(endTime - startTime);
    setLoadingData(false);

    const updatedPrimeNosInfo: PrimeNosInfo = {
      maxNumRequest: inputVal,
      primeNosList: jsonData.primeNumbers,
      listMedians: jsonData.median
    };
    updatePrimeNosInfo(updatedPrimeNosInfo);
  };

  const reload = () => {
    setInputVal(0);
    setFetchTime(0);
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
        data-testid="maxPrimeSearch"
        autoFocus={true}
        value={inputVal}
        onChange={(e) => setInputVal(Number(e.target.value))}
        min={2}
        max={1000000}
        required
        disabled={loadingData}
      />
      
      <div className="relative items-center block max-w-sm p-6 dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700">
        {
          loadingData ? <LongWaitLoader /> : (
            <React.Fragment>
              <button data-testid="maxPrimeSubmit" type="submit">Get Primes</button>
              <span>
                <button data-testid="maxPrimeClear" type="button" onClick={reload}>Clear</button>
              </span>
            </React.Fragment>
          )
        }
      </div>

      {
        fetchTime !==0 && (
          <FetchTimeDisplay 
            fetchInfo="Total time taken for getting prime numbers upto"
            fetchSpecialText={(primeNosInfo.maxNumRequest).toString()}
            timeTakenMs={fetchTime}
          />
        )
      }

    </form>
  )
}

export default PrimeNosForm;