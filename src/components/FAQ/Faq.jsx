import { useState } from 'react';
import Accordion from '../../shared/Accordion/Accordion';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const faq = [
        {
            title: "What's the advantage over hiring a full-time designer?",
            content: `
            <p class="text-lg text-white pb-5">Great Question! To begin, the expense for retaining a full-time designer at a senior level has surpassed €80,000 per year, inclusive of benefits (and finding an available one might prove challenging). If you also need animation, you might end up paying double this to hire a motion designer. Apart from this, there could be instances where you lack a continuous stream of tasks to keep them consistently occupied, resulting in paying for time that you don't need.</p>
            <p class="text-lg text-white pb-5">In contrast, opting for the monthly plan permits you to conveniently pause and restart your subscription as required. This way, you will only pay for design work when needed.</p>
            `
        },
        {
            title: "Is there a maximum number of requests I am allowed to make?",
            content: `
            <p class="text-lg text-white pb-5">Upon subscribing, you have the freedom of adding as many design requests as you wish to your queue. These will be delivered one by one.</p>
            `
        },
        {
            title: "How quickly can I expect to receive the designs I've requested?",
            content: `
            <p class="text-lg text-white pb-5">Typically, the majority of tasks are delivered in just two to three working days, or sometimes even less. However, more complex tasks might take longer. We work Monday to Friday excluding weekends & holidays.</p>
            `
        },
        {
            title: "Who are the design experts?",
            content: `
            <p class="text-lg text-white pb-5">Surprisingly, this is a one-person agency. This means that you will work directly with me, the founder of Next Step. Nonetheless, certain requests can be handled by partner designers in order to provide you with the best designs possible.</p>
            `
        },
        {
            title: "Can you explain how the pause feature works?",
            content: `
            <p class="text-lg text-white pb-5">We know you might not always need design work for an entire month. You might just have one or two design jobs at the moment. This is where pausing your subscription can be handy.</p>
            <p class="text-lg text-white pb-5">When you pause your subscription, the days that are left in your monthly billing cycle can be used when you resume. For instance, if you pause halfway through the month, when you resume the subscription, you'll still have 15 days remaining during which you can request more designs.</p>
            `
        },
        {
            title: "What happens if don't like the delivered design?",
            content: `
            <p class="text-lg text-white pb-5">No need to worry! We'll continue fine-tuning and revising the design until you are 100% happy!</p>
            `
        },
        {
            title: "What happens if I only have one request?",
            content: `
            <p class="text-lg text-white pb-5">That's perfectly okay. You can choose to pause your subscription once your immediate needs are fulfilled. When you have additional design needs, you can resume your subscription without letting the remaining time go unused.</p>
            `
        }
    ]
    return (
        <div className="w-full relative py-20">
            <div className="container mx-auto px-5 lg:px-12">
                <h3 className="railway text-5xl font-bold text-white text-center leading-[1.4]">Frequently asked <br />
                    questions</h3>
                
                <div className='py-20'>
                    {faq?.map((item, index) => (
                        <Accordion
                            key={index}
                            index={index}
                            title={item?.title}
                            content={item?.content}
                            isOpen={openIndex === index}
                            toggleAccordion={toggleAccordion}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;