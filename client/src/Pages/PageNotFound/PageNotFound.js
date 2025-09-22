import React from 'react';

const NotFoundPage = () => {
  return (
    <>
      <style>
        {`
          @keyframes gradient-pan {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes twinkle {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.1); opacity: 1; }
          }
          @keyframes scene-enter {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          @keyframes text-blur-in {
            from {
              opacity: 0;
              filter: blur(8px);
              transform: translateY(15px);
            }
            to {
              opacity: 1;
              filter: blur(0);
              transform: translateY(0);
            }
          }
          
          .animate-gradient-pan {
            background: linear-gradient(-45deg, #0f172a, #1e293b, #334155, #475569);
            background-size: 400% 400%;
            animation: gradient-pan 18s ease infinite;
          }
          .animate-scene-enter {
            animation: scene-enter 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
          .animate-twinkle {
            animation: twinkle 5s ease-in-out infinite;
          }
          .animate-text-blur-in {
            animation: text-blur-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
        `}
      </style>

      <div className="animate-gradient-pan relative text-white min-h-screen flex items-center justify-center font-sans p-4 overflow-hidden">
        {/* Giant 404 Background Text */}
        <div 
          className="absolute inset-0 flex items-center justify-center z-0 opacity-10 pointer-events-none"
          style={{ animation: 'scene-enter 1.5s ease-out' }}
        >
          <h1 className="text-[30rem] md:text-[40rem] font-black text-slate-700 leading-none tracking-tighter">
            404
          </h1>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 px-4 md:px-0">
          
         

          {/* Text Content Column */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-sm font-semibold text-indigo-400 uppercase tracking-wider animate-text-blur-in" style={{ animationDelay: '0.6s' }}>
              Error Code: 404
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-white tracking-tight animate-text-blur-in" style={{ animationDelay: '0.8s' }}>
              Looks Like a Wrong Movement
            </h1>
            <p className="mt-4 text-lg text-gray-300 animate-text-blur-in" style={{ animationDelay: '1.0s' }}>
                 This link seems to have pulled a muscle. Let's get you moving in the right direction again.
            </p>
            <a
              href="/"
              className="mt-8 inline-block px-8 py-4 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-lg hover:shadow-indigo-600/50 hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1 animate-text-blur-in"
              style={{ animationDelay: '1.2s' }}
            >
             Back to Wellness
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;