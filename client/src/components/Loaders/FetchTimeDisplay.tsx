import { FC } from "react";

interface FetchTimeDisplayProps {
  fetchInfo: string;
  timeTakenMs: number;
  fetchSpecialText?: string;
}

const FetchTimeDisplay: FC<FetchTimeDisplayProps> = ({ fetchInfo, timeTakenMs, fetchSpecialText }) => {
  return (
    <div className="mt-4">
      <h1 className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">{fetchInfo}
        <span className="pl-2 pr-2 underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">{fetchSpecialText}</span>
        <span className="text-blue-600 dark:text-blue-500">took {(timeTakenMs/1000).toFixed(2)} seconds</span>
      </h1>
    </div>
  );
}

export default FetchTimeDisplay;