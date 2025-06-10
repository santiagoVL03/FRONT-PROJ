import { type ReactNode } from 'react'
import '../css/LayOut.css'
type LayoutProps = {
  children: ReactNode;
};

function LayoutGral({ children }: LayoutProps) {
  return (
    <div className='flex flex-col min-h-screen'>
        <header className='bg-gray-800 p-4 text-white'>
            <span>
                Lvn
            </span>
        </header>
        <div className='flex flex-col md:flex-row flex-grow'>
            <main className="flex-grow flex p-4 order-2 md:order-1 items-center justify-center">
                <div>
                    {children}
                </div>
            </main>
        </div>
        <footer className='bg-gray-500 p-4 text-white'>
            <small>&copy; 2025 All Rights Reserved</small>
        </footer>
    </div>
  )
}

export default LayoutGral