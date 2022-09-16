import React, {useState} from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useMediaQuery } from 'react-responsive'


const ScrollButton = () =>{
	
const isMobile = useMediaQuery({query:`(max-width:576px)`})
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
<div style={{bottom:'0%',
display:visible?'flex':'none',
justifyContent:'space-around',
left:isMobile?'40%':'50%',
position:'fixed',
zIndex:'10',
padding:'2vh',
backgroundColor:'white',
borderRadius:'100px',
margin:'5px',
boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)'
}} className='moveUpBtn'>
<ArrowUpwardIcon onClick={scrollToTop}/>
</div>
    
	
);
}

export default ScrollButton;
