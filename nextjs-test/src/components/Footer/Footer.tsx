export default function Footer() {
  return (
      <footer className="text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="text-sm text-center md:text-left">
            <p>&copy; 2025. All rights reserved.</p>
          </div>
          <div className="space-x-6 text-sm flex flex-wrap justify-center md:justify-start mt-4 md:mt-0">
            <p className="hover:text-blue-400 px-2">About</p>
            <p className="hover:text-blue-400 px-2">Products</p>
            <p className="hover:text-blue-400 px-2">Contact</p>
            <p className="hover:text-blue-400 px-2">Privacy Policy</p>
          </div>
        </div>
      </footer>
  );
}
