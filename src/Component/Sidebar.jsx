
import { MdDashboard } from "react-icons/md";
import { TbShoppingCartUp,TbShoppingCartDown } from "react-icons/tb";
import { IoPeopleOutline,IoSettings } from "react-icons/io5";
import { IoIosListBox } from "react-icons/io";
import "./sidebar.css"

const sidebar = [
  { name: 'Dashboard', href: '#', icon: MdDashboard,  },
  { name: 'Sales', href: '#', icon: TbShoppingCartUp,  },
  { name: 'Purchase', href: '#', icon: TbShoppingCartDown,  },
  { name: 'Partner', href: '#', icon: IoPeopleOutline, },
  { name: 'Item', href: '#', icon: IoIosListBox,  },
  { name: 'Setting', href: '#', icon:  IoSettings,  },
]

export default function Sidebar() {
  return (
    <>

      <div id='sidebar' className='sidebarStyle'>
        <ul role="list" className='listStyle'>
          {sidebar.map((item) => (
            <li key={item.name} className='sideitem'>
              <a href="#" className='iconcontainer'>
                <div className='iconStyle'>
                  <item.icon />
                </div>
                <span className='textStyle'>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div></>
  )
}
