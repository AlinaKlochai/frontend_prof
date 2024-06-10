
import { friends } from '../../utils/constants'
import Friend from './Friend'


const DreamTeam: React.FC = () => {
  // const friends: string[] = [friend1, friend2, friend3, friend4, friend5, friend6, friend7, friend8, friend9];
  return (
   <>

    {friends.map ((e, i) => <Friend key={e} photo = {e} num = {i + 1}/>)}
   </>
  )
}

export default DreamTeam

