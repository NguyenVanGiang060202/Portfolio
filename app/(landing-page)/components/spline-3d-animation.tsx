import Spline from '@splinetool/react-spline/next';

export default function Spline3DAnimation() {
  return (
    <main className='w-full h-full max-w-screen min-h-dvh flex justify-center items-center bg-slate-50'>
      <Spline
        scene="https://prod.spline.design/TVD3deFWCYRoirM3/scene.splinecode" 
      />
    </main>
  );
}
