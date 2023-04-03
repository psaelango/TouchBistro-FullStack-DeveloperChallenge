import { FC } from "react";
import Logo from "./Logo";
import TilteHeader from "./TitleHeader";

const TitleBar: FC = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo 
          hrefUrl= "https://www.touchbistro.com/"
          imageSrc= "https://images.businessnewsdaily.com/app/uploads/2022/08/01033953/touchbistro-logo.png"
          imageAlt= "Touch Bistro"
        />
        <TilteHeader 
          titleText= 'Fullstack Developer Coding Challenge'
          titleTM= '</>'
        />
      </div>
    </nav>

  )
}

export default TitleBar;
