'use client'
import { useEffect } from 'react'
import { motion, stagger, useAnimate } from 'framer-motion'
import { cn } from '@/utils/cn'

export const TextGenerateEffect = ({
   words,
   className,
}: {
   words: string
   className?: string
}) => {
   const [scope, animate] = useAnimate()
   let wordsArray = words.split(' ')
   useEffect(() => {
      animate(
         'span',
         {
            opacity: 1,
         },
         {
            duration: 2,
            delay: stagger(0.2),
         }
      )
   }, [scope.current])

   return (
      <div className={cn('font-bold', className)}>
         <div className="mt-4">
            <div className="text-xl leading-snug tracking-wide text-black dark:text-white">
               <motion.div ref={scope}>
                  {wordsArray.map((word, idx) => {
                     return (
                        <motion.span
                           key={word + idx}
                           className="font-normal text-neutral-600 opacity-0 dark:text-neutral-400"
                        >
                           {word}{' '}
                        </motion.span>
                     )
                  })}
               </motion.div>
            </div>
         </div>
      </div>
   )
}
