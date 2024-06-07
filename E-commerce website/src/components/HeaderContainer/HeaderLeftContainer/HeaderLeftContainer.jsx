
import Logo from './Logo';
import LocatonDetails from './LocatonDetails';
import { Link } from 'react-router-dom';


const HeaderLeftContainer = () => {
  return (
    <div className='flex col-span-3 '>
      <Link to="/"><Logo /></Link>
      
      <LocatonDetails />
    </div>
  )
}

export default HeaderLeftContainer
