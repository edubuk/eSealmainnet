export default function LivingBlur() {
  return (
    <div className="z-[-20] fixed bg-transparent min-h-screen flex items-center w-full justify-center px-16">
      <div className="relative w-full max-w-lg">
        <div className="absolute filter blur-3xl bottom-5 right-12 w-72 h-72 bg-gradient-conic from-purple-400 to-rose-600 opacity-40 rounded-full mix-blend-hue animate-blob"></div>
        <div className="absolute filter blur-3xl -top-20 left-0 w-72 h-72 bg-gradient-conic from-sky-400 to-blue-800 opacity-40 mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute filter blur-3xl -bottom-40 right-0 w-72 h-72 bg-gradient-conic from-teal-400 to-emerald-600 opacity-40 rounded-full mix-blend-multiply animate-blob animation-delay-1000"></div>
      </div>
    </div>
  );
}
