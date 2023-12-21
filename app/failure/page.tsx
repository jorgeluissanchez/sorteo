import Link from "next/link";

export default function FailurePage() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
          <h1 className="text-4xl font-bold">Failure!</h1>
          <p className="text-gray-500">You have failed to purchase your item.</p>
          <Link href="/" className="text-indigo-600 hover:text-indigo-500 hover:underline">
            Go back home
          </Link>
        </div>
    );
  }
  