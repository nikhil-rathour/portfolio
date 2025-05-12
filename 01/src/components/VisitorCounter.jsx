// src/components/VisitorCounter.jsx
import { useEffect } from 'react';

const VisitorCounter = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://www.freevisitorcounters.com/auth.php?id=d1bfc58cbc38e5bd3487e9c590ed60911fc5bd52';
    script1.async = true;

    const script2 = document.createElement('script');
    script2.src = 'https://www.freevisitorcounters.com/en/home/counter/1339250/t/2';
    script2.async = true;

    document.getElementById('visitor-counter-container')?.appendChild(script1);
    document.getElementById('visitor-counter-container')?.appendChild(script2);
  }, []);

  return (
    <div className="text-center mt-10">
      <div className="inline-block px-6 py-4 border border-cyan-500/30 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-xl shadow-lg shadow-cyan-500/10 backdrop-blur-sm">
        <h3 className="text-sm text-cyan-400 font-semibold mb-2">Visitor Counter</h3>
        <div id="visitor-counter-container" className="text-white text-sm" />
      </div>
    </div>
  );
};

export default VisitorCounter;
