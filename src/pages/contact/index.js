import Header from '@/components/Header';

import { useEffect, useState } from 'react';
import { sendContactForm } from '../../../lib/api';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { inter, neutralFace } from '@/utils/font';
const initValues = { name: "", email: "", project: "", description: "" }

const initState = { values: initValues, isLoading: false, isSuccess: false }
const getSubmissionCount = () => {
    if (typeof window !== 'undefined') {
        const count = localStorage.getItem('submissionCount');
        return count ? parseInt(count, 10) : 0;
    }
    return 0;
};

const setlocalSubmissionCount = (count) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('submissionCount', count);
    }
};

const MAX_SUBMISSIONS = 3; // Define your limit here    
const RATE_LIMIT_PERIOD = 1 * 24 * 60 * 60 * 1000; // 1 day

const Index = () => {
    const [savedTime, setSavedTime] = useState(typeof window !== 'undefined' ? localStorage.getItem('lastSubmissionTime') : null)
    useEffect(() => {
        setSavedTime(localStorage.getItem('lastSubmissionTime'));
        if (savedTime && Date.now() - parseInt(savedTime, 10) > RATE_LIMIT_PERIOD) {
            // Reset count and time if period has passed
            localStorage.removeItem('lastSubmissionTime');
            localStorage.removeItem('submissionCount');
        }
        setSubmissionCount(getSubmissionCount()); // Update state when component mounts
    }, []);
    const [contactDetails, setContactDetails] = useState(initState);
    const [submissionCount, setSubmissionCount] = useState(getSubmissionCount());
    const { values, isLoading, isSuccess } = contactDetails;

    const handleChange = ({ target }) => {
        setContactDetails((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [target.name]: target.value,
            }
        }))
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        setContactDetails((prev) => ({
            ...prev,
            isLoading: true,
        }));
        if (submissionCount >= MAX_SUBMISSIONS && savedTime && Date.now() - parseInt(savedTime, 10) <= RATE_LIMIT_PERIOD) {
            toast.info("Submission limit reached. Please try again later.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "dark",
            });
            setContactDetails({
                values: values, isLoading: false, isSuccess: false
            });
            return;
        }
        try {
            await sendContactForm(values)
            const newCount = submissionCount + 1;
            setSubmissionCount(newCount); // Update state
            setlocalSubmissionCount(newCount);//Update Local Storage
            localStorage.setItem('lastSubmissionTime', Date.now().toString());
            setContactDetails({
                values: values, isLoading: false, isSuccess: true
            });
            toast.success("Mail Sent Successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } catch (error) {
            toast.error(error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setContactDetails({
                values: initValues, isLoading: false, isSuccess: false
            });
        }
    }

    return (<>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
        <Header />
        <div className='flex  justify-center items-center h-screen mid:mt-0 lg:mt-12 relative xs:mt-44'>
            <div className='contact-page--wrapper flex justify-center xl:gap-16 lg:gap-20 xs:flex-col xs:mx-10'>
                <div className='contact-header w-4/12 xs:w-full flex flex-col justify-start'>
                    <h2 className={`${neutralFace.className} bold xl:text-5xl lg:text-3xl xs:text-3xl`}>lets work <br /> <p className='xxl:indent-52 xl:indent-32 xs:indent-0'> Together</p></h2>
                    <p className={`${inter.className} font-light mt-16`}>Do you have a project in mind? Or are you just curious to hear more about us? Сomplete the form below or drop us a line at</p>
                </div>
                <div className='contact-form--wrapper w-6/12 xs:w-full'>
                    <form className="contact-form xs:mt-10" onSubmit={onSubmit}>
                        <div className={`grid lg:grid-cols-8 grid-cols-1 gap-16 ${inter.className} font-light`}>
                            <input type="text" placeholder="your name" name='name' className={`placeholder-black bg-transparent border-b border-black py-4 lg:col-span-8 outline-none`} required value={values.name} onChange={handleChange} />
                            <input type="email" placeholder="your email" name='email' className={`placeholder-black bg-transparent border-b border-black py-4 lg:col-span-4 outline-none`} required value={values.email} onChange={handleChange} />
                            <input type="text" placeholder="your project" name='project' className={`placeholder-black bg-transparent border-b border-black py-4 lg:col-span-4 outline-none`} required value={values.project} onChange={handleChange} />
                            <textarea type="text" placeholder="description" name='description' className={`h-32 placeholder-black bg-transparent border-b border-black py-4 lg:col-span-8 outline-none`} required value={values.description} onChange={handleChange} />
                        </div>
                        {isLoading ? (
                            <div className='my-10'>
                                <div class="nb-spinner"></div>
                            </div>
                        ) : (
                            <div className='py-8'>
                                <button className='contact-cta border mt-6 border-black outline-none rounded-md py-2 px-5 hover:bg-black hover:text-white transition-colors' onClick={onSubmit}>
                                    <p>Get Consultation</p>
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
        <div className='pin-spacer'></div>
    </>
    )
}

export default Index