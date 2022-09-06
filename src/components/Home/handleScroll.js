import React, {useState} from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top:10,
	behavior:'smooth'
	});
};

window.addEventListener('scroll', toggleVisible);

return (
<div style={{bottom:'0',
display:visible?'flex':'none',
justifyContent:'center',
position:'fixed',
left:'50%',
zIndex:'20',
padding:'2vh',
backgroundColor:'#a487f9',
borderRadius:'10px',
margin:'5px',
cursor:'pointer'
}}>
<ArrowUpwardIcon onClick={scrollToTop}
	style={{
        color:"#FFFFFF"
    }} />
</div>
    
	
);
}

export default ScrollButton;
