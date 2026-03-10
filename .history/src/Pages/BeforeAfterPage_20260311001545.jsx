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
<div className='flex flex-col gap-3 items-center'>
      <div className='flex gap-3'>
        <img src={before} className='lgw-70' alt="" />
        <img src={after} className='w-70' alt="" />
      </div>
      <div className='flex gap-3'>
        <img src={secondbefore} className='w-70' alt="" />
        <img src={secondafter} className='w-70' alt="" />
      </div>
       {/* <div >
<Button color="primary" onPress={onOpen}>
        <div className=' rounded-2xl flex gap-7 justify-center items-center '>
<p>صورة اول مريض</p>
        </div>

      </Button>
</div>
      
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">مريض رقم 1</ModalHeader>
              <ModalBody>
                <div className="flex justify-between p-3 gap-3">
                  <div>
                    <p className='text-center'> قبل</p>
                    <img className='rounded-2xl' src={secondbefore} alt="" />
                  </div>
               <div>
                <p className='text-center'> بعد</p>
                <img className='rounded-2xl' src={secondafter} alt="" />
               </div>
             
                </div>
               
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> */}
      
</div>

    

    </div>
    </>
  )
}
