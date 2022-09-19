/** @jsxImportSource @emotion/react */
import React from 'react'
import * as styles from './style'
import { user } from '../Overview/StaticData';
import { Avatar,Rating,Button,Chip } from '@mui/material';
import NoteIcon from '@mui/icons-material/Note';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import { H33 } from '../../Home/GlobalStyles';
import bitcoin from '../../../assets/bitcoin-yellow.svg'
import personIcon from '../../../assets/person.svg'
import peopleIcon from '../../../assets/people.svg'
import bannerIcon from '../../../assets/banner.svg'
import settingicon from '../../../assets/settings.svg'
import chatIcon from '../../../assets/chat.svg'

export const UserInfo =()=>{
    return(
      <div css={styles.userDataDiv} > {/*Th Div containing the logged in user Information*/}
              <Avatar src={bitcoin} css={styles.userPic}/>
              <H33 css={styles.userName}>{user.name}</H33>
              <p css={styles.userTitle}>{user.title}</p>
              <Rating value={user.rating} css={styles.userRating} max={4} readOnly/>
              <Button variant='contained' css={styles.actionButton} fullWidth style={{backgroundColor:'#5A48FA'}}>
                <DashboardCustomizeIcon css={styles.icoBtn}/>Create escrow</Button>
              <Button variant='contained' css={styles.actionButton} fullWidth style={{backgroundColor:'#04063D'}}>
                <NoteIcon css={styles.icoBtn}/> Generate report</Button>
            </div>
    )
  }
  
export const UserActions =()=>{
    return(
      <div css={styles.userActionsContainer}> {/*The div about the followers, following, settings,etc*/}
                <div css={styles.foloContainer}>
                  <img src={personIcon} css={styles.iconStyle} />
                  <p css={styles.plainText}>Followers</p>
                  <Chip label={user.followers} css={styles.userChip}/>
                </div>
                <div css={styles.foloContainer}>
                <img src={peopleIcon} css={styles.iconStyle} />
                  <p css={styles.plainText}>Following</p>
                  <Chip label={user.following} css={styles.userChip}/>
                </div>
                <div css={styles.foloContainer}>
                <img src={bannerIcon} css={styles.iconStyle} />
                  <p css={styles.plainText}>Escrow saved</p>
                  <Chip label={user.escrowSaved} css={styles.userChip}/>
                </div>
                <div css={styles.foloContainer}>
                <img src={chatIcon} css={styles.iconStyle} />
                  <p css={styles.plainText}>Messages</p>
                  <Chip label={user.escrowSaved} css={styles.userChip}/>
                </div>
                <div css={styles.foloContainer2}>
                <img src={settingicon} css={styles.iconStyle} />
                  <p css={styles.plainText} style={{textAlign:'left',width:'fit-content'}}>Settings</p>
                </div>
                <div css={styles.foloContainer2} style={{marginTop:'9vh'}}>
                  <LogoutIcon css={styles.iconStyle} />
                  <p css={styles.plainText} style={{textAlign:'left'}}>Log Out</p>
                </div>
            </div>
    )
  }