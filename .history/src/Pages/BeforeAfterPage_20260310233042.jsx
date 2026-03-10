import React from 'react'
import Header from '../Components/Header'
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


    </div>
  )
}
