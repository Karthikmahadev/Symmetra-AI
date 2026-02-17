import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto  px-12">
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg  text-[1.5rem] font-bold text-slate-900">
              Symmetric AI
            </span>
          </Link>

          {/* Right side buttons */}
          <div className="flex items-center gap-3">
            <Link href="/auth/login">
              <button className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white cursor-pointer ">
                Login
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
