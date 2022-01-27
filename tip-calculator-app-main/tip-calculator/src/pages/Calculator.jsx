import { useState } from 'react';
import dollar from '../images/icon-dollar.svg';
import person from '../images/icon-person.svg';

const Calculator = () => {
    const [bill, setBill] = useState(0);
    return (
        <main className="main">
            <h1 className="main__header">spli<br/>tter</h1>
            
            <section className="main__calculator">
                <div className="main__calculator__form">
                    <h3 className="main__calculator__form__title">Bill</h3>
                    <div className='main__calculator__form__group'>
                        <img src={dollar} alt="Icon" className='main__calculator__form__group__dollar'/>
                        <input className="main__calculator__form__group__input" placeholder={bill}/>
                    </div>
                    <div className='main__calculator__form__btn'>
                        <h3 className='main__calculator__form__btn__title'>Select tip %</h3>
                        <div className='main__calculator__form__button'>
                            <button type='button' value='5%'>5%</button>
                            <button type='button'>10%</button>
                            <button type='button'>15%</button>
                            <button type='button'>25%</button>
                            <button type='button'>50%</button>
                            <button type='button'>Custom</button>
                        </div>
                    </div>
                    <h3 className="main__calculator__form__title">Number of People</h3>
                    <div className='main__calculator__form__group'>
                        <img src={person} alt="Icon" className='main__calculator__form__group__dollar'/>
                        <input className="main__calculator__form__group__input" placeholder={bill}/>
                    </div>
                </div>
                <div className="main__calculator__reset">
                    <div>
                        <h3 className='main__calculator__reset__amount'>Tip Amount</h3>
                        <h3 className='main__calculator__reset__person'>/ person</h3>
                        <input type='text' className='main__calculator__reset__input' placeholder='$0.00' readOnly/>
                    </div>
                    <div>
                        <h3 className='main__calculator__reset__amount'>Total</h3>
                        <h3 className='main__calculator__reset__person'>/ person</h3>
                        <input type='text' className='main__calculator__reset__input' placeholder='$0.00' readOnly/>
                    </div>
                    <button type="reset">Reset</button>
                </div>
            </section>
            <div class="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
                Coded by <a href="https://www.github.con/Barkty">Barkty</a>.
            </div>
        </main>
    );
}

export default Calculator;