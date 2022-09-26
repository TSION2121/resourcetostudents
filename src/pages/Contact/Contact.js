import React from 'react'
import Footer from '../../component/Footer'
import { ContactContainer, ContactForm, ContactFormIcon, ContactFormIconCircle, ContactFormIconText, ContactFormParagraph, ContactFormSocialMedia, ContactFormSpan, ContactFormTitle, ContactInfo, ContactTitles } from '../../styles/Contact.styled'
import { StyledFooter } from '../../styles/Footer.styled'
import PhoneSharpIcon from '@mui/icons-material/PhoneSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'



export const Contact = () => {
  return (
    <div>
      <ContactTitles>
      Contact Us
      </ContactTitles>


<ContactContainer>

<ContactInfo>
<ContactFormTitle>
  Contact Information
</ContactFormTitle>
<ContactFormParagraph>
Fill up the contact form and our Team will get back to you within 24 hours.
</ContactFormParagraph>
<ContactFormIconText>
<ContactFormIcon>
<PhoneSharpIcon />
  </ContactFormIcon>
  <ContactFormSpan>+2519 56454545</ContactFormSpan>

  
 
</ContactFormIconText>  

<ContactFormIconText>
 <ContactFormIcon>
    <EmailSharpIcon />
  </ContactFormIcon>
  <ContactFormSpan>2emailme1234@gmail.com</ContactFormSpan>

</ContactFormIconText> 

<ContactFormIconText>
  <ContactFormIcon>
<LocationOnSharpIcon />
  </ContactFormIcon>
  <ContactFormSpan>AA ,Ethiopia</ContactFormSpan>

</ContactFormIconText> 

<ContactFormSocialMedia>
  <ContactFormIconCircle href='https://twitter.com'>
    <ContactFormIcon>

          <FaTwitter />
      
    </ContactFormIcon>
  </ContactFormIconCircle >

  <ContactFormIconCircle href='https://facebook.com'>
    <ContactFormIcon>
   <FaFacebook />
    </ContactFormIcon>
  </ContactFormIconCircle>
  
  <ContactFormIconCircle href='https://linkedin.com'>
    <ContactFormIcon>
  <FaLinkedin />
    </ContactFormIcon>
  </ContactFormIconCircle>
</ContactFormSocialMedia>
</ContactInfo>

<ContactForm>

</ContactForm>

</ContactContainer>



      <StyledFooter   top='400px'margin="realtive" >
          <Footer />
</StyledFooter>
    </div>
  )
}
