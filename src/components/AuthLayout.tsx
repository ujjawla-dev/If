export default function AuthLayout({ children }: any) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[400px]">
        {children}
      </div>
    </div>
  );
}