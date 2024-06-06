import { FlipWords } from '@/components/ui/flip-words'

export default function Home() {
   const words = ['MongoDB', 'Express.js', 'React.js', 'Next.js', 'Redux.js']

   return (
      <div className="flex h-[40rem] items-center justify-center px-4">
         <div className="mx-auto text-4xl font-normal text-neutral-600 dark:text-neutral-400">
            <h2>Hi, I&apos;m Saffaullah Shuvo</h2>
            <h2>Crafting Modern Web Experiences with</h2>
            <FlipWords words={words} /> <br />
            websites with Aceternity UI
         </div>
      </div>
   )
}
