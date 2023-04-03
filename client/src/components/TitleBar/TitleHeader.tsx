import { FC } from "react";

interface TilteHeaderProps {
  titleText: string;
  titleTM?: string;
}

const TilteHeader: FC<TilteHeaderProps> = ({ titleText, titleTM }) => {
  return (
    <h1 className="flex items-center text-2xl font-mono dark:text-white">
      {titleText}
      <span className="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
        {titleTM}
      </span>
    </h1>
  );
}

export default TilteHeader;