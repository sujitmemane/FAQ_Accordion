
import { useState } from 'react'
import Accordion from './Accordion'
import mainDesktop from '../assets/illustration-woman-online-desktop.svg'
import mainPhone from '../assets/illustration-woman-online-mobile.svg'
import patternDesktop from '../assets/bg-pattern-desktop.svg'
import patternMobile from '../assets/bg-pattern-mobile.svg'
const Dummy_Questions=[
  {
    id:'01',
    question:'How many team members can I invite?',
    answer:'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan. ',
    open:false,

  },
   {
    id:'02',
    question:'What is the maximum file upload size? ',
    answer:'No more than 2GB. All files in your account must fit your allotted storage space.',
    open:false,

  },
   {
    id:'03',
    question:' How do I reset my password?',
    answer:' Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
    open:true,

  },
   {
    id:'04',
    question:'Can I cancel my subscription? ',
    answer:'Yes! Send us a message and we’ll process your request no questions asked.',
    open:false,

  },
    {
    id:'05',
    question:'Do you provide additional support? ',
    answer:'Chat and email support is available 24/7. Phone lines are open during normal business hours. ',
    open:false,

  },
]

const Main = () => {
     const [questions,setQuestions]=useState(Dummy_Questions)
function mainToggleHandler(id){
  const updatedQuestions=questions.map(question=> {
   if (question.id === id) {
        return {
          ...question,
          open: !question.open,
        };
      }
   return {
    ...question,
    open:false,
   }
    
})
setQuestions(updatedQuestions)
}
  return (
    <section className='mx-auto w-10/12  bg-white  rounded-lg  my-48 '>
      <div className="md:flex md:flex-row md:justify-between md:items-center md:px-8 md:py-14">
        <div className='md:w-1/2'>
        <img src={mainPhone} alt='Phone_Main_Image'  className='md:hidden p-4 -mt-38'/>
        <img src={mainDesktop} alt='Desktop_Main_Image' className='hidden md:block md:-ml-16 '/>
     
        </div>
        <div className=' p-4 flex flex-col items-left md:w-1/2 '>
          <h1 className='text-center font-bold text-2xl my-4 font-dark'>FAQ</h1>
    {questions.map(item=><Accordion key={item.id} id={item.id} question={item.question} answer={item.answer} open={item.open} getId={mainToggleHandler}/>)}
  
        </div>
      </div>
    </section>
  )
}

export default Main
