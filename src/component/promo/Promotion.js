import React from 'react'
import { Button } from '../../styles/Button.styled'
import { FlexPromo, Share } from '../../styles/Flex.styled'

const Promotion = () => {
  return (
    <div>
         <FlexPromo>
              Enjoy our Services <Share> Recommend to others  <Button >
            Share with your friends
           </Button></Share>  And shine together with 
           <Button size='100px' bg='navy' color='white'>    StAR</Button>
            </FlexPromo>
    </div>
  )
}

export default Promotion