import React from "react";

const Tram = () => {
    return (
        <div class="stage">
            <div class="animation">
             <div class="tram-top p-absolute">
               <div class="tram-top-one bg-one p-absolute center-horizontal border"></div>
               <div class="tram-top-two bg-one p-absolute center-horizontal border"></div>
               <div class="tram-top-three bg-two p-absolute center-horizontal border">
                 <div class="tram-top-three-left bg-two p-absolute border"></div>
                 <div class="tram-top-three-right bg-two p-absolute border"></div>
               </div>
               <div class="tram-top-four bg-one p-absolute center-horizontal border"></div>
               <div class="tram-top-five bg-one p-absolute border"></div>
               <div class="tram-top-six bg-three p-absolute border"></div>   
             </div>
             <div class="tram-front p-absolute center-horizontal">
               <div class="tram-front-one bg-three p-absolute border"></div>
               <div class="tram-front-two bg-three p-absolute border">
                 <div class="tram-front-two-left bg-seven p-absolute border"></div>
                 <div class="tram-front-two-middle bg-seven p-absolute center-horizontal border"></div>
                 <div class="tram-front-two-right bg-seven p-absolute border"></div>
               </div>
               <div class="tram-front-three bg-four p-absolute border">
                 <div class="tram-front-three-middle p-absolute center-horizontal"></div>
               </div>
               <div class="tram-front-four bg-five p-absolute border">
                 <div class="tram-front-four-left p-absolute bg-four border"></div>
                 <div class="tram-front-four-right p-absolute bg-four border"></div>
               </div>
               <div class="tram-front-five bg-six p-absolute border"></div>
             </div>
             <div class="tram-left p-absolute">
               <div class="tram-left-one bg-four p-absolute border"></div>
               <div class="tram-left-two bg-three p-absolute border"></div>
               <div class="tram-left-three bg-four p-absolute border"></div>
             </div>
             <div class="tram-right p-absolute">
               <div class="tram-right-one bg-four p-absolute border"></div>
               <div class="tram-right-two bg-three p-absolute border"></div>
               <div class="tram-right-three bg-four p-absolute border"></div>
             </div>
             <div class="tram-bottom p-absolute center-horizontal">
               <div class="tram-bottom-one bg-eight p-absolute center-horizontal"></div>
               <div class="tram-bottom-two bg-eight p-absolute center-horizontal"></div>
               <div class="tram-bottom-three bg-eight p-absolute center-horizontal"></div>   
               <div class="tram-bottom-four p-absolute center-horizontal border"></div> 
            </div>       
            </div>
            <div class="tram-rail p-absolute center-horizontal">
              <div class="tram-rail-left bg-nine p-absolute border"></div>
              <div class="tram-rail-right bg-nine p-absolute border"></div>
            </div>
           </div>

    )
}
    export default Tram;