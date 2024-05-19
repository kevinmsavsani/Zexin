const Header = ({ title }: { title: string }) => {
  return (
    <header className="bg-gradient-to-r from-teal-900 via-teal-600 to-teal-700 text-white py-12 relative ">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
