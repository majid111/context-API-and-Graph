import { useContext } from "react";
import { Gift3 } from "../AAA/AAA";

const NNN = () => {
    const gift3 = useContext(Gift3);
    return (
        <div>
            <h4>NNN</h4>
            {gift3}
        </div>
    );
};

export default NNN;