import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Clínica São Lucas | Cuidado perto de você',description:'Conheça a Clínica São Lucas e seus atendimentos em Belém de São Francisco, Pernambuco.',icons:{icon:'/favicon.svg'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
