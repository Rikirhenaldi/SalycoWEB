import React, { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import { data } from '../data/FAQ'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronCircleUp, faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default function AccordionFAQ() {
    const [accordionActive, setAccordionActive] = useState('')
    return (
        <Accordion alwaysOpen={false}>
            {data.map((item, index) => (
                <div className="accordionItem">
                    <AccordionItem key={index} isActive={false}>
                        {({ open }) => (
                            <>
                                <AccordionHeader className='flex flex-row'>
                                    {open ?
                                        <FontAwesomeIcon className='chevronIcon' icon={faChevronUp} />
                                        :
                                        <FontAwesomeIcon className='chevronIcon' icon={faChevronDown} />
                                    }
                                    <h3 className={`accordion-title ${open ? 'accordion-active' : ''}`}>{item.question}</h3>
                                </AccordionHeader>

                                <AccordionBody>
                                    <div className="accordion-body">
                                        {item.answer}
                                    </div>
                                </AccordionBody>
                            </>
                        )}
                    </AccordionItem>
                </div>
            ))}
        </Accordion>
    )
}
