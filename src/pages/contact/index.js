import Header from '@/components/Header'

import React, { useEffect, useState } from 'react'
import { sendContactForm } from '../../../lib/api'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { inter, neutralFace } from '@/utils/font';
const initValues = { name: "", email: "", project: "", description: "" }

const initState = { values: initValues, isLoading: false, isSuccess: false }

const Index = () => {

    const [contactDetails, setContactDetails] = useState(initState);

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
        try {
            await sendContactForm(values)
            setContactDetails({
                values: initValues, isLoading: false, isSuccess: true
            });
            console.log(contactDetails)
        } catch (error) {
            setContactDetails({
                values: initValues, isLoading: true, isSuccess: false
            });
            console.log(contactDetails)
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
        <div className='flex  justify-center items-center h-screen relative xs:mt-44'>
            <div className='contact-page--wrapper flex justify-center xl:gap-16 lg:gap-20 xs:flex-col xs:mx-10'>
                <div className='contact-header w-4/12 xs:w-full flex flex-col justify-start'>
                    <h2 className={`${neutralFace.className} bold xl:text-5xl lg:text-3xl xs:text-3xl`}>lets work <br /> <p className='xxl:indent-52 xl:indent-32 xs:indent-0'> Together</p></h2>
                    <p className={`${inter.className} font-light mt-16`}>Do you have a project in mind? Or are you just curious to hear more about us? Сomplete the form below or drop us a line at</p>
                </div>
                <div className='contact-form--wrapper w-6/12 xs:w-full'>
                    <form className="contact-form xs:mt-10">
                        <div className={`grid lg:grid-cols-8 grid-cols-1 gap-16 ${inter.className} font-light`}>
                            <input type="text" placeholder="your name" name='name' className={`placeholder-black bg-transparent border-b border-black py-4 lg:col-span-8 outline-none`} value={values.name} onChange={handleChange} />
                            <input type="email" placeholder="your email" name='email' className={`placeholder-black bg-transparent border-b border-black py-4 lg:col-span-4 outline-none`} value={values.email} onChange={handleChange} />
                            <input type="text" placeholder="your project" name='project' className={`placeholder-black bg-transparent border-b border-black py-4 lg:col-span-4 outline-none`} required value={values.project} onChange={handleChange} />
                            <textarea type="text" placeholder="description" name='description' className={`h-44 placeholder-black bg-transparent border-b border-black py-4 lg:col-span-8 outline-none`} required value={values.description} onChange={handleChange} />
                        </div>
                        {isLoading ? (
                            <div className='my-10'>
                                <div class="nb-spinner"></div>
                            </div>
                        ) : (
                            <div className='py-8'>
                                <button className='contact-cta border mt-6 border-black outline-none rounded-md py-2 px-5 hover:bg-black lg:block hidden hover:text-white transition-colors' onClick={onSubmit}>
                                    <p>Get Consultation</p>
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    </>
    )
}

export default Index