import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('@/components/Globe').then(mod => ({ default: mod.Globe })), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]">
      <div className="size-full bg-black animate-pulse rounded-lg" />
    </div>
  ),
});

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="relative w-full max-w-5xl mx-auto px-4 pt-20 pb-32">
        <div className="text-center space-y-4 relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            Interactive Globe
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A beautiful 3D globe visualization using Three.js and React Three Fiber
          </p>
        </div>
        
        <div className="relative h-[800px] mt-8">
          <Globe />
        </div>
      </div>
    </main>
  );
}
