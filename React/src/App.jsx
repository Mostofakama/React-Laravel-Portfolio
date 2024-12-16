import PortfolioBanner from "./component/banner/Banner"
import FeaturedProjects from "./component/FeaturedProjects/FeaturedProjects"
import Menu from "./component/header/menu"
import WhatIDo from "./component/Whatdo/Whatdo"

function App() {
  // https://preview.themeforest.net/item/portfolify-personal-portfolio-next-js-template/full_screen_preview/55680783?_ga=2.60608045.1062014689.1734091317-571427135.1711901163
  return (
    <>
    <Menu />
    <PortfolioBanner />
    <WhatIDo />
    <FeaturedProjects />
    </>
  )
}

export default App
