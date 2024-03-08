import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import "./Home.scss"
import { Container } from "@mui/material";
import Image from "../Images/profile.jpg";
import Task1 from "../Images/task1.png";
import Task2 from "../Images/task2.png";
import Task3 from "../Images/task3.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineSmartphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";


const Home=()=>{
    return(
        <>
    <Box className="kannan" sx={{ flexGrow: 1}}>
        {/* Laptop view */}
      <AppBar sx={{backgroundColor:"black",display:{sm:"none",md:"block",xs:'none'}}}>
        <Toolbar>
            <Box sx={{width:{sm:"100%",xs:"100%",md:"100%"},display:{md:"flex"},alignItems:"center",justifyContent:"space-evenly"}}>
                <Box sx={{width:{md:"30%"}}}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }} >
                    <MenuIcon />
                </IconButton>
                </Box>
                <Box sx={{width:{sm:"30%",xs:"30%",md:"60%"},display:{md:"flex"}}}>
                <Typography variant="h6" component="a" href="#Home" sx={{ flexGrow: 1,color:"white",fontWeight:800,fontSize:"18px",fontFamily:"initial"}}>
                    HOME
                </Typography>
                <Typography variant="h6" component="a" href="#About" sx={{ flexGrow: 1,color:"white",fontWeight:800,fontSize:"18px",fontFamily:"initial" }}>
                    ABOUT
                </Typography>
                <Typography variant="h6" component="a" href="#Skil" sx={{ flexGrow: 1,color:"white",fontWeight:800,fontSize:"18px",fontFamily:"initial"  }}>
                    SKILL
                </Typography>
                <Typography variant="h6" component="a" href="#Portfolio" sx={{ flexGrow: 1,color:"white",fontWeight:800,fontSize:"18px",fontFamily:"initial"  }}>
                    PORTFOLIO
                </Typography>
                <Typography variant="h6" component="a" href="#Contact" sx={{ flexGrow: 1,color:"white",fontWeight:800,fontSize:"18px",fontFamily:"initial"  }}>
                    CONTACT
                </Typography>
                </Box>
            </Box>
        </Toolbar>
      </AppBar>
    {/* Mobile view */}
    <AppBar sx={{backgroundColor:"black",display:{sm:"block",md:"none",xs:'block'}}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="a" href="#" sx={{ flexGrow: 1,textAlign:"end",color:"white",fontWeight:800,fontSize:"20px",fontFamily:"initial" }}>
            R.SIVAPACKIA
          </Typography>
          {/* <Button color="inherit" sx={{textAlign:"end"}}>Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
    {/* section 1 */}
    <Box sx={{width:{sm:"100%",xs:"100%",md:"100%"},backgroundColor:"black",height:"100vh"}} id="Home">
        <Container maxWidth="xl">
            <Box sx={{paddingTop:"100px"}}>
            <Box sx={{textAlign:"center"}}>
               <Typography component="img" src={Image}  sx={{borderRadius:"50%",width:{md:"20%",xs:"60%",sm:"50%"}}}>
               </Typography> 
            </Box>
            </Box>
            <Box sx={{textAlign:"center",marginLeft:{md:"100px",xs:"0px"}}}>
            <Typography component="h2" variant="h5" sx={{color:"white",fontWeight:800,marginRight:{md:"80px"},fontSize:{md:"45px",xs:"20px",sm:"40px"},marginTop:"20px"}}>
              R.SIVAPACKIA
            </Typography>
            <Typography component="h2" variant="h5" sx={{color:"white",fontWeight:800,marginRight:{md:"80px"},fontSize:{md:"30px",xs:"15px",sm:"25px"},marginTop:"20px"}}>
              I am Full Stack Developer
            </Typography> 
            </Box>
        </Container>
    </Box>
    {/* section-2 */}
    <Box sx={{width:{sm:"100%",xs:"100%",md:"100%"},marginBottom:"75px"}} id="About">
      <Box sx={{width:"95%",margin:"0px auto"}}>
        <Box sx={{textAlign:"center",margin:"20px 0px"}}>
          <Typography component="p" sx={{fontSize:"50px",fontWeight:800,color:"#5e5252",fontFamily:"initial"}}>
             ABOUT
          </Typography>
        </Box>
        <Box sx={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
          <Box sx={{width:{sm:"100%",xs:"100%",md:"50%"}}}>
            <Typography component="p" sx={{fontSize:{md:"18px",sm:"18px",xs:"15px"},color:"#242121a8",lineHeight:"35px",fontWeight:"800",fontFamily:"sans-serif"}}>
              Full Stack Developer with a proven ability to collaborate effectively with senior developers while spending
              extra time to be mentored.Enjoy working closely with team members to ensure workloads are effectively redirected 
              to bottlenecks and personally picking up the slack when necessary. With a passion for both personal growth and
              for software development, I attended a 1000+ hour coding bootcamp to learn new languages while sharpening
              existing skills.Ready to apply my passion for coding to a talented engineering team to develop quality
              solutions.
            </Typography>
          </Box>
          <Box sx={{width:{sm:"100%",xs:"100%",md:"50%"}}}>
            <Box sx={{marginTop:"40px"}}>
              <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-evenly",marginBottom:"25px",textAlign:"center",flexWrap:"wrap"}}>
                <Typography component="p" sx={{padding:"10px 15px",width:{md:"50%",xs:"100%",sm:"100%"},backgroundColor:"gray",color:"white",fontWeight:800,display:"inline-block",border:"1px solid black",borderRadius:"16px",fontFamily:"initial",width:"140px",marginBottom:{sm:"10px",xs:"10px",md:"0px"}}}>
                    Aprail 2023 To Now
                </Typography>
                <Typography component="h5" sx={{fontSize:"24px",fontWeight:800,fontFamily:"initial",width:{md:"50%",xs:"100%",sm:"100%"}}}>
                    Fabevy Trainee
                </Typography>
              </Box>
              <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-evenly",marginBottom:"25px",textAlign:"center",flexWrap:"wrap"}}>
                <Typography component="p" sx={{padding:"10px 15px",width:{md:"50%",xs:"100%",sm:"100%"},backgroundColor:"gray",color:"white",fontWeight:800,display:"inline-block",border:"1px solid black",borderRadius:"16px",fontFamily:"initial",width:"140px",marginBottom:{sm:"10px",xs:"10px",md:"0px"}}}>
                    2020 To 2023
                </Typography>
                <Typography component="h5" sx={{fontSize:"24px",fontWeight:800,fontFamily:"initial",width:{md:"50%",xs:"100%",sm:"100%"}}}>
                    Bachelor Of Engineering
                </Typography>
              </Box>
              <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-evenly",marginBottom:"25px",textAlign:"center",flexWrap:"wrap"}}>
                <Typography component="p" sx={{padding:"10px 15px",width:{md:"50%",xs:"100%",sm:"100%"},backgroundColor:"gray",color:"white",fontWeight:800,display:"inline-block",border:"1px solid black",borderRadius:"16px",fontFamily:"initial",width:"140px",marginBottom:{sm:"10px",xs:"10px",md:"0px"}}}>
                    2016 To 2017
                </Typography>
                <Typography component="h5" sx={{fontSize:"24px",fontWeight:800,fontFamily:"initial",width:{md:"50%",xs:"100%",sm:"100%"}}}>
                    Higher Secondary Eduction
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{width:{sm:"100%",xs:"100%",md:"100%"}}}>
          <Box sx={{textAlign:"center"}}>
            <Typography component="p" sx={{backgroundColor:"gray",color:"white",fontWeight:800,padding:"10px 15px",display:"inline-block",borderRadius:"10px",boxShadow:"0px 0px 10px gray"}}>
                 DOWNLOAD CV
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
     {/* section-3 */}
     <Box sx={{width:{sm:"100%",xs:"100%",md:"100%"}}} id="Skil">
      <Box sx={{width:"95%",margin:"0px auto"}}>
        <Box sx={{textAlign:"center",margin:"30px 0px"}}>
          <Typography  component="p" sx={{fontSize:{md:"50px",xs:"35px",sm:"50px"},fontWeight:800,color:"#5e5252",fontFamily:"initial"}}>
            MY ADVANTAGES
          </Typography>
        </Box>
        <Box sx={{marginBottom:"100px"}}>
          <Box sx={{width:{sm:"100%",xs:"100%",md:"100%"}}}>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",width:{sm:"100%",xs:"100%",md:"100%"}}}>
              <Box sx={{position:"relative",border:"1.2rem solid palegreen",display:"inline-block",borderLeftColor:"#a59898",borderRightColor:"lightgray",borderTopColor:"#1b1c1a52",borderBottomColor:"white",borderRadius:"9rem",width:"16rem",height:"10rem",boxShadow:"inset 0px 0px 10px gray",margin:"3rem",boxSizing:"border-box",textAlign:"center"}}>
                <Typography component="p" sx={{fontWeight:800,fontSize:"2rem",position:"absolute",top:{md:"35%",xs:"30%"},left:{md:"40%",xs:"38%",sm:"38%"},fontFamily:"initial"}}>70%</Typography>
                <Typography component="p"  sx={{fontWeight:800,fontSize:"1rem",textShadow:"0px 0px 7px gray",fontFamily:"initial",width:"100%",position:"absolute",bottom:{md:"-20%",xs:"-20%",sm:"-20%"}}}>HTML</Typography>
              </Box>
              <Box sx={{position:"relative",border:"1.2rem solid palegreen",display:"inline-block",borderLeftColor:"#a59898",borderRightColor:"lightgray",borderTopColor:"#1b1c1a52",borderBottomColor:"white",borderRadius:"9rem",width:"16rem",height:"10rem",boxShadow:"inset 0px 0px 10px gray",margin:"3rem",boxSizing:"border-box",textAlign:"center"}}>
                <Typography component="p" sx={{fontWeight:800,fontSize:"2rem",position:"absolute",top:{md:"35%",xs:"30%"},left:{md:"40%",xs:"38%",sm:"38%"},fontFamily:"initial"}}>68%</Typography>
                <Typography component="p"  sx={{fontWeight:800,fontSize:"1rem",textShadow:"0px 0px 7px gray",fontFamily:"initial",width:"100%",position:"absolute",bottom:{md:"-20%",xs:"-20%",sm:"-20%"}}}>CSS</Typography>
              </Box>
              <Box sx={{position:"relative",border:"1.2rem solid palegreen",display:"inline-block",borderLeftColor:"#a59898",borderRightColor:"lightgray",borderTopColor:"#1b1c1a52",borderBottomColor:"white",borderRadius:"9rem",width:"16rem",height:"10rem",boxShadow:"inset 0px 0px 10px gray",margin:"3rem",boxSizing:"border-box",textAlign:"center"}}>
                <Typography component="p" sx={{fontWeight:800,fontSize:"2rem",position:"absolute",top:{md:"35%",xs:"30%"},left:{md:"40%",xs:"38%",sm:"38%"},fontFamily:"initial"}}>55%</Typography>
                <Typography component="p"  sx={{fontWeight:800,fontSize:"1rem",textShadow:"0px 0px 7px gray",fontFamily:"initial",width:"100%",position:"absolute",bottom:{md:"-20%",xs:"-20%",sm:"-20%"}}}>JS</Typography>
              </Box>
              <Box sx={{position:"relative",border:"1.2rem solid palegreen",display:"inline-block",borderLeftColor:"#a59898",borderRightColor:"lightgray",borderTopColor:"#1b1c1a52",borderBottomColor:"white",borderRadius:"9rem",width:"16rem",height:"10rem",boxShadow:"inset 0px 0px 10px gray",margin:"3rem",boxSizing:"border-box",textAlign:"center"}}>
                <Typography component="p" sx={{fontWeight:800,fontSize:"2rem",position:"absolute",top:{md:"35%",xs:"30%"},left:{md:"40%",xs:"38%",sm:"38%"},fontFamily:"initial"}}>64%</Typography>
                <Typography component="p"  sx={{fontWeight:800,fontSize:"1rem",textShadow:"0px 0px 7px gray",fontFamily:"initial",width:"100%",position:"absolute",bottom:{md:"-20%",xs:"-20%",sm:"-20%"}}}>REACT</Typography>
              </Box>
              <Box sx={{position:"relative",border:"1.2rem solid palegreen",display:"inline-block",borderLeftColor:"#a59898",borderRightColor:"lightgray",borderTopColor:"#1b1c1a52",borderBottomColor:"white",borderRadius:"9rem",width:"16rem",height:"10rem",boxShadow:"inset 0px 0px 10px gray",margin:"3rem",boxSizing:"border-box",textAlign:"center"}}>
                <Typography component="p" sx={{fontWeight:800,fontSize:"2rem",position:"absolute",top:{md:"35%",xs:"30%"},left:{md:"40%",xs:"38%",sm:"38%"},fontFamily:"initial"}}>65%</Typography>
                <Typography component="p"  sx={{fontWeight:800,fontSize:"1rem",textShadow:"0px 0px 7px gray",fontFamily:"initial",width:"100%",position:"absolute",bottom:{md:"-20%",xs:"-20%",sm:"-20%"}}}>PYTHON</Typography>
              </Box>
              <Box sx={{position:"relative",border:"1.2rem solid palegreen",display:"inline-block",borderLeftColor:"#a59898",borderRightColor:"lightgray",borderTopColor:"#1b1c1a52",borderBottomColor:"white",borderRadius:"9rem",width:"16rem",height:"10rem",boxShadow:"inset 0px 0px 10px gray",margin:"3rem",boxSizing:"border-box",textAlign:"center"}}>
                <Typography component="p" sx={{fontWeight:800,fontSize:"2rem",position:"absolute",top:{md:"35%",xs:"30%"},left:{md:"40%",xs:"38%",sm:"38%"},fontFamily:"initial"}}>68%</Typography>
                <Typography component="p"  sx={{fontWeight:800,fontSize:"1rem",textShadow:"0px 0px 7px gray",fontFamily:"initial",width:"100%",position:"absolute",bottom:{md:"-20%",xs:"-20%",sm:"-20%"}}}>SQL</Typography>
              </Box>
              <Box sx={{position:"relative",border:"1.2rem solid palegreen",display:"inline-block",borderLeftColor:"#a59898",borderRightColor:"lightgray",borderTopColor:"#1b1c1a52",borderBottomColor:"white",borderRadius:"9rem",width:"16rem",height:"10rem",boxShadow:"inset 0px 0px 10px gray",margin:"3rem",boxSizing:"border-box",textAlign:"center"}}>
                <Typography component="p" sx={{fontWeight:800,fontSize:"2rem",position:"absolute",top:{md:"35%",xs:"30%"},left:{md:"40%",xs:"38%",sm:"38%"},fontFamily:"initial"}}>66%</Typography>
                <Typography component="p"  sx={{fontWeight:800,fontSize:"1rem",textShadow:"0px 0px 7px gray",fontFamily:"initial",width:"100%",position:"absolute",bottom:{md:"-20%",xs:"-20%",sm:"-20%"}}}>MONGODB</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
     </Box>
     {/* photo project */}
     <Box sx={{width:{sm:"100%",xs:"100%",md:"100%"},marginBottom:"100px"}} className="Project" id="Portfolio">
      <Box sx={{width:"95%",margin:"0px auto"}}>
      <Box sx={{textAlign:"center",margin:"30px 0px"}}>
          <Typography  component="p" sx={{fontSize:{md:"50px",xs:"35px",sm:"50px"},fontWeight:800,color:"#5e5252",fontFamily:"initial"}}>
            PORTFOLIO
          </Typography>
        </Box>
        <Box sx={{width:{sm:"100%",xs:"100%",md:"100%"}}}>
          <Box sx={{display:"flex",alignItems:"center",justifyContent:{md:"space-evenly",sm:"space-between"},flexWrap:"wrap"}}>
            <Box sx={{width:{sm:"45%",xs:"100%",md:"30%"},margin:{xs:"10px 10px",md:"0px 0px",sm:"10px 0px"}}}>
              <Box  className="transform_img" sx={{textAlign:"center",position:"relative",width:{sm:"100%",xs:"100%",md:"100%"},overflow:"hidden"}}>
                <Typography  component="img" src={Task1} sx={{boxShadow:"0px 0px 10px gray",overflow:"hidden",width:"100%"}}>
                </Typography>
                <Box className="transform_code" sx={{position:"absolute",top:"0px",width:"100%",height:"100%",backgroundColor:"#000000a3",transform:"translatex(-100px)",visibility:"hidden"}}>
                  <Typography component="h6" variant="h6" sx={{fontWeight:800,color:"white",paddingTop:"50%",fontSize:"25px"}}>
                     HTML
                  </Typography>
                  <Typography component="h6" variant="h6"  sx={{fontWeight:800,fontSize:"25px",color:"white",marginBottom:"25px"}}>
                     CSS,BOOTSTRAP 
                  </Typography>
                  <Typography component="a" href="https://sivapackia.github.io/website-two/"  sx={{fontWeight:800,fontSize:"25px",color:"white"}}>
                     github url link
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{width:{sm:"45%",xs:"100%",md:"30%"},margin:{xs:"10px 10px",md:"0px 0px",sm:"10px 0px"}}}>
              <Box className="transform_img" sx={{textAlign:"center",position:"relative",overflow:"hidden"}}>
                <Typography component="img" src={Task2} sx={{boxShadow:"0px 0px 10px gray",width:"100%"}}>
                </Typography>
                <Box className="transform_code" sx={{position:"absolute",top:"0px",width:"100%",height:"100%",backgroundColor:"#000000a3",transform:"translatex(-100px)",visibility:"hidden"}}>
                  <Typography component="h6" variant="h6" sx={{fontWeight:800,color:"white",paddingTop:"60%",fontSize:"25px"}}>
                     HTML
                  </Typography>
                  <Typography component="h6" variant="h6"  sx={{fontWeight:800,fontSize:"25px",color:"white"}}>
                     CSS
                  </Typography>
                  <Typography component="a" href="https://sivapackia.github.io/mentor-website/"  sx={{fontWeight:800,fontSize:"25px",color:"white"}}>
                     github url link
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{width:{sm:"45%",xs:"100%",md:"30%"},margin:{xs:"10px 10px",md:"0px 0px",sm:"10px 0px"}}}>
              <Box className="transform_img" sx={{textAlign:"center",position:"relative",overflow:"hidden"}}>
                <Typography component="img" src={Task3} sx={{boxShadow:"0px 0px 10px gray",width:"100%"}}>
                </Typography>
                <Box className="transform_code" sx={{position:"absolute",top:"0px",width:"100%",height:"100%",backgroundColor:"#000000a3",transform:"translatex(-100px)",visibility:"hidden"}}>
                  <Typography component="h6" variant="h6" sx={{fontWeight:800,color:"white",paddingTop:"60%",fontSize:"25px"}}>
                     HTML
                  </Typography>
                  <Typography component="h6" variant="h6"  sx={{fontWeight:800,fontSize:"25px",color:"white",marginBottom:"30px"}}>
                     CSS,MATERIAL UI,REACT
                  </Typography>
                  <Typography component="a" href="https://sivapackia.github.io/mentor-website/"  sx={{fontWeight:800,fontSize:"25px",color:"white"}}>
                     github url link
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
     </Box>
     {/* address */}
     <Box sx={{width:{sm:"100%",xs:"100%",md:"100%"},marginBottom:"50px"}} id="Contact">
      <Box sx={{width:"95%",margin:"0px auto"}}>
      <Box sx={{textAlign:"center",margin:"30px 0px"}}>
          <Typography  component="p" sx={{fontSize:{md:"50px",xs:"35px",sm:"50px"},fontWeight:800,color:"#5e5252",fontFamily:"initial"}}>
            CONTACT
          </Typography>
        </Box>
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-evenly",flexWrap:"wrap"}}>
          <Box sx={{width:{sm:"100%",xs:"100%",md:"30%"},textAlign:"center",margin:{xs:"20px 0px"}}}>
            <Box sx={{boxShadow:"0px 0px 5px gray",padding:"20px 10px",height:"180px"}}>
            <Typography component="i" sx={{fontSize:"30px",color:"gray",height:"50px"}}>
            <FaLocationDot />
            </Typography>
            <Typography component="h1" variant="h4" sx={{fontWeight:800,fontFamily:"initial",height:"40px"}}>
             Address
            </Typography>
            <Typography component="address" sx={{color:"gray",marginTop:"15px"}}>
                140A Main Road,Thirupathiyapuram,Papanasam Mill Post,Vickramasingapuram-627422
            </Typography>
            </Box>
          </Box>
          <Box sx={{width:{sm:"100%",xs:"100%",md:"30%"},textAlign:"center",margin:{xs:"20px 0px"}}}>
          <Box sx={{boxShadow:"0px 0px 5px gray",padding:"20px 10px",height:"180px"}}>
            <Typography component="i" sx={{fontSize:"30px",color:"gray",height:"50px"}}>
            <MdOutlineSmartphone />
            </Typography>
            <Typography component="h1" variant="h4" sx={{fontWeight:800,fontFamily:"initial",height:"40px"}}>
             Phone Number
            </Typography>
            <Typography component="address" sx={{color:"gray",marginTop:"15px"}}>
                +91 7530082477
            </Typography>
          </Box>
          </Box>
          <Box sx={{width:{sm:"100%",xs:"100%",md:"30%"},textAlign:"center",margin:{xs:"20px 0px"}}}>
          <Box sx={{boxShadow:"0px 0px 5px gray",padding:"20px 10px",height:"180px"}}>
            <Typography component="i" sx={{fontSize:"30px",color:"gray",height:"50px"}}>
            <MdEmail />
            </Typography>
            <Typography component="h1" variant="h4" sx={{fontWeight:800,fontFamily:"initial",height:"40px"}}>
             Email
            </Typography>
            <Typography component="a" href="#" sx={{color:"gray",marginTop:"15px",textDecoration:"none",display:"inline-block"}}>
                 sivapackia2001@gamil.com
            </Typography>
          </Box>
          </Box>
        </Box>
      </Box>
     </Box>
        </>
    )
} 
export default Home