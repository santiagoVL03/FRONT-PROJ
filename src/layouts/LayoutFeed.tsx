import { type ReactNode } from 'react'
import '../css/LayOut.css'
type LayoutProps = {
    mainContent: ReactNode;
    sidebarContent: ReactNode;
};
function LayoutFeed({ mainContent, sidebarContent }: LayoutProps) {
    return (
        <div className='flex flex-col min-h-screen'>
            <header className='bg-gray-900 p-4 text-white'>
                <span>
                    Lvn
                </span>
            </header>
            <div className='flex flex-col md:flex-row flex-grow'>
                <main className="flex-grow flex p-4 order-2 md:order-1 items-center justify-center bg-gray-700">
                    {mainContent}
                </main>
                <aside className="w-full md:w-64 p-4 bg-gray-800 order-1 md:order-2 border-l border-gray-100 
                    md:sticky md:top-0 h-screen overflow-y-auto">
                    <div>
                        {sidebarContent}
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default LayoutFeed