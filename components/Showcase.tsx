
import React, { useState } from 'react';
import { ComponentExample } from '../types';
import { 
  DropdownDemo, TextCounterDemo, SliderDemo, TagInputDemo,
  StarRatingDemo, OXQuizDemo,
  FlipCardDemo, DragDropDemo, AccordionDemo, BeforeAfterDemo,
  ModalDemo, TabsDemo, DrawingBoardDemo, ImageHotspotDemo, TimelineDemo,
  LadderGameDemo, RouletteDemo, MemoryGameDemo, TimerDemo, BingoDemo, WordScrambleDemo,
  JsonQuizDemo, CertificateGenerator, LearningLogDemo, ImageRevealDemo
} from './DemoWidgets';
import { Copy, Check, Lightbulb, Code2 } from 'lucide-react';

interface ShowcaseProps {
  example: ComponentExample;
}

const Showcase: React.FC<ShowcaseProps> = ({ example }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(example.vibePrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderDemo = () => {
    switch (example.id) {
      // Input
      case 'dropdown': return <DropdownDemo />;
      case 'ox-quiz': return <OXQuizDemo />;
      case 'text-counter': return <TextCounterDemo />;
      case 'slider': return <SliderDemo />;
      case 'star-rating': return <StarRatingDemo />;
      case 'tag-input': return <TagInputDemo />;
      
      // Interaction
      case 'drawing-board': return <DrawingBoardDemo />;
      case 'flipcard': return <FlipCardDemo />;
      case 'image-hotspot': return <ImageHotspotDemo />;
      case 'timeline': return <TimelineDemo />;
      case 'modal': return <ModalDemo />;
      case 'tabs': return <TabsDemo />;
      case 'dragdrop': return <DragDropDemo />;
      case 'accordion': return <AccordionDemo />;
      case 'before-after': return <BeforeAfterDemo />;

      // Gamification
      case 'ladder': return <LadderGameDemo />;
      case 'roulette': return <RouletteDemo />;
      case 'memory-game': return <MemoryGameDemo />;
      case 'timer': return <TimerDemo />;
      case 'bingo': return <BingoDemo />;
      case 'word-scramble': return <WordScrambleDemo />;
      case 'image-reveal': return <ImageRevealDemo />;

      // Data Management
      case 'learning-log': return <LearningLogDemo />;
      case 'json-quiz': return <JsonQuizDemo />;
      case 'certificate': return <CertificateGenerator />;
      
      default: return <div className="p-10 text-center text-slate-400">데모 준비 중...</div>;
    }
  };

  return (
    <div className="flex-1 h-full overflow-y-auto p-4 md:p-8 bg-slate-50/50">
      <div className="max-w-4xl mx-auto space-y-8 pb-12">
        
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-500 uppercase tracking-wide">
              {example.category}
            </span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900">{example.title}</h2>
          <p className="text-slate-600 mt-2 text-lg">{example.description}</p>
        </div>

        {/* Interactive Demo Area */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-100 px-6 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <span className="ml-auto text-xs font-mono text-slate-400">Interactive Preview</span>
          </div>
          <div className="p-6 md:p-10 bg-pattern min-h-[300px] flex flex-col justify-center">
            {renderDemo()}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Educational Value */}
          <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
            <div className="flex items-center gap-2 mb-3 text-indigo-800">
              <Lightbulb className="w-5 h-5" />
              <h3 className="font-bold">수업 활용 가이드</h3>
            </div>
            <p className="text-indigo-900/80 text-sm leading-relaxed whitespace-pre-wrap">
              {example.educational}
            </p>
          </div>

          {/* Vibe Coding Prompt */}
          <div className="bg-slate-900 rounded-xl p-6 text-white shadow-lg relative group">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-emerald-400">
                <Code2 className="w-5 h-5" />
                <h3 className="font-bold">Vibe Coding 프롬프트</h3>
              </div>
              <button 
                onClick={handleCopy}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                title="프롬프트 복사"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-slate-400 group-hover:text-white" />}
              </button>
            </div>
            <div className="bg-black/30 p-4 rounded-lg border border-white/10 text-sm font-mono text-slate-300 leading-relaxed">
              {example.vibePrompt}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 이 내용을 복사해서 AI에게 붙여넣기만 하세요!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Showcase;
