import Form1 from "../Form1/Form1";
import DaisyUiForm from "../DaisyUiForm/DaisyUiForm";

const Form = () => {
    return (
        <div role="tablist" className="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Form1" checked />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><Form1></Form1>
            </div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="DaisyUi Form" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><DaisyUiForm></DaisyUiForm>
            </div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="More" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">More Form coming...........
            </div>
        </div>

    );
};

export default Form;