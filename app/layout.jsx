import NavigationBar from '@/components/navigation';
import '@/styles/global.css';
import { AuthProvider } from '@/utils/providers';

export const metadata = {
  title: 'SUMA MVP V0.1',
  description: 'SUMA MVP V0.1',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
          <AuthProvider>
            <div className='flex flex-row h-screen'>
              <NavigationBar/>
              {children}
            </div>
            
          </AuthProvider>
      </body>
    </html>
  )
}