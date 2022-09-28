import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useForm } from "react-hook-form";
import { BiUser } from 'react-icons/bi';
import { AiOutlineSecurityScan } from 'react-icons/ai';
import { MdOutlinePayment } from 'react-icons/md';
import { MdOutlineNotifications } from 'react-icons/md';
import { TbMessageOff } from 'react-icons/tb';
import { RiPencilLine } from 'react-icons/ri';
import './style.css';
import {Profile} from './Profile'
import {Security} from './Security'

export const Settigns =() => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
  } = useForm({
    mode: "onBlur",
  });

  const {
    register: register3,
    formState: { errors: errors3 },
    handleSubmit: handleSubmit3,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    alert(`thank you for your message`);
  };

  const onSubmitId = (data) => {
    console.log(JSON.stringify(data.tel));
    alert(`thank you for your message`);
  };

  const onSubmitId2 = (data) => {
    console.log(JSON.stringify(data.tel));
    alert(`thank you for your message`);
  };

  return (
    <>

      <div className='wp-tabs-section wp-profile'>
        <Tabs>
          <TabList> {/*The nav Menu!!!*/}
            <Tab><BiUser /> Profile</Tab>
            <Tab><AiOutlineSecurityScan /> Privacy & security </Tab>
            <Tab><MdOutlinePayment /> Payments methods </Tab>
            <Tab><MdOutlineNotifications />Notifications </Tab>
            <Tab><TbMessageOff /> Verification KYC </Tab>
          </TabList>

          <div className='mobile-tab-cont'>

            <Tab className="mobile-tab react-tabs__tab"> <AiOutlineSecurityScan /> Privacy & security </Tab>
            <TabPanel>
              <Profile/> {/*Privacy and security...priv_security.jsx */}
            </TabPanel>

            <Tab className="mobile-tab react-tabs__tab"> <BiUser /> Profile </Tab>
            <TabPanel>
              <Security/>
            </TabPanel>

            <Tab className="mobile-tab react-tabs__tab">  <MdOutlinePayment /> Paymentoos methods </Tab>
            <TabPanel>
              <h3>Any content 2</h3>
            </TabPanel>
            <Tab className="mobile-tab react-tabs__tab">  <MdOutlineNotifications />Notifications </Tab>
            <TabPanel>
              <a href="javascript:void()" className='btn'>change</a>
            </TabPanel>
            <Tab className="mobile-tab react-tabs__tab">  <TbMessageOff /> Verification KYC </Tab>
            <TabPanel>
              <h3>Any content 2</h3>
            </TabPanel>
          </div>
        </Tabs>
      </div>


    </>

  );
};
