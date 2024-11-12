const ErrorMessage = ({ children }: { children: React.ReactNode }) => { 
  return (
    <p className="text-red-500 text-xs font-bold p-0 m-0">{children}</p>
  );
};

export default ErrorMessage