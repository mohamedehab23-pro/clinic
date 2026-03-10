import React from 'react'
import {CircularProgress} from "@heroui/react";

export default function Loading() {
  return (
    <div className='min-h-screen '>
        <CircularProgress aria-label="Loading..." />

    </div>
  )
}
