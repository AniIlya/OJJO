import React from 'react'
const borderStyle="border border-white"
const bgColor="bg-[#000000] text-[#ffffff]"
const bgColorWhite="text-[#000000] bg-[#ffffff]"
const boxSh="shadow-btn border border-[#000000] text-[#000000]"
export const Button=({
    item="",
    hasBorder=false,
    hasBgColor=false,
    hasBoxSh=false,
    hasBgColorWhite=false
}) => {
    
  return (
    <div>
        <button className={`text-[#ffffff] px-5 py-2 ${hasBorder && borderStyle} ${hasBgColor && bgColor} ${hasBoxSh && boxSh} ${hasBgColorWhite && bgColorWhite}`}>{item}</button>
    </div>
  )
}

export default Button