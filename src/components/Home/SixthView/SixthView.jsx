/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { CssBaseline, Grid,Chip,InputBase } from '@mui/material'
import React,{useState,useEffect} from 'react'
import { plainText,H11,H22,H33 } from '../GlobalStyles'
import * as styles from './style'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CachedIcon from '@mui/icons-material/Cached';
import BlockIcon from '@mui/icons-material/Block';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SearchIcon from '@mui/icons-material/Search';
import { chipStyle } from '../SecondView/style'
import { useMediaQuery } from 'react-responsive'

export const SixthView=()=> {
    const faqs = [
        {
            icon:<FavoriteBorderIcon/>,
            question:'How does it work?',
            solution:'Online escrow is a five-step payment process that protects Buyers and Sellers in a transaction.'
        },
        {
            icon:<CachedIcon/>,
            question:'How long does the process take?',
            solution:'Online escrow is a five-step payment process that protects Buyers and Sellers in a transaction.'
        },
        {
            icon:<BlockIcon/>,
            question:'How should i ship merchandise?     ',
            solution:'Online escrow is a five-step payment process that protects Buyers and Sellers in a transaction.'
        },
        {
            icon:<AddCircleOutlineIcon/>,
            question:'How long does the buyer has to inspect the items? ',
            solution:'Online escrow is a five-step payment process that protects Buyers and Sellers in a transaction.'
        },
        {
            icon:<LocalAtmIcon/>,
            question:'How does billing work?',
            solution:'Online escrow is a five-step payment process that protects Buyers and Sellers in a transaction.'
        },
        {
            icon:<MailOutlineIcon/>,
            question:'How do I change my account email?',
            solution:'Online escrow is a five-step payment process that protects Buyers and Sellers in a transaction.  '
        }
    ]
    const [searchItem,setSearch] = useState([])
    const [searchTerm,setSearchTerm] = useState('')
    useEffect(()=>{
        setSearch(faqs)
    },[])
const handleChange=(e)=>{
    if(e.target.value === ''){
        setSearch(faqs)
    }
    setSearchTerm(e.target.value.toLowerCase())
    setSearch(faqs.filter(faq=>faq.question.toLowerCase().includes(searchTerm)))
}
const isMobile = useMediaQuery({query:`(max-width:576px)`})
  return (
    <div className='sixthView' >
            
        <div css={styles.faqSearch}>
        <Chip label="FAQs" css={chipStyle}/>
            <H11>Frequently asked questions</H11>
            <p css={plainText}>Have questions? we're here to help</p>
            <div css={styles.searchBox}>
                <SearchIcon css={styles.searchIcon}/><InputBase placeholder='Search' css={styles.searchInput} onInput={handleChange} value={searchTerm}/>
            </div>
        </div>

        <div css={styles.searchAnswers}>
              <div>
                <Grid container spacing={isMobile?4:1}>

                    {
                        searchItem?.map((faq,index)=>(
                            <Grid item lg={4} xs={12} key={index}>
                                <span css={styles.solutionIcon}>{faq.icon}</span>
                                <H33 style={{marginLeft:'auto',marginRight:'auto',textAlign:'center'}}>{faq.question}</H33>
                                <p css={plainText} style={{textAlign:'center',fontSize:'15px'}}>{faq.solution}</p>
                            </Grid>
                        ))
                    }
                </Grid>
              </div>
              <div style={{marginTop:'4vh'}}>
              </div>
        </div>
    </div>
  )
}

