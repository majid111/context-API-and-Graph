import { useContext } from "react";
import { AssetContext, Diamond } from "../AAA/AAA";

const OOO = () => {
    const gift =useContext(AssetContext);
    const gift2=useContext(Diamond);
    return (
        <div>
            <h4>OOO</h4>
            {gift}
            {gift2}
        </div>
    );
};

export default OOO;