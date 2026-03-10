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

    <div>
  <button onpress="{onOpen}">Open Modal</button>
  <modal isopen="{isOpen}" onopenchange="{onOpenChange}">
    <modalcontent>
      {'{'}(onClose) =&gt; (
      &lt;&gt;
      <modalheader classname="flex flex-col gap-1">Modal Title</modalheader>
      <modalbody>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
          risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
          quam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
          risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
          quam.
        </p>
        <p>
          Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
          adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
          officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
          nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
          deserunt nostrud ad veniam.
        </p>
      </modalbody>
      <modalfooter>
        <button color="danger" variant="light" onpress="{onClose}">
          Close
        </button>
        <button color="primary" onpress="{onClose}">
          Action
        </button>
      </modalfooter>
      ){'}'}
    </modalcontent>
  </modal>
</div>

    

    </div>
  )
}
