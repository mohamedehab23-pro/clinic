import React from 'react'
import Header from '../Components/Header'
import before from '../assets/before.png'
import after from '../assets/after.png'
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

  return (
    <div id='before-after' className='min-h-screen'>
<Header text={'صور قبل وبعد'}/>
<div className='flex justify-center'>

</div>
<div className='  '>
<Button color="primary" onPress={onOpen}>
        <div className='py-6 px-7 rounded-2xl flex gap-7 justify-center items-center '>
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
                    <p> قبل</p>
                    <img className='rounded-2xl' src={before} alt="" />
                  </div>
               <div>
                <p> بعد</p>
                <img className='rounded-2xl' src={after} alt="" />
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
      </Modal>
    

    </div>
  )
}
