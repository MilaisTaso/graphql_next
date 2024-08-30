'use client'

import { useState } from 'react'

import Calender from 'react-calendar'

import { cn } from '@/lib/utils'

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

export default function Todo() {
  const [value, setValue] = useState<Value>(new Date())

  return (
    <div className={cn('my-2 flex flex-row flex-wrap items-start py-2')}>
      <div className={cn('flex w-max grow basis-4 flex-col items-stretch pt-4')}>
        <Calender onChange={setValue} value={value} className={cn('mx-auto')} locale='ja-JP'/>
      </div>
    </div>
  )
}
