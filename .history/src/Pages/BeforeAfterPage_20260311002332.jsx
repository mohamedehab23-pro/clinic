import React from 'react'
import Header from '../Components/Header'
import before from '../assets/before.png'
import after from '../assets/after.png'
import secondbefore from '../assets/face.png'
import secondafter from '../assets/another.png'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
export default function BeforeAfterPage() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (<>
    <div id='before-after' className='min-h-screen py-9'>
<Header text={'صور قبل وبعد'}/>
<div className='flex flex-col gap-7 items-center'>
      <div className='flex gap-3'>
        <div>
          <p className='text-center py-4 text-2xl'>قبل</p>

          <img src={before} className='w-50 lg:w-70 blur hover:blur-none rounded-2xl duration-600' alt="bad teeth" />
        </div>
        <div>
          <p className='text-center py-4 text-2xl'>بعد</p>

        <img src={after} className='w-50 lg:w-70 blur hover:blur-none rounded-2xl duration-600' alt="clean teeth" />
        </div>
      </div>
      <div className='flex gap-3'>
        <img src={secondbefore} className='w-50 lg:w-70 blur hover:blur-none rounded-2xl duration-600' alt="bad teeth" />
        <img src={secondafter} className='w-50 lg:w-70 blur hover:blur-none rounded-2xl duration-600' alt="clean teeth" />
      </div>
       
      
</div>

    

    </div>
    </>
  )
}
