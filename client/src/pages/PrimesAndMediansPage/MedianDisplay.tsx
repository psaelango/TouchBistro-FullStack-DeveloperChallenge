import { FC, useEffect, useState, useContext, Fragment } from "react";
import { PrimeNosContext, PrimeNosContextType } from "../../contexts/PrimeNosContext";


interface MedianDataProps {
  data: number[]
}

const MedianData: FC<MedianDataProps> = ({ data }) => {
  return (
    <div className="px-6 pt-4 pb-2">
      {
        data.map((val, key) => (
          <span key={key} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{val}</span>
        ))
      }
    </div>
  );
}

const MedianDisplayTitle: FC = () => {
  return <p className="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white">Median will be displayed here</p>
};

const MedianDisplayInfo: FC = () => {
  return (
    <Fragment>
      <p className="text-sm text-gray-700 dark:text-gray-400">
        For an even number of elements [2, 3, 5, 7] there will be two medians [3, 5] values
      </p>
      <br />
      <p className="text-sm text-gray-700 dark:text-gray-400">
        For an odd number of elements [2, 3, 5, 7, 11] there will be only one median [5] value
      </p>
    </Fragment>
  )
}

const MedianDisplay: FC = () => {
  const { primeNosInfo } = useContext(PrimeNosContext) as PrimeNosContextType;
  const [medianData, setMedianData] = useState<number[] | undefined>([]);

  useEffect(() => {
    setMedianData(primeNosInfo?.listMedians);
  }, [primeNosInfo])

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <MedianDisplayTitle />
      <MedianDisplayInfo />
      <MedianData data={medianData || []} />
    </div>
  );
};

export default MedianDisplay;
