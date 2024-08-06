import React from 'react';
import './Crm.css';

export const Crm = () => {
  return (
    <div className='crm_section'>
        <div className="first_cnt p-2 ">
            <div className="first_cnt_left p-2 ">
                <h2 className='text-7xl font-bold'>
                    CRM management
                </h2>
                <div className="rouded_tags_cnt flex flex-row gap-2 mt-2 flex-wrap">
                    <p className="rounded_tag uppercase p-4 border rounded-full border-black">Business Management</p>
                    <p className="rounded_tag uppercase p-4 border rounded-full border-black">SAAS</p>
                    <p className="rounded_tag uppercase p-4 border rounded-full border-black">Cloud Plateform</p>
                </div>
            </div>
            <div className="first_cnt_right">
                <div className="details_cnt">
                    <h3 className="details_title">UI/UX Design</h3>
                    <p className="details_desc ">We done a redesign of the product, applying robust UX design methodologies.</p>
                </div>
                <div className="details_cnt">
                    <h3 className="details_title">Initial CSAT</h3>
                    <p className="details_desc"><span className='text-7xl'>2.9</span> of 5</p>
                </div>
                <div className="details_cnt">
                    <h3 className="details_title">CSAT after Rdesign</h3>
                    <p className="details_desc"><span className='text-7xl'>4.8</span> of 5</p>
                </div>
            </div>

        </div>
    </div>
  )
}
