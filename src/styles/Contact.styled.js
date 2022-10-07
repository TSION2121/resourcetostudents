import styled from "styled-components";

export const  ContactTitles = styled.h1({
color: "black",
fontSize: "90px",
fontWeight : "bold",
})
export const  ContactContainer = styled.div({
    display: "flex",
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center", 
    marginLeft: "1200px", 
     border: "1px solid white",   
    borderRadius: "15px",
    overflow: "hidden",
    paddingRight: "400px",
    width: "1000px ",
    height: "100%",
    color: "black",
    fontSize: "40px",
    fontWeight : "bold",
    // backgroundImage: "url('https://images.pexels.com/photos/1998922/pexels-photo-1998922.jpeg?auto=compress&cs=tinysrgb&w=600')",
    // backgroundSize:'cover',
    // backdropFilter:'blur(2px)',
})
    export const  ContactInfo = styled.div({
        color: "black",
        backgroundColor: "dodgerblue",
        borderRadius: "15px",
        padding: "40px",
        flex:' 0 1 40%',
        fontSize: "60px",
        fontWeight : "bold",
        display: "flex",
        flexDirection: "column",
        })

        export const  ContactForm = styled.form({
            color: "black",
            padding: "40px",
            fontWeight : "bold",
            width: "100%",
            })

            export const  ContactFormTitle = styled.h4({
                color: "black",
                fontSize: "2rem",
                fontWeight : "900",
                marginTop: '0'
                })
                export const  ContactFormParagraph = styled.p({
                    color: "black",
                    fontSize: "1.5rem",
                     textShadow:"0px 1px 3px black",  
                    fontWeight : "900",
                    margin:'2rem 0 0 0 0',
                    })
                    export const  ContactFormIconText = styled.div({
                        color: "black",
                        display: "flex",
                        //  flexDirection: "column",
                         justifyContent: "flex-start",
                         alignItems: "center",
                        fontSize: "",
                        fontWeight : "bold",
                        marginBottom: '2rem'

                        })

                        export const  ContactFormIcon = styled.i({
                            color: "blue ",
                            fontSize: "1.8rem",
                              //  `${({ size }) => size || "1.8rem"} `,
                            marginRight: "2rem",
                            fontWeight : "900",
                            flex:'0 0 20px',
 
   
                            })
                            export const  ContactFormSpan = styled.span({
                                color: "black",
                                fontSize: "1.3rem ",
                                fontWeight : "300 ",
                                })
                                export const  ContactFormSocialMedia = styled.div   ({
                                    width: "50%",
                                     display: "flex",
                                    // fontSize: "90px",
                                    fontWeight : "bold",
                                    justifyContent: "space-between", 
                                    })
                                    export const  ContactFormIconCircle = styled.a({

                                        color: "blue",  
                                        display: 'flex',
                                        flex: '0 1 40   px',
                                        justifyContent: "center",
                                        alignItems: "center",
                                        // fontSize: "90px",
                                        fontWeight : "bold",  
                                        height: "40px",
                                        borderRadius: "50%",
                                        backgroundColor: "skyblue",
                                        "&:hover":{
                                            backgroundColor: "black",
   
                                        }
                                        })

                                        export const  ContactFormColumn2 = styled.div   ({
                                             display: "flex",
                                             width: "100%",
                                             flex: "0 0 100%",
                                            // fontSize: "90px",
                                            // fontWeight : "bold",
                                            // justifyContent: "space-between", 
                                            })
                                            export const  ContactFormFormGroup = styled.div   ({
                                                display: 'flex',
                                                flexDirection: 'column',
                                                flex: "0 0 100%",
                                                justifyContent: "flex-start",
                                                paddingRight: "40px",

                                                // "&:nth-child(2)":{
                                                //     paddingRight: "0",
                                                // }
                                                })
                                                export const  ContactFormSoloFormGroup = styled.div   ({
                                                    // display: 'flex',
                                                    // flexDirection: 'column',
                                                    // flex: "0 0 100%",
                                                    // justifyContent: "flex-start",
                                                    // paddingRight: "40px",
                                                    // "&:nth-child(2)":{
                                                        paddingRight: "0",
                                                    // }
                                                    })
                                                    export const  ContactFormSoloFormGroupButton = styled.div   ({
                                                    
                                                      alignItems: "flex-end !important",
                                                        // paddingRight: "40px",
                                                        // "&:nth-child(2)":{
                                                        //     paddingRight: "0",
                                                        // }
                                                        })
                                                export const  ContactFormLabel = styled.label  (({radioWidth, radioSize, radioLeft}) => ({
                                                    width: radioWidth || "50%",
                                                    fontSize: radioSize || "1.8rem",
                                                    // marginLeft: "0px",
                                                    marginBottom: "2rem",
                                                    wordSpacing : "2px", 
                                                    marginLeft: radioLeft ||'0px',
                                                  
                                                    }))
                                                    export const  ContactFormInput = styled.input  (({radioWidth, radioSize}) => ({
                                                        width: radioSize|| "50%",
                                                        //  display: "flex",
                                                        // fontSize: "90px",
                                                        fontWeight : "300",
                                                        // justifyContent: "space-between", 
                                                        backgroundColor: "transparent",
                                                        border:'none',
                                                        padding: '10px',
                                                        fontSize:'1.5rem',
                                                        cursor: 'pointer',
                                                        color: 'white',
                                                        borderBottom: '2px solid red',
                                                        transition: ' all  ease-in-out',
                                                        marginBottom: radioSize ||'2rem',


                                                        "&:focus":{
                                                            border: 'none',
                                                            outline: 'none',
                                                            borderBottom: '5px solid white',

                                                        },
                                                        "&:nth-child(2)":{
                                                            paddingRight: "0",
                                                        }
                                                       
                                                        }))

                                                        export const  ContactFormRadioButton = styled.div   ({
                                                            marginRight: "0px",
                                                      width: '150%',
                                                      flex: "1 1 60%",

                                                            })
                                                            export const  ContactFormRadioButtonGroup = styled.div   ({
                           
                                                        display: 'flex',
                                                        justifyContent: 'flex-start',
                                                        marginBottom: '2rem',
                                                      marginTop: '1rem',
                                                        flexDirection: 'column',
                                                        "&:checked": {
                                                            
                                                        }


                                                            })

                                                            export const  ContactFormTextArea = styled.textarea   ({
                                                                marginRight: "20px",
                                                                width: "150%",
                                                                //  display: "flex",
                                                                // fontSize: "90px",
                                                                fontWeight : "300",
                                                                // justifyContent: "space-between", 
                                                                backgroundColor: "transparent",
                                                                border:'none',
                                                                padding: '0px',
                                                                fontSize:'1.5rem',
                                                                cursor: 'pointer',
                                                                color: 'white',
                                                                borderBottom: '2px solid red',
                                                                transition: ' all  ease-in-out',
                                                                marginBottom: '2rem',
                                                                
        
        
                                                                "&:focus":{
                                                                    border: 'none',
                                                                    outline: 'none',
                                                                    borderBottom: '5px solid white',
        
                                                                },
                                                                "&:nth-child(2)":{
                                                                    paddingRight: "0",
                                                                }
                                                               
                                                                })

                                                                export const  ContactFormButton = styled.button   ({
                                                                    width: '150px',
                                                                    height: '60px',
                                                                    cursor: 'pointer',
                                                                    backgroundColor: "white",
                                                                    border : 'none',
                                                                    textTransform: "uppercase",
                                                                    borderRadius: "2px",
                                                                    marginLeft:"380px",
                                                                    fontSize: "1.8rem",

                                                                    // "&:nth-child(2)":{
                                                                    //     paddingRight: "0",
                                                                    // }
                                                                    })
                                                                    export const ContactBody= styled.body({
  
                                                                        height: '100%',
                                                                        pageBreakBefore: 'break-before',
                                                                            backgroundImage: "url('https://th.bing.com/th/id/OIP._GSylkN5YVp1sVpeIyZBmQHaE8?w=259&h=180&c=7&r=0&o=5&dpr=1.9&pid=1.7')",
                                                                            backgroundSize:'cover',
                                                                       ' &:hover' :{
                                                                          opacity: '0.9',
                                                                          transform: 'scale(0.98)',
                                                                          backgroundColor: `${({first})=>first || 'blue'}`
                                                                          
                                                                      
                                                                        }
                                                                        })