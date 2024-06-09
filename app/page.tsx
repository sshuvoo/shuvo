import { FlipWords } from '@/components/ui/flip-words'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { FaChevronRight } from 'react-icons/fa6'

export default function Home() {
   return (
      <div>
         <div className="container">
            <div className="text-4xl font-normal text-neutral-600 dark:text-neutral-400 mt-10">
               Hi, I&apos;m Saffaullah Shuvo <br /> Expertise In{' '}
               <FlipWords
                  words={[
                     'MongoDB',
                     'Express.js',
                     'React.js',
                     'Next.js',
                     'Redux.js',
                  ]}
               />
            </div>

            <div className='my-10'>
               <TextGenerateEffect words="Passionate full stack web developer with a knack for creating innovative, user-friendly, and scalable web applications. Let's build the future, one line of code at a time." />
            </div>
            <div>
               <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="flex items-center space-x-2 bg-white text-black dark:bg-black dark:text-white"
               >
                  <span>Let&apos;s Collaborate</span>
                  <FaChevronRight />
               </HoverBorderGradient>
            </div>
         </div>
      </div>
   )
}
