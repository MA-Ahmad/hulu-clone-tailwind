export default function Home() {
  return (
    <div>
      <header className="h-px bg-header-img bg-cover bg-no-repeat bg-center">
        <nav className="relative flex justify-end z-20 px-12 py-6">
          <ul>
            <li>
              <button className="text-white font-bold border-0 bg-none uppercase tracking-widest cursor-pointer">
                Log In
              </button>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col justify-start items-center mt-10 text-white space-y-6">
          <h4 className="uppercase text-sm text-green-400 font-bold">
            Try up to one month free
          </h4>
          <img src="/logo.png" alt="Hulu" className="w-52 md:w-60 m-auto m-2" />
          <div className="font-bold text-2xl text-center">
            Watch thousands of TV shows and movies.
          </div>
          <div className="hidden md:block text-lg">
            HBO Max™, SHOWTIME®, CINEMAX® and STARZ® available as add-ons.
          </div>
          <button className="bg-white text-gray-800 px-8 py-5 text-md font-semibold border-0 rounded-md cursor-pointer uppercase tracking-wide leading-3 hover:opacity-80">
            Start Your Free Trial
          </button>
          <div className="text-xs text-gray-200">
            Free trial for new & eligible returning subscribers only.
          </div>
        </div>
      </header>
    </div>
  );
}
