import React from 'react'

import MiniProfile from '../components/MiniProfile'
import IconsSidebar from '../components/IconsSidebar'
import ComicCollection from '../components/ComicCollection'

function Sidebar() {
  return (
    <div>
        <MiniProfile/>
        <IconsSidebar/>
        <ComicCollection/>
    </div>
  )
}

export default Sidebar