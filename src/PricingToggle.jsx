import './PricingToggle.css';

function PricingToggle({ mode, setMode }) {
    const handleChange = () => {
        if (mode === 'annually') {
            return setMode('monthly');
        } else {
            return setMode('annually');
        }
    }

    return (
        <div className="PricingToggle">
            <span className="gray-650 opacity-50">Annually</span>

            <div className="form-check form-switch mx-4 my-0 p-0">
                <input id="billing-toggle" className="form-check-input shadow-none m-0 toggle" type="checkbox" role="switch" checked={mode === 'monthly' ? true : false} onChange={handleChange} aria-label="Toggle between monthly and annual billing"/>
                <label htmlFor="billing-toggle" className="visually-hidden">Toggle between monthly and annual billing</label>
            </div>

            <span className="gray-650 opacity-50">Monthly</span>
        </div>
    )
}

export default PricingToggle;