// Write your code here
import {useState} from 'react'
import {DivContainer, Image, Text, Button} from './styledComponents'

const Unlock = () => {
  const [isLocked, setLocker] = useState(true)

  const buttonLock = () => {
    setLocker(prevState => !prevState)
  }

  const imgUrl = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  return (
    <DivContainer>
      <Image src={imgUrl} alt={isLocked ? 'lock' : 'unlock'} />
      <Text>Your Device is {isLocked ? 'Locked' : 'Unlocked'}</Text>
      <Button onClick={buttonLock}>{isLocked ? 'Unlock' : 'Lock'}</Button>
    </DivContainer>
  )
}

export default Unlock
