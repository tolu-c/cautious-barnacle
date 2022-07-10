const Layout = ({ children }) => {
  return (
    <div className="w-full md:max-w-xl lg:max-w-2xl p-3 mx-auto md:border bg-white">
      {children}
    </div>
  );
};

export default Layout;
