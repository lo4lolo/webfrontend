
import React from 'react';
import { CATEGORIES } from '../constants';
import { CategoryType } from '../types';

interface SidebarProps {
  selectedCategory: CategoryType;
  onSelectCategory: (id: CategoryType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="w-full md:w-64 flex-shrink-0 bg-white border-r border-slate-200 p-6 flex flex-col h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 tracking-tight">
          Vibe하는교사
        </h1>
        <p className="text-xs text-slate-500 mt-1 font-medium">선생님을 위한 코딩 가이드</p>
      </div>

      <nav className="space-y-2 flex-1">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                isSelected 
                  ? 'bg-indigo-50 text-indigo-700 shadow-sm' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-white text-indigo-600' : 'bg-slate-100 text-slate-500'}`}>
                <Icon className="w-4 h-4" />
              </div>
              {cat.label}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto pt-6">
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
          <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Tip</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            원하는 인터페이스를 선택하고, 
            <span className="font-bold text-indigo-600"> Vibe Prompt</span>를 복사해서 
            AI에게 요청해보세요!
          </p>
        </div>
        
        <div className="mt-6 pt-6 border-t border-slate-100 text-xs text-slate-400 text-center leading-relaxed">
          Made by <span className="font-bold text-slate-600">하는교사</span>
          <br/>
          4lolo@naver.com
        </div>
      </div>
    </div>
  );
};

export default Sidebar;