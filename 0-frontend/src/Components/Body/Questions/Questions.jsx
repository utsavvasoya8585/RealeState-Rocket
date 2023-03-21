import React from 'react'
import "./questions.css"
import logo from "../../Images/final-hd.png"
import { BsPatchQuestion } from "react-icons/bs"

const Questions = () => {
    return (
        <>
            <div className='page-title'><p>QUESTIONS</p></div>
            <div className='questions-page'>
                <div className="steps-heading">FAQ</div>

                <div className="top-all-que">
                    <div className="faq-questions">
                        <div className="faq-questoin">
                            <p className="faq-que">
                                1.What is real estate wholesaling and how does it differ from traditional home selling methods?
                            </p>
                            <p className="faq-que">
                                2.How do Real Estate Rocket find potential buyers for the properties you are wholesaling?
                            </p>
                            <p className="faq-que">
                                3.How long does it take to sell a property through Real Estate Rocket?
                            </p>
                            <p className="faq-que">
                                4.What is the process for closing a deal when working with a real estate wholesaler?
                            </p>
                            <p className="faq-que">
                                5.What criteria do you use to determine the value of my property?
                            </p>
                            <p className="faq-que">
                                6.Do I need to make any repairs or renovations to my property before selling it to a wholesaler?
                            </p>
                            <p className="faq-que">
                                7.What fees or commissions do I need to pay when working with a real estate wholesaler?
                            </p>
                            <p className="faq-que">
                                8.What happens if the buyer you assign the contract to is unable to close the deal?
                            </p>
                            <p className="faq-que">
                                9.How do I know if real estate wholesaling is the right option for me?
                            </p>
                        </div>
                        <div className="faq-right-que-image">
                            <img src={logo} alt='RealeState Rocket' className='faq-right-image' />

                        </div>
                    </div>
                    <div className="questions-answer">
                        <div className="full-question">
                            <div className="full-que-icon"><BsPatchQuestion /></div>
                            <div className="full-que-question-answer">
                                <div className="full-que-question">
                                    What is real estate wholesaling and how does it differ from traditional home selling methods?
                                </div>
                                <div className="full-que-ans">
                                    Real estate wholesaling is a method of selling a property quickly, often within a matter of days or weeks. Unlike traditional home selling methods, which can take months to complete, real estate wholesaling involves finding an investor buyer who is willing to purchase the property for a discounted price.
                                </div>
                            </div>
                        </div>
                        <div className="full-question">
                            <div className="full-que-icon"><BsPatchQuestion /></div>
                            <div className="full-que-question-answer">
                                <div className="full-que-question">
                                    How do Real Estate Rocket find potential buyers for the properties you are wholesaling?
                                </div>
                                <div className="full-que-ans">
                                    Real Estate Rocket use a variety of methods to find potential buyers for the properties we are wholesaling. This includes networking with other investors, advertising on real estate websites, and using targeted marketing campaigns to reach buyers who are actively looking for investment opportunities.
                                </div>
                            </div>
                        </div>
                        <div className="full-question">
                            <div className="full-que-icon"><BsPatchQuestion /></div>
                            <div className="full-que-question-answer">
                                <div className="full-que-question">
                                    How long does it take to sell a property through Real Estate Rocket?
                                </div>
                                <div className="full-que-ans">
                                    The length of time it takes to sell a property through real estate rocket can vary depending on a variety of factors, such as the condition of the property, the location, and the current real estate market. However, we typically aim to close deals within 30 days or less.
                                </div>
                            </div>
                        </div>
                        <div className="full-question">
                            <div className="full-que-icon"><BsPatchQuestion /></div>
                            <div className="full-que-question-answer">
                                <div className="full-que-question">
                                    What is the process for closing a deal when working with a real estate wholesaler?
                                </div>
                                <div className="full-que-ans">
                                    The process for closing a deal when working with a real estate wholesaler involves several steps, including finding a buyer, negotiating a price, and signing a contract. We work closely with both the seller and the buyer throughout the process to ensure that all parties are satisfied with the transaction.
                                </div>
                            </div>
                        </div>
                        <div className="full-question">
                            <div className="full-que-icon"><BsPatchQuestion /></div>
                            <div className="full-que-question-answer">
                                <div className="full-que-question">
                                    What criteria do you use to determine the value of my property?
                                </div>
                                <div className="full-que-ans">
                                    We use a variety of criteria to determine the value of a property, including the condition of the property, the location, and the current real estate market. We also take into account any repairs or renovations that may be needed to bring the property up to its full potential.
                                </div>
                            </div>
                        </div>
                        <div className="full-question">
                            <div className="full-que-icon"><BsPatchQuestion /></div>
                            <div className="full-que-question-answer">
                                <div className="full-que-question">
                                    Do I need to make any repairs or renovations to my property before selling it to a wholesaler?
                                </div>
                                <div className="full-que-ans">
                                    No, you do not need to make any repairs or renovations to your property before selling it to a wholesaler. We are willing to purchase properties in any condition, and we will take care of any necessary repairs or renovations after the sale.
                                </div>
                            </div>
                        </div>
                        <div className="full-question">
                            <div className="full-que-icon"><BsPatchQuestion /></div>
                            <div className="full-que-question-answer">
                                <div className="full-que-question">
                                    What fees or commissions do I need to pay when working with a real estate wholesaler?
                                </div>
                                <div className="full-que-ans">
                                    You do not need to pay any fees or commissions when working with a real estate wholesaler. We purchase properties directly from sellers, and we do not charge any fees or commissions for our services.
                                </div>
                            </div>
                        </div>
                        <div className="full-question">
                            <div className="full-que-icon"><BsPatchQuestion /></div>
                            <div className="full-que-question-answer">
                                <div className="full-que-question">
                                    What happens if the buyer you assign the contract to is unable to close the deal?
                                </div>
                                <div className="full-que-ans">
                                    If the buyer we assign the contract to is unable to close the deal, we will work to find another buyer who is willing to purchase the property. We are committed to ensuring that every transaction is successful, and we will work tirelessly to make sure that your property is sold.
                                </div>
                            </div>
                        </div>
                        <div className="full-question">
                            <div className="full-que-icon"><BsPatchQuestion /></div>
                            <div className="full-que-question-answer">
                                <div className="full-que-question">
                                    How do I know if real estate wholesaling is the right option for me?
                                </div>
                                <div className="full-que-ans">
                                    Real estate wholesaling may be a good option for you if you need to sell your property quickly or if you do not want to deal with the hassles of a traditional home sale. We can help you determine whether or not real estate wholesaling is the right option
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Questions