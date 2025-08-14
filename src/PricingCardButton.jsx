import './PricingCardButton.css';

function PricingCardButton({ highlighted=false} ) {
    const highlight = highlighted ? 'highlight' : '';
    return (
        <button className={'PricingCardButton mt-5 mb-4 py-3 fw-700 bg-purple text-white' + ' ' + highlight}>Learn More</button>
    )
}

export default PricingCardButton;