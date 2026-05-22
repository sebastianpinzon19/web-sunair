import { WiDaySunny } from 'react-icons/wi';

export default function SunLoader({ visible, label = 'Loading...' }) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-white/70 backdrop-blur-sm">
      <div className="flex flex-col items-center rounded-2xl border border-white/60 bg-white/85 px-8 py-7 shadow-2xl">
        <div className="relative flex h-20 w-20 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-sun-yellow/35 border-t-sun-yellow animate-spin" />
          <WiDaySunny className="relative text-5xl text-sun-yellow animate-pulse" />
        </div>
        <p className="mt-4 text-lg font-bold text-sun-blue">{label}</p>
      </div>
    </div>
  );
}
