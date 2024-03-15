import React from "react"
import { recommand} from "../assets/data/data"
import { Cardsm } from "../common/Card_sm"
import { Title } from "../common/Title"

export const Recommand = () => {
  return (
    <>
      <section className='treading hero mt-7 pb-32'>
        <Title title='Recommand for you' />
        <div className='grid grid-cols-2 gap-5'>
          {recommand.map((item, i) => (
            <Cardsm cover={item.cover} name={item.name} tag={item.tag} i={i} />
          ))}
        </div>
      </section>
    </>
  )
}
