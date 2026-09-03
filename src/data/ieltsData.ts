import { 
  ParagraphData, 
  QuestionItem, 
  TipStrip, 
  ReviewItem, 
  ActionPlanReminder,
  StrategyExtractItem,
  ErrorAnalysisItem
} from '../types';

export const PASSAGE_TITLE = "The Rufous Hare-Wallaby";
export const PASSAGE_SUBTITLE =
  "An account of the decline, captive breeding, and conservation reintroduction efforts for Australia's endangered 'mala'";

export const REVIEW_QUESTIONS: ReviewItem[] = [
  {
    id: 1,
    question: 'What are the three task types in Reading Passage 1?',
    questionVi: 'Ba dạng bài trong Reading Passage 1 gồm những gì?',
    answer: 'Task 1 has 5 Flow Chart Completion questions (1–5), Task 2 has 4 Short Answer questions (6–9), and Task 3 has 4 True / False / Not Given questions (10–13).',
    answerVi: 'Phần 1 gồm 5 câu Hoàn thành sơ đồ (1–5), Phần 2 gồm 4 câu Trả lời ngắn (6–9), và Phần 3 gồm 4 câu True / False / Not Given (10–13).',
  },
  {
    id: 2,
    question: 'What are the word limit rules for Questions 1–5 and 6–9?',
    questionVi: 'Quy định về giới hạn từ cho các câu 1–5 và 6–9 là gì?',
    answer:
      'Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage for each answer. Writing four or more words will receive zero marks.',
    answerVi:
      'Chọn KHÔNG QUÁ BA TỪ VÀ/HOẶC MỘT CON SỐ từ bài đọc cho mỗi câu trả lời. Viết từ 4 từ trở lên sẽ bị chấm 0 điểm.',
  },
  {
    id: 3,
    question: 'Do the flow chart, short answer, and True/False/Not Given questions follow chronological text order?',
    questionVi: 'Các câu hỏi sơ đồ, câu hỏi ngắn và True/False/Not Given có theo thứ tự bài đọc không?',
    answer:
      'Yes. The flow chart traces the historical timeline in paragraphs 1 and 2; short answer questions test key biology & cultural facts in paragraphs 3 and 4; and True/False/Not Given questions follow paragraphs 5 through 7.',
    answerVi:
      'Có. Sơ đồ lưu trình đi theo trình tự thời gian ở đoạn 1 và 2; các câu hỏi ngắn kiểm tra dữ kiện sinh học & văn hóa ở đoạn 3 và 4; và các câu True/False/Not Given theo thứ tự từ đoạn 5 đến đoạn 7.',
  },
  {
    id: 4,
    question: 'Can you use synonyms or must you copy words directly from the passage?',
    questionVi: 'Bạn có thể dùng từ đồng nghĩa hay bắt buộc phải sao chép từ bài đọc?',
    answer:
      'For completion and short-answer tasks (Questions 1–9), you must take the exact words directly from the passage without changing their spelling or word form. For True/False/Not Given (Questions 10–13), you evaluate statements against the passage facts.',
    answerVi:
      'Đối với dạng điền từ và trả lời ngắn (câu 1–9), bạn phải sao chép chính xác từ ngữ từ bài đọc mà không thay đổi dạng từ hay chính tả. Đối với dạng True/False/Not Given (câu 10–13), bạn đối chiếu các nhận định với dữ kiện bài đọc.',
  },
];

export const STRATEGY_EXTRACTS: StrategyExtractItem[] = [
  {
    id: 'extract-a',
    letter: 'A',
    text: 'At one time, there may have been as many as ten million of these little animals across the arid and semi-arid landscape of Australia, but their populations, like those of so many other small endemic species, were devastated when cats and foxes were introduced...',
    statement: 'Cats and foxes caused the catastrophic collapse of the original mala population.',
    strategyTitle: 'Identifying Cause and Effect in Population Declines',
    strategyDesc: 'Recognize that "were devastated when cats and foxes were introduced" establishes the predators as the primary cause of population destruction.',
    strategyDescVi: 'Nhận diện quan hệ nguyên nhân - hệ quả: "bị tàn phá khi mèo và cáo được du nhập" khẳng định các loài săn mồi này là nguyên nhân hủy diệt quần thể.',
    officialAnswer: 'TRUE',
    explanation:
      "TRUE: The text directly attributes the devastation of mala populations across Australia to the introduction of cats and foxes.",
    explanationVi:
      'TRUE: Bài đọc trực tiếp quy trách nhiệm cho việc suy giảm nghiêm trọng số lượng mala là do mèo và cáo được đưa vào.',
  },
  {
    id: 'extract-b',
    letter: 'B',
    text: 'Then in late 1987, every one of the individuals of the second and smaller of the wild colonies was killed. From examination of the tracks in the sand, it seemed that just one single fox had been responsible.',
    statement: 'Several foxes attacked the smaller colony in 1987.',
    strategyTitle: 'Singular vs Plural Details & Sand Track Evidence',
    strategyDesc: 'Distinguish singular from plural: the sand tracks showed that "just one single fox" was responsible, not several foxes.',
    strategyDescVi: 'Phân biệt số ít và số nhiều: dấu vết trên cát cho thấy chỉ có một con cáo duy nhất ("just one single fox") gây ra vụ tấn công.',
    officialAnswer: 'FALSE',
    explanation:
      "FALSE: The passage explicitly states 'just one single fox had been responsible', directly contradicting the statement that several foxes attacked.",
    explanationVi:
      'FALSE: Đoạn văn nêu rõ "chỉ một con cáo duy nhất chịu trách nhiệm", trái ngược hoàn toàn với nhận định rằng có nhiều con cáo tấn công.',
  },
  {
    id: 'extract-c',
    letter: 'C',
    text: 'And then, in October 1991, a wild-fire destroyed the entire area occupied by the remaining colony. Thus the mala was finally pronounced extinct in the wild.',
    statement: 'Fire was the final event leading to the mala being declared extinct in the wild.',
    strategyTitle: 'Tracing Flow Chart Milestones',
    strategyDesc: 'Observe how the adverb "Thus" connects the destruction by wild-fire in 1991 directly to the final declaration of extinction in the wild.',
    strategyDescVi: 'Quan sát liên từ "Thus" kết nối việc tàn phá bởi cháy rừng năm 1991 trực tiếp với tuyên bố tuyệt chủng trong tự nhiên.',
    officialAnswer: 'TRUE',
    explanation:
      "TRUE: The 1991 wild-fire destroyed the final surviving wild colony, after which the mala was pronounced extinct in the wild.",
    explanationVi:
      'TRUE: Trận cháy rừng năm 1991 đã thiêu rụi quần thể hoang dã cuối cùng, sau đó mala được tuyên bố tuyệt chủng ngoài tự nhiên.',
  },
  {
    id: 'extract-d',
    letter: 'D',
    text: 'With the help of the local Yapa, an electric fence was erected around 250 acres of suitable habitat, about 300 miles northwest of Alice Springs so that the mala could adapt while protected from predators.',
    statement: 'Natural defences were sufficient to protect the area called Mala Paddock.',
    strategyTitle: 'Distinguishing Natural vs Man-Made Protections',
    strategyDesc: 'Carefully compare the protection method: an electric fence is a man-made barrier, not a natural defence.',
    strategyDescVi: 'So sánh phương thức bảo vệ: hàng rào điện (electric fence) là rào cản nhân tạo, không phải phòng thủ tự nhiên (natural defences).',
    officialAnswer: 'FALSE',
    explanation:
      "FALSE: The Mala Paddock required an electric fence to protect the animals from predators; natural defences were not sufficient.",
    explanationVi:
      'FALSE: Khu vực Mala Paddock cần một hàng rào điện nhân tạo để bảo vệ chúng khỏi kẻ săn mồi; các điều kiện tự nhiên là không đủ.',
  },
  {
    id: 'extract-e',
    letter: 'E',
    text: 'However, all attempts to reintroduce mala from the paddocks into the unfenced wild were unsuccessful, so in the end the reintroduction programme was abandoned.',
    statement: 'Scientists eventually gave up their efforts to release captive mala into the unprotected wild.',
    strategyTitle: 'Paraphrasing Idiomatic Expressions',
    strategyDesc: 'Match "in the end" to "eventually", "the reintroduction programme was abandoned" to "gave up their efforts", and "unfenced wild" to "unprotected wild".',
    strategyDescVi: 'Nhận biết các cặp từ đồng nghĩa: "in the end" = "eventually", "abandoned" = "gave up their efforts", và "unfenced wild" = "unprotected wild".',
    officialAnswer: 'TRUE',
    explanation:
      "TRUE: The passage explicitly states that because attempts failed, the reintroduction programme was abandoned (scientists gave up their efforts to release them into the unfenced wild).",
    explanationVi:
      'TRUE: Bài đọc khẳng định do các nỗ lực thất bại nên chương trình tái thả đã bị hủy bỏ (các nhà khoa học đã từ bỏ nỗ lực tái thả vào tự nhiên không bảo vệ).',
  },
  {
    id: 'extract-f',
    letter: 'F',
    text: 'Finally, in March 1999, twelve adult females, eight adult males, and eight joeys were transferred from the Mala Paddock to Dryandra Woodland in Western Australia.',
    statement: 'The mala population which was transferred to Dryandra Woodland quickly increased in size.',
    strategyTitle: 'Recognizing Unstated Information (NOT GIVEN)',
    strategyDesc: 'Check whether the passage provides any follow-up data or monitoring results regarding the population size at Dryandra Woodland.',
    strategyDescVi: 'Kiểm tra xem bài đọc có cung cấp số liệu theo dõi nào về quy mô quần thể tại Dryandra Woodland hay không.',
    officialAnswer: 'NOT GIVEN',
    explanation:
      "NOT GIVEN: The text mentions that mala were transferred to Dryandra Woodland, but gives no information about whether their population increased, decreased, or remained constant.",
    explanationVi:
      'NOT GIVEN: Bài đọc chỉ nhắc đến việc chuyển mala tới Dryandra Woodland, nhưng không hề đề cập số lượng của chúng có tăng nhanh hay không.',
  },
];

export const ERROR_ANALYSIS_ITEMS: ErrorAnalysisItem[] = [
  {
    id: 1,
    questionPrompt: 'Distant past: total population of up to 1 [up to ten million]',
    studentAnswer: 'up to ten million',
    rubricRule: 'Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage for each answer.',
    matchedReasonId: 'A',
    explanation:
      "The prompt already includes the words 'total population of up to'. Repeating 'up to' makes the sentence redundant: 'total population of up to up to ten million'. The correct answer is '10 million' or 'ten million'.",
    explanationVi:
      "Đề bài đã có sẵn cụm từ 'total population of up to'. Việc lặp lại 'up to' làm câu bị thừa từ vô nghĩa. Đáp án đúng chỉ cần là '10 million' hoặc 'ten million'.",
  },
  {
    id: 2,
    questionPrompt: 'Populations of malas were destroyed by 2 [foxes]',
    studentAnswer: 'foxes',
    rubricRule: 'Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage for each answer.',
    matchedReasonId: 'D',
    explanation:
      "The passage explicitly states that populations were devastated by 'cats and foxes'. Omitting cats leaves the answer incomplete.",
    explanationVi:
      "Bài đọc nêu rõ quần thể bị tàn phá bởi 'cats and foxes' (cả mèo và cáo). Nếu chỉ viết 'foxes' sẽ bị coi là thiếu thông tin quan trọng.",
  },
  {
    id: 3,
    questionPrompt: 'Scientists 3 [have monitored]',
    studentAnswer: 'have monitored',
    rubricRule: 'Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage for each answer.',
    matchedReasonId: 'B',
    explanation:
      "The passage uses the past simple 'monitored' ('scientists ... monitored these two populations'). Adding auxiliary verbs from memory changes the word form directly copied from the text.",
    explanationVi:
      "Bài đọc dùng thì quá khứ đơn 'monitored'. Thêm trợ động từ 'have' làm biến đổi từ nguyên bản được trích từ bài đọc.",
  },
  {
    id: 4,
    questionPrompt: 'At what age can female malas start breeding? 6 [when she is five months]',
    studentAnswer: 'when she is five months',
    rubricRule: 'Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage for each answer.',
    matchedReasonId: 'C',
    explanation:
      "The student wrote 5 words ('when she is five months'), directly violating the rubric limit of 'NO MORE THAN THREE WORDS'. The correct answer is '5 months' or 'five months'.",
    explanationVi:
      "Học sinh viết 5 từ ('when she is five months'), vi phạm nghiêm trọng giới hạn 'KHÔNG QUÁ BA TỪ'. Đáp án đúng là '5 months' hoặc 'five months'.",
  },
  {
    id: 5,
    questionPrompt: 'Natural defences were sufficient to protect the area called Mala Paddock. 10 [TRUE]',
    studentAnswer: 'TRUE',
    rubricRule: 'Write TRUE, FALSE, or NOT GIVEN.',
    matchedReasonId: 'F',
    explanation:
      "The student assumed the remote Tanami desert provided natural protection, overlooking the explicit fact that an electric fence had to be built to protect them from predators.",
    explanationVi:
      "Học sinh suy đoán vùng sa mạc xa xôi là phòng thủ tự nhiên, bỏ qua dữ kiện bài đọc nêu rõ phải dựng hàng rào điện (electric fence) để che chắn động vật ăn thịt.",
  },
  {
    id: 6,
    questionPrompt: 'The mala population which was transferred to Dryandra Woodland quickly increased in size. 12 [TRUE]',
    studentAnswer: 'TRUE',
    rubricRule: 'Write TRUE, FALSE, or NOT GIVEN.',
    matchedReasonId: 'E',
    explanation:
      "The student assumed that because captive breeding succeeded, the Dryandra transfer was also an immediate growth success. The text provides no follow-up information about Dryandra Woodland.",
    explanationVi:
      "Học sinh tự suy đoán rằng vì nhân giống thành công nên việc chuyển tới Dryandra cũng tăng trưởng tốt. Bài đọc không hề cung cấp thông tin về quần thể ở Dryandra.",
  },
];

export const ERROR_ANALYSIS_REASONS = [
  {
    id: 'A',
    text: "The student repeated words already printed in the sentence stem, creating redundancy.",
    textVi: 'Học sinh lặp lại những từ đã có sẵn trong câu đề bài, gây thừa từ.',
  },
  {
    id: 'B',
    text: "The student altered the grammatical form or added unnecessary auxiliary words instead of copying directly.",
    textVi: 'Học sinh tự ý biến đổi dạng từ hoặc thêm trợ động từ thay vì sao chép nguyên vẹn từ bài đọc.',
  },
  {
    id: 'C',
    text: "The answer violates the word limit instruction (e.g. writing more than three words).",
    textVi: 'Đáp án vi phạm quy định giới hạn từ (ví dụ viết nhiều hơn 3 từ).',
  },
  {
    id: 'D',
    text: "The student provided incomplete information, omitting one of the key paired nouns (e.g. 'cats and foxes').",
    textVi: 'Học sinh cung cấp thiếu thông tin, bỏ sót một trong hai danh từ song hành (như mèo và cáo).',
  },
  {
    id: 'E',
    text: "The student relied on personal assumptions instead of verifying whether the text explicitly states the fact.",
    textVi: 'Học sinh dựa vào phỏng đoán cá nhân thay vì kiểm tra bài đọc có thực sự nêu dữ kiện hay không.',
  },
  {
    id: 'F',
    text: "The student overlooked a crucial man-made intervention (e.g. electric fence vs natural defences).",
    textVi: 'Học sinh bỏ qua chi tiết can thiệp nhân tạo quan trọng (ví dụ hàng rào điện thay vì phòng thủ tự nhiên).',
  },
];

export const ACTION_PLAN_FLOW_CHART: ActionPlanReminder = {
  taskType: 'flow_chart',
  title: 'Action Plan: Flow Chart Completion (Questions 1–5)',
  titleVi: 'Kế hoạch hành động: Hoàn thành sơ đồ lưu trình (Câu 1–5)',
  items: [
    {
      number: 1,
      question: 'Step 1: How do you identify the chronological scope in the text?',
      questionVi: 'Bước 1: Làm thế nào để xác định phạm vi thời gian trong bài đọc?',
      answer:
        'Notice the timeline cues in the chart: "Distant past", "1964/1976", "1987", "1991", and "extinct". These map directly to paragraphs 1 and 2.',
      answerVi:
        'Chú ý các mốc thời gian trên sơ đồ: "Distant past", "1964/1976", "1987", "1991", và "extinct". Chúng tương ứng trực tiếp với đoạn 1 và 2.',
    },
    {
      number: 2,
      question: 'Step 2: How do you prevent copying redundant words in Q1?',
      questionVi: 'Bước 2: Làm sao để không bị sao chép thừa từ ở câu 1?',
      answer:
        'The prompt already includes "total population of up to". Do not copy "up to" again. Write only "10 million" or "ten million".',
      answerVi:
        'Đề bài đã in sẵn "total population of up to". Đừng chép lại "up to". Chỉ ghi "10 million" hoặc "ten million".',
    },
    {
      number: 3,
      question: 'Step 3: How do you capture both introduced predators in Q2?',
      questionVi: 'Bước 3: Ghi nhận cả hai loài săn mồi ở câu 2 như thế nào?',
      answer:
        'The text says "when cats and foxes were introduced". Make sure to write "cats and foxes" or "foxes and cats" within the 3-word limit.',
      answerVi:
        'Bài đọc viết "when cats and foxes were introduced". Hãy ghi "cats and foxes" hoặc "foxes and cats" trong giới hạn 3 từ.',
    },
    {
      number: 4,
      question: 'Step 4: What grammatical form is needed for Q3?',
      questionVi: 'Bước 4: Cần dạng ngữ pháp gì cho câu 3?',
      answer:
        'The prompt is "Scientists 3 [..........] the colonies." You need a past simple transitive verb: "monitored".',
      answerVi:
        'Câu đề bài là "Scientists 3 [..........] the colonies." Bạn cần một ngoại động từ ở quá khứ đơn: "monitored".',
    },
    {
      number: 5,
      question: 'Step 5: What caused the 1991 colony destruction in Q4?',
      questionVi: 'Bước 5: Điều gì đã hủy diệt quần thể năm 1991 ở câu 4?',
      answer:
        'Paragraph 2 states "a wild-fire destroyed the entire area". Write "fire" or "wild-fire" (or "a wild-fire").',
      answerVi:
        'Đoạn 2 nêu "a wild-fire destroyed the entire area". Hãy viết "fire" hoặc "wild-fire" (hoặc "a wild-fire").',
    },
  ],
};

export const ACTION_PLAN_SHORT_ANSWER: ActionPlanReminder = {
  taskType: 'short_answer',
  title: 'Action Plan: Short Answer Questions (Questions 6–9)',
  titleVi: 'Kế hoạch hành động: Câu hỏi trả lời ngắn (Câu 6–9)',
  items: [
    {
      number: 1,
      question: 'Step 1: What is the word limit for Questions 6–9?',
      questionVi: 'Bước 1: Giới hạn từ cho các câu 6–9 là bao nhiêu?',
      answer: 'Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage for each answer.',
      answerVi: 'Chọn KHÔNG QUÁ BA TỪ VÀ/HOẶC MỘT CON SỐ từ bài đọc cho mỗi câu trả lời.',
    },
    {
      number: 2,
      question: 'Step 2: How do you find the breeding age in Q6?',
      questionVi: 'Bước 2: Tìm độ tuổi sinh sản ở câu 6 như thế nào?',
      answer: 'Locate "breed" and "female" in paragraph 3: "when she is just five months old". Answer: "5 months" or "five months".',
      answerVi: 'Định vị từ "breed" và "female" ở đoạn 3: "when she is just five months old". Đáp án: "5 months" hoặc "five months".',
    },
    {
      number: 3,
      question: 'Step 3: How do you locate the pouch duration in Q7?',
      questionVi: 'Bước 3: Định vị thời gian ở trong túi mẹ ở câu 7 ra sao?',
      answer: 'Scan for "pouch" and "joey" in paragraph 3: "in her pouch for about 15 weeks". Answer: "15 weeks" or "fifteen weeks".',
      answerVi: 'Quét từ "pouch" và "joey" ở đoạn 3: "in her pouch for about 15 weeks". Đáp án: "15 weeks" hoặc "fifteen weeks".',
    },
    {
      number: 4,
      question: 'Step 4: How do you identify the cultural value for the Yapa in Q8?',
      questionVi: 'Bước 4: Xác định giá trị văn hóa đối với người Yapa ở câu 8 như thế nào?',
      answer: 'Paragraph 4 states: "strong medicinal powers for old people". Answer: "(strong) medicinal powers".',
      answerVi: 'Đoạn 4 nêu: "strong medicinal powers for old people". Đáp án: "(strong) medicinal powers".',
    },
    {
      number: 5,
      question: 'Step 5: How do you find the Yapa lasting contribution in Q9?',
      questionVi: 'Bước 5: Tìm đóng góp lâu dài của người Yapa ở câu 9 ra sao?',
      answer: 'Look for "enduring role": "The skills and knowledge of the Yapa would play a significant and enduring role". Answer: "skills and knowledge".',
      answerVi: 'Tìm từ "enduring role" (vai trò lâu dài): "The skills and knowledge of the Yapa would play a significant and enduring role". Đáp án: "skills and knowledge".',
    },
  ],
};

export const ACTION_PLAN_TFNG: ActionPlanReminder = {
  taskType: 'tfng',
  title: 'Action Plan: True / False / Not Given (Questions 10–13)',
  titleVi: 'Kế hoạch hành động: Dạng bài True / False / Not Given (Câu 10–13)',
  items: [
    {
      number: 1,
      question: 'Step 1: How do you locate the relevant paragraphs for Questions 10–13?',
      questionVi: 'Bước 1: Định vị các đoạn văn liên quan cho câu 10–13 ra sao?',
      answer: 'Questions 10 and 11 refer to Mala Paddock and reintroduction in paragraph 5; Question 12 refers to Dryandra Woodland in paragraph 6; Question 13 refers to recovery results in paragraph 7.',
      answerVi: 'Câu 10 và 11 liên quan đến Mala Paddock và việc tái thả ở đoạn 5; câu 12 nói về Dryandra Woodland ở đoạn 6; câu 13 nói về kết quả phục hồi ở đoạn 7.',
    },
    {
      number: 2,
      question: 'Step 2: Why is Question 10 FALSE regarding natural defences?',
      questionVi: 'Bước 2: Vì sao câu 10 là FALSE về mặt phòng thủ tự nhiên?',
      answer: 'Paragraph 5 states that an electric fence was erected to protect them; artificial fences are not natural defences.',
      answerVi: 'Đoạn 5 nêu rõ cần dựng một hàng rào điện (electric fence) để bảo vệ chúng; hàng rào nhân tạo không phải phòng thủ tự nhiên.',
    },
    {
      number: 3,
      question: 'Step 3: Why is Question 11 TRUE regarding giving up efforts?',
      questionVi: 'Bước 3: Vì sao câu 11 là TRUE về việc từ bỏ nỗ lực?',
      answer: '"All attempts ... were unsuccessful, so in the end the reintroduction programme was abandoned". "Abandoned" means gave up their efforts.',
      answerVi: '"All attempts ... were unsuccessful, so in the end the reintroduction programme was abandoned". "Abandoned" đồng nghĩa với từ bỏ nỗ lực.',
    },
    {
      number: 4,
      question: 'Step 4: Why is Question 12 NOT GIVEN regarding Dryandra Woodland?',
      questionVi: 'Bước 4: Vì sao câu 12 là NOT GIVEN về Dryandra Woodland?',
      answer: 'Paragraph 6 mentions the transfer of 28 individuals, but there is no information about whether their population increased quickly, slowly, or at all.',
      answerVi: 'Đoạn 6 nhắc đến việc chuyển 28 cá thể, nhưng không có thông tin nào cho biết quần thể có tăng trưởng nhanh hay không.',
    },
    {
      number: 5,
      question: 'Step 5: Why is Question 13 TRUE regarding scientists being satisfied?',
      questionVi: 'Bước 5: Vì sao câu 13 là TRUE về việc các nhà khoa học hài lòng?',
      answer: 'Paragraph 7 states: "So far the recovery programme had gone even better than expected", directly demonstrating satisfaction with the initial results.',
      answerVi: 'Đoạn 7 khẳng định: "Cho đến nay chương trình phục hồi đã diễn ra thậm chí tốt hơn mong đợi", chứng tỏ sự hài lòng vượt mong đợi.',
    },
  ],
};

export const ACTION_PLAN_TABLE = ACTION_PLAN_FLOW_CHART;

export const TIP_STRIP_PART1: TipStrip = {
  title: 'Exam Tips: Questions 1–5 (Flow Chart Completion: The Wild Australian mala)',
  questionRange: 'Questions 1–5',
  bullets: [
    'Strict rubric: Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage.',
    'Follow the timeline: Paragraph 1 covers the distant past and early decline; Paragraph 2 covers surviving colonies, monitoring, and wild extinction.',
    'For Q1: Do not repeat "up to". Write "10 million" or "ten million".',
    'For Q2: Write both introduced predators: "cats and foxes" (or "foxes and cats").',
    'For Q3: Look for what scientists did to the two populations: "monitored".',
    'For Q4: Identify the destructive event in October 1991: "fire" (or "wild-fire").',
    'For Q5: "pronounced extinct in the wild" matches "declared extinct". Write "extinct".',
  ],
  bulletsVi: [
    'Quy định nghiêm ngặt: CHỌN KHÔNG QUÁ BA TỪ VÀ/HOẶC MỘT CON SỐ từ bài đọc.',
    'Bám sát trục thời gian: Đoạn 1 bao quát quá khứ xa xưa và suy giảm ban đầu; Đoạn 2 nói về hai quần thể sống sót, theo dõi và sự tuyệt chủng ngoài tự nhiên.',
    'Câu 1: Không lặp lại từ "up to" đã có sẵn trong đề bài. Chỉ ghi "10 million" hoặc "ten million".',
    'Câu 2: Ghi đủ cả hai loài săn mồi du nhập: "cats and foxes" (hoặc "foxes and cats").',
    'Câu 3: Tìm hành động của các nhà khoa học: "monitored" (theo dõi).',
    'Câu 4: Xác định sự kiện hủy diệt vào tháng 10 năm 1991: "fire" hoặc "wild-fire".',
    'Câu 5: "pronounced extinct in the wild" tương đương với "declared extinct". Viết "extinct".',
  ],
};

export const TIP_STRIP_PART2: TipStrip = {
  title: 'Exam Tips: Questions 6–9 (Short Answer Questions)',
  questionRange: 'Questions 6–9',
  bullets: [
    'Keep answers concise: NO MORE THAN THREE WORDS AND/OR A NUMBER.',
    'For Q6: Check the female breeding age in Paragraph 3: "just five months old" -> "5 months" or "five months".',
    'For Q7: Check pouch duration in Paragraph 3: "in her pouch for about 15 weeks" -> "15 weeks" or "fifteen weeks".',
    'For Q8: Look at Paragraph 4 for non-food value: "strong medicinal powers for old people" -> "(strong) medicinal powers".',
    'For Q9: Look for enduring contribution in Paragraph 4: "The skills and knowledge of the Yapa" -> "skills and knowledge".',
  ],
  bulletsVi: [
    'Giữ câu trả lời ngắn gọn: KHÔNG QUÁ BA TỪ VÀ/HOẶC MỘT CON SỐ.',
    'Câu 6: Kiểm tra độ tuổi sinh sản của con cái ở đoạn 3: "just five months old" -> "5 months" hoặc "five months".',
    'Câu 7: Kiểm tra thời gian ở trong túi mẹ ở đoạn 3: "for about 15 weeks" -> "15 weeks" hoặc "fifteen weeks".',
    'Câu 8: Xem đoạn 4 để tìm giá trị ngoài thực phẩm: "strong medicinal powers" -> "(strong) medicinal powers".',
    'Câu 9: Tìm đóng góp lâu dài ở đoạn 4: "skills and knowledge of the Yapa" -> "skills and knowledge".',
  ],
};

export const TIP_STRIP_PART3: TipStrip = {
  title: 'Exam Tips: Questions 10–13 (True / False / Not Given)',
  questionRange: 'Questions 10–13',
  bullets: [
    'For Q10: An electric fence is an artificial predator barrier, not a natural defence -> FALSE.',
    'For Q11: "the reintroduction programme was abandoned" means scientists gave up their efforts -> TRUE.',
    'For Q12: Paragraph 6 states mala were transferred to Dryandra Woodland, but does not say if the population increased -> NOT GIVEN.',
    'For Q13: "went even better than expected" confirms scientists were satisfied with initial results -> TRUE.',
  ],
  bulletsVi: [
    'Câu 10: Hàng rào điện là rào cản nhân tạo, không phải phòng thủ tự nhiên -> FALSE.',
    'Câu 11: "the reintroduction programme was abandoned" có nghĩa các nhà khoa học đã từ bỏ nỗ lực -> TRUE.',
    'Câu 12: Đoạn 6 chỉ nói chuyển mala đến Dryandra Woodland, không hề nói số lượng có tăng hay không -> NOT GIVEN.',
    'Câu 13: "went even better than expected" (tốt hơn mong đợi) khẳng định các nhà khoa học rất hài lòng -> TRUE.',
  ],
};

export const PARAGRAPHS: ParagraphData[] = [
  {
    id: 1,
    sectionTitle: 'Historical Abundance & Initial Decline',
    text: "The Rufous Hare-Wallaby is a species of Australian kangaroo, usually known by its Aboriginal name, 'mala'. At one time, there may have been as many as ten million of these little animals across the arid and semi-arid landscape of Australia, but their populations, like those of so many other small endemic species, were devastated when cats and foxes were introduced - indeed, during the 1950s it was thought that the mala was extinct. But in 1964, a small colony was found 450 miles northwest of Alice Springs in the Tanami Desert. And 12 years later, a second small colony was found nearby. Very extensive surveys were made throughout historical mala range - but no other traces were found.",
  },
  {
    id: 2,
    sectionTitle: 'Monitoring & Extinction in the Wild',
    text: "Throughout the 1970s and 1980s, scientists from the Parks and Wildlife Commission of the Northern Territory monitored these two populations. At first it seemed that they were holding their own. Then in late 1987, every one of the individuals of the second and smaller of the wild colonies was killed. From examination of the tracks in the sand, it seemed that just one single fox had been responsible. And then, in October 1991, a wild-fire destroyed the entire area occupied by the remaining colony. Thus the mala was finally pronounced extinct in the wild.",
  },
  {
    id: 3,
    sectionTitle: 'Founding the Captive Breeding Programme',
    text: "Fortunately, ten years earlier, seven individuals had been captured, and had become the founders of a captive breeding programme at the Arid Zone Research Institute in Alice Springs; and that group had thrived. Part of this success is due to the fact that the female can breed when she is just five months old and can produce up to three young a year. Like other kangaroo species, the mother carries her young - known as a joey - in her pouch for about 15 weeks, and she can have more than one joey at the same time.",
  },
  {
    id: 4,
    sectionTitle: 'Consultation with the Yapa People',
    text: "In the early 1980s, there were enough mala in the captive population to make it feasible to start a reintroduction programme. But first it was necessary to discuss this with the leaders of the Yapa people. Traditionally, the mala had been an important animal in their culture, with strong medicinal powers for old people. It had also been an important food source, and there were concerns that any mala returned to the wild would be killed for the pot. And so, in 1980, a group of key Yapa men was invited to visit the proposed reintroduction area. The skills and knowledge of the Yapa would play a significant and enduring role in this and all other mala projects.",
  },
  {
    id: 5,
    sectionTitle: 'The Mala Paddock & Unfenced Release Failure',
    text: "With the help of the local Yapa, an electric fence was erected around 250 acres of suitable habitat, about 300 miles northwest of Alice Springs so that the mala could adapt while protected from predators. By 1992, there were about 150 mala in their enclosure, which became known as the Mala Paddock. However, all attempts to reintroduce mala from the paddocks into the unfenced wild were unsuccessful, so in the end the reintroduction programme was abandoned. The team now faced a situation where mala could be bred, but not released into the wild again.",
  },
  {
    id: 6,
    sectionTitle: 'The Mala Recovery Team & Conservation Sites',
    text: "Thus, in 1993, a Mala Recovery Team was established to boost mala numbers, and goals for a new programme were set: the team concentrated on finding suitable predator-free or predator-controlled conservation sites within the mala's known range. Finally, in March 1999, twelve adult females, eight adult males, and eight joeys were transferred from the Mala Paddock to Dryandra Woodland in Western Australia. Then, a few months later, a second group was transferred to Trimouille, an island off the coast of western Australia. First, it had been necessary to rid the island of rats and cats - a task that had taken two years of hard work.",
  },
  {
    id: 7,
    sectionTitle: 'Monitoring Transmitters on Trimouille Island',
    text: "Six weeks after their release into this conservation site, a team returned to the island to find out how things were going. Each of the malas had been fitted with a radio collar that transmits for about 14 months, after which it falls off. The team was able to locate 29 out of the 30 transmitters - only one came from the collar of a mala that had died of unknown causes. So far the recovery programme had gone even better than expected.",
  },
  {
    id: 8,
    sectionTitle: 'Continuing Population Success',
    text: "Today, there are many signs suggesting that the mala population on the island is continuing to do well.",
  },
];

export const QUESTIONS: QuestionItem[] = [
  {
    id: 1,
    questionNumber: 1,
    type: 'short_answer',
    sectionType: 'flow_chart',
    flowChartTitle: 'The Wild Australian mala',
    flowChartStep: 1,
    flowChartPrefix: 'Distant past: total population of up to',
    flowChartSuffix: 'in desert and semi-desert regions.',
    prompt: 'Distant past: total population of up to 1 .............................. in desert and semi-desert regions.',
    instruction: 'Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage for each answer.',
    maxWords: 3,
    tip: 'Find the population figure in Paragraph 1. Be careful not to repeat words like "up to" already given in the prompt.',
    tipVi: 'Tìm con số số lượng ở Đoạn 1. Chú ý không lặp lại các từ như "up to" đã có sẵn trong câu hỏi.',
    advice:
      'Paragraph 1 says: "At one time, there may have been as many as ten million of these little animals...". Either "10 million" or "ten million" is accepted.',
    adviceVi:
      'Đoạn 1 nêu: "At one time, there may have been as many as ten million of these little animals...". Chấp nhận cả "10 million" hoặc "ten million".',
    distraction:
      "Writing 'up to ten million' makes the sentence ungrammatical because 'up to' is already printed in the sentence stem.",
    distractionVi:
      "Viết 'up to ten million' sẽ bị sai ngữ pháp vì 'up to' đã được in sẵn trong câu đề bài.",
    officialAnswer: '10 million',
    acceptedAnswers: ['10 million', 'ten million', '10/ten million'],
    paragraphRef: 1,
    paragraphQuote:
      'At one time, there may have been as many as ten million of these little animals across the arid and semi-arid landscape of Australia...',
    explanation:
      'Paragraph 1 states: "At one time, there may have been as many as ten million of these little animals across the arid and semi-arid landscape of Australia...". The sentence stem already contains "total population of up to", so the missing answer is "10 million" or "ten million".',
    explanationVi:
      'Đoạn 1 cho biết: "Đã có thời điểm, có thể có tới mười triệu cá thể động vật nhỏ bé này trên khắp cảnh quan khô hạn và bán khô hạn của nước Úc...". Câu đề bài đã có "total population of up to", nên đáp án cần điền là "10 million" hoặc "ten million".',
  },
  {
    id: 2,
    questionNumber: 2,
    type: 'short_answer',
    sectionType: 'flow_chart',
    flowChartTitle: 'The Wild Australian mala',
    flowChartStep: 2,
    flowChartPrefix: 'Populations of malas were destroyed by',
    flowChartSuffix: '',
    prompt: 'Populations of malas were destroyed by 2 ..............................',
    instruction: 'Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage for each answer.',
    maxWords: 3,
    tip: 'Scan Paragraph 1 for what destroyed ("devastated") their populations. Make sure to include both introduced animals.',
    tipVi: 'Quét Đoạn 1 để tìm thứ đã phá hủy ("devastated") quần thể mala. Hãy chắc chắn nêu cả hai loài động vật được du nhập.',
    advice:
      'Paragraph 1 mentions "when cats and foxes were introduced". "Devastated" matches "destroyed". Write "cats and foxes" or "foxes and cats".',
    adviceVi:
      'Đoạn 1 nhắc tới "when cats and foxes were introduced". Từ "devastated" tương ứng với "destroyed". Điền "cats and foxes" hoặc "foxes and cats".',
    distraction:
      "Writing only 'foxes' or only 'cats' is incomplete. Both predators are named in the passage.",
    distractionVi:
      "Chỉ ghi 'foxes' hoặc chỉ 'cats' là thiếu thông tin. Cả hai loài săn mồi đều được nêu trong bài.",
    officialAnswer: 'cats and foxes',
    acceptedAnswers: [
      'cats and foxes',
      'foxes and cats',
      'cats and foxes/foxes and cats',
      'introduction of cats and foxes'
    ],
    paragraphRef: 1,
    paragraphQuote:
      '... their populations, like those of so many other small endemic species, were devastated when cats and foxes were introduced...',
    explanation:
      'Paragraph 1 states that their populations "were devastated when cats and foxes were introduced". "Devastated" is paraphrased as "destroyed". Therefore, the correct answer is "cats and foxes" (or "foxes and cats").',
    explanationVi:
      'Đoạn 1 giải thích rằng quần thể của chúng "bị tàn phá (devastated) khi mèo và cáo được du nhập vào". "Devastated" được diễn đạt lại bằng "destroyed". Do đó đáp án là "cats and foxes" hoặc "foxes and cats".',
  },
  {
    id: 3,
    questionNumber: 3,
    type: 'short_answer',
    sectionType: 'flow_chart',
    flowChartTitle: 'The Wild Australian mala',
    flowChartStep: 4,
    flowChartPrefix: 'Scientists',
    flowChartSuffix: 'the colonies.',
    prompt: 'Scientists 3 .............................. the colonies.',
    instruction: 'Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage for each answer.',
    maxWords: 3,
    tip: 'In Paragraph 2, look for the action verb describing what scientists did to the two populations throughout the 1970s and 1980s.',
    tipVi: 'Ở Đoạn 2, tìm động từ miêu tả việc các nhà khoa học đã làm đối với hai quần thể trong suốt thập niên 1970 và 1980.',
    advice:
      'The sentence requires a past tense verb between "Scientists" and "the colonies". Paragraph 2 says: "...scientists from the Parks and Wildlife Commission of the Northern Territory monitored these two populations."',
    adviceVi:
      'Câu cần một động từ quá khứ đứng giữa "Scientists" và "the colonies". Đoạn 2 viết: "...scientists from the Parks and Wildlife Commission of the Northern Territory monitored these two populations."',
    distraction:
      "Do not add extra words like 'have monitored' or 'were monitoring'. Copy the exact word 'monitored'.",
    distractionVi:
      "Đừng thêm từ phụ như 'have monitored' hay 'were monitoring'. Hãy sao chép chính xác từ 'monitored'.",
    officialAnswer: 'monitored',
    acceptedAnswers: ['monitored'],
    paragraphRef: 2,
    paragraphQuote:
      'Throughout the 1970s and 1980s, scientists from the Parks and Wildlife Commission of the Northern Territory monitored these two populations.',
    explanation:
      'Paragraph 2 states that throughout the 1970s and 1980s, "scientists from the Parks and Wildlife Commission of the Northern Territory monitored these two populations". Therefore, the missing word is "monitored".',
    explanationVi:
      'Đoạn 2 nêu rõ trong suốt những năm 1970 và 1980, "các nhà khoa học từ Ủy ban Công viên và Động vật hoang dã của Lãnh thổ phía Bắc đã theo dõi (monitored) hai quần thể này". Từ cần điền là "monitored".',
  },
  {
    id: 4,
    questionNumber: 4,
    type: 'short_answer',
    sectionType: 'flow_chart',
    flowChartTitle: 'The Wild Australian mala',
    flowChartStep: 6,
    flowChartPrefix: '1991: the other colony was destroyed by',
    flowChartSuffix: '',
    prompt: '1991: the other colony was destroyed by 4 ..............................',
    instruction: 'Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage for each answer.',
    maxWords: 3,
    tip: 'Look for the year 1991 in Paragraph 2 and find the cause of the destruction.',
    tipVi: 'Tìm mốc năm 1991 ở Đoạn 2 và tìm nguyên nhân gây ra sự tàn phá.',
    advice:
      'Paragraph 2 states: "And then, in October 1991, a wild-fire destroyed the entire area occupied by the remaining colony." The agent of destruction is "fire" or "wild-fire" (or "a wild-fire").',
    adviceVi:
      'Đoạn 2 nêu: "And then, in October 1991, a wild-fire destroyed the entire area occupied by the remaining colony." Tác nhân gây tàn phá là "fire" hoặc "wild-fire" (hoặc "a wild-fire").',
    distraction:
      "Do not include the verb 'destroyed' because 'was destroyed by' is already part of the prompt.",
    distractionVi:
      "Không đưa thêm động từ 'destroyed' vì 'was destroyed by' đã có trong câu hỏi.",
    officialAnswer: 'fire',
    acceptedAnswers: ['fire', 'wild-fire', 'a wild-fire', 'wildfire', 'a wildfire'],
    paragraphRef: 2,
    paragraphQuote:
      'And then, in October 1991, a wild-fire destroyed the entire area occupied by the remaining colony.',
    explanation:
      'Paragraph 2 tells us that in October 1991, "a wild-fire destroyed the entire area occupied by the remaining colony". Therefore, the cause of destruction was "fire" or "wild-fire".',
    explanationVi:
      'Đoạn 2 cho biết vào tháng 10 năm 1991, "một trận cháy rừng hoang (wild-fire) đã tàn phá toàn bộ khu vực mà quần thể còn lại sinh sống". Vì vậy nguyên nhân hủy diệt là "fire" hoặc "wild-fire".',
  },
  {
    id: 5,
    questionNumber: 5,
    type: 'short_answer',
    sectionType: 'flow_chart',
    flowChartTitle: 'The Wild Australian mala',
    flowChartStep: 7,
    flowChartPrefix: 'The wild mala was declared',
    flowChartSuffix: '',
    prompt: 'The wild mala was declared 5 ..............................',
    instruction: 'Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage for each answer.',
    maxWords: 3,
    tip: 'Locate what status was given to the mala at the end of Paragraph 2. Note that "pronounced" means "declared".',
    tipVi: 'Tìm tình trạng nào đã được công bố cho mala ở cuối Đoạn 2. Lưu ý "pronounced" đồng nghĩa với "declared".',
    advice:
      'Paragraph 2 concludes: "Thus the mala was finally pronounced extinct in the wild." The prompt has "declared", which paraphrases "pronounced". The answer is "extinct" (or "extinct in the wild").',
    adviceVi:
      'Đoạn 2 kết luận: "Thus the mala was finally pronounced extinct in the wild." Đề bài dùng từ "declared", tương đương "pronounced". Đáp án là "extinct" (hoặc "extinct in the wild").',
    distraction:
      "Make sure to copy the spelling of 'extinct' accurately without typos.",
    distractionVi:
      "Đảm bảo sao chép đúng chính tả từ 'extinct', tránh viết sai thành 'extint'.",
    officialAnswer: 'extinct',
    acceptedAnswers: ['extinct', 'extinct in the wild'],
    paragraphRef: 2,
    paragraphQuote:
      'Thus the mala was finally pronounced extinct in the wild.',
    explanation:
      'Paragraph 2 finishes with the sentence: "Thus the mala was finally pronounced extinct in the wild." "Pronounced" matches "declared". Therefore, the answer is "extinct" (or "extinct in the wild").',
    explanationVi:
      'Đoạn 2 kết thúc bằng câu: "Do đó loài mala cuối cùng đã bị tuyên bố (pronounced) là tuyệt chủng trong tự nhiên (extinct in the wild)". "Pronounced" khớp với "declared". Do đó đáp án là "extinct" (hoặc "extinct in the wild").',
  },
  {
    id: 6,
    questionNumber: 6,
    type: 'short_answer',
    sectionType: 'short_answer',
    prompt: 'At what age can female malas start breeding?',
    instruction: 'Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage for each answer.',
    maxWords: 3,
    tip: 'Look for female breeding age in Paragraph 3. Keep the answer to no more than three words.',
    tipVi: 'Tìm độ tuổi sinh sản của con cái ở Đoạn 3. Giữ câu trả lời không quá 3 từ.',
    advice:
      'Paragraph 3 mentions: "...the female can breed when she is just five months old". The age required is "5 months" or "five months".',
    adviceVi:
      'Đoạn 3 đề cập: "...the female can breed when she is just five months old". Độ tuổi cần điền là "5 months" hoặc "five months".',
    distraction:
      "Writing 'when she is five months' exceeds the word limit or adds unnecessary words.",
    distractionVi:
      "Viết 'when she is five months' bị thừa từ không cần thiết.",
    officialAnswer: '5 months',
    acceptedAnswers: [
      '5 months',
      'five months',
      '5/five months',
      'just 5 months',
      'just five months'
    ],
    paragraphRef: 3,
    paragraphQuote:
      'Part of this success is due to the fact that the female can breed when she is just five months old and can produce up to three young a year.',
    explanation:
      'In Paragraph 3, the author notes that "the female can breed when she is just five months old". Therefore, the answer is "5 months" or "five months".',
    explanationVi:
      'Ở Đoạn 3, tác giả ghi nhận rằng "con cái có thể sinh sản khi nó mới chỉ năm tháng tuổi (just five months old)". Vì vậy đáp án là "5 months" hoặc "five months".',
  },
  {
    id: 7,
    questionNumber: 7,
    type: 'short_answer',
    sectionType: 'short_answer',
    prompt: "For about how long do young malas stay inside their mother's pouch?",
    instruction: 'Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage for each answer.',
    maxWords: 3,
    tip: 'Find the mention of pouch and young (joey) in Paragraph 3 to determine the duration.',
    tipVi: 'Tìm từ pouch (túi) và con non (joey) ở Đoạn 3 để xác định khoảng thời gian.',
    advice:
      'Paragraph 3 explains: "the mother carries her young - known as a joey - in her pouch for about 15 weeks". The duration is "15 weeks" or "fifteen weeks".',
    adviceVi:
      'Đoạn 3 giải thích: "con mẹ mang con non - được gọi là joey - trong túi của nó trong khoảng 15 tuần". Khoảng thời gian là "15 weeks" hoặc "fifteen weeks".',
    distraction:
      "Do not confuse weeks with months. Joey pouch time is 15 weeks, while female breeding age is 5 months.",
    distractionVi:
      "Đừng nhầm lẫn giữa tuần và tháng. Thời gian trong túi là 15 tuần, trong khi tuổi sinh sản là 5 tháng.",
    officialAnswer: '15 weeks',
    acceptedAnswers: [
      '15 weeks',
      'fifteen weeks',
      '15/fifteen weeks',
      'about 15 weeks',
      'about fifteen weeks'
    ],
    paragraphRef: 3,
    paragraphQuote:
      'Like other kangaroo species, the mother carries her young - known as a joey - in her pouch for about 15 weeks...',
    explanation:
      'Paragraph 3 states that "the mother carries her young - known as a joey - in her pouch for about 15 weeks". The answer is "15 weeks" or "fifteen weeks".',
    explanationVi:
      'Đoạn 3 nêu rõ: "người mẹ mang con non - được gọi là joey - trong túi của mình trong khoảng 15 tuần". Đáp án là "15 weeks" hoặc "fifteen weeks".',
  },
  {
    id: 8,
    questionNumber: 8,
    type: 'short_answer',
    sectionType: 'short_answer',
    prompt: 'Apart from being a food source, what value did malas have for the Yapa people?',
    instruction: 'Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage for each answer.',
    maxWords: 3,
    tip: 'Check Paragraph 4 for the significance of the mala to the Yapa people besides food.',
    tipVi: 'Kiểm tra Đoạn 4 để tìm ý nghĩa của loài mala đối với người Yapa ngoài nguồn thức ăn.',
    advice:
      'Paragraph 4 states: "Traditionally the mala had been an important animal in their culture, with strong medicinal powers for old people. It had also been an important food source...". The non-food value is "(strong) medicinal powers".',
    adviceVi:
      'Đoạn 4 nêu: "Theo truyền thống, mala là loài động vật quan trọng trong văn hóa của họ, với công dụng chữa bệnh mạnh mẽ (strong medicinal powers) cho người già...". Giá trị phi thực phẩm là "(strong) medicinal powers".',
    distraction:
      "Do not write 'for old people' alone, as this describes who benefits rather than what value the animal had.",
    distractionVi:
      "Đừng chỉ viết 'for old people' vì đó là đối tượng thụ hưởng chứ không phải giá trị của con vật.",
    officialAnswer: 'medicinal powers',
    acceptedAnswers: [
      'medicinal powers',
      'strong medicinal powers',
      '(strong) medicinal powers'
    ],
    paragraphRef: 4,
    paragraphQuote:
      'Traditionally the mala had been an important animal in their culture, with strong medicinal powers for old people. It had also been an important food source...',
    explanation:
      'Paragraph 4 highlights that besides being a food source, "Traditionally the mala had been an important animal in their culture, with strong medicinal powers for old people". Therefore, the value was its "(strong) medicinal powers".',
    explanationVi:
      'Đoạn 4 nhấn mạnh rằng bên cạnh việc là nguồn thức ăn, "Theo truyền thống, mala là loài động vật quan trọng trong văn hóa của họ, với công dụng chữa bệnh mạnh mẽ (strong medicinal powers) cho người già". Do đó giá trị của nó là "(strong) medicinal powers".',
  },
  {
    id: 9,
    questionNumber: 9,
    type: 'short_answer',
    sectionType: 'short_answer',
    prompt: "What was the Yapa's lasting contribution to the mala reintroduction programme?",
    instruction: 'Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage for each answer.',
    maxWords: 3,
    tip: 'Look at the final sentence of Paragraph 4. What would play an enduring (lasting) role?',
    tipVi: 'Xem câu cuối cùng của Đoạn 4. Điều gì sẽ đóng một vai trò lâu dài (enduring role)?',
    advice:
      'The sentence states: "The skills and knowledge of the Yapa would play a significant and enduring role in this and all other mala projects." "Enduring role" matches "lasting contribution". Answer: "skills and knowledge" or "knowledge and skills".',
    adviceVi:
      'Câu văn viết: "Kỹ năng và hiểu biết của người Yapa sẽ đóng vai trò quan trọng và lâu dài (enduring role)...". "Enduring role" tương ứng với "lasting contribution". Đáp án: "skills and knowledge" hoặc "knowledge and skills".',
    distraction:
      "Writing 'their culture' or 'electric fence' is incorrect as the text specifically attributes the enduring role to their 'skills and knowledge'.",
    distractionVi:
      "Viết 'their culture' hay 'electric fence' là không chính xác vì bài đọc gán vai trò lâu dài cụ thể cho 'skills and knowledge'.",
    officialAnswer: 'skills and knowledge',
    acceptedAnswers: [
      'skills and knowledge',
      'knowledge and skills',
      'skills and knowledge/knowledge and skills',
      'their skills and knowledge'
    ],
    paragraphRef: 4,
    paragraphQuote:
      'The skills and knowledge of the Yapa would play a significant and enduring role in this and all other mala projects.',
    explanation:
      'Paragraph 4 ends with: "The skills and knowledge of the Yapa would play a significant and enduring role in this and all other mala projects." "Lasting contribution" paraphrases "significant and enduring role". The correct answer is "skills and knowledge" (or "knowledge and skills").',
    explanationVi:
      'Đoạn 4 kết lại: "Kỹ năng và hiểu biết của người Yapa sẽ đóng một vai trò quan trọng và lâu dài trong dự án này và tất cả các dự án mala khác". "Lasting contribution" diễn đạt lại "enduring role". Đáp án đúng là "skills and knowledge" hoặc "knowledge and skills".',
  },
  {
    id: 10,
    questionNumber: 10,
    type: 'true_false_not_given',
    sectionType: 'tfng',
    prompt: 'Natural defences were sufficient to protect the area called Mala Paddock.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: 'Check Paragraph 5 to see what kind of barrier was erected around Mala Paddock: natural or man-made?',
    tipVi: 'Kiểm tra Đoạn 5 để xem rào chắn quanh Mala Paddock là tự nhiên hay nhân tạo.',
    advice:
      'Paragraph 5 shows that an electric fence had to be built around 250 acres to protect them from predators, and they could not survive in the unfenced wild.',
    adviceVi:
      'Đoạn 5 cho thấy một hàng rào điện (electric fence) đã phải được dựng lên quanh 250 mẫu Anh để bảo vệ chúng khỏi kẻ săn mồi, và chúng không thể sống sót ở vùng hoang dã không rào chắn.',
    distraction:
      "Do not assume that the remote desert landscape counted as a natural defence; the passage explicitly specifies that an electric fence was erected.",
    distractionVi:
      "Đừng cho rằng địa hình sa mạc xa xôi là phòng thủ tự nhiên; bài đọc nêu rõ cần phải dựng hàng rào điện.",
    officialAnswer: 'FALSE',
    acceptedAnswers: ['FALSE', 'F'],
    paragraphRef: 5,
    paragraphQuote:
      'With the help of the local Yapa, an electric fence was erected around 250 acres of suitable habitat, about 300 miles northwest of Alice Springs so that the mala could adapt while protected from predators.',
    explanation:
      'Paragraph 5 shows that although an electric fence was able to protect the mala, they required this man-made barrier and could not survive in the "unfenced wild". Natural defences were therefore NOT sufficient. The statement contradicts the passage (FALSE).',
    explanationVi:
      'Đoạn 5 cho thấy mặc dù hàng rào điện có thể bảo vệ mala, chúng bắt buộc phải có rào chắn nhân tạo này và không thể sống sót ở môi trường tự nhiên không rào chắn ("unfenced wild"). Do đó các biện pháp phòng vệ tự nhiên là KHÔNG đủ. Nhận định mâu thuẫn với bài đọc (FALSE).',
  },
  {
    id: 11,
    questionNumber: 11,
    type: 'true_false_not_given',
    sectionType: 'tfng',
    prompt: 'Scientists eventually gave up their efforts to release captive mala into the unprotected wild.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: 'Look at the outcome of attempts to reintroduce mala from the paddocks into the unfenced wild in Paragraph 5.',
    tipVi: 'Xem kết quả của các nỗ lực tái thả mala từ bãi quây vào môi trường tự nhiên không rào chắn ở Đoạn 5.',
    advice:
      'Paragraph 5 notes: "all attempts to reintroduce mala from the paddocks into the unfenced wild were unsuccessful, so in the end the reintroduction programme was abandoned." "Gave up their efforts" paraphrases "was abandoned".',
    adviceVi:
      'Đoạn 5 nêu: "mọi nỗ lực tái thả mala từ bãi quây vào môi trường tự nhiên không rào chắn đều thất bại, vì vậy cuối cùng chương trình tái thả đã bị từ bỏ (was abandoned)." "Gave up their efforts" đồng nghĩa với "was abandoned".',
    distraction:
      "Notice that 'unfenced wild' corresponds exactly to 'unprotected wild'.",
    distractionVi:
      "Chú ý rằng 'unfenced wild' (tự nhiên không rào chắn) hoàn toàn tương ứng với 'unprotected wild'.",
    officialAnswer: 'TRUE',
    acceptedAnswers: ['TRUE', 'T'],
    paragraphRef: 5,
    paragraphQuote:
      'However, all attempts to reintroduce mala from the paddocks into the unfenced wild were unsuccessful, so in the end the reintroduction programme was abandoned.',
    explanation:
      'Paragraph 5 shows that all attempts to release mala into the unfenced wild failed, so "in the end the reintroduction programme was abandoned". "In the end" means "eventually", and "abandoned" means "gave up their efforts". The statement agrees with the text (TRUE).',
    explanationVi:
      'Đoạn 5 cho thấy mọi nỗ lực thả mala vào tự nhiên không rào chắn đều thất bại, vì vậy "cuối cùng chương trình tái thả đã bị hủy bỏ (abandoned)". "In the end" tương đương "eventually", và "abandoned" nghĩa là "gave up their efforts". Khẳng định hoàn toàn đúng (TRUE).',
  },
  {
    id: 12,
    questionNumber: 12,
    type: 'true_false_not_given',
    sectionType: 'tfng',
    prompt: 'The mala population which was transferred to Dryandra Woodland quickly increased in size.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: 'Check Paragraph 6 for Dryandra Woodland. Does the text state whether this specific population grew quickly?',
    tipVi: 'Kiểm tra Đoạn 6 về Dryandra Woodland. Bài đọc có nói quần thể cụ thể này tăng nhanh hay không?',
    advice:
      'Paragraph 6 tells us that twenty-eight individuals were transferred to Dryandra Woodland, but does not state what happened to their population size after that. The radio collar tracking in Paragraph 7 was conducted on Trimouille Island, not Dryandra Woodland.',
    adviceVi:
      'Đoạn 6 cho biết 28 cá thể được chuyển đến Dryandra Woodland, nhưng không nói chuyện gì xảy ra với số lượng của chúng sau đó. Việc theo dõi vòng cổ vô tuyến ở Đoạn 7 là trên đảo Trimouille chứ không phải Dryandra Woodland.',
    distraction:
      "Do not confuse the positive signs on Trimouille Island with the outcome at Dryandra Woodland.",
    distractionVi:
      "Đừng nhầm lẫn giữa các dấu hiệu khả quan trên đảo Trimouille với kết quả tại Dryandra Woodland.",
    officialAnswer: 'NOT GIVEN',
    acceptedAnswers: ['NOT GIVEN', 'NG'],
    paragraphRef: 6,
    paragraphQuote:
      'Finally, in March 1999, twelve adult females, eight adult males, and eight joeys were transferred from the Mala Paddock to Dryandra Woodland in Western Australia.',
    explanation:
      'There is no information in the passage as to whether the mala population transferred to Dryandra Woodland increased in size, decreased, or stayed the same. Therefore, the answer is NOT GIVEN.',
    explanationVi:
      'Bài đọc hoàn toàn không có thông tin về việc liệu quần thể mala chuyển tới Dryandra Woodland có tăng kích thước nhanh chóng hay không. Vì vậy đáp án là NOT GIVEN.',
  },
  {
    id: 13,
    questionNumber: 13,
    type: 'true_false_not_given',
    sectionType: 'tfng',
    prompt: 'Scientists were satisfied with the initial results of the recovery programme.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: 'Check Paragraph 7 for the team\'s evaluation of the recovery programme after returning to Trimouille Island.',
    tipVi: 'Kiểm tra Đoạn 7 để xem đánh giá của nhóm nghiên cứu về chương trình phục hồi sau khi quay lại đảo Trimouille.',
    advice:
      'Paragraph 7 confirms that "the recovery programme had gone even better than expected" (29 out of 30 transmitters located). Going better than expected means scientists were well satisfied.',
    adviceVi:
      'Đoạn 7 xác nhận rằng "chương trình phục hồi thậm chí đã diễn ra tốt hơn mong đợi" (định vị được 29/30 máy phát tín hiệu). Diễn ra tốt hơn mong đợi chứng tỏ các nhà khoa học rất hài lòng.',
    distraction:
      "One mala had died of unknown causes, but overall the result was deemed 'even better than expected'.",
    distractionVi:
      "Có một con mala bị chết do nguyên nhân không rõ, nhưng nhìn chung kết quả được coi là 'thậm chí tốt hơn mong đợi'.",
    officialAnswer: 'TRUE',
    acceptedAnswers: ['TRUE', 'T'],
    paragraphRef: 7,
    paragraphQuote:
      'The team was able to locate 29 out of the 30 transmitters - only one came from the collar of a mala that had died of unknown causes. So far the recovery programme had gone even better than expected.',
    explanation:
      'Paragraph 7 confirms that the scientists felt the programme had surpassed their expectations ("had gone even better than expected"), which confirms they were satisfied with the initial results. The statement agrees with the text (TRUE).',
    explanationVi:
      'Đoạn 7 khẳng định các nhà khoa học cảm thấy chương trình đã vượt qua kỳ vọng của họ ("had gone even better than expected"), điều này xác nhận họ rất hài lòng với kết quả ban đầu. Nhận định đúng với bài đọc (TRUE).',
  },
];

export function calculateEstimatedBandScore(score: number): { band: string; description: string } {
  if (score >= 13) return { band: '9.0', description: 'Expert User — Fluent, accurate, and complete understanding.' };
  if (score === 12) return { band: '8.5', description: 'Very Good User — Operational command with rare inaccuracies.' };
  if (score === 11) return { band: '8.0', description: 'Very Good User — Complex detailed argumentation handled well.' };
  if (score === 10) return { band: '7.5', description: 'Good User — Operational command, handles complex language well.' };
  if (score === 9) return { band: '7.0', description: 'Good User — Generally effective command, minor inaccuracies.' };
  if (score === 8) return { band: '6.5', description: 'Competent User — Generally effective command in familiar situations.' };
  if (score === 7) return { band: '6.0', description: 'Competent User — Understands reasonably well, some errors.' };
  if (score >= 5) return { band: '5.5', description: 'Modest User — Partial command, handles basic meaning.' };
  if (score >= 3) return { band: '5.0', description: 'Modest User — Many mistakes, basic competence only.' };
  return { band: '4.5', description: 'Limited User — Basic command, struggles with complex structures.' };
}

export function checkAnswerCorrectness(question: QuestionItem, rawUserAnswer: string): boolean {
  if (!rawUserAnswer) return false;
  const cleaned = rawUserAnswer.trim().toLowerCase();

  if (question.type === 'true_false_not_given') {
    const isTrue = cleaned === 'true' || cleaned === 't';
    const isFalse = cleaned === 'false' || cleaned === 'f';
    const isNotGiven = cleaned === 'not given' || cleaned === 'ng' || cleaned === 'notgiven';

    if (question.officialAnswer === 'TRUE') return isTrue;
    if (question.officialAnswer === 'FALSE') return isFalse;
    if (question.officialAnswer === 'NOT GIVEN') return isNotGiven;
    return false;
  }

  // Short answer / Flow Chart Completion (NO MORE THAN THREE WORDS AND/OR A NUMBER)
  const normalizedCleaned = cleaned
    .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return question.acceptedAnswers.some((accepted) => {
    const normAccepted = accepted
      .toLowerCase()
      .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    if (normalizedCleaned === normAccepted) return true;

    // Additional flexible checks:
    // e.g. "10 million" vs "ten million"
    if (
      (normAccepted.includes('10 million') || normAccepted.includes('ten million')) &&
      (normalizedCleaned === '10 million' || normalizedCleaned === 'ten million')
    ) {
      return true;
    }

    // e.g. "cats and foxes" vs "foxes and cats"
    if (
      (normAccepted.includes('cats and foxes') || normAccepted.includes('foxes and cats')) &&
      (normalizedCleaned === 'cats and foxes' || normalizedCleaned === 'foxes and cats')
    ) {
      return true;
    }

    // e.g. "5 months" vs "five months"
    if (
      (normAccepted.includes('5 months') || normAccepted.includes('five months')) &&
      (normalizedCleaned === '5 months' || normalizedCleaned === 'five months')
    ) {
      return true;
    }

    // e.g. "15 weeks" vs "fifteen weeks"
    if (
      (normAccepted.includes('15 weeks') || normAccepted.includes('fifteen weeks')) &&
      (normalizedCleaned === '15 weeks' || normalizedCleaned === 'fifteen weeks')
    ) {
      return true;
    }

    // e.g. "medicinal powers" vs "strong medicinal powers"
    if (
      normAccepted.includes('medicinal powers') &&
      (normalizedCleaned === 'medicinal powers' || normalizedCleaned === 'strong medicinal powers')
    ) {
      return true;
    }

    // e.g. "skills and knowledge" vs "knowledge and skills"
    if (
      (normAccepted.includes('skills and knowledge') || normAccepted.includes('knowledge and skills')) &&
      (normalizedCleaned === 'skills and knowledge' || normalizedCleaned === 'knowledge and skills')
    ) {
      return true;
    }

    // e.g. "fire" vs "wild-fire" vs "wildfire"
    if (
      (normAccepted === 'fire' || normAccepted.includes('wild-fire') || normAccepted.includes('wildfire')) &&
      (normalizedCleaned === 'fire' || normalizedCleaned === 'wild fire' || normalizedCleaned === 'wildfire' || normalizedCleaned === 'a wild fire' || normalizedCleaned === 'a wildfire')
    ) {
      return true;
    }

    // e.g. "extinct" vs "extinct in the wild"
    if (
      normAccepted === 'extinct' &&
      (normalizedCleaned === 'extinct' || normalizedCleaned === 'extinct in the wild')
    ) {
      return true;
    }

    return false;
  });
}
