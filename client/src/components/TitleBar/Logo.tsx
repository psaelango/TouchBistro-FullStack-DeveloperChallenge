import { FC } from "react";

interface LogoProps {
  hrefUrl: string;
  imageSrc: string;
  imageAlt?: string;
}

const Logo: FC<LogoProps> = ({ hrefUrl, imageSrc, imageAlt }) => {
  return (
    <a className="flex items-center" href={hrefUrl} >
      <img className="h-12 mr-3" alt={imageAlt} src={imageSrc}/>
    </a>
  )
}

export default Logo;