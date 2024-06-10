import { FC } from 'react'

const Friend: FC<{ photo: string, num: number }> = ({ photo, num }) => {
  // if (num == 7) {
  //   return (
  //     <img className='bottomLeft' src={photo} alt={`friend${num}`} />
  //   )
  // }

  // if (num == 9) {
  //   return (
  //     <img className='bottomRight' src={photo} alt={`friend${num}`} />
  //   )

  // }

  let namesOfClass = '';
  if (num == 7) {
    namesOfClass = 'bottomLeft';
  }

  if (num == 9) {
    namesOfClass = 'bottomRight';
  }
  return <img className={namesOfClass} src={photo} alt={`friend${num}`} />
};

export default Friend