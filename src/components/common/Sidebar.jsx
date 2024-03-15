import React from "react"
import { recommand } from "../assets/data/data"
import { Cardsm } from "./Card_sm"

export const Sidebar = () => {
  return (
    <>
      <section className='sidebar hero'>
        <h1 className='mb-5 text-lg font-semibold text-gray-600'>5 Likes</h1>
        {recommand.slice(0, 5).map((item, i) => (
          <div className='mb-3'>
            <Cardsm cover={item.cover} name={item.name} tag={item.tag} i={i} />
          </div>
        ))}
        <p className='text-sm mt-3'>About Contact Legal Policy</p>
        <span className='text-gray-500 text-[12px]'>© Copyright 2024</span>
        <a href="https://github.com/mdnoorulain" 
        className=' pl-1 cursor-pointer text-[12px] text-gray-500 hover:text-gray-900'
        target='_blank' rel='noopener noreferrer'>
              Noorul Ain</a>
      </section>
    </>
  )
}
