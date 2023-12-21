import Link from "next/link";
export default function PendingPage() {
  return (
      <div className="flex flex-col items-center justify-center w-screen h-screen">
        <h1 className="text-4xl font-bold">Pending!</h1>
        <p className="text-gray-500">Pending your purchase of your item.</p>
        
        <Link href="/" className="text-indigo-600 hover:text-indigo-500 hover:underline">
          Go back home
        </Link>
      </div>
  );
}
