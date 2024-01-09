export const Navbar = () => {
  const menu = [
    { id: 1, href: '/', text: 'Home' },
    { id: 2, href: '/products', text: 'Products' },
    { id: 3, href: '/status', text: 'Status' },
    { id: 4, href: '/reviews', text: 'Reviews' },
    { id: 5, href: '/contact', text: 'Contact' },
  ];
  
  return (
    <div className="sticky z-[2] top-0 bg-black/10 p-5 border-b backdrop-blur-md border-gray-400/20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" width='70' alt="RedEye Logo" />
        </div>

        <div className="hidden md:flex space-x-10">
          {menu.map(item => (
            <a key={item.id} href={item.href} className="font-medium text-gray-300 hover:text-gray-100 transition-all duration-200">{item.text}</a>
          ))}
        </div>

        <div>
          <a href="/dashboard" className="bg-white text-black/90 border border-transparent font-semibold px-8 py-1 rounded-full hover:bg-zinc-300 transition-all duration-300">
            Login
          </a>
        </div>
      </div>
    </div>
  )
}