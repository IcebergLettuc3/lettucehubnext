import React from 'react'

interface TabButtonProps {
    active: boolean,
    selectTab: any,
    children: any,
}

const TabButton: React.FC<TabButtonProps> = ({active, selectTab, children}) => {
    const buttonClasses = active ? 'text-white border-b border-primary-500' : 'text-[#ADB7BE]'
  return (
    <button onClick={selectTab} className ={``}>
        <p className={`mr-3 font-semibold ${buttonClasses}`}>{children}</p>
    </button>
  )
}

export default TabButton