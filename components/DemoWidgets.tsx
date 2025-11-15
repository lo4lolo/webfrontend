
import React, { useState, useEffect, useRef } from 'react';
import { FlashcardData, DragItem } from '../types';
import { 
  RefreshCw, Play, CheckCircle2, X, ChevronDown, ChevronUp, 
  RotateCcw, Save, Download, Upload, Palette, Star, Check, 
  Eraser, Pen, Plus, Trash2, FileText, HelpCircle, Eye, EyeOff, ImageIcon
} from 'lucide-react';

// ==========================================
// CATEGORY 1: INPUT & SELECTION
// ==========================================

export const DropdownDemo: React.FC = () => {
  const [grade, setGrade] = useState('3');
  const [classNum, setClassNum] = useState('1');
  
  return (
    <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">학년 선택</label>
          <select 
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          >
            {[1,2,3,4,5,6].map(g => <option key={g} value={g}>{g}학년</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">반 선택</label>
          <select 
            value={classNum}
            onChange={(e) => setClassNum(e.target.value)}
            className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          >
            {[1,2,3,4,5].map(c => <option key={c} value={c}>{c}반</option>)}
          </select>
        </div>
      </div>
      <div className="mt-6 p-4 bg-blue-50 text-blue-800 rounded-lg text-center font-medium">
        선택 결과: {grade}학년 {classNum}반
      </div>
    </div>
  );
};

export const OXQuizDemo: React.FC = () => {
  const [result, setResult] = useState<string | null>(null);
  const [animate, setAnimate] = useState(false);

  const handleAnswer = (answer: 'O' | 'X') => {
    const isCorrect = answer === 'O'; // Assuming 'O' is correct for demo
    setResult(isCorrect ? "정답입니다! 👏" : "틀렸습니다. 다시 생각해보세요. 🤔");
    setAnimate(true);
    setTimeout(() => setAnimate(false), 500);
  };

  return (
    <div className="flex flex-col items-center space-y-6 text-center">
      <h3 className="text-lg font-bold text-slate-800">문제: 거북선은 이순신 장군이 만들었다?</h3>
      <div className="flex gap-6">
        <button 
          onClick={() => handleAnswer('O')}
          className={`w-24 h-24 rounded-full bg-blue-100 border-4 border-blue-500 text-blue-600 text-5xl font-black hover:bg-blue-200 hover:scale-110 transition-transform ${animate ? 'scale-95' : ''}`}
        >
          O
        </button>
        <button 
          onClick={() => handleAnswer('X')}
          className={`w-24 h-24 rounded-full bg-rose-100 border-4 border-rose-500 text-rose-600 text-5xl font-black hover:bg-rose-200 hover:scale-110 transition-transform ${animate ? 'scale-95' : ''}`}
        >
          X
        </button>
      </div>
      <div className={`h-8 font-bold transition-opacity duration-300 ${result ? 'opacity-100' : 'opacity-0'}`}>
        {result}
      </div>
    </div>
  );
};

export const TextCounterDemo: React.FC = () => {
  const [text, setText] = useState("");
  const maxLength = 200;
  
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-700">오늘의 배움 일기 (200자 이내)</label>
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value.slice(0, maxLength))}
          className={`w-full h-32 p-3 border rounded-lg focus:outline-none focus:ring-2 resize-none ${
            text.length >= maxLength ? 'border-red-500 ring-red-200' : 'border-slate-300 focus:ring-blue-500'
          }`}
          placeholder="오늘 수업에서 가장 기억에 남는 것은 무엇인가요?"
        />
        <div className={`absolute bottom-3 right-3 text-xs font-medium ${
          text.length >= maxLength ? 'text-red-600' : 'text-slate-400'
        }`}>
          {text.length} / {maxLength}자
        </div>
      </div>
    </div>
  );
};

export const SliderDemo: React.FC = () => {
  const [value, setValue] = useState(50);
  
  const getEmoji = (val: number) => {
    if (val < 20) return "😢"; 
    if (val < 40) return "😟"; 
    if (val < 60) return "😐"; 
    if (val < 80) return "🙂"; 
    return "🥰"; 
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 text-center space-y-6">
      <h3 className="text-lg font-medium text-slate-700">오늘 수업 만족도</h3>
      <div className="text-6xl animate-bounce-slow">{getEmoji(value)}</div>
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={value} 
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
      />
    </div>
  );
};

export const StarRatingDemo: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex flex-col items-center space-y-2">
      <span className="text-slate-600 font-medium mb-2">동료 평가 점수</span>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            className="focus:outline-none transition-transform hover:scale-110"
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(rating)}
          >
            <Star 
              className={`w-8 h-8 ${star <= (hover || rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`} 
            />
          </button>
        ))}
      </div>
      <div className="text-sm text-slate-500 font-medium h-5">
        {hover > 0 ? `${hover}점` : rating > 0 ? `${rating}점 선택됨` : "별을 클릭하세요"}
      </div>
    </div>
  );
};

export const TagInputDemo: React.FC = () => {
  const [tags, setTags] = useState<string[]>(["광합성", "엽록체"]);
  const [input, setInput] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input.trim()) {
      if (!tags.includes(input.trim())) {
        setTags([...tags, input.trim()]);
      }
      setInput("");
    }
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-slate-700">핵심 키워드 (엔터로 추가)</label>
      <div className="flex flex-wrap gap-2 p-3 bg-white border border-slate-300 rounded-lg min-h-[50px]">
        {tags.map(tag => (
          <span key={tag} className="flex items-center gap-1 px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
            {tag}
            <button onClick={() => setTags(tags.filter(t => t !== tag))} className="hover:text-indigo-600"><X className="w-3 h-3" /></button>
          </span>
        ))}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="키워드 입력..."
          className="flex-1 outline-none bg-transparent min-w-[100px] text-sm"
        />
      </div>
    </div>
  );
};


// ==========================================
// CATEGORY 2: INTERACTIVE LEARNING
// ==========================================

export const DrawingBoardDemo: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#1e293b');
  const [lineWidth, setLineWidth] = useState(3);
  const [mode, setMode] = useState<'draw' | 'erase'>('draw');

  // Initial setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    const { offsetX, offsetY } = getCoordinates(e, canvas);
    
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    ctx.strokeStyle = mode === 'erase' ? '#ffffff' : color;
    ctx.lineWidth = mode === 'erase' ? 20 : lineWidth;
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { offsetX, offsetY } = getCoordinates(e, canvas);
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const getCoordinates = (e: React.MouseEvent | React.TouchEvent, canvas: HTMLCanvasElement) => {
    let clientX, clientY;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }
    const rect = canvas.getBoundingClientRect();
    return {
      offsetX: clientX - rect.left,
      offsetY: clientY - rect.top
    };
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="flex gap-2 w-full justify-center p-2 bg-slate-100 rounded-lg">
        <button onClick={() => setMode('draw')} className={`p-2 rounded ${mode === 'draw' ? 'bg-white shadow text-indigo-600' : 'text-slate-500'}`}><Pen className="w-4 h-4"/></button>
        <button onClick={() => setMode('erase')} className={`p-2 rounded ${mode === 'erase' ? 'bg-white shadow text-indigo-600' : 'text-slate-500'}`}><Eraser className="w-4 h-4"/></button>
        <div className="w-px h-8 bg-slate-300 mx-1"></div>
        {['#1e293b', '#ef4444', '#3b82f6', '#22c55e', '#f59e0b'].map(c => (
          <button 
            key={c}
            onClick={() => { setColor(c); setMode('draw'); }}
            className={`w-6 h-6 rounded-full border-2 ${color === c && mode === 'draw' ? 'border-slate-600 scale-110' : 'border-transparent'}`}
            style={{ backgroundColor: c }}
          />
        ))}
         <div className="w-px h-8 bg-slate-300 mx-1"></div>
         <button onClick={clearCanvas} className="text-xs text-slate-500 hover:text-red-500 flex items-center gap-1"><Trash2 className="w-4 h-4"/> 지우기</button>
      </div>
      <canvas 
        ref={canvasRef}
        width={500}
        height={300}
        className="bg-white rounded-xl shadow-sm border border-slate-200 cursor-crosshair touch-none w-full"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
      />
    </div>
  );
};

export const FlipCardDemo: React.FC = () => {
  const [flipped, setFlipped] = useState(false);
  
  return (
    <div className="flex justify-center">
      <div 
        onClick={() => setFlipped(!flipped)}
        className="group h-64 w-full max-w-xs cursor-pointer perspective-1000"
      >
        <div className={`relative w-full h-full duration-500 transform-style-3d shadow-xl rounded-2xl ${flipped ? 'rotate-y-180' : ''}`}>
          {/* Front */}
          <div className="absolute w-full h-full bg-white border-2 border-indigo-100 rounded-2xl flex flex-col items-center justify-center backface-hidden p-6 text-center">
            <span className="text-sm text-indigo-500 font-bold mb-2">QUESTION</span>
            <h3 className="text-2xl font-bold text-slate-800">대한민국의 수도는?</h3>
            <span className="absolute bottom-4 text-xs text-slate-400 animate-pulse">클릭해서 정답 확인</span>
          </div>
          {/* Back */}
          <div className="absolute w-full h-full bg-indigo-600 text-white rounded-2xl flex flex-col items-center justify-center rotate-y-180 backface-hidden p-6 text-center">
             <span className="text-sm text-indigo-200 font-bold mb-2">ANSWER</span>
             <h3 className="text-3xl font-bold">서울</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ImageHotspotDemo: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  
  // Positions in percentage
  const spots = [
    { id: 1, x: 30, y: 40, label: "핵 (Nucleus)", desc: "세포의 중심이며 유전 활동을 조절합니다." },
    { id: 2, x: 60, y: 60, label: "미토콘드리아", desc: "세포 호흡을 통해 에너지를 생산합니다." }
  ];

  return (
    <div className="relative w-full h-64 bg-slate-200 rounded-xl overflow-hidden flex items-center justify-center group">
      <div className="text-slate-400 font-bold text-2xl">세포 이미지 (예시)</div>
      
      {/* Abstract Cell Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-blue-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-32 h-20 bg-green-300 rounded-full blur-xl"></div>
      </div>

      {spots.map(spot => (
        <div 
          key={spot.id}
          className="absolute"
          style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
        >
          <button 
            onClick={() => setActiveId(activeId === spot.id ? null : spot.id)}
            className={`relative w-6 h-6 rounded-full border-2 border-white shadow-lg flex items-center justify-center transition-all ${activeId === spot.id ? 'bg-rose-500 scale-110' : 'bg-indigo-600 hover:bg-indigo-500 hover:scale-110'}`}
          >
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-50"></span>
            <Plus className="w-3 h-3 text-white" />
          </button>
          
          {activeId === spot.id && (
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-48 bg-white p-3 rounded-lg shadow-xl border border-slate-200 z-10 animate-fadeIn">
              <div className="font-bold text-indigo-700 text-sm mb-1">{spot.label}</div>
              <div className="text-xs text-slate-600 leading-relaxed">{spot.desc}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export const TimelineDemo: React.FC = () => {
  const events = [
    { date: "1392", title: "조선 건국", desc: "이성계가 조선을 건국함" },
    { date: "1443", title: "훈민정음 창제", desc: "세종대왕이 한글을 만듦" },
    { date: "1592", title: "임진왜란", desc: "일본의 침략으로 전쟁 발발" }
  ];

  return (
    <div className="relative pl-8 space-y-6">
      {/* Vertical Line */}
      <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-slate-300"></div>
      
      {events.map((ev, i) => (
        <div key={i} className="relative group">
          {/* Dot */}
          <div className="absolute -left-[29px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-indigo-500 transition-colors group-hover:bg-indigo-100"></div>
          
          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="inline-block px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-xs font-bold mb-1">{ev.date}</span>
            <h4 className="font-bold text-slate-800">{ev.title}</h4>
            <p className="text-sm text-slate-500 mt-1">{ev.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const ModalDemo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-48 bg-slate-100 rounded-xl border border-dashed border-slate-300">
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-rose-500 text-white px-6 py-2 rounded-lg font-bold shadow-md hover:bg-rose-600 transition"
      >
        중요 공지 확인하기
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn" onClick={() => setIsOpen(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="bg-rose-500 p-4 flex justify-between items-center text-white">
              <h3 className="font-bold text-lg">📢 알림장</h3>
              <button onClick={() => setIsOpen(false)}><X className="w-5 h-5" /></button>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-slate-700 font-medium">내일은 현장체험학습 날입니다.</p>
              <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                <li>도시락 지참</li>
                <li>운동화 착용</li>
                <li>8시 50분까지 운동장 집합</li>
              </ul>
            </div>
            <div className="p-4 bg-slate-50 flex justify-end">
              <button 
                onClick={() => setIsOpen(false)}
                className="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-900"
              >
                확인했습니다
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const TabsDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["국어", "수학", "사회"];
  const contents = [
    "준비물: 교과서, 받아쓰기 공책, 연필",
    "준비물: 수학 익힘책, 자, 컴퍼스",
    "준비물: 사회과 부도, 조사 학습지"
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <div className="flex border-b border-slate-200 bg-slate-50">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`flex-1 py-3 text-sm font-bold transition-colors ${
              activeTab === idx 
                ? 'bg-white text-indigo-600 border-b-2 border-indigo-600' 
                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-8 text-center">
        <p className="text-lg text-slate-800 font-medium">{contents[activeTab]}</p>
      </div>
    </div>
  );
};

export const DragDropDemo: React.FC = () => {
  const [items, setItems] = useState<DragItem[]>([
    { id: '1', text: '사자', category: 'mammal' },
    { id: '2', text: '참새', category: 'bird' },
    { id: '3', text: '고래', category: 'mammal' },
    { id: '4', text: '독수리', category: 'bird' },
  ]);
  const [draggedItem, setDraggedItem] = useState<DragItem | null>(null);
  const [mammals, setMammals] = useState<DragItem[]>([]);
  const [birds, setBirds] = useState<DragItem[]>([]);

  const handleDrop = (targetCategory: 'mammal' | 'bird') => {
    if (!draggedItem) return;
    if (draggedItem.category === targetCategory) {
      if (targetCategory === 'mammal') setMammals(prev => [...prev, draggedItem]);
      else setBirds(prev => [...prev, draggedItem]);
      setItems(prev => prev.filter(i => i.id !== draggedItem.id));
    } else {
      alert("다시 생각해보세요! 🤔");
    }
    setDraggedItem(null);
  };

  const reset = () => {
    setItems([
      { id: '1', text: '사자', category: 'mammal' },
      { id: '2', text: '참새', category: 'bird' },
      { id: '3', text: '고래', category: 'mammal' },
      { id: '4', text: '독수리', category: 'bird' },
    ]);
    setMammals([]);
    setBirds([]);
  };

  return (
    <div className="space-y-4 select-none">
      <div className="flex justify-end">
        <button onClick={reset} className="text-xs flex items-center gap-1 text-slate-400 hover:text-indigo-600"><RotateCcw className="w-3 h-3"/> 리셋</button>
      </div>
      <div className="flex gap-2 min-h-[50px] p-3 bg-slate-100 rounded-lg border border-dashed border-slate-300 mb-4 flex-wrap">
        {items.length === 0 && <span className="text-slate-400 text-sm mx-auto">분류 완료!</span>}
        {items.map(item => (
          <div
            key={item.id}
            draggable
            onDragStart={() => setDraggedItem(item)}
            className="px-3 py-1.5 bg-white shadow-sm rounded-lg cursor-grab active:cursor-grabbing text-sm font-bold text-slate-700 border border-slate-200"
          >
            {item.text}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[{id: 'mammal', label: '🦁 포유류', data: mammals}, {id: 'bird', label: '🦅 조류', data: birds}].map(box => (
          <div 
            key={box.id}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(box.id as any)}
            className={`h-40 rounded-xl p-3 flex flex-col items-center transition border-2 ${
              box.id === 'mammal' ? 'bg-amber-50 border-amber-200' : 'bg-sky-50 border-sky-200'
            }`}
          >
            <h3 className={`font-bold mb-2 ${box.id === 'mammal' ? 'text-amber-800' : 'text-sky-800'}`}>{box.label}</h3>
            <div className="flex flex-wrap gap-1 justify-center w-full">
              {box.data.map(m => (
                <span key={m.id} className="bg-white/80 px-2 py-1 rounded text-xs shadow-sm">{m.text}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const AccordionDemo: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = [
    { q: "1. 숙제는 언제까지인가요?", a: "다음 주 월요일 아침까지 제출하면 됩니다." },
    { q: "2. 준비물을 잃어버렸어요.", a: "선생님께 말씀드리고 학교 예비용을 사용하세요." },
    { q: "3. 짝꿍을 바꾸고 싶어요.", a: "한 달에 한 번 제비뽑기로 자리를 바꿉니다." }
  ];

  return (
    <div className="space-y-2">
      {items.map((item, idx) => (
        <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden">
          <button 
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className={`w-full flex justify-between items-center p-4 text-left font-medium transition-colors ${
              openIndex === idx ? 'bg-blue-50 text-blue-700' : 'bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            {item.q}
            {openIndex === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {openIndex === idx && (
            <div className="p-4 bg-white border-t border-slate-100 text-slate-600 text-sm leading-relaxed">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export const BeforeAfterDemo: React.FC = () => {
  const [sliderVal, setSliderVal] = useState(50);
  return (
    <div className="relative w-full h-56 rounded-xl overflow-hidden select-none cursor-col-resize group border border-slate-200">
      {/* After (Right) */}
      <div className="absolute inset-0 bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold text-2xl">
        개구리 🐸
      </div>
      {/* Before (Left) */}
      <div 
        className="absolute inset-0 bg-cyan-100 flex items-center justify-center text-cyan-800 font-bold text-2xl border-r-2 border-white overflow-hidden"
        style={{ width: `${sliderVal}%` }}
      >
        <div className="w-full h-full flex items-center justify-center whitespace-nowrap" style={{ width: '100vw' }}> {/* prevent text clip */}
          올챙이 🐟
        </div>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={sliderVal}
        onChange={(e) => setSliderVal(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-20"
      />
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 pointer-events-none flex items-center justify-center"
        style={{ left: `${sliderVal}%` }}
      >
        <div className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center">
          <div className="flex gap-0.5"><div className="w-0.5 h-3 bg-slate-300"/><div className="w-0.5 h-3 bg-slate-300"/></div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// CATEGORY 3: GAMIFICATION
// ==========================================

export const ImageRevealDemo: React.FC = () => {
  // 기본 이미지 (고흐 - 별이 빛나는 밤)
  const defaultImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg";
  const [imageUrl, setImageUrl] = useState(defaultImage);
  // true: 가려짐(보임), false: 제거됨(투명)
  const [covered, setCovered] = useState<boolean[]>(Array(16).fill(true));

  const handleBlockClick = (index: number) => {
    const newCovered = [...covered];
    newCovered[index] = false;
    setCovered(newCovered);
  };

  const reset = () => setCovered(Array(16).fill(true));
  const revealAll = () => setCovered(Array(16).fill(false));

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input 
          type="text" 
          value={imageUrl}
          onChange={e => setImageUrl(e.target.value)}
          className="flex-1 p-2 border border-slate-300 rounded text-xs"
          placeholder="이미지 주소를 입력하세요"
        />
      </div>
      
      <div className="relative w-full aspect-square max-w-[400px] mx-auto rounded-xl overflow-hidden border-2 border-slate-800 shadow-lg bg-slate-200">
        {/* Background Image */}
        <img src={imageUrl} alt="Quiz Target" className="absolute inset-0 w-full h-full object-cover" />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
          {covered.map((isCovered, idx) => (
            <button
              key={idx}
              onClick={() => handleBlockClick(idx)}
              className={`border border-white/20 flex items-center justify-center text-2xl font-bold text-white/50 transition-all duration-500 ease-out transform ${
                isCovered 
                  ? 'bg-slate-800 hover:bg-slate-700 scale-100 opacity-100 cursor-pointer' 
                  : 'bg-transparent scale-50 opacity-0 pointer-events-none'
              }`}
            >
              {isCovered ? idx + 1 : ''}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2">
        <button onClick={reset} className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg font-bold hover:bg-slate-300 text-sm">
          다시 가리기
        </button>
        <button onClick={revealAll} className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 text-sm">
          모두 공개
        </button>
      </div>
    </div>
  );
};

export const LadderGameDemo: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const [bridges, setBridges] = useState<{c: number, r: number}[]>([]);
  
  // Ladder Configuration
  const players = ["A", "B", "C", "D"];
  const outcomes = ["당첨", "꽝", "통과", "벌칙"];
  const colCount = 4;
  const rowCount = 8;
  
  const generateBridges = () => {
    const newBridges: {c: number, r: number}[] = [];
    for (let r = 0; r < rowCount; r++) {
      for (let c = 0; c < colCount - 1; c++) {
        if (Math.random() > 0.5) {
           const hasLeftBridge = c > 0 && newBridges.some(b => b.c === c - 1 && b.r === r);
           if (!hasLeftBridge) {
             newBridges.push({c, r});
           }
        }
      }
    }
    return newBridges;
  };

  useEffect(() => {
    setBridges(generateBridges());
  }, []);

  const startGame = (startIdx: number) => {
    if (isPlaying) return;
    setIsPlaying(true);
    setResultMessage("");

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let currentC = startIdx;
    let currentR = 0; 
    let progress = 0; 
    let state: 'DOWN' | 'ACROSS' = 'DOWN';
    let targetC = currentC;
    
    const width = canvas.width / window.devicePixelRatio;
    const height = canvas.height / window.devicePixelRatio;
    const colWidth = width / colCount;
    const rowHeight = (height - 40) / rowCount;
    const startY = 20;

    const animate = () => {
      drawLadderStatic(ctx, width, height, colWidth, rowHeight, startY);

      ctx.fillStyle = '#f43f5e';
      let x = (currentC * colWidth) + (colWidth / 2);
      let y = startY + (currentR * rowHeight);

      if (state === 'DOWN') {
        y += progress * rowHeight;
        if (progress >= 1) {
          currentR++;
          progress = 0;
          const bridgeRight = bridges.find(b => b.c === currentC && b.r === currentR - 1);
          const bridgeLeft = bridges.find(b => b.c === currentC - 1 && b.r === currentR - 1);

          if (bridgeRight) {
            state = 'ACROSS';
            targetC = currentC + 1;
          } else if (bridgeLeft) {
            state = 'ACROSS';
            targetC = currentC - 1;
          } else {
            state = 'DOWN';
          }
        }
      } else if (state === 'ACROSS') {
        const dir = targetC > currentC ? 1 : -1;
        x += (progress * colWidth * dir);
        if (progress >= 1) {
          currentC = targetC;
          progress = 0;
          state = 'DOWN';
        }
      }

      ctx.beginPath();
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fill();

      if (currentR <= rowCount) {
        progress += 0.1;
        requestAnimationFrame(animate);
      } else {
        setIsPlaying(false);
        setResultMessage(`${players[startIdx]} 결과: ${outcomes[currentC]}`);
      }
    };
    animate();
  };

  const drawLadderStatic = (ctx: CanvasRenderingContext2D, w: number, h: number, cw: number, rh: number, sy: number) => {
    ctx.clearRect(0, 0, w, h);
    ctx.lineCap = 'round';
    ctx.lineWidth = 4;
    
    ctx.strokeStyle = '#cbd5e1';
    for(let i=0; i<colCount; i++) {
      const x = (i * cw) + (cw / 2);
      ctx.beginPath();
      ctx.moveTo(x, sy);
      ctx.lineTo(x, h - 20);
      ctx.stroke();
    }

    ctx.strokeStyle = '#94a3b8';
    bridges.forEach(b => {
      const x1 = (b.c * cw) + (cw / 2);
      const x2 = ((b.c + 1) * cw) + (cw / 2);
      const y = sy + (b.r * rh) + rh; 
      ctx.beginPath();
      ctx.moveTo(x1, y);
      ctx.lineTo(x2, y);
      ctx.stroke();
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;
    const cw = w / colCount;
    const rh = (h - 40) / rowCount;

    drawLadderStatic(ctx, w, h, cw, rh, 20);
  }, [bridges]);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex w-full justify-between px-8 mb-2">
        {players.map((p, i) => (
          <button 
            key={i} 
            onClick={() => startGame(i)}
            disabled={isPlaying}
            className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-sm font-bold hover:bg-indigo-200 disabled:opacity-50"
          >
            {p}
          </button>
        ))}
      </div>
      <canvas ref={canvasRef} className="w-full h-64 bg-slate-50 rounded-lg border border-slate-200" />
      <div className="flex w-full justify-between px-8 mt-2">
        {outcomes.map((r, i) => <span key={i} className="text-sm font-bold text-slate-500 w-8 text-center">{r}</span>)}
      </div>
      {resultMessage && (
        <div className="mt-4 p-2 bg-rose-100 text-rose-700 font-bold rounded-lg animate-bounce">
          🎉 {resultMessage}
        </div>
      )}
       <button onClick={() => setBridges(generateBridges())} className="mt-2 text-xs text-slate-400 flex items-center gap-1 hover:text-slate-600">
        <RefreshCw className="w-3 h-3" /> 사다리 재생성
      </button>
    </div>
  );
};

export const RouletteDemo: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  
  const items = ["1조", "2조", "3조", "4조", "5조", "6조"];
  const colors = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6", "#a855f7"];

  const spin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    const randomDeg = Math.floor(Math.random() * 360);
    const targetRotation = rotation + 1800 + randomDeg;
    setRotation(targetRotation);
    setTimeout(() => setIsSpinning(false), 3000);
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="relative w-56 h-56">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[20px] border-t-slate-800 z-10"></div>
        <div 
          className="w-full h-full rounded-full border-4 border-slate-800 overflow-hidden relative transition-transform duration-[3000ms] cubic-bezier(0.2, 0.8, 0.2, 1)"
          style={{ transform: `rotate(${rotation}deg)`, background: `conic-gradient(${colors.map((c, i) => `${c} ${i*60}deg ${(i+1)*60}deg`).join(', ')})` }}
        >
          {items.map((item, i) => (
            <span key={i} className="absolute top-8 left-1/2 -translate-x-1/2 text-white font-bold text-sm origin-bottom h-20" style={{ transform: `rotate(${30 + i*60}deg)` }}>{item}</span>
          ))}
        </div>
      </div>
      <button 
        onClick={spin}
        disabled={isSpinning}
        className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-indigo-700 disabled:opacity-50"
      >
        {isSpinning ? '돌아가는 중...' : '돌리기!'}
      </button>
    </div>
  );
};

export const MemoryGameDemo: React.FC = () => {
  const emojis = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊"];
  const [cards, setCards] = useState<{id: number, content: string, isFlipped: boolean, isMatched: boolean}[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  
  useEffect(() => { resetGame(); }, []);

  const resetGame = () => {
    const shuffled = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, idx) => ({ id: idx, content: emoji, isFlipped: false, isMatched: false }));
    setCards(shuffled);
    setFlippedIndices([]);
  };

  const handleCardClick = (index: number) => {
    if (flippedIndices.length === 2 || cards[index].isFlipped || cards[index].isMatched) return;
    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);
    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (cards[first].content === cards[second].content) {
        setTimeout(() => {
          setCards(prev => prev.map((c, i) => (i === first || i === second ? { ...c, isMatched: true } : c)));
          setFlippedIndices([]);
        }, 500);
      } else {
        setTimeout(() => {
          setCards(prev => prev.map((c, i) => (i === first || i === second ? { ...c, isFlipped: false } : c)));
          setFlippedIndices([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="grid grid-cols-4 gap-2">
        {cards.map((card, idx) => (
          <button
            key={idx}
            onClick={() => handleCardClick(idx)}
            className={`w-12 h-12 sm:w-14 sm:h-14 text-2xl flex items-center justify-center rounded-lg transition-all duration-300 transform ${
              card.isFlipped || card.isMatched ? 'bg-white border-2 border-indigo-200 rotate-0' : 'bg-indigo-500 rotate-y-180 text-transparent'
            }`}
          >
            {(card.isFlipped || card.isMatched) ? card.content : "?"}
          </button>
        ))}
      </div>
      <button onClick={resetGame} className="text-xs text-slate-500 flex gap-1 hover:text-indigo-600"><RotateCcw className="w-3 h-3"/> 다시하기</button>
    </div>
  );
};

export const TimerDemo: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isActive && timeLeft > 0) interval = setInterval(() => setTimeLeft(t => t - 1), 1000);
    else if (timeLeft === 0) setIsActive(false);
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  return (
    <div className="flex flex-col items-center space-y-4 p-2">
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#e2e8f0" strokeWidth="8" />
          <circle 
            cx="50" cy="50" r="45" fill="none" stroke={timeLeft > 10 ? '#22c55e' : '#ef4444'} strokeWidth="8" 
            strokeDasharray="283" strokeDashoffset={283 - (283 * (timeLeft / 60) * 100) / 100}
            className="transition-all duration-1000 ease-linear" strokeLinecap="round"
          />
        </svg>
        <div className="absolute text-2xl font-bold font-mono text-slate-700">{timeLeft}</div>
      </div>
      <div className="flex gap-2">
        <button onClick={() => setIsActive(!isActive)} className="px-4 py-1 rounded-full bg-indigo-500 text-white text-sm">{isActive ? '멈춤' : '시작'}</button>
        <button onClick={() => { setIsActive(false); setTimeLeft(60); }} className="px-4 py-1 rounded-full bg-slate-200 text-slate-700 text-sm">리셋</button>
      </div>
    </div>
  );
};

export const BingoDemo: React.FC = () => {
  const [grid, setGrid] = useState<boolean[]>(Array(25).fill(false));
  const [winningLines, setWinningLines] = useState<string[]>([]);
  const [isBingo, setIsBingo] = useState(false);

  const toggleCell = (idx: number) => {
    if (isBingo) return;
    const newGrid = [...grid];
    newGrid[idx] = !newGrid[idx];
    setGrid(newGrid);
    checkBingo(newGrid);
  };

  const checkBingo = (currentGrid: boolean[]) => {
    const newWinningLines: string[] = [];
    
    // Rows
    for (let i = 0; i < 5; i++) {
      if (currentGrid.slice(i*5, i*5+5).every(Boolean)) newWinningLines.push(`row-${i}`);
    }
    // Cols
    for (let i = 0; i < 5; i++) {
      if ([0,1,2,3,4].map(x => currentGrid[i + x*5]).every(Boolean)) newWinningLines.push(`col-${i}`);
    }
    // Diagonals
    if ([0,6,12,18,24].map(x => currentGrid[x]).every(Boolean)) newWinningLines.push('diag-1');
    if ([4,8,12,16,20].map(x => currentGrid[x]).every(Boolean)) newWinningLines.push('diag-2');

    setWinningLines(newWinningLines);

    if (newWinningLines.length > 0) {
      setIsBingo(true);
    }
  };

  const reset = () => {
    setGrid(Array(25).fill(false));
    setWinningLines([]);
    setIsBingo(false);
  };

  return (
    <div className="flex flex-col items-center relative">
      <div className="relative">
        <div className="grid grid-cols-5 gap-1 mb-4">
          {grid.map((checked, i) => (
            <button
              key={i}
              onClick={() => toggleCell(i)}
              className={`w-10 h-10 sm:w-12 sm:h-12 border rounded flex items-center justify-center font-bold text-sm transition-colors ${
                checked ? 'bg-indigo-500 text-white border-indigo-600' : 'bg-white border-slate-300 text-slate-400 hover:bg-slate-50'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        {/* Winning Lines Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {winningLines.map(line => {
            if (line.startsWith('row-')) {
              const idx = parseInt(line.split('-')[1]);
              return <div key={line} className="absolute left-0 right-0 h-1.5 bg-rose-500/80 rounded-full" style={{ top: `${idx * 20 + 10}%`, transform: 'translateY(-50%)' }} />
            }
            if (line.startsWith('col-')) {
              const idx = parseInt(line.split('-')[1]);
              return <div key={line} className="absolute top-0 bottom-0 w-1.5 bg-rose-500/80 rounded-full" style={{ left: `${idx * 20 + 10}%`, transform: 'translateX(-50%)' }} />
            }
            if (line === 'diag-1') {
              return <div key={line} className="absolute top-0 left-0 w-[140%] h-1.5 bg-rose-500/80 rounded-full origin-top-left" style={{ transform: 'rotate(45deg)' }} />
            }
             if (line === 'diag-2') {
              return <div key={line} className="absolute top-0 right-0 w-[140%] h-1.5 bg-rose-500/80 rounded-full origin-top-right" style={{ transform: 'rotate(-45deg)' }} />
            }
            return null;
          })}
        </div>
      </div>
      
      {isBingo ? (
        <div className="text-xl font-bold text-rose-500 animate-bounce mt-2">🎉 BINGO! 🎉</div>
      ) : (
        <button onClick={reset} className="text-sm text-slate-500 underline mt-2">새 게임</button>
      )}
    </div>
  );
};

export const WordScrambleDemo: React.FC = () => {
  const answer = "COMPUTER";
  const [scrambled, setScrambled] = useState<string[]>([]);
  const [input, setInput] = useState<string[]>([]);
  const [isSolved, setIsSolved] = useState(false);

  useEffect(() => {
    reset();
  }, []);

  const reset = () => {
    setScrambled(answer.split('').sort(() => Math.random() - 0.5));
    setInput([]);
    setIsSolved(false);
  };

  const handleLetterClick = (letter: string, idx: number) => {
    if (isSolved) return;
    setInput([...input, letter]);
    const newScrambled = [...scrambled];
    newScrambled.splice(idx, 1); // Remove used letter
    setScrambled(newScrambled);
    
    if ([...input, letter].join('') === answer) {
      setIsSolved(true);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Answer Area */}
      <div className="flex gap-2 min-h-[50px]">
        {input.map((char, i) => (
          <div key={i} className="w-10 h-10 bg-indigo-100 border-b-4 border-indigo-500 text-indigo-800 font-bold flex items-center justify-center text-xl animate-fadeIn">
            {char}
          </div>
        ))}
        {Array(answer.length - input.length).fill(0).map((_, i) => (
           <div key={i} className="w-10 h-10 bg-slate-100 border-b-4 border-slate-300"></div>
        ))}
      </div>

      {/* Scrambled Letters */}
      <div className="flex gap-2 flex-wrap justify-center">
        {scrambled.map((char, i) => (
          <button 
            key={i}
            onClick={() => handleLetterClick(char, i)}
            className="w-10 h-10 bg-white border-2 border-slate-200 rounded-lg hover:bg-slate-50 hover:scale-110 transition-all font-bold text-slate-700 shadow-sm"
          >
            {char}
          </button>
        ))}
      </div>

      {isSolved && <div className="text-green-600 font-bold text-lg animate-bounce">정답입니다! 💯</div>}
      
      <button onClick={reset} className="flex items-center gap-1 text-slate-400 text-sm hover:text-slate-600">
        <RefreshCw className="w-3 h-3"/> 다시하기
      </button>
    </div>
  );
};


// ==========================================
// CATEGORY 4: DATA & MANAGEMENT
// ==========================================

export const LearningLogDemo: React.FC = () => {
  const [logs, setLogs] = useState<{date: string, title: string, note: string}[]>([]);
  const [form, setForm] = useState({ title: '', note: '' });

  const addLog = () => {
    if (!form.title) return;
    const newLog = {
      date: new Date().toLocaleDateString(),
      title: form.title,
      note: form.note
    };
    setLogs([...logs, newLog]);
    setForm({ title: '', note: '' });
  };

  const downloadCSV = () => {
    const header = "날짜,활동명,내용\n";
    const rows = logs.map(l => `${l.date},"${l.title}","${l.note}"`).join("\n");
    const csvContent = "data:text/csv;charset=utf-8," + encodeURIComponent(header + rows);
    
    const link = document.createElement("a");
    link.setAttribute("href", csvContent);
    link.setAttribute("download", "학습기록.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-4">
      {/* Input Form */}
      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-3">
        <input 
          type="text" 
          value={form.title} 
          onChange={e => setForm({...form, title: e.target.value})}
          placeholder="활동명 (예: 독서 기록)"
          className="w-full p-2 border border-slate-300 rounded text-sm"
        />
        <input 
          type="text" 
          value={form.note} 
          onChange={e => setForm({...form, note: e.target.value})}
          placeholder="내용을 간단히 적어주세요"
          className="w-full p-2 border border-slate-300 rounded text-sm"
        />
        <button onClick={addLog} className="w-full bg-indigo-600 text-white py-2 rounded text-sm font-bold hover:bg-indigo-700">
          기록 추가
        </button>
      </div>

      {/* List & Download */}
      <div className="border border-slate-200 rounded-lg overflow-hidden bg-white">
        <div className="flex justify-between items-center p-3 bg-slate-100 border-b border-slate-200">
          <span className="text-sm font-bold text-slate-700">누적 기록 ({logs.length})</span>
          <button 
             onClick={downloadCSV} 
             disabled={logs.length === 0}
             className="flex items-center gap-1 text-xs text-indigo-600 hover:underline disabled:text-slate-400 disabled:no-underline"
          >
            <Download className="w-3 h-3" /> 엑셀 다운로드
          </button>
        </div>
        <div className="max-h-40 overflow-y-auto divide-y divide-slate-100">
          {logs.length === 0 ? (
            <div className="p-4 text-center text-xs text-slate-400">기록된 내용이 없습니다.</div>
          ) : (
            logs.map((log, i) => (
              <div key={i} className="p-3 hover:bg-slate-50">
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>{log.date}</span>
                </div>
                <div className="font-bold text-sm text-slate-800">{log.title}</div>
                <div className="text-xs text-slate-600 truncate">{log.note}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export const JsonQuizDemo: React.FC = () => {
  const defaultJson = `[
  {
    "question": "임진왜란이 일어난 해는?",
    "options": ["1392", "1592", "1919", "1950"],
    "answer": "1592"
  },
  {
    "question": "훈민정음을 창제한 왕은?",
    "options": ["태조", "세종", "정조", "고종"],
    "answer": "세종"
  }
]`;
  const [jsonInput, setJsonInput] = useState(defaultJson);
  const [quizData, setQuizData] = useState<any[]>([]);
  const [mode, setMode] = useState<'edit' | 'play'>('edit');

  const loadQuiz = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setQuizData(parsed);
      setMode('play');
    } catch (e) {
      alert("JSON 형식이 올바르지 않습니다.");
    }
  };

  return (
    <div className="space-y-4">
      {mode === 'edit' ? (
        <div className="space-y-2">
          <div className="bg-amber-50 p-3 rounded-lg border border-amber-200 text-xs text-amber-800">
             💡 엑셀이나 메모장에서 만든 문제 데이터를 아래 형식으로 붙여넣으세요.
          </div>
          <textarea 
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            className="w-full h-48 p-3 font-mono text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
          <button onClick={loadQuiz} className="w-full bg-indigo-600 text-white py-2 rounded-lg font-bold hover:bg-indigo-700 flex items-center justify-center gap-2">
            <Upload className="w-4 h-4" /> 퀴즈 생성하기
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {quizData.map((q, i) => (
            <div key={i} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
              <p className="font-bold text-slate-800 mb-2">Q{i+1}. {q.question}</p>
              <div className="space-y-1">
                {q.options.map((opt: string, j: number) => (
                  <button key={j} className="block w-full text-left px-3 py-2 text-sm rounded hover:bg-slate-100">{j+1}. {opt}</button>
                ))}
              </div>
            </div>
          ))}
          <button onClick={() => setMode('edit')} className="text-sm text-slate-500 underline">데이터 수정하기</button>
        </div>
      )}
    </div>
  );
};

export const CertificateGenerator: React.FC = () => {
  const [name, setName] = useState("김학생");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Draw certificate on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    if(!ctx) return;

    // Background
    ctx.fillStyle = "#fffbeb"; // amber-50
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Border
    ctx.strokeStyle = "#b45309"; // amber-700
    ctx.lineWidth = 10;
    ctx.strokeRect(10, 10, canvas.width-20, canvas.height-20);
    ctx.lineWidth = 2;
    ctx.strokeRect(18, 18, canvas.width-36, canvas.height-36);

    // Text
    ctx.textAlign = "center";
    ctx.fillStyle = "#1e293b"; // slate-800
    
    ctx.font = "bold 32px serif";
    ctx.fillText("수 료 증", canvas.width/2, 80);
    
    ctx.font = "24px serif";
    ctx.fillText(`성 명 : ${name}`, canvas.width/2, 140);
    
    ctx.font = "16px sans-serif";
    ctx.fillText("위 학생은 Vibe 코딩 과정을", canvas.width/2, 200);
    ctx.fillText("성실히 수료하였으므로 이 증서를 드립니다.", canvas.width/2, 230);
    
    ctx.font = "14px sans-serif";
    const date = new Date().toLocaleDateString();
    ctx.fillText(date, canvas.width/2, 280);
    
    ctx.font = "bold 18px serif";
    ctx.fillText("Vibe하는교사", canvas.width/2, 320);

    // Seal (Circle)
    ctx.beginPath();
    ctx.arc(canvas.width - 60, 300, 30, 0, Math.PI*2);
    ctx.strokeStyle = "#ef4444";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = "rgba(239, 68, 68, 0.1)";
    ctx.fill();
    ctx.fillStyle = "#ef4444";
    ctx.font = "12px serif";
    ctx.fillText("참잘함", canvas.width - 60, 305);

  }, [name]);

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if(!canvas) return;
    const link = document.createElement('a');
    link.download = `${name}_수료증.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="space-y-4 flex flex-col items-center">
      <div className="flex gap-2 w-full max-w-xs">
        <input 
          type="text" 
          value={name}
          onChange={e => setName(e.target.value)}
          className="flex-1 border border-slate-300 rounded px-3 py-2 text-sm"
          placeholder="이름 입력"
        />
        <button 
          onClick={downloadImage}
          className="bg-amber-600 text-white px-4 py-2 rounded text-sm font-bold hover:bg-amber-700 flex items-center gap-2"
        >
          <Download className="w-4 h-4" /> 저장
        </button>
      </div>
      <canvas ref={canvasRef} width={400} height={360} className="shadow-lg rounded" />
    </div>
  );
};