import React from 'react'
import Footer from '../../component/Footer'
import { FlexPage } from '../../styles/Flex.styled'
import { StyledFooter } from '../../styles/Footer.styled'

import advices from '../../Data/Advices/DataAdvices'
import { AdviceBody, AdvicesTitle } from '../../styles/Advices.styled'
import { AdvicesCard } from '../../component/AdvicesCard'




export const Advices = () => {



  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <AdvicesTitle main="white">
      Advices  
      </AdvicesTitle>
      <AdviceBody>
      
      {advices.map((item, index) => (
            <AdvicesCard key={index} item={item} />
          ))}
    </AdviceBody>

<StyledFooter   top='400px' margin="relative" >
          <Footer />
</StyledFooter>
    </div>
  )
}
