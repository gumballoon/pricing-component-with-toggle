import { useState } from "react";
import PricingToggle from './PricingToggle';
import PricingCard from './PricingCard';

function PricingDashboard() {
    const [mode, setMode] = useState('annually');
    return (
        <>
            <h1 className="fw-700 gray-650 mb-4">Our Pricing</h1>
            < PricingToggle mode={mode} setMode={setMode}/>
            <div className="row align-items-center">
                < PricingCard title={'Basic'} annuallyPrice={19.99} monthlyPrice={199.99} storage={'500 GB'} users={2} gb={3} mode={mode}/>
                < PricingCard title={'Professional'} annuallyPrice={24.99} monthlyPrice={249.99} storage={'1 TB'} users={5} gb={10} highlighted mode={mode}/>
                < PricingCard title={'Master'} annuallyPrice={39.99} monthlyPrice={399.99} storage={'2 TB'} users={10} gb={20} mode={mode}/>
            </div>
        </>
    )
}

export default PricingDashboard;