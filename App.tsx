import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Showcase from './components/Showcase';
import { CategoryType, ComponentExample } from './types';
import { COMPONENT_EXAMPLES, CATEGORIES } from './constants';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(CategoryType.INPUT);
  const [selectedExampleId, setSelectedExampleId] = useState<string>('dropdown');

  const filteredExamples = COMPONENT_EXAMPLES.filter(ex => ex.category === selectedCategory);
  const currentExample = COMPONENT_EXAMPLES.find(ex => ex.id === selectedExampleId) || filteredExamples[0];

  // Update selected example when category changes
  React.useEffect(() => {
    if (filteredExamples.length > 0) {
      const exists = filteredExamples.find(ex => ex.id === selectedExampleId);
      if (!exists) {
        setSelectedExampleId(filteredExamples[0].id);
      }
    }
  }, [selectedCategory]);

  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden font-sans">
      <Sidebar selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      
      <div className="flex-1 flex flex-col h-full relative">
        {/* Sub-navigation (Tabs) */}
        <div className="h-14 bg-white border-b border-slate-200 flex items-center px-6 overflow-x-auto gap-6 no-scrollbar">
          {filteredExamples.map(ex => (
            <button
              key={ex.id}
              onClick={() => setSelectedExampleId(ex.id)}
              className={`whitespace-nowrap h-full border-b-2 px-1 text-sm font-medium transition-colors ${
                selectedExampleId === ex.id 
                  ? 'border-indigo-600 text-indigo-600' 
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              {ex.title}
            </button>
          ))}
        </div>

        {/* Main Content */}
        {currentExample && <Showcase example={currentExample} />}
      </div>
    </div>
  );
};

export default App;