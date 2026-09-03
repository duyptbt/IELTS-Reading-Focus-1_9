import {
  VocabularyItem,
  GrammarStructureItem,
  ParaphrasePair,
  MatchingTaskItem,
  GapFillTaskItem,
  ReferenceTaskItem,
  TransformationTaskItem,
} from '../types';

export const CONSOLIDATION_VOCABULARY: VocabularyItem[] = [
  {
    id: 'vocab-1',
    word: 'Endemic',
    phonetic: '/enˈdem.ɪk/',
    partOfSpeech: 'adjective',
    definition:
      'Native and strictly restricted to a certain country or area, occurring naturally nowhere else on Earth.',
    definitionVi:
      'Đặc hữu: Thuộc về hoặc chỉ giới hạn sinh sống trong một vùng địa lý cụ thể, không tìm thấy nơi nào khác trong tự nhiên.',
    passageContext:
      '...their populations, like those of so many other small endemic species, were devastated when cats and foxes were introduced...',
    paragraphRef: 1,
    collocations: ['endemic species', 'endemic wildlife', 'strictly endemic to', 'endemic fauna'],
    synonyms: ['native', 'indigenous', 'restricted-range', 'localized'],
    ieltsBand: 'Band 7.5+',
  },
  {
    id: 'vocab-2',
    word: 'Devastate',
    phonetic: '/ˈdev.ə.steɪt/',
    partOfSpeech: 'verb',
    definition:
      'Destroy or ruin severely; cause great shock or catastrophic depletion to a population or ecosystem.',
    definitionVi:
      'Tàn phá, hủy hoại nặng nề: Khiến cho một quần thể hoặc hệ sinh thái bị suy giảm nghiêm trọng hoặc tiêu diệt.',
    passageContext:
      '...their populations, like those of so many other small endemic species, were devastated when cats and foxes were introduced...',
    paragraphRef: 1,
    collocations: ['devastate populations', 'devastate habitats', 'be completely devastated by'],
    synonyms: ['decimate', 'destroy', 'annihilate', 'ravage', 'wreck'],
    ieltsBand: 'Band 7.0+',
  },
  {
    id: 'vocab-3',
    word: 'Captive breeding',
    phonetic: '/ˌkæp.tɪv ˈbriː.dɪŋ/',
    partOfSpeech: 'noun phrase',
    definition:
      'The practice of breeding endangered animals in controlled human environments (such as wildlife sanctuaries or institutes) to boost numbers.',
    definitionVi:
      'Nhân giống nuôi nhốt / sinh sản trong điều kiện bảo tồn: Việc nhân giống động vật hoang dã trong môi trường kiểm soát nhằm bảo tồn số lượng.',
    passageContext:
      '...and had become the founders of a captive breeding programme at the Arid Zone Research Institute in Alice Springs...',
    paragraphRef: 3,
    collocations: ['captive breeding programme', 'captive population', 'bred in captivity'],
    synonyms: ['ex-situ breeding', 'controlled propagation', 'conservation breeding'],
    ieltsBand: 'Band 7.5+',
  },
  {
    id: 'vocab-4',
    word: 'Reintroduction',
    phonetic: '/ˌriː.ɪn.trəˈdʌk.ʃən/',
    partOfSpeech: 'noun',
    definition:
      'The deliberate release of animals from captivity or from other areas into the wild in an indigenous range from which they had disappeared.',
    definitionVi:
      'Tái thả / Phục hồi vào tự nhiên: Việc thả động vật nuôi nhốt trở lại môi trường hoang dã nguyên bản nơi chúng từng sinh sống.',
    passageContext:
      'In the early 1980s, there were enough mala in the captive population to make it feasible to start a reintroduction programme.',
    paragraphRef: 4,
    collocations: ['reintroduction programme', 'successful reintroduction', 'reintroduction site', 'wild reintroduction'],
    synonyms: ['rewilding', 'restoration', 'release programme', 'translocation'],
    ieltsBand: 'Band 7.5+',
  },
  {
    id: 'vocab-5',
    word: 'Predator',
    phonetic: '/ˈpred.ə.tər/',
    partOfSpeech: 'noun',
    definition:
      'An animal that naturally hunts, kills, and feeds on other animals for survival.',
    definitionVi:
      'Động vật ăn thịt / Kẻ săn mồi: Động vật chuyên săn bắt và ăn thịt các loài sinh vật khác để tồn tại.',
    passageContext:
      '...an electric fence was erected around 250 acres of suitable habitat ... so that the mala could adapt while protected from predators.',
    paragraphRef: 5,
    collocations: ['introduced predator', 'predator-free', 'predator-controlled', 'natural predator'],
    synonyms: ['hunter', 'carnivore', 'invasive predator'],
    ieltsBand: 'Band 7.0+',
  },
  {
    id: 'vocab-6',
    word: 'Enclosure',
    phonetic: '/ɪnˈkləʊ.ʒər/',
    partOfSpeech: 'noun',
    definition:
      'An area of land surrounded by a fence, wall, or other barrier, used to keep animals safely inside or keep threats outside.',
    definitionVi:
      'Khu vực quây rào / Khu nuôi kín: Một khu vực đất được bao quanh bởi hàng rào hoặc ranh giới an toàn.',
    passageContext:
      'By 1992, there were about 150 mala in their enclosure, which became known as the Mala Paddock.',
    paragraphRef: 5,
    collocations: ['fenced enclosure', 'secure enclosure', 'paddock enclosure', 'wildlife enclosure'],
    synonyms: ['paddock', 'compound', 'pen', 'sanctuary boundary'],
    ieltsBand: 'Band 7.0+',
  },
  {
    id: 'vocab-7',
    word: 'Feasible',
    phonetic: '/ˈfiː.zə.bəl/',
    partOfSpeech: 'adjective',
    definition:
      'Possible, practicable, and capable of being accomplished conveniently and successfully.',
    definitionVi:
      'Khả thi: Có thể thực hiện được một cách thuận lợi, thực tế và mang lại hiệu quả.',
    passageContext:
      '...there were enough mala in the captive population to make it feasible to start a reintroduction programme.',
    paragraphRef: 4,
    collocations: ['economically feasible', 'technically feasible', 'make it feasible to', 'feasible plan'],
    synonyms: ['viable', 'achievable', 'practicable', 'workable', 'attainable'],
    ieltsBand: 'Band 7.5+',
  },
  {
    id: 'vocab-8',
    word: 'Enduring',
    phonetic: '/ɪnˈdjʊə.rɪŋ/',
    partOfSpeech: 'adjective',
    definition:
      'Continuing or long-lasting; surviving across generations or extended periods of time.',
    definitionVi:
      'Lâu dài, bền bỉ: Tồn tại bền vững và có ảnh hưởng xuyên suốt qua nhiều giai đoạn.',
    passageContext:
      'The skills and knowledge of the Yapa would play a significant and enduring role in this and all other mala projects.',
    paragraphRef: 4,
    collocations: ['enduring role', 'enduring legacy', 'enduring success', 'enduring partnership'],
    synonyms: ['lasting', 'permanent', 'abiding', 'persistent', 'longstanding'],
    ieltsBand: 'Band 8.0+',
  },
  {
    id: 'vocab-9',
    word: 'Abandon',
    phonetic: '/əˈbæn.dən/',
    partOfSpeech: 'verb',
    definition:
      'Cease to support or look after; stop pursuing an effort or plan because of failure or insurmountable obstacles.',
    definitionVi:
      'Từ bỏ, dừng lại: Ngừng hỗ trợ hoặc từ bỏ một kế hoạch hay dự án vì không đạt kết quả mong muốn.',
    passageContext:
      'However, all attempts to reintroduce mala from the paddocks into the unfenced wild were unsuccessful, so in the end the reintroduction programme was abandoned.',
    paragraphRef: 5,
    collocations: ['abandon an attempt', 'abandon a programme', 'abandon efforts', 'finally abandoned'],
    synonyms: ['give up', 'discontinue', 'relinquish', 'drop', 'halt'],
    ieltsBand: 'Band 7.0+',
  },
  {
    id: 'vocab-10',
    word: 'Transmitter',
    phonetic: '/trænzˈmɪt.ər/',
    partOfSpeech: 'noun',
    definition:
      'An electronic device that emits radio signals so that scientists can track the movements and location of monitored wildlife.',
    definitionVi:
      'Máy phát tín hiệu (vô tuyến): Thiết bị điện tử gắn trên vòng cổ để các nhà nghiên cứu định vị đường đi của động vật.',
    passageContext:
      'The team was able to locate 29 out of the 30 transmitters - only one came from the collar of a mala that had died of unknown causes.',
    paragraphRef: 7,
    collocations: ['radio transmitter', 'locate transmitters', 'fitted with transmitters', 'transmitter signal'],
    synonyms: ['tracking beacon', 'radio collar', 'telemetry sensor'],
    ieltsBand: 'Band 7.5+',
  },
  {
    id: 'vocab-11',
    word: 'Joey',
    phonetic: '/ˈdʒəʊ.i/',
    partOfSpeech: 'noun',
    definition:
      'A young kangaroo, wallaby, or other marsupial during the phase it is carried inside its mother\'s pouch.',
    definitionVi:
      'Con non của thú có túi: Con non của chuột túi kangaroo hoặc wallaby khi còn được nuôi trong túi mẹ.',
    passageContext:
      'Like other kangaroo species, the mother carries her young - known as a joey - in her pouch for about 15 weeks...',
    paragraphRef: 3,
    collocations: ['young joey', 'carry a joey', 'joeys in the pouch'],
    synonyms: ['young marsupial', 'offspring', 'infant kangaroo'],
    ieltsBand: 'Band 7.0+',
  },
  {
    id: 'vocab-12',
    word: 'Colony',
    phonetic: '/ˈkɒl.ə.ni/',
    partOfSpeech: 'noun',
    definition:
      'A localized community or cluster of individuals of the same wildlife species living together in a specific territory.',
    definitionVi:
      'Quần thể / Cụm cá thể hoang dã: Nhóm các cá thể cùng một loài sinh sống quần tụ tại một địa bàn.',
    passageContext:
      'But in 1964, a small colony was found 450 miles northwest of Alice Springs in the Tanami Desert.',
    paragraphRef: 1,
    collocations: ['surviving colony', 'wild colony', 'small colony', 'breeding colony'],
    synonyms: ['population cluster', 'settlement', 'isolated group'],
    ieltsBand: 'Band 7.0+',
  },
];

export const CONSOLIDATION_GRAMMAR: GrammarStructureItem[] = [
  {
    id: 'grammar-1',
    name: 'Passive Voice with Agent & Temporal Clause',
    category: 'Advanced Passive Constructions',
    formula: 'Subject + were/was + Past Participle + when + [Agent/Event clause]',
    passageExample:
      'At one time, there may have been as many as ten million of these little animals ... but their populations, like those of so many other small endemic species, were devastated when cats and foxes were introduced.',
    paragraphRef: 1,
    explanation:
      'The passive voice ("were devastated") shifts focus from the human actors who imported animals onto the vulnerable species suffering the consequence. The temporal clause ("when cats and foxes were introduced") sets the historical catalyst.',
    explanationVi:
      'Thể bị động ("were devastated") hướng sự chú ý vào hậu quả mà loài động vật bản địa phải gánh chịu thay vì con người du nhập chúng. Mệnh đề thời gian "when..." đóng vai trò làm rõ nguyên nhân kích hoạt.',
    ieltsApplication:
      'Indispensable in IELTS Writing Task 2 for discussing environmental disasters and historical causes without naming repetitive human subjects.',
    ieltsApplicationVi:
      'Rất quan trọng trong Writing Task 2 khi thảo luận về khủng hoảng sinh thái hoặc phân tích nguyên nhân lịch sử một cách khách quan.',
    practiceExample:
      'Thousands of hectares of pristine rainforest were destroyed when commercial logging operations commenced.',
  },
  {
    id: 'grammar-2',
    name: 'Past Perfect for Historical Foundation & Sequencing',
    category: 'Narrative Sequencing & Precedence',
    formula: 'Time Adverbial + had been + Past Participle + and + had become + Noun Phrase',
    passageExample:
      'Fortunately, ten years earlier, seven individuals had been captured, and had become the founders of a captive breeding programme at the Arid Zone Research Institute in Alice Springs...',
    paragraphRef: 3,
    explanation:
      'The past perfect ("had been captured", "had become") clearly marks an action that occurred prior to the 1991 extinction described in the previous paragraph, establishing the chronological foundation for species survival.',
    explanationVi:
      'Thì quá khứ hoàn thành ("had been captured", "had become") đánh dấu sự kiện diễn ra trước mốc tuyệt chủng năm 1991 ở đoạn trước, làm nền tảng cho sự sinh tồn của loài.',
    ieltsApplication:
      'Crucial for IELTS Academic Writing Task 1 historical trends and Task 2 chronological case studies to show sequence of events cleanly.',
    ieltsApplicationVi:
      'Cần thiết trong Task 1 và Task 2 để phân biệt rõ ràng sự kiện đã hoàn tất trước một mốc thời gian trong quá khứ.',
    practiceExample:
      'Decades before environmental legislation was passed, scientists had warned governments about climate risks.',
  },
  {
    id: 'grammar-3',
    name: 'Purpose Clause with "so that" & Reduced Passive Condition',
    category: 'Purpose & Conditional Adaptation',
    formula: 'Main Clause + so that + Subject + could + Verb + while + [Past Participle phrase]',
    passageExample:
      'With the help of the local Yapa, an electric fence was erected around 250 acres of suitable habitat ... so that the mala could adapt while protected from predators.',
    paragraphRef: 5,
    explanation:
      '"so that ... could adapt" expresses intentional purpose. The reduced adverbial clause "while protected from predators" (short for "while they were protected") adds a simultaneous protective condition concisely.',
    explanationVi:
      '"so that ... could adapt" diễn tả mục đích rõ ràng. Cụm trạng từ rút gọn "while protected from predators" (rút gọn từ "while they were protected") bổ sung điều kiện bảo vệ một cách súc tích.',
    ieltsApplication:
      'Elevates grammatical complexity in IELTS Task 2 proposals, showing both intended objective and safeguarding safeguards.',
    ieltsApplicationVi:
      'Tạo câu phức chất lượng cao trong bài thi Viết khi đưa ra giải pháp kèm theo điều kiện đảm bảo an toàn.',
    practiceExample:
      'Buffer zones were established so that endangered tigers could hunt while shielded from human poachers.',
  },
  {
    id: 'grammar-4',
    name: 'Non-defining Relative Clause with Preposition + Relative Pronoun ("after which")',
    category: 'Syntactic Compression & Temporal Flow',
    formula: 'Main Clause + , + after which + Subject + Present/Past Verb',
    passageExample:
      'Each of the malas had been fitted with a radio collar that transmits for about 14 months, after which it falls off.',
    paragraphRef: 7,
    explanation:
      'The connective phrase ", after which it falls off" combines sequential chronological action into a single flowing sentence, avoiding clumsy coordination like "and then after that it falls off".',
    explanationVi:
      'Cấu trúc ", after which..." (sau thời gian đó thì...) kết nối hai hành động kế tiếp thành một câu ghép mượt mà, tránh các từ nối vụng về như "and then".',
    ieltsApplication:
      'Extremely effective in IELTS Academic Writing Task 1 Process diagrams to explain subsequent stages naturally.',
    ieltsApplicationVi:
      'Đặc biệt hữu ích trong IELTS Writing Task 1 dạng bài Miêu tả quy trình (Process) để chuyển đổi giữa các bước kế tiếp.',
    practiceExample:
      'Seeds are cultivated in greenhouses for six weeks, after which they are transplanted into open fields.',
  },
];

export const CONSOLIDATION_PARAPHRASES: ParaphrasePair[] = [
  {
    id: 'para-1',
    originalText:
      'At one time, there may have been as many as ten million of these little animals across the arid and semi-arid landscape...',
    paraphrasedText:
      'Distant past: total population of up to [10 million / ten million] in desert and semi-desert regions. (Flow Chart Q1)',
    technique: 'Lexical Matching & Numeral Extraction',
    techniqueVi: 'Khớp từ ngữ tương đương & Trích xuất số liệu',
    explanation:
      '"As many as ten million" matches "total population of up to 10 million". The prompt already includes "up to".',
    explanationVi:
      '"As many as ten million" khớp hoàn toàn với "total population of up to 10 million". Đề bài đã có "up to".',
    paragraphRef: 1,
  },
  {
    id: 'para-2',
    originalText:
      '...their populations, like those of so many other small endemic species, were devastated when cats and foxes were introduced...',
    paraphrasedText:
      'Populations of malas were destroyed by [cats and foxes]. (Flow Chart Q2)',
    technique: 'Passive Synonymous Restatement ("devastated" -> "destroyed")',
    techniqueVi: 'Diễn đạt đồng nghĩa ở thể bị động ("devastated" tương đương "destroyed")',
    explanation:
      '"Were devastated when cats and foxes were introduced" translates to "were destroyed by cats and foxes". Both predators must be included.',
    explanationVi:
      '"Bị tàn phá khi mèo và cáo du nhập" tương đương với "bị hủy diệt bởi mèo và cáo". Cần nêu đủ cả hai loài.',
    paragraphRef: 1,
  },
  {
    id: 'para-3',
    originalText:
      'Throughout the 1970s and 1980s, scientists from the Parks and Wildlife Commission of the Northern Territory monitored these two populations.',
    paraphrasedText:
      'Scientists [monitored] the colonies. (Flow Chart Q3)',
    technique: 'Direct Syntactic Transposition (Subject + Verb + Object)',
    techniqueVi: 'Chuyển đổi cú pháp trực tiếp (Chủ ngữ + Động từ + Tân ngữ)',
    explanation:
      '"Scientists ... monitored these two populations" maps directly to "Scientists monitored the colonies".',
    explanationVi:
      '"Scientists ... monitored these two populations" chuyển trực tiếp thành "Scientists monitored the colonies".',
    paragraphRef: 2,
  },
  {
    id: 'para-4',
    originalText:
      'And then, in October 1991, a wild-fire destroyed the entire area occupied by the remaining colony.',
    paraphrasedText:
      '1991: the other colony was destroyed by [fire / wild-fire]. (Flow Chart Q4)',
    technique: 'Active to Passive Voice Transformation',
    techniqueVi: 'Chuyển từ câu chủ động sang câu bị động',
    explanation:
      'In the text, "a wild-fire destroyed the area"; in the flow chart, "the colony was destroyed by fire".',
    explanationVi:
      'Bài đọc dùng "a wild-fire destroyed the area"; sơ đồ chuyển thành thể bị động "was destroyed by fire".',
    paragraphRef: 2,
  },
  {
    id: 'para-5',
    originalText:
      'Thus the mala was finally pronounced extinct in the wild.',
    paraphrasedText:
      'The wild mala was declared [extinct]. (Flow Chart Q5)',
    technique: 'Synonymous Verb Substitution ("pronounced" -> "declared")',
    techniqueVi: 'Thay thế động từ đồng nghĩa ("pronounced" tương đương "declared")',
    explanation:
      '"Pronounced extinct in the wild" matches "declared extinct".',
    explanationVi:
      '"Pronounced extinct" (tuyên bố tuyệt chủng) đồng nghĩa với "declared extinct".',
    paragraphRef: 2,
  },
  {
    id: 'para-6',
    originalText:
      'Part of this success is due to the fact that the female can breed when she is just five months old...',
    paraphrasedText:
      'At what age can female malas start breeding? -> [5 months / five months] (Short Answer Q6)',
    technique: 'Question-Answer Extraction',
    techniqueVi: 'Trích xuất trực tiếp câu trả lời cho câu hỏi WH-',
    explanation:
      '"Can breed when she is just five months old" supplies the answer "5 months".',
    explanationVi:
      '"Có thể sinh sản khi mới 5 tháng tuổi" cung cấp câu trả lời "5 months".',
    paragraphRef: 3,
  },
  {
    id: 'para-7',
    originalText:
      'The skills and knowledge of the Yapa would play a significant and enduring role in this and all other mala projects.',
    paraphrasedText:
      "What was the Yapa's lasting contribution to the mala reintroduction programme? -> [skills and knowledge] (Short Answer Q9)",
    technique: 'Paraphrase: "enduring role" = "lasting contribution"',
    techniqueVi: 'Diễn đạt lại: "enduring role" (vai trò lâu bền) = "lasting contribution" (đóng góp lâu dài)',
    explanation:
      '"Enduring role" is paraphrased as "lasting contribution". The nouns are "skills and knowledge".',
    explanationVi:
      '"Enduring role" được diễn đạt lại thành "lasting contribution". Cụm danh từ là "skills and knowledge".',
    paragraphRef: 4,
  },
  {
    id: 'para-8',
    originalText:
      'With the help of the local Yapa, an electric fence was erected around 250 acres ... so that the mala could adapt while protected from predators.',
    paraphrasedText:
      'Natural defences were sufficient to protect the area called Mala Paddock. -> [FALSE] (TFNG Q10)',
    technique: 'Contradiction: Artificial electric fence vs Natural defences',
    techniqueVi: 'Mâu thuẫn: Hàng rào điện nhân tạo vs Biện pháp bảo vệ tự nhiên',
    explanation:
      'Because an electric fence had to be built, natural defences were not sufficient. The statement is FALSE.',
    explanationVi:
      'Bởi vì phải dựng hàng rào điện nên các điều kiện tự nhiên không thể tự bảo vệ chúng. Câu nhận định là FALSE.',
    paragraphRef: 5,
  },
  {
    id: 'para-9',
    originalText:
      'However, all attempts to reintroduce mala from the paddocks into the unfenced wild were unsuccessful, so in the end the reintroduction programme was abandoned.',
    paraphrasedText:
      'Scientists eventually gave up their efforts to release captive mala into the unprotected wild. -> [TRUE] (TFNG Q11)',
    technique: 'Synonymous Phrasing ("in the end" = "eventually", "abandoned" = "gave up their efforts")',
    techniqueVi: 'Khớp cụm từ: "in the end" = "eventually", "abandoned" = "gave up their efforts"',
    explanation:
      '"In the end" = "eventually"; "was abandoned" = "gave up their efforts"; "unfenced wild" = "unprotected wild". Statement is TRUE.',
    explanationVi:
      '"In the end" = "eventually"; "was abandoned" = "gave up their efforts"; "unfenced wild" = "unprotected wild". Khẳng định là TRUE.',
    paragraphRef: 5,
  },
  {
    id: 'para-10',
    originalText:
      'Finally, in March 1999, twelve adult females, eight adult males, and eight joeys were transferred from the Mala Paddock to Dryandra Woodland in Western Australia.',
    paraphrasedText:
      'The mala population which was transferred to Dryandra Woodland quickly increased in size. -> [NOT GIVEN] (TFNG Q12)',
    technique: 'Absence of Follow-up Information',
    techniqueVi: 'Sự vắng mặt của thông tin theo dõi tiếp theo trong văn bản',
    explanation:
      'The transfer is recorded, but no population growth data for Dryandra Woodland is provided anywhere in the text.',
    explanationVi:
      'Vụ chuyển giao được ghi nhận, nhưng bài đọc hoàn toàn không đưa ra số liệu tăng trưởng cho Dryandra Woodland.',
    paragraphRef: 6,
  },
  {
    id: 'para-11',
    originalText:
      'The team was able to locate 29 out of the 30 transmitters ... So far the recovery programme had gone even better than expected.',
    paraphrasedText:
      'Scientists were satisfied with the initial results of the recovery programme. -> [TRUE] (TFNG Q13)',
    technique: 'Exceeding Expectations = Satisfaction Confirmed',
    techniqueVi: 'Vượt kỳ vọng ("better than expected") đồng nghĩa với việc hoàn toàn hài lòng',
    explanation:
      'Results that are "even better than expected" clearly confirm the scientists\' satisfaction. Statement is TRUE.',
    explanationVi:
      'Kết quả "thậm chí tốt hơn mong đợi" chứng minh sự hài lòng của các nhà khoa học. Khẳng định là TRUE.',
    paragraphRef: 7,
  },
];

export const MATCHING_TASKS: MatchingTaskItem[] = [
  {
    id: 'match-1',
    term: 'Endemic',
    definition: 'Naturally native and exclusively restricted to a specific geographic territory or ecosystem.',
    definitionVi: 'Bản địa và chỉ sinh sống duy nhất tại một khu vực hoặc hệ sinh thái nhất định.',
    context: '...like those of so many other small endemic species, were devastated...',
  },
  {
    id: 'match-2',
    term: 'Captive breeding',
    definition: 'Breeding endangered wildlife in controlled human institutions to multiply population numbers.',
    definitionVi: 'Nhân giống động vật quý hiếm trong các cơ sở có kiểm soát của con người để bảo tồn số lượng.',
    context: '...founders of a captive breeding programme at the Arid Zone Research Institute...',
  },
  {
    id: 'match-3',
    term: 'Reintroduction',
    definition: 'The intentional release of animals back into wild habitats where they were once native.',
    definitionVi: 'Việc chủ động thả các loài động vật trở lại môi trường hoang dã nơi chúng từng sinh sống.',
    context: '...make it feasible to start a reintroduction programme...',
  },
  {
    id: 'match-4',
    term: 'Enclosure',
    definition: 'A designated land area cordoned off by fences to safeguard inhabitants from external dangers.',
    definitionVi: 'Khu vực đất được rào chắn xung quanh để che chắn các cá thể bên trong khỏi hiểm họa bên ngoài.',
    context: 'By 1992, there were about 150 mala in their enclosure, which became known as the Mala Paddock.',
  },
  {
    id: 'match-5',
    term: 'Transmitter',
    definition: 'An electronic telemetric collar that broadcasts radio frequencies to monitor animal coordinates.',
    definitionVi: 'Thiết bị phát sóng vô tuyến đeo ở cổ giúp theo dõi vị trí và sự sống của động vật.',
    context: 'Each of the malas had been fitted with a radio collar that transmits for about 14 months...',
  },
  {
    id: 'match-6',
    term: 'Joey',
    definition: 'A young marsupial that is nurtured and carried within the mother’s pouch.',
    definitionVi: 'Con non của thú có túi được nuôi dưỡng và mang trong túi trước bụng của mẹ.',
    context: '...the mother carries her young - known as a joey - in her pouch for about 15 weeks...',
  },
];

export const GAP_FILL_TASKS: GapFillTaskItem[] = [
  {
    id: 'gap-1',
    sentence:
      'The koala and kangaroo are iconic examples of wildlife [_____] to the Australian continent.',
    targetWord: 'endemic',
    options: ['endemic', 'feasible', 'enduring', 'transmitters'],
    hint: 'Describes a species naturally occurring nowhere else in the world.',
    hintVi: 'Miêu tả loài sinh vật chỉ xuất hiện tự nhiên tại một khu vực duy nhất.',
    explanation:
      '"Endemic" means native and strictly confined to a specific geographical territory.',
    explanationVi:
      '"Endemic" có nghĩa là đặc hữu, chỉ có tại một khu vực địa lý nhất định.',
  },
  {
    id: 'gap-2',
    sentence:
      'Zoological parks initiated a specialized [_____] programme to save the endangered wallabies from extinction.',
    targetWord: 'captive breeding',
    options: ['captive breeding', 'enclosure', 'phenology', 'predator'],
    hint: 'Breeding animals in controlled sanctuaries rather than the open wild.',
    hintVi: 'Nhân giống động vật trong môi trường nuôi nhốt có kiểm soát thay vì tự nhiên.',
    explanation:
      '"Captive breeding" refers to controlled reproduction within wildlife institutions.',
    explanationVi:
      '"Captive breeding" là chương trình nhân giống trong điều kiện nuôi nhốt an toàn.',
  },
  {
    id: 'gap-3',
    sentence:
      'Before proceeding with the wildlife release, the team conducted rigorous feasibility studies for the [_____] project.',
    targetWord: 'reintroduction',
    options: ['reintroduction', 'devastation', 'enduring', 'colony'],
    hint: 'Releasing animals back into their historic native habitats.',
    hintVi: 'Thả động vật trở lại các sinh cảnh tự nhiên lịch sử của chúng.',
    explanation:
      '"Reintroduction" denotes releasing captive or translocated animals into their natural wild range.',
    explanationVi:
      '"Reintroduction" chỉ hành động tái thả các loài vật vào vùng phân bố hoang dã tự nhiên.',
  },
  {
    id: 'gap-4',
    sentence:
      'Biologists attached a lightweight radio [_____] to each animal to record its daily movement across the island.',
    targetWord: 'transmitter',
    options: ['transmitter', 'paddock', 'enclosure', 'joey'],
    hint: 'A device that emits radio signals for telemetry tracking.',
    hintVi: 'Thiết bị phát sóng để định vị động vật từ xa.',
    explanation:
      '"Transmitter" is the electronic device that sends signals so researchers can locate the animal.',
    explanationVi:
      '"Transmitter" là máy phát tín hiệu giúp các nhà nghiên cứu định vị con vật.',
  },
  {
    id: 'gap-5',
    sentence:
      'With the captive colony rapidly expanding, scientists concluded it was finally [_____] to attempt field trials.',
    targetWord: 'feasible',
    options: ['feasible', 'extinct', 'devastated', 'endemic'],
    hint: 'Practically achievable and viable to accomplish.',
    hintVi: 'Có tính khả thi thực tế và có thể thực hiện thành công.',
    explanation:
      '"Feasible" means practical, realistic, and viable.',
    explanationVi:
      '"Feasible" có nghĩa là khả thi và có khả năng thành công.',
  },
];

export const REFERENCE_TASKS: ReferenceTaskItem[] = [
  {
    id: 'ref-1',
    question: 'In paragraph 1, what does the phrase "these little animals" refer to?',
    quote:
      "The Rufous Hare-Wallaby is a species of Australian kangaroo, usually known by its Aboriginal name, 'mala'. At one time, there may have been as many as ten million of these little animals across the arid and semi-arid landscape...",
    paragraphRef: 1,
    options: [
      'Introduced foxes',
      'The Rufous Hare-Wallaby (mala)',
      'Australian Aboriginal hunters',
      'Desert rats and cats',
    ],
    correctIndex: 1,
    explanation:
      '"These little animals" directly refers back to the Rufous Hare-Wallaby, commonly known as the mala.',
    explanationVi:
      '"These little animals" liên chiếu trực tiếp đến loài Rufous Hare-Wallaby (mala) vừa được giới thiệu ở câu đầu.',
  },
  {
    id: 'ref-2',
    question: 'In paragraph 2, what does "these two populations" refer to?',
    quote:
      'Throughout the 1970s and 1980s, scientists from the Parks and Wildlife Commission of the Northern Territory monitored these two populations.',
    paragraphRef: 2,
    options: [
      'The colonies of cats and foxes in Alice Springs',
      'The two wild mala colonies discovered in the Tanami Desert in 1964 and 1976',
      'The captive malas in Alice Springs and Sydney',
      'The populations of Aboriginal elders and scientists',
    ],
    correctIndex: 1,
    explanation:
      '"These two populations" refers to the two wild colonies mentioned at the end of paragraph 1 (found in 1964 and 1976).',
    explanationVi:
      '"These two populations" liên chiếu đến hai quần thể hoang dã được phát hiện năm 1964 và 1976 ở sa mạc Tanami.',
  },
  {
    id: 'ref-3',
    question: 'In paragraph 3, what does "that group" refer to in the text?',
    quote:
      'Fortunately, ten years earlier, seven individuals had been captured, and had become the founders of a captive breeding programme at the Arid Zone Research Institute in Alice Springs; and that group had thrived.',
    paragraphRef: 3,
    options: [
      'The scientists at the Research Institute',
      'The seven founder malas captured for captive breeding',
      'The wild foxes attacking colonies in 1987',
      'The Yapa key men visiting the project',
    ],
    correctIndex: 1,
    explanation:
      '"That group" refers to the seven captured founder malas that formed the captive breeding programme.',
    explanationVi:
      '"That group" liên chiếu đến nhóm 7 cá thể mala được bắt làm giống ban đầu cho chương trình nhân giống.',
  },
  {
    id: 'ref-4',
    question: 'In paragraph 4, what does the pronoun "this" refer to in "to discuss this with the leaders"?',
    quote:
      'In the early 1980s, there were enough mala in the captive population to make it feasible to start a reintroduction programme. But first it was necessary to discuss this with the leaders of the Yapa people.',
    paragraphRef: 4,
    options: [
      'The extinction of wild foxes',
      'Starting a reintroduction programme for the mala',
      'Hunting malas for food',
      'Building a research institute in Alice Springs',
    ],
    correctIndex: 1,
    explanation:
      '"This" refers back to the proposal mentioned in the preceding sentence: starting a reintroduction programme.',
    explanationVi:
      '"This" thay thế cho ý tưởng ở câu liền trước: bắt đầu một chương trình tái thả mala vào tự nhiên.',
  },
  {
    id: 'ref-5',
    question: 'In paragraph 7, what does "this conservation site" refer to?',
    quote:
      'Six weeks after their release into this conservation site, a team returned to the island to find out how things were going.',
    paragraphRef: 7,
    options: [
      'Dryandra Woodland',
      'The Mala Paddock',
      'Trimouille Island',
      'The Tanami Desert',
    ],
    correctIndex: 2,
    explanation:
      'Paragraph 6 introduces Trimouille Island as the destination where rats and cats were eliminated, and paragraph 7 refers to returning to "this conservation site" on the island.',
    explanationVi:
      'Đoạn 6 giới thiệu việc đưa mala đến đảo Trimouille sau khi diệt chuột và mèo; đoạn 7 nhắc lại việc quay trở lại "khu bảo tồn này" trên đảo.',
  },
];

export const TRANSFORMATION_TASKS: TransformationTaskItem[] = [
  {
    id: 'trans-1',
    original:
      'Cats and foxes devastated the original populations of small endemic species when settlers introduced them.',
    targetGrammar: 'Passive Voice with Past Participle',
    prompt:
      'Rewrite the sentence starting with "The populations of small endemic species..."',
    options: [
      'The populations of small endemic species were devastated when cats and foxes were introduced.',
      'The populations of small endemic species devastated cats and foxes when being introduced.',
      'The populations of small endemic species have devastated when introduced cats and foxes.',
      'The populations of small endemic species was devastating when cats and foxes introduced.',
    ],
    correctIndex: 0,
    explanation:
      '"The populations ... were devastated when cats and foxes were introduced" correctly forms the passive voice in both clauses.',
    explanationVi:
      '"The populations ... were devastated when cats and foxes were introduced" tạo thể bị động chuẩn xác ở cả hai vế.',
  },
  {
    id: 'trans-2',
    original:
      'Scientists erected an electric fence around 250 acres because they wanted the mala to adapt safely away from predators.',
    targetGrammar: 'Purpose Clause with "so that"',
    prompt:
      'Combine into a single sentence using "so that":',
    options: [
      'An electric fence was erected around 250 acres so that the mala could adapt while protected from predators.',
      'An electric fence was erected around 250 acres so that the mala can adapted while protecting from predators.',
      'An electric fence was erected around 250 acres because so that the mala to adapt from predators.',
      'An electric fence erected around 250 acres so that the mala adapted with predators.',
    ],
    correctIndex: 0,
    explanation:
      '"so that the mala could adapt while protected from predators" creates an elegant, academic purpose construction.',
    explanationVi:
      '"so that the mala could adapt while protected from predators" kết hợp mệnh đề mục đích và mệnh đề phân từ rút gọn.',
  },
  {
    id: 'trans-3',
    original:
      'All attempts to reintroduce the animals into the unfenced wild failed, and as a result, the team abandoned the programme.',
    targetGrammar: 'Causal Conjunction with "Since / As"',
    prompt:
      'Transform the sentence using "Since all attempts to reintroduce the animals into the unfenced wild were unsuccessful..."',
    options: [
      'Since all attempts to reintroduce the animals into the unfenced wild were unsuccessful, the reintroduction programme was eventually abandoned.',
      'Since all attempts to reintroduce the animals into the unfenced wild were unsuccessful, but the programme abandoned.',
      'Since all attempts were unsuccessful, so that the programme was abandoning.',
      'Since all attempts to reintroduce the animals were unsuccessful, which abandon the programme.',
    ],
    correctIndex: 0,
    explanation:
      'When "Since..." introduces the cause, the main result clause follows without "but" or "so": "...the reintroduction programme was eventually abandoned".',
    explanationVi:
      'Khi mệnh đề nguyên nhân bắt đầu bằng "Since", mệnh đề kết quả theo sau không dùng "but" hoặc "so".',
  },
  {
    id: 'trans-4',
    original:
      'Each wallaby was fitted with a radio collar. The collar transmits signals for about 14 months before falling off.',
    targetGrammar: 'Relative Clause with Preposition ("after which")',
    prompt:
      'Combine into a single sentence using "after which":',
    options: [
      'Each wallaby was fitted with a radio collar that transmits for about 14 months, after which it falls off.',
      'Each wallaby was fitted with a radio collar after which transmitting for about 14 months it falls off.',
      'Each wallaby was fitted with a radio collar that transmits for 14 months after which falling off.',
      'Each wallaby had fitted with a radio collar, after which it will fallen off in 14 months.',
    ],
    correctIndex: 0,
    explanation:
      '", after which it falls off" uses the prepositional relative clause correctly to show sequential progression.',
    explanationVi:
      '", after which it falls off" kết nối hai vế hành động tuần tự một cách lưu loát và tự nhiên.',
  },
];
