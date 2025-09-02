import Input from './Input.jsx'
import Textarea from './Textarea.jsx'
import PrimaryBtn from './PrimaryBtn.jsx'
import Title from './Title.jsx'

function Contact() {

    return(
        <section id="contact" className='px-4 md:px-0 pt-16 mt-18 md:pt-18 md:mt-32'>
            <Title text={"Contact"} />
            <div className="w-full md:w-3/4 mx-auto mt-12 md:mt-28 flex flex-col md:flex-row">
                <form action="" className='w-full md:w-1/2'>
                    <Input label='Name' type='text' name='from-name' placeholder='Enter Your Name' />
                    <Input label='Email' type='email' name='from-email' placeholder='example@me.com' />
                    <Textarea label='Message' name='from-message' placeholder='Enter Your Message' />
                    <Input type='submit' className='mt-4 py-1.5 cursor-pointer bg-indigo-500 text-white hover:bg-indigo-600 rounded-lg'/>
                    

                </form>
                <div>

                </div>
            </div>
        </section>
    )
}

export default Contact