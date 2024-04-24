import { useContext } from "react";
import { AssetContext } from "../AAA/AAA";

const PPP = () => {
    const givenData = useContext(AssetContext);
    return (
        <div>
            <h4>PPP</h4>
            {givenData}
        </div>
    );
};

export default PPP;