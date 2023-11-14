import React from 'react'
import { motion } from "framer-motion"

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem"},
}

interface TabButtonProps {
    active: boolean,
    selectTab: any,
    children: any,
}

const TabButton: React.FC<TabButtonProps> = ({active, selectTab, children}) => {
    const buttonClasses = active ? 'text-white' : 'text-[#ADB7BE]'
  return (
    <button onClick={selectTab} className ={``}>
        <p className={`mr-3 font-semibold ${buttonClasses}`}>{children}</p>
        <motion.div animate={active ? "active" : "default"} variants={variants}
        className='h-1 bg-primary-500'></motion.div>
    </button>
  )
}

export default TabButton