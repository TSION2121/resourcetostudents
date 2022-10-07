import React from 'react'
import Footer from '../../component/Footer'
import { ContactBody, ContactContainer, ContactForm, ContactFormButton, ContactFormColumn2, ContactFormFormGroup, ContactFormIcon, ContactFormIconCircle, ContactFormIconText, ContactFormInput, ContactFormLabel, ContactFormParagraph, ContactFormRadioButton, ContactFormRadioButtonGroup, ContactFormSocialMedia, ContactFormSoloFormGroup, ContactFormSoloFormGroupButton, ContactFormSpan, ContactFormTextArea, ContactFormTitle, ContactInfo, ContactTitles } from '../../styles/Contact.styled'
import { StyledFooter } from '../../styles/Footer.styled'
import PhoneSharpIcon from '@mui/icons-material/PhoneSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import { FaTwitter, FaFacebook, FaLinkedin ,FaYoutube } from 'react-icons/fa'
import { RadioGroup } from '@mui/joy';
import { CardMedia } from '@mui/material';



export const Contact = () => {
  return (
    <div>
      <ContactTitles>
      Contact Us
      </ContactTitles>
<CardMedia 
image="https://th.bing.com/th/id/R.a99f6ac0d8797ede26863c87512f5802?rik=ZsCXYAhWHfkjGg&riu=http%3a%2f%2fc8.staticflickr.com%2f2%2f1267%2f1350136503_aaa09f2fc2_n.jpg&ehk=k%2fInZfIVYAwgSDVhDhDzLvmKdNWJXeoa%2fyrQBUTkdnA%3d&risl=&pid=ImgRaw&r=0"
>
<>
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
    <ContactFormIcon  size="20px" >

          <FaTwitter />
      
    </ContactFormIcon>
  </ContactFormIconCircle >

  <ContactFormIconCircle href='https://facebook.com'>
    <ContactFormIcon size="20px" >
   <FaFacebook />
    </ContactFormIcon>
  </ContactFormIconCircle>
  
  <ContactFormIconCircle href='https://linkedin.com'>
    <ContactFormIcon size="20px" >
  <FaLinkedin />
    </ContactFormIcon>
  </ContactFormIconCircle>
  <ContactFormIconCircle href='https://youtube.com'>
    <ContactFormIcon size="20px" >
  <FaYoutube />
    </ContactFormIcon>
  </ContactFormIconCircle>
</ContactFormSocialMedia>
</ContactInfo>

<ContactForm>

<ContactFormColumn2>
  <ContactFormFormGroup>
<ContactFormLabel>First Name</ContactFormLabel>
<ContactFormInput type="text" ></ContactFormInput>
  </ContactFormFormGroup>


  <ContactFormFormGroup>
  <ContactFormLabel >Last Name</ContactFormLabel>
<ContactFormInput type="text"></ContactFormInput>
    </ContactFormFormGroup>
    </ContactFormColumn2>

    <ContactFormColumn2>
    <ContactFormFormGroup>
<ContactFormLabel >Mail</ContactFormLabel>
<ContactFormInput type="email" ></ContactFormInput>
  </ContactFormFormGroup>
 
  <ContactFormFormGroup>
  <ContactFormLabel>Phone</ContactFormLabel>
<ContactFormInput type="tel"></ContactFormInput>
    </ContactFormFormGroup>
</ContactFormColumn2>


<ContactFormColumn2>
    <ContactFormSoloFormGroup>
{/* <ContactFormLabel >What other areas you want us to come?</ContactFormLabel> */}
<ContactFormLabel radioWidth="100%"   radioSize="1.5rem">Which one of the areas you want more of it?</ContactFormLabel>

<RadioGroup name="groupSingleSelect" >
<ContactFormRadioButton >
<ContactFormInput radioSize="1.6rem" type="radio" />
<ContactFormLabel  radioSize="1.6rem">Physics Concepts</ContactFormLabel>


<ContactFormInput radioSize="1.6rem"  radioLeft="0px" type="radio" />
<ContactFormLabel radioSize="1.6rem">Physics Experiments</ContactFormLabel>

<ContactFormInput radioSize="1.6rem" type="radio" />
<ContactFormLabel radioSize="1.6rem">Physics Guides</ContactFormLabel>

<ContactFormInput radioSize="1.6rem" type="radio" />
<ContactFormLabel  radioSize="1.6rem">Physics Concepts</ContactFormLabel>


<ContactFormInput radioSize="1.6rem"  radioLeft="0px" type="radio" />
<ContactFormLabel radioSize="1.6rem">Physics Experiments</ContactFormLabel>

<ContactFormInput radioSize="1.6rem" type="radio" />
<ContactFormLabel radioSize="1.6rem">Physics Guides</ContactFormLabel>

</ContactFormRadioButton>

</RadioGroup>
  </ContactFormSoloFormGroup>
</ContactFormColumn2>

<ContactFormColumn2>
    <ContactFormSoloFormGroup>
<ContactFormLabel radioWidth="100%"   radioSize="1.5rem" >What other areas you want us to come?</ContactFormLabel>
<ContactFormTextArea></ContactFormTextArea>
    </ContactFormSoloFormGroup>
</ContactFormColumn2>

<ContactFormColumn2>
    <ContactFormSoloFormGroupButton>
<ContactFormButton>Send Us </ContactFormButton>
    </ContactFormSoloFormGroupButton>
</ContactFormColumn2>

</ContactForm>

</ContactContainer>


</></CardMedia>
      <StyledFooter   top='400px'margin="relative" >
          <Footer />
</StyledFooter>
    </div>
  )
}
