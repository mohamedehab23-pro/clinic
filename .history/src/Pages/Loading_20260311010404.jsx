import React from 'react'
import {CircularProgress} from "@heroui/react";

export default function Loading() {
  return (
    <div className='min'>
        <CircularProgress aria-label="Loading..." />

    </div>
  )
}
