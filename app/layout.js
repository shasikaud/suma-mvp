import NavigationBar from '@/components/navigation';
import Provider from '@/components/provider';
import '@/styles/global.css';

export const metadata = {
  title: 'SUMA MVP V0.1',
  description: 'SUMA MVP V0.1',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Provider>
          <NavigationBar/>
          {children}
        </Provider>
      </body>
    </html>
  )
}
