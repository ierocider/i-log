
// filepath: app/page.tsx (Next.js App Router & TypeScript 기준)
"use client";
import React from 'react';
import type { NextPage } from 'next'; 
import { Roboto, Roboto_Mono } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // 필요한 굵기만 선택
});
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'], // 필요한 굵기만 선택
});

// ----------------------------------------------------
// 1. 오리 프로필 사진 데이터 (공개 URL 사용)
// ----------------------------------------------------
const HomePage: NextPage = () => {
  
  // 임시 메뉴 및 태그 데이터
  const menuItems = ['IT Study', 'Graphic Study', 'Design Study', 'Projects', '자격증 준비 기록'];
  const tags = ['figma', 'XD', 'React', 'Next.js', 'Tailwind'];
  
  return (
    <div className={`min-h-screen bg-white ${roboto.className}`}>
      
      {/* ----------------------------------------------------
      // 2. 상단 헤더 영역 - font-mono가 기본으로 적용됨
      // ---------------------------------------------------- */}
      <header className="h-14 sm:h-18 bg-yellow-50 flex items-center justify-center 
                         transition-all duration-100">
        <h1 className={`text-sm sm:text-base text-gray-700 tracking-wider ${robotoMono.className}`}> 
          itzel's Log
        </h1>
      </header>

      {/* ----------------------------------------------------
      // 3. 페이지 본문 영역 (좌/우 2단 레이아웃)
      // ---------------------------------------------------- */}
      <main className="p-4 md:p-8 mt-16">
        <div className="max-w-6xl mx-auto">
          
          {/* 3-1. 프로필 영역 (페이지 상단, 좌측에 배치) */}
          <div className="mb-10 p-4 md:p-0"> 
            <div className="flex items-center space-x-4">
              
              {/* 프로필 이미지 */}
              <div className="flex-shrink-0">
                <img 
                  src="/ketchup.png"
                  alt="Itzel's Profile Picture (Tomato Duck)" 
                  className="w-32 sm:w-36 md:w-40 lg:w-44 h-auto rounded-lg object-cover "
                  width={96}
                  height={96}
                />
              </div>
              
              {/* 이름 및 연락처: 사진 옆에 수직으로 정렬 (X축 일치) */}
              <div className="flex flex-col justify-center"> 
                <h2 className="text-lg text-gray-900"> 
                  Itzel Cheong
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                  "To do is to be."
                </p>
                {/* 연락처 및 GitHub 링크: 이름과 X축을 맞추기 위해 여기에 배치 */}
                <div className="border-t border-gray-300 mt-9 pt-4 text-xs text-gray-500 space-y-1">
                  <p>📧 aiueo22@konkuk.ac.kr</p>
                  <p>🔗 <a href="https://github.com/ierocider" className="text-gray-500 hover:text-black" target="_blank" rel="noopener noreferrer">github.com/ierocider</a></p>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 md:hidden" /> {/* 모바일용 구분선 */}
          </div>

          {/* 3-2. 메인 콘텐츠 영역 (카테고리/태그/글) */}
          <div className="md:grid md:grid-cols-12 md:gap-8 mt-20">
            
            {/* 좌측: 카테고리 (12칸 중 3칸) */}
            <div className="md:col-span-3 mb-8 md:mb-0">
              
              {/* 카테고리 제목 */}
              <h3 className="text-base font-semibold text-gray-800 mb-3">Categories</h3>
              <nav className="space-y-2">
                {menuItems.map(item => (
                  <a key={item} href="#" className="block px-3 py-2 text-gray-800 hover:font-semibold hover:bg-yellow-50 rounded-lg transition-colors duration-150">
                    {item}
                  </a>
                ))}
              </nav>
              
            </div>
            
            {/* 우측: 태그와 글 목록 (12칸 중 9칸) */}
            <div className="md:col-span-9">
              
              {/* === 태그 영역 (카테고리와 같은 Y축에 배치) === */}
              <div className="mb-10">
                <h3 className="text-base font-semibold text-gray-800 mb-3">Tags</h3> {/* 카테고리 제목과 같은 스타일/Y축 */}
                <div className="flex flex-wrap gap-2">
                  {tags.map(tag => (
                    <span key={tag} style={{ color: "#DF5F2C", borderColor: "#DF5F2C" }}
                      className="px-3 py-1 text-sm font-medium rounded-full border
                                 bg-transparent hover:bg-red-100 cursor-pointer transition-colors duration-150">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* === 글(포스트) 영역 (태그 바로 밑에 존재) === */}

              {/* 임시 포스트 카드 목록 (3열 그리드) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((num) => (
                  <div key={num} 
                  className="bg-white p-6 rounded-xl transition-shadow duration-300 cursor-pointer"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.05), 0 0 8px rgba(0,0,0,0.05)" }}
                  onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.15)";}}
                  onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05), 0 0 8px rgba(0,0,0,0.05)";}}>
                    <h4 className="text-3xl text-gray-900 mb-2">Figma Study #{num}</h4>
                    <p className="text-gray-800 text-xs">인터랙션 및 프로토타이핑</p>
                    <span className="mt-4 inline-block text-xs text-gray-400">2025.11.24</span>
                  </div>
                ))}
              </div>
            </div>
            
          </div>

        </div>
      </main>
    </div>
  );
};

export default HomePage;
/* =======
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
          {/* It }
          <span className={`transition-transform duration-1000 ${animationState === 'expanding' ? '-translate-x-4' : ''}`}>
            It
          </span>
          
          {/* zel (숨겨져 있다가 나타남) }
          <div className={`overflow-hidden transition-all duration-1000 flex items-center ${animationState === 'expanding' ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0'}`}>
            <span className="whitespace-nowrap">zel</span>
          </div>

          {/* 's (고정되거나 약간 이동) }
          <span className={`transition-transform duration-1000 ${animationState === 'expanding' ? 'translate-x-0' : ''}`}>
            &rsquo;s
          </span>

          {/* log (숨겨져 있다가 나타남) }
          <div className={`overflow-hidden transition-all duration-1000 flex items-center ${animationState === 'expanding' ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0'}`}>
            <span className="whitespace-nowrap ml-3">log</span>
          </div>
        </div>
      </div>
    );
  }
*/