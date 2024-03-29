import '../style/Card.css'
import Logo from '../logo1.png'


export default function Card({onClick,isPicked,isMatched, cardLogo ,index}) {
    const handleClick = () => {
        !isPicked && onClick(index);
    };
    let cardClass ='card'
    if(isPicked){
        cardClass = 'card card-picked'
    }
    if (isMatched){
        cardClass = 'card card-picked card-matched'
    }

    return <div onClick={handleClick}
                className={cardClass} >
        <div className='front-card'>
            <img src={Logo} alt='logo'/>
        </div>
        <div className='back-card'>
        <img src={cardLogo} alt='This is Logo!'/>
        </div>
    </div>
}