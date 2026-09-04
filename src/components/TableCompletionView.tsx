import React from 'react';
import { QuestionItem, Mode, UserAnswerState } from '../types';
import { checkAnswerCorrectness } from '../data/ieltsData';
import { CheckCircle, XCircle, BookOpen, ExternalLink, AlertTriangle, ArrowDown, GitCommit } from 'lucide-react';

interface TableCompletionViewProps {
  questions: QuestionItem[];
  userAnswers: UserAnswerState;
  onAnswerChange: (questionId: number, answer: string) => void;
  checkedQuestions: { [key: number]: boolean };
  mode: Mode;
  isSubmitted: boolean;
  onCheckQuestion?: (questionId: number) => void;
  onJumpToParagraph: (paragraphId: number) => void;
  explanationLanguage: 'bilingual' | 'vi' | 'en';
}

export const TableCompletionView: React.FC<TableCompletionViewProps> = ({
  questions,
  userAnswers,
  onAnswerChange,
  checkedQuestions,
  mode,
  isSubmitted,
  onJumpToParagraph,
  explanationLanguage,
}) => {
  const getQuestion = (num: number) => questions.find((q) => q.questionNumber === num);
  const isTestMode = mode === 'test' && !isSubmitted;

  const renderInputField = (questionNumber: number) => {
    const q = getQuestion(questionNumber);
    if (!q) return null;

    const answer = userAnswers[q.id] || '';
    const wordCount = answer.trim().split(/\s+/).filter(Boolean).length;
    const isOverLimit = wordCount > 3; // Strict NO MORE THAN THREE WORDS
    const isChecked = checkedQuestions[q.id] || (isSubmitted && mode === 'test');
    const isCorrect = isChecked ? checkAnswerCorrectness(q, answer) : false;

    return (
      <span className="inline-flex flex-col mx-1 align-middle my-1">
        <span className="inline-flex items-center gap-1.5">
          <span className="shrink-0 w-6 h-6 rounded-md bg-[#0F172A] text-white text-xs font-bold flex items-center justify-center shadow-xs">
            {questionNumber}
          </span>
          <input
            id={`flowchart-input-q-${q.id}`}
            type="text"
            value={answer}
            onChange={(e) => onAnswerChange(q.id, e.target.value)}
            disabled={isSubmitted && mode === 'test'}
            placeholder=""
            className={`min-w-[150px] max-w-[230px] sm:min-w-[190px] px-3 py-1.5 text-xs sm:text-sm rounded-lg border font-sans font-medium outline-none transition-all ${
              isChecked
                ? isCorrect
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-1 ring-emerald-300'
                  : 'border-rose-500 bg-rose-50 text-rose-950 ring-1 ring-rose-300'
                : 'border-slate-300 bg-white hover:border-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-slate-900'
            }`}
          />
          {isChecked && (
            <span className="shrink-0">
              {isCorrect ? (
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              ) : (
                <XCircle className="w-4 h-4 text-rose-600" />
              )}
            </span>
          )}
        </span>

        {/* Word count warning only shown in practice mode or after checking */}
        {!isTestMode && isOverLimit && (
          <span className="text-[10px] text-rose-600 font-semibold mt-0.5 flex items-center gap-1">
            <AlertTriangle className="w-3 h-3 shrink-0" />
            <span>Exceeds 3 words ({wordCount}/3)!</span>
          </span>
        )}

        {isChecked && !isCorrect && (
          <span className="text-[10px] text-emerald-700 font-medium mt-0.5">
            Key: <strong className="underline font-bold">{q.officialAnswer}</strong>
          </span>
        )}
      </span>
    );
  };

  return (
    <div className="bg-white border-2 border-slate-300 rounded-2xl shadow-xs overflow-hidden">
      {/* Flow Chart Header Banner */}
      <div className="bg-slate-100/90 border-b border-slate-200 px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200">
              Flow Chart Completion
            </span>
            <h4 className="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight flex items-center gap-2">
              <GitCommit className="w-4 h-4 text-blue-600" />
              <span>The Wild Australian mala</span>
            </h4>
          </div>
          <p className="text-[11px] text-slate-500 font-medium mt-0.5">
            {isTestMode
              ? 'Complete the flow chart below.'
              : 'Complete the flow chart below using words directly from Paragraphs 1 and 2.'}
          </p>
        </div>
        <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-300 shadow-2xs">
          NO MORE THAN THREE WORDS AND/OR A NUMBER
        </span>
      </div>

      {/* Vertical Flow Chart Container */}
      <div className="p-4 sm:p-6 space-y-3 text-slate-800 text-sm leading-relaxed max-w-2xl mx-auto">
        {/* Step 1 */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 transition-all hover:bg-slate-50 hover:border-slate-300">
          {!isTestMode && (
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Stage 1: Historical Range</span>
              </div>
              <button
                onClick={() => onJumpToParagraph(1)}
                className="inline-flex items-center gap-1 text-[11px] text-blue-700 hover:text-blue-900 font-medium bg-white px-2 py-0.5 rounded border border-blue-200 shadow-2xs cursor-pointer"
                title="Jump to Paragraph 1"
              >
                <BookOpen className="w-3 h-3 text-blue-600" />
                <span>Para 1</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </button>
            </div>
          )}
          <div className="text-slate-900 font-medium">
            <span>Distant past: total population of up to</span>
            {renderInputField(1)}
            <span>in desert and semi-desert regions.</span>
          </div>
          {!isTestMode && explanationLanguage !== 'en' && (
            <p className="text-[11px] text-slate-500 italic mt-1 pl-1">
              (Quá khứ xa xưa: tổng số lượng lên tới ... ở các vùng sa mạc và bán sa mạc.)
            </p>
          )}
        </div>

        {/* Arrow Connector */}
        <div className="flex justify-center my-1 text-slate-400">
          <ArrowDown className="w-5 h-5 animate-pulse text-blue-500" />
        </div>

        {/* Step 2 */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 transition-all hover:bg-slate-50 hover:border-slate-300">
          {!isTestMode && (
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Stage 2: Predator Introduction</span>
              </div>
              <button
                onClick={() => onJumpToParagraph(1)}
                className="inline-flex items-center gap-1 text-[11px] text-blue-700 hover:text-blue-900 font-medium bg-white px-2 py-0.5 rounded border border-blue-200 shadow-2xs cursor-pointer"
                title="Jump to Paragraph 1"
              >
                <BookOpen className="w-3 h-3 text-blue-600" />
                <span>Para 1</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </button>
            </div>
          )}
          <div className="text-slate-900 font-medium">
            <span>Populations of malas were destroyed by</span>
            {renderInputField(2)}
          </div>
          {!isTestMode && explanationLanguage !== 'en' && (
            <p className="text-[11px] text-slate-500 italic mt-1 pl-1">
              (Các quần thể mala đã bị tàn phá bởi ...)
            </p>
          )}
        </div>

        {/* Arrow Connector */}
        <div className="flex justify-center my-1 text-slate-400">
          <ArrowDown className="w-5 h-5 text-slate-400" />
        </div>

        {/* Step 3: Discovery Milestone */}
        <div className="rounded-xl border border-dashed border-slate-300 bg-slate-100/60 p-3.5 text-center">
          {!isTestMode && (
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Milestone</span>
              <button
                onClick={() => onJumpToParagraph(1)}
                className="inline-flex items-center gap-1 text-[10px] text-slate-600 hover:text-slate-900 bg-white px-1.5 py-0.5 rounded border border-slate-200 cursor-pointer"
              >
                <BookOpen className="w-2.5 h-2.5 text-slate-500" />
                <span>Para 1</span>
              </button>
            </div>
          )}
          <p className="text-xs sm:text-sm font-semibold text-slate-700">
            1964/1976: two surviving colonies were discovered.
          </p>
          {!isTestMode && explanationLanguage !== 'en' && (
            <p className="text-[11px] text-slate-500 italic mt-0.5">
              (Năm 1964/1976: phát hiện hai quần thể sống sót ở sa mạc Tanami.)
            </p>
          )}
        </div>

        {/* Arrow Connector */}
        <div className="flex justify-center my-1 text-slate-400">
          <ArrowDown className="w-5 h-5 text-blue-500" />
        </div>

        {/* Step 4 */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 transition-all hover:bg-slate-50 hover:border-slate-300">
          {!isTestMode && (
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Stage 3: Scientific Action</span>
              </div>
              <button
                onClick={() => onJumpToParagraph(2)}
                className="inline-flex items-center gap-1 text-[11px] text-blue-700 hover:text-blue-900 font-medium bg-white px-2 py-0.5 rounded border border-blue-200 shadow-2xs cursor-pointer"
                title="Jump to Paragraph 2"
              >
                <BookOpen className="w-3 h-3 text-blue-600" />
                <span>Para 2</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </button>
            </div>
          )}
          <div className="text-slate-900 font-medium">
            <span>Scientists</span>
            {renderInputField(3)}
            <span>the colonies.</span>
          </div>
          {!isTestMode && explanationLanguage !== 'en' && (
            <p className="text-[11px] text-slate-500 italic mt-1 pl-1">
              (Các nhà khoa học đã ... hai quần thể này.)
            </p>
          )}
        </div>

        {/* Arrow Connector */}
        <div className="flex justify-center my-1 text-slate-400">
          <ArrowDown className="w-5 h-5 text-slate-400" />
        </div>

        {/* Step 5: Destruction Milestone */}
        <div className="rounded-xl border border-dashed border-slate-300 bg-slate-100/60 p-3.5 text-center">
          {!isTestMode && (
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Milestone</span>
              <button
                onClick={() => onJumpToParagraph(2)}
                className="inline-flex items-center gap-1 text-[10px] text-slate-600 hover:text-slate-900 bg-white px-1.5 py-0.5 rounded border border-slate-200 cursor-pointer"
              >
                <BookOpen className="w-2.5 h-2.5 text-slate-500" />
                <span>Para 2</span>
              </button>
            </div>
          )}
          <p className="text-xs sm:text-sm font-semibold text-slate-700">
            1987: one of the colonies was completely destroyed.
          </p>
          {!isTestMode && explanationLanguage !== 'en' && (
            <p className="text-[11px] text-slate-500 italic mt-0.5">
              (Năm 1987: một trong hai quần thể bị tiêu diệt hoàn toàn bởi một con cáo.)
            </p>
          )}
        </div>

        {/* Arrow Connector */}
        <div className="flex justify-center my-1 text-slate-400">
          <ArrowDown className="w-5 h-5 text-blue-500" />
        </div>

        {/* Step 6 */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 transition-all hover:bg-slate-50 hover:border-slate-300">
          {!isTestMode && (
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Stage 4: Natural Catastrophe</span>
              </div>
              <button
                onClick={() => onJumpToParagraph(2)}
                className="inline-flex items-center gap-1 text-[11px] text-blue-700 hover:text-blue-900 font-medium bg-white px-2 py-0.5 rounded border border-blue-200 shadow-2xs cursor-pointer"
                title="Jump to Paragraph 2"
              >
                <BookOpen className="w-3 h-3 text-blue-600" />
                <span>Para 2</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </button>
            </div>
          )}
          <div className="text-slate-900 font-medium">
            <span>1991: the other colony was destroyed by</span>
            {renderInputField(4)}
          </div>
          {!isTestMode && explanationLanguage !== 'en' && (
            <p className="text-[11px] text-slate-500 italic mt-1 pl-1">
              (Năm 1991: quần thể còn lại bị hủy diệt bởi ...)
            </p>
          )}
        </div>

        {/* Arrow Connector */}
        <div className="flex justify-center my-1 text-slate-400">
          <ArrowDown className="w-5 h-5 text-blue-500" />
        </div>

        {/* Step 7 */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 transition-all hover:bg-slate-50 hover:border-slate-300">
          {!isTestMode && (
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Stage 5: Official Declaration</span>
              </div>
              <button
                onClick={() => onJumpToParagraph(2)}
                className="inline-flex items-center gap-1 text-[11px] text-blue-700 hover:text-blue-900 font-medium bg-white px-2 py-0.5 rounded border border-blue-200 shadow-2xs cursor-pointer"
                title="Jump to Paragraph 2"
              >
                <BookOpen className="w-3 h-3 text-blue-600" />
                <span>Para 2</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </button>
            </div>
          )}
          <div className="text-slate-900 font-medium">
            <span>The wild mala was declared</span>
            {renderInputField(5)}
          </div>
          {!isTestMode && explanationLanguage !== 'en' && (
            <p className="text-[11px] text-slate-500 italic mt-1 pl-1">
              (Loài mala hoang dã cuối cùng bị tuyên bố ...)
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
