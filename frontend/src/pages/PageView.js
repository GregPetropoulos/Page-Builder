import React from "react";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import pageServices from '../services/pages';

export const PageView = (props) => {
  const { id } = useParams();
  const [htmlData, htmlDataSet] = useState(null)
  useEffect( async () => {
      try {
        const response = await pageServices.viewPage(id);
         htmlDataSet(response)
      } catch (err) {
         console.log(err);
      }
    }, []);
  
  return (
    <div className="grid grid-cols-5 p-8 space-x-4">
        <div className="col-span-5">
          {htmlData ?  
           (<div dangerouslySetInnerHTML={{__html: `${htmlData}`}}></div>)
           :''
           }
        </div>
    </div>);
};
