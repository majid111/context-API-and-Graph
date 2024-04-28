import Form1 from "../Form1/Form1";
import DaisyUiForm from "../DaisyUiForm/DaisyUiForm";
import { useState } from "react";
import KeepReact from "../keep/KeepReact";
import NavlinkHeader from "../NavlinkHeader/NavlinkHeader";

const Form = () => {
    const [selected, setSelected]=useState(1);
    return (

        // <div role="tablist" className="tabs tabs-lifted">
        //     <input onClick={()=>setSelected(1)} type="radio" name="my_tabs_2" role="tab" className="tab px-5" aria-label="Form1"  checked={selected===1}/>
        //     <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 1</div>

        //     <input onClick={()=>setSelected(2)} type="radio" name="my_tabs_2" role="tab" className="tab px-5" aria-label="DaisyUi Form" checked={selected===2}/>
        //     <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>

        //     <input onClick={()=>setSelected(3)} type="radio" name="my_tabs_2" role="tab" className="tab px-5" aria-label="More" checked={selected===3}/>
        //     <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 3</div>
        // </div>
        // was solved by an instructor of ph



        <div role="tablist" className="tabs tabs-lifted">
            <input onClick={()=>setSelected(1)} type="radio" name="my_tabs_2" role="tab" className="tab px-5" aria-label="Form1"  checked={selected===1}/>
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><Form1></Form1></div>

            <input onClick={()=>setSelected(2)} type="radio" name="my_tabs_2" role="tab" className="tab px-5" aria-label="DaisyUi Form" checked={selected===2}/>
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><DaisyUiForm></DaisyUiForm></div>

            <input onClick={()=>setSelected(3)} type="radio" name="my_tabs_2" role="tab" className="tab px-5" aria-label="Keep" checked={selected===3}/>
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><KeepReact></KeepReact></div>

            <input onClick={()=>setSelected(4)} type="radio" name="my_tabs_2" role="tab" className="tab px-5" aria-label="Navlink Header" checked={selected===4}/>
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><NavlinkHeader></NavlinkHeader></div>
            
            <input onClick={()=>setSelected(5)} type="radio" name="my_tabs_2" role="tab" className="tab px-5" aria-label="More" checked={selected===5}/>
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">More coming soon........</div>
        </div>

    );
};

export default Form;