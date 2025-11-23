'use client';

import { useState, useEffect } from 'react';

// 포스팅 데이터 (화면에 보여줄 내용들)
const DUMMY_POSTS = [
  { id: 1, title: 'Figma Study #4', subtitle: '인터랙션 및 프로토타이핑', tag: 'figma' },
  { id: 2, title: 'Figma Study #5', subtitle: '오토 레이아웃 마스터하기', tag: 'figma' },
  { id: 3, title: 'Figma Study #6', subtitle: '디자인 시스템 기초', tag: 'figma' },
  { id: 4, title: 'Figma Study #7', subtitle: '개발자 핸드오프 가이드', tag: 'figma' },
];

export default function Home() {
  // 애니메이션 상태: 'initial'(처음) -> 'expanding'(늘어남) -> 'finished'(메인화면)
  const [animationState, setAnimationState] = useState<'initial' | 'expanding' | 'finished'>('initial');

  useEffect(() => {
    // 1초 뒤에 애니메이션 시작
    const timer1 = setTimeout(() => setAnimationState('expanding'), 1000);
    // 총 2.5초 뒤에 메인 화면으로 전환
    const timer2 = setTimeout(() => setAnimationState('finished'), 2500);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, []);

  // 1. 인트로 애니메이션 화면 (It's -> Itzel's log)
  if (animationState !== 'finished') {
    return (
      <div className="flex items-center justify-center h-screen bg-white font-mono text-5xl sm:text-7xl text-black overflow-hidden">
        <div className="flex items-baseline">
          {/* It */}
          <span className={`transition-transform duration-1000 ${animationState === 'expanding' ? '-translate-x-4' : ''}`}>
            It
          </span>
          
          {/* zel (숨겨져 있다가 나타남) */}
          <div className={`overflow-hidden transition-all duration-1000 flex items-center ${animationState === 'expanding' ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0'}`}>
            <span className="whitespace-nowrap">zel</span>
          </div>

          {/* 's (고정되거나 약간 이동) */}
          <span className={`transition-transform duration-1000 ${animationState === 'expanding' ? 'translate-x-0' : ''}`}>
            &rsquo;s
          </span>

          {/* log (숨겨져 있다가 나타남) */}
          <div className={`overflow-hidden transition-all duration-1000 flex items-center ${animationState === 'expanding' ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0'}`}>
            <span className="whitespace-nowrap ml-3">log</span>
          </div>
        </div>
      </div>
    );
  }

  // 2. 메인 블로그 화면 (피그마 디자인 구현)
  return (
    <div className="min-h-screen bg-custom-bg text-[#171717] font-sans selection:bg-tag-orange selection:text-white">
      {/* 헤더 */}
      <header className="w-full p-6 flex justify-center items-center sticky top-0 bg-custom-bg/95 backdrop-blur-sm z-50">
        <h1 className="font-mono text-xl tracking-tight">itzel&rsquo;s log</h1>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-16">
        {/* 왼쪽: 프로필 및 네비게이션 */}
        <aside className="w-full md:w-64 flex flex-col gap-8 shrink-0">
          <div className="flex flex-col gap-4">
            <div className="w-40 h-40 bg-[#FFD966] rounded-xl overflow-hidden relative shadow-sm flex items-center justify-center">
               <span className="text-7xl">🦆</span>
            </div>
            <div className="mt-2">
              <h2 className="text-xl font-bold text-gray-900">Itzel Cheong</h2>
              <p className="text-sm text-gray-600 mt-2 font-medium">&quot; To do is to be. &quot;</p>
            </div>
            <div className="w-8 h-[2px] bg-black my-2"></div>
            <div className="flex flex-col text-xs text-gray-500 gap-2">
              <a href="mailto:aiueo22@konkuk.ac.kr" className="flex items-center gap-2 hover:text-black hover:underline transition-colors">
                <span className="text-lg">✉️</span> aiueo22@konkuk.ac.kr
              </a>
              <a href="https://github.com/ierocider" target="_blank" className="flex items-center gap-2 hover:text-black hover:underline transition-colors">
                <span className="text-lg">🐙</span> github.com/ierocider
              </a>
            </div>
          </div>
          <nav className="flex flex-col gap-4 text-[15px] font-medium text-gray-800 mt-4">
            <a href="#" className="hover:text-tag-orange transition-colors">IT Study</a>
            <a href="#" className="hover:text-tag-orange transition-colors">Graphic Study</a>
            <a href="#" className="font-bold text-black">Design Study</a>
            <a href="#" className="hover:text-tag-orange transition-colors">Projects</a>
            <a href="#" className="hover:text-tag-orange transition-colors">자격증 준비 기록</a>
          </nav>
        </aside>

        {/* 오른쪽: 콘텐츠 영역 */}
        <section className="flex-1">
          <div className="mb-12">
            <h3 className="font-bold mb-4 text-base">Tags</h3>
            <div className="flex gap-3">
              <span className="px-5 py-1.5 rounded-3xl border border-tag-orange text-tag-orange text-sm bg-white cursor-pointer hover:bg-tag-orange hover:text-white transition-all duration-300">
                figma
              </span>
              <span className="px-5 py-1.5 rounded-3xl border border-tag-orange text-tag-orange text-sm bg-white cursor-pointer hover:bg-tag-orange hover:text-white transition-all duration-300">
                XD
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DUMMY_POSTS.map((post) => (
              <div key={post.id} className="bg-white rounded-[20px] p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-pointer aspect-square flex flex-col justify-between group">
                <div className="flex flex-col gap-3">
                  <h4 className="text-2xl font-medium leading-snug text-gray-900 group-hover:text-tag-orange transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-sm text-gray-500 font-normal">{post.subtitle}</p>
                </div>
                <div className="text-xs text-gray-400 font-mono">2025.11.24</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
