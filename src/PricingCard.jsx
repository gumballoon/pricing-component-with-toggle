import './PricingCard.css'
import PricingCardButton from './PricingCardButton';

function PricingCard({ title, annuallyPrice, monthlyPrice, storage, users, gb, highlighted=false, mode} ) {
    const color = highlighted ? 'text-white' : 'gray-650';
    const backgroundColor = highlighted ? 'bg-purple' : 'bg-white';
    const extendHeight  = highlighted ? 'py-lg-5' : ''; 
    const allClasses = ['PricingCard col-12 col-lg-4', color, backgroundColor, extendHeight];

    let price = 0;
    if (mode === 'annually') price = annuallyPrice;
    else price = monthlyPrice;

    const priceColor = highlighted ? 'text-white' : 'gray-700';
    
    return (
        <div className={allClasses.join(' ')}>
            <h2 className='fw-700 fs-5'>{title}</h2>
            <h3 className={'fw-700 py-4 my-0 border-bottom d-flex align-items-center justify-content-center' + ' ' + priceColor}><small className='fs-2'>$</small> {price.toFixed(2)}</h3>
            <p className='fw-700 py-3 border-bottom mb-0'>{storage} Storage</p>
            <p className='fw-700 py-3 border-bottom mb-0'>{users} Users Allowed</p>
            <p className='fw-700 py-3 border-bottom mb-0'>Send up to {gb} GB</p>
            < PricingCardButton highlighted={highlighted}/>
        </div>
    )
}

export default PricingCard;