import React from 'react'
import { styles } from '../styles'
import { socialMedia } from "../constants";

const Footer=()=> {
  return (
    <div className={`${styles.paddingX} w-full flex items-center py-5 bottom-0 z-20 bg-black justify-between`}
    >
       <p className="font-poppins font-normal text-[18px] leading-[27px] text-white">©2023 Aayush . All rights reserved.</p>
       <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  )
}
export default Footer
