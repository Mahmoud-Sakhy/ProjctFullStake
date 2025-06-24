import Link from "next/link";


export default function Home() {
  return (
      <main className="container  flex gap-[32px]  items-center justify-center ">
          <Link className="text-2xl font-bold hover:bg-indigo-400 py-4 px-8 transition-all rounded-md " href={'/'}>Home</Link>

      <Link className="text-2xl font-bold hover:bg-indigo-400 py-4 px-8 transition-all rounded-md " href={'/auth/register'}>Register</Link>

      </main>
      
    
  
  );
}
