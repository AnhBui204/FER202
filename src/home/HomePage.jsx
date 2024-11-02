import React, { useState } from "react"
import Homes from "../components/homes/Homes"
import PhimViet from "../components/PhimViet/Trending"
import Anime from "../components/upcoming/UpAnime"
import Action from "../components/upcoming/UpAction"

import { anime, recommended, action } from "../dummyData"

const HomePage = () => {
  const [items, setItems] = useState(anime);
  const [item, setItem] = useState(action);
  
  return (
    <>
      <Homes />
      <Anime items={items} title='Anime' />
      <Action items={item} title='Action' /> 
      <PhimViet />
      
    </>
  );
}
export default HomePage
// const [rec, setRec] = useState(recommended);
{/* <Upcomming items={rec} title='Recommended Movies' /> */}