import React from "react";
import { useEffect } from 'react';
import { SideNavbar } from "../components/SideNavbar";
import { useParams } from 'react-router-dom';
import pageServices from '../services/pages';

export const PageView = (props) => {
  const { id } = useParams();
  let HTML = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"><style>
  body{
    margin:0;
  }
  .screen{
    height:calc(100vh - 56px) !important;
  }
</style><div class="cover-container d-flex h-100 p-3 mx-auto flex-column text-white screen align-content-center" style="background-color: rgb(175, 75, 75);"><header><div class=" d-flex justify-content-between my-2"><h3 class="masthead-brand">Cooo</h3><nav class="nav justify-content-center"><a class="nav-link active" href="#">Home</a><a class="nav-link" href="#">Features</a><a class="nav-link" href="#">Contact</a></nav></div></header><main role="main" class="mx-auto container my-auto"><h1 class="fs-2 text-center mb-4">ooooo</h1><p class="fs-5">Cover is olsls</p><div class="d-flex justify-content-center my-5"><img alt="img" src="/static/media/cover.84917949.png" style="width: 300px;"></div><p class="d-flex justify-content-center"><a href="#" class="btn btn-lg btn-secondary">Learn more</a></p></main><footer class="d-flex justify-content-center"><div class="inner"><p>Cover template </p></div></footer></div>`

useEffect( async () => {
    try {
       const response = await pageServices.viewPage(id);
       HTML = response
       console.log('response page view', response)
    } catch (err) {
       console.log(err);
    }
  }, []);
  
  return (
    <div className="grid grid-cols-5 grid-rows-4 p-8 space-x-4">
        <div className="col-span-1 row-span-4">
          <SideNavbar currentUser={props.currentUserProp} signOut={props.signOutFunc} />
        </div>
        <div className="col-span-4">
          {HTML ?  
           (<div dangerouslySetInnerHTML={{__html: `${HTML}`}}></div>)
           :''
           }
          
        </div>
    </div>);
};
