import './index.css';

const Card = ():JSX.Element => {
  return(
    <div className='card'>
      <p className='card_text'>
        <span>Tumeric honey soap</span>
        <span>It is good for scar and hyperpigmentation.</span>
      </p>
      <figure>
        <img src='https://noureturebynature.s3.amazonaws.com/nbn_img1.jpg' alt='soap by noureture by nature' />
      </figure>
    </div>
  )
}
export default Card;