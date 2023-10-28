// import React from 'react'
// import NavLink from './NavLink'

// const MenuOverlay = ({links}) => {
//   return (
//     <ul className='flex flex-col py-4 items-center'>
//         {links.map((link, index) => (
//             <li key={index}>
//                 <NavLink href={link.path} title={link.title}/>
//             </li>
//             ))}
//     </ul>
//   )
// }

// export default MenuOverlay

import React from 'react'
import NavLink from './NavLink'

// Define the types for the links
interface Link {
  path: string;
  title: string;
}

// Define the types for the props
interface MenuOverlayProps {
  links: Link[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
        {links.map((link, index) => (
            <li key={index}>
                <NavLink href={link.path} title={link.title}/>
            </li>
            ))}
    </ul>
  )
}

export default MenuOverlay;
