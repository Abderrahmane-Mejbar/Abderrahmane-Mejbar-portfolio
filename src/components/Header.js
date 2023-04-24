const Header = () => {
  return (
    <nav className="bg-gray-800 py-4">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="flex items-center">
        <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          Accueil
        </a>
        <a href="/formations" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          Formations
        </a>
        <a href="/experiences" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          Expériences
        </a>
        <a href="/projets" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          Projets
        </a>
        <a href="/certifications" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
        Certifications
        </a>
        <a href="/galerie" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
        Galerie
        </a>
      </div>
    </div>
  </nav>
  )
}

export default Header