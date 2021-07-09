import React from "react";
import { useEffect, useState } from 'react';
import { SideNavbar } from "../components/SideNavbar";
import { useParams } from 'react-router-dom';
import pageServices from '../services/pages';

export const PageView = (props) => {
  const { id } = useParams();
  const [htmlData, htmlDataSet] = useState(null)

useEffect( async () => {
    try {
       const response = await pageServices.viewPage(id);
       htmlDataSet(response)
       console.log('response page view', response)
    } catch (err) {
       console.log(err);
    }
  }, []);
  
  return (
    <div className="grid grid-cols-5 grid-rows-4 p-8 space-x-4">
        <div className="col-span-4">
          {htmlData ?  
           (<div dangerouslySetInnerHTML={{__html: `${htmlData}`}}></div>)
           :''
           }
        </div>
    </div>);
};
