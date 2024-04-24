import { createContext } from "react";
import BBB from "../BBB/BBB";
import CCC from "../CCC/CCC";
import DDD from "../DDD/DDD";

export const AssetContext = createContext('gold');
export const Diamond = createContext('Diamond');

const AAA = () => {
    return (
        <div className="text-center border-2 border-orange-400 ">
            <h1>AAA</h1>
            <AssetContext.Provider value="gold">
                <Diamond.Provider value="Diamond">
                <div className="flex gap-4 justify-center">
                    <BBB></BBB>
                    <CCC></CCC>
                    <DDD></DDD>
                </div>
                </Diamond.Provider>
            </AssetContext.Provider>
        </div>
    );
};

export default AAA;