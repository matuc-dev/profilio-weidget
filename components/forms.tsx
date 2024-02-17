import { Cad } from '@/components/cards/card'
import { Cad2 } from '@/components/cards/card2'
import { ImageCard } from '@/components/cards/imageCard'
import React from 'react'
import { Cad3 } from './cards/card3'
import { Cad4 } from './cards/card4'

export const Forms = () => {
  return (
    <div className="">
      <div className="flex gap-2">
        <ImageCard />
        <Cad />
        <Cad3 />
      </div>
      <div className="flex gap-2 mt-2">
          <Cad2 />
          <ImageCard />
          <Cad4 />
        </div>
    </div>
  )
}
