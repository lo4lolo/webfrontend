
import { CategoryType, ComponentExample } from './types';
import { 
  MousePointerClick, 
  Move, 
  Sparkles, 
  Type,
  Gamepad2,
  Save,
  Database,
  Palette,
  Star,
  AppWindow,
  FolderOpen,
  Grid3X3,
  PenTool,
  History,
  Image as ImageIcon,
  FileText
} from 'lucide-react';

export const APP_NAME = "Vibe하는교사";

export const CATEGORIES = [
  { id: CategoryType.INPUT, label: "기본 입력 & 선택", icon: Type, color: "text-blue-600", bg: "bg-blue-100" },
  { id: CategoryType.INTERACTION, label: "상호작용 학습", icon: Move, color: "text-green-600", bg: "bg-green-100" },
  { id: CategoryType.GAMIFICATION, label: "게이미피케이션", icon: Gamepad2, color: "text-purple-600", bg: "bg-purple-100" },
  { id: CategoryType.DATA_MGMT, label: "데이터 & 저장", icon: Database, color: "text-rose-600", bg: "bg-rose-100" },
];

export const COMPONENT_EXAMPLES: ComponentExample[] = [
  // --- INPUT ---
  {
    id: 'dropdown',
    title: '드롭다운 (학년/반 선택)',
    category: CategoryType.INPUT,
    description: '학년, 반, 과목 등 정해진 옵션 중 하나를 선택하는 기본 입력 방식입니다.',
    educational: '공간을 절약하며 사용자의 입력 오류를 방지합니다. 학년 선택, 정답 고르기 등에 사용됩니다.',
    vibePrompt: '학년과 반 번호를 선택할 수 있는 드롭다운 메뉴를 만들어줘. 학년은 1~6학년, 반은 1~10반까지 선택할 수 있게 해줘.'
  },
  {
    id: 'ox-quiz',
    title: 'O/X 퀴즈 버튼',
    category: CategoryType.INPUT,
    description: '두 가지 선택지 중 하나를 빠르게 선택하는 직관적인 인터페이스입니다.',
    educational: '수업 도입부의 진위형 퀴즈, 찬성/반대 투표 등에 활용하여 빠른 피드백을 유도합니다.',
    vibePrompt: '화면 중앙에 커다란 O 버튼(파란색)과 X 버튼(빨간색)을 만들어줘. 마우스를 올리면 커지고, 클릭하면 정답인지 오답인지 바로 알려줘.'
  },
  {
    id: 'text-counter',
    title: '글자 수 제한 입력창',
    category: CategoryType.INPUT,
    description: '긴 글을 입력받을 때 글자 수를 실시간으로 확인하고 제한하는 입력창입니다.',
    educational: '감상문 쓰기, 핵심 요약하기 등 정해진 분량 내에서 생각을 정리하는 훈련에 유용합니다.',
    vibePrompt: '200자까지만 입력할 수 있는 글쓰기 상자를 만들어줘. 오른쪽 아래에 현재 몇 글자를 썼는지 실시간으로 보여주고, 200자가 넘으면 빨간색으로 표시해줘.'
  },
  {
    id: 'slider',
    title: '범위 슬라이더 (감정/점수)',
    category: CategoryType.INPUT,
    description: '막대를 좌우로 움직여 수치나 정도를 선택하는 직관적인 입력 도구입니다.',
    educational: '오늘 수업 이해도(1~5점), 현재 나의 기분 상태 등을 숫자가 아닌 직관적인 위치로 표현하게 합니다.',
    vibePrompt: '좌우로 움직여서 점수를 매길 수 있는 슬라이더를 만들어줘. 점수에 따라 표정 이모티콘이 바뀌면 좋겠어. (낮으면 슬픔, 높으면 기쁨)'
  },
  {
    id: 'star-rating',
    title: '별점 평가',
    category: CategoryType.INPUT,
    description: '별 모양 아이콘을 클릭하여 점수를 매기는 방식입니다.',
    educational: '모둠 활동 동료 평가, 급식 만족도 조사, 도서 감상 평점 남기기 등에 친숙하게 사용됩니다.',
    vibePrompt: '별 5개를 나열하고 마우스를 올리거나 클릭해서 점수를 줄 수 있는 별점 기능을 만들어줘.'
  },
  {
    id: 'tag-input',
    title: '핵심 단어 태그 입력',
    category: CategoryType.INPUT,
    description: '단어를 입력하고 엔터를 치면 태그 형태로 변환되어 나열되는 방식입니다.',
    educational: '오늘 배운 수업의 핵심 키워드 정리하기, 브레인스토밍 단어 나열하기 등에 활용됩니다.',
    vibePrompt: '단어를 입력하고 엔터를 치면 캡슐 모양의 태그로 변하는 입력창을 만들어줘. 태그 옆에 X버튼을 누르면 삭제되게 해줘.'
  },

  // --- INTERACTION ---
  {
    id: 'drawing-board',
    title: '그림판 (자유 그리기)',
    category: CategoryType.INTERACTION,
    description: '마우스나 터치로 자유롭게 그림을 그릴 수 있는 캔버스 도구입니다.',
    educational: '수학 도형 그리기, 미술 스케치, 한자 따라 쓰기 등 자유로운 표현 활동에 사용됩니다.',
    vibePrompt: '흰색 도화지에 마우스로 그림을 그릴 수 있는 그림판을 만들어줘. 펜 색상(빨,파,검)과 지우개 기능, 그리고 다 그린 그림을 초기화하는 버튼을 넣어줘.'
  },
  {
    id: 'flipcard',
    title: '플래시카드 (뒤집기)',
    category: CategoryType.INTERACTION,
    description: '클릭하면 앞면과 뒷면이 뒤집히며 내용을 보여주는 카드입니다.',
    educational: '단어 암기, 퀴즈 정답 확인, 역사 연도 외우기 등 "질문-정답" 구조 학습에 필수적입니다.',
    vibePrompt: '카드를 클릭하면 3D 효과로 뒤집히면서 뒷면이 나오는 플래시카드를 만들어줘. 앞면엔 질문, 뒷면엔 정답을 넣을 거야.'
  },
  {
    id: 'image-hotspot',
    title: '이미지 핫스팟',
    category: CategoryType.INTERACTION,
    description: '이미지의 특정 부분을 클릭하면 상세 설명이 나오는 기능입니다.',
    educational: '지도에서 지역 설명하기, 과학 실험 도구 명칭 맞추기, 명화 속 숨은 요소 찾기 등에 활용됩니다.',
    vibePrompt: '이미지 위의 특정 위치에 동그란 버튼들을 배치해줘. 그 버튼을 클릭하면 말풍선으로 해당 부분에 대한 설명이 나오게 해줘.'
  },
  {
    id: 'timeline',
    title: '수직 타임라인',
    category: CategoryType.INTERACTION,
    description: '사건의 순서를 수직선 상에 시각적으로 보여주는 인터페이스입니다.',
    educational: '역사적 사건 순서, 식물의 성장 과정, 하루 일과표 등을 정리하여 보여줄 때 효과적입니다.',
    vibePrompt: '왼쪽에 수직선이 있고, 시간 순서대로 점이 찍혀있는 타임라인을 만들어줘. 점 옆에는 날짜와 사건 내용이 카드로 표시되게 해줘.'
  },
  {
    id: 'modal',
    title: '팝업 모달창',
    category: CategoryType.INTERACTION,
    description: '버튼을 누르면 화면 중앙에 정보를 담은 창이 뜹니다.',
    educational: '수업 중 중요한 공지사항을 띄우거나, 정답 해설을 별도로 보여줄 때 시선을 집중시킬 수 있습니다.',
    vibePrompt: '버튼을 누르면 화면 중앙에 팝업창이 뜨고, 배경은 어둡게 처리해줘. 팝업창 안의 닫기 버튼이나 배경을 누르면 다시 닫히게 해줘.'
  },
  {
    id: 'tabs',
    title: '탭 (내용 분류)',
    category: CategoryType.INTERACTION,
    description: '상단의 메뉴를 눌러 보여줄 내용을 전환하는 인터페이스입니다.',
    educational: '사회, 과학, 수학 등 과목별 준비물을 한 화면에서 정리해서 보여주거나, 단계별 학습 자료를 정리할 때 좋습니다.',
    vibePrompt: '상단에 3개의 탭 메뉴를 만들고, 각 탭을 누를 때마다 아래 내용이 바뀌는 기능을 만들어줘. 활성화된 탭은 색깔을 다르게 해줘.'
  },
  {
    id: 'dragdrop',
    title: '드래그 앤 드롭 (분류)',
    category: CategoryType.INTERACTION,
    description: '마우스로 요소를 끌어서 올바른 위치로 이동시키는 인터페이스입니다.',
    educational: '동물 분류(포유류/조류), 문장 순서 맞추기, 분리수거 게임 등 직관적인 분류 학습에 좋습니다.',
    vibePrompt: '화면 왼쪽의 단어 카드를 마우스로 끌어서 오른쪽의 상자에 넣을 수 있는 기능을 만들어줘. 상자에 넣으면 카드가 이동되게 해줘.'
  },
  {
    id: 'accordion',
    title: '아코디언 (접이식 목록)',
    category: CategoryType.INTERACTION,
    description: '제목을 클릭하면 숨겨진 상세 내용이 아래로 펼쳐지는 목록입니다.',
    educational: '긴 수업 자료를 목차별로 정리하거나, 문제의 힌트를 숨겨두었다가 필요할 때 열어보게 할 때 유용합니다.',
    vibePrompt: '질문 목록을 클릭하면 아래로 답변이 스르륵 펼쳐지는 아코디언 메뉴를 만들어줘. 다른 질문을 누르면 기존 것은 닫히게 해줘.'
  },
  {
    id: 'before-after',
    title: '비포 & 애프터 비교',
    category: CategoryType.INTERACTION,
    description: '중앙의 핸들을 밀어서 두 개의 이미지를 겹쳐서 비교하는 슬라이더입니다.',
    educational: '지형의 변화, 계절의 변화, 실험 전후 비교 등 시각적 변화를 직관적으로 관찰할 때 최고입니다.',
    vibePrompt: '두 장의 사진을 겹쳐놓고 가운데 막대를 좌우로 움직여서 비교해볼 수 있는 비교 슬라이더를 만들어줘.'
  },

  // --- GAMIFICATION ---
  {
    id: 'image-reveal',
    title: '이미지 조각 퀴즈 (가리기)',
    category: CategoryType.GAMIFICATION,
    description: '이미지 위에 격자를 덮어놓고, 하나씩 지워가며 뒤에 있는 그림을 맞추는 게임입니다.',
    educational: '부분을 보고 전체를 추론하는 능력을 기르거나, 수업 주제 이미지를 흥미롭게 공개할 때 사용합니다.',
    vibePrompt: '이미지 주소를 입력하면 4x4 격자로 가려지고, 격자를 클릭하면 상자가 사라지면서 뒤의 이미지가 보이는 기능을 만들어줘.'
  },
  {
    id: 'bingo',
    title: '빙고 게임 (줄 긋기)',
    category: CategoryType.GAMIFICATION,
    description: '격자판을 채우고 가로/세로/대각선을 완성하면 줄이 그어지는 게임입니다.',
    educational: '수업 핵심 단어로 빙고판 채우기, 수학 정답으로 빙고하기 등 학생 참여도가 높습니다.',
    vibePrompt: '5x5 격자 빙고판을 만들어줘. 칸을 클릭하면 색이 바뀌고, 한 줄이 완성되면 그 위에 빨간색 선이 그어지는 애니메이션을 추가해줘.'
  },
  {
    id: 'word-scramble',
    title: '단어 조합 퍼즐',
    category: CategoryType.GAMIFICATION,
    description: '순서가 섞인 글자들을 올바르게 배열하여 단어를 완성하는 게임입니다.',
    educational: '영어 단어 철자 익히기, 사자성어 순서 맞추기 등 어휘 학습에 재미를 더할 수 있습니다.',
    vibePrompt: '단어의 철자가 섞여서 화면에 표시되고, 사용자가 순서대로 클릭해서 원래 단어를 맞추는 게임을 만들어줘. 맞추면 축하 메시지를 띄워줘.'
  },
  {
    id: 'ladder',
    title: '사다리 타기',
    category: CategoryType.GAMIFICATION,
    description: '참여자와 결과를 무작위로 연결해주는 고전적인 게임입니다.',
    educational: '청소 당번 정하기, 발표 순서 정하기 등 공정한 무작위 선정이 필요할 때 사용합니다.',
    vibePrompt: '4명이 참여하는 사다리 타기 게임을 만들어줘. 시작 버튼을 누르면 선을 따라 내려가서 당첨 결과를 알려주는 애니메이션을 넣어줘.'
  },
  {
    id: 'roulette',
    title: '행운의 룰렛',
    category: CategoryType.GAMIFICATION,
    description: '원판이 회전하다가 멈추며 무작위 항목을 선택합니다.',
    educational: '발표자 선정, 퀴즈 주제 선정, 보상 뽑기 등 흥미진진한 무작위 추첨에 활용됩니다.',
    vibePrompt: '원판이 빙글빙글 돌아가다가 멈추는 룰렛 게임을 만들어줘. 내용은 내가 수정할 수 있게 배열로 관리해줘.'
  },
  {
    id: 'memory-game',
    title: '기억력 카드 게임',
    category: CategoryType.GAMIFICATION,
    description: '뒤집힌 카드 중 짝이 맞는 두 장을 찾아내는 게임입니다.',
    educational: '동의어/반의어 짝짓기, 연산 식과 정답 연결하기 등 기억력과 학습 내용을 결합할 수 있습니다.',
    vibePrompt: '12장의 카드를 뒤집어 놓고 같은 그림을 찾는 게임을 만들어줘. 짝을 맞추면 카드가 계속 보여지고, 틀리면 다시 뒤집혀야 해.'
  },
  {
    id: 'timer',
    title: '비주얼 타이머',
    category: CategoryType.GAMIFICATION,
    description: '설정된 시간이 줄어드는 것을 시각적으로 보여주는 타이머입니다.',
    educational: '퀴즈 풀이 시간 제한, 토론 시간 관리, 정리 정돈 시간 등 교실 내 시간 관리에 필수적입니다.',
    vibePrompt: '60초 타이머를 만들어줘. 시간이 줄어들수록 원형 그래프가 줄어들고, 시간이 얼마 안 남으면 색깔이 빨간색으로 변하게 해줘.'
  },

  // --- DATA MANAGEMENT ---
  {
    id: 'learning-log',
    title: '학습 기록장 (데이터 누적)',
    category: CategoryType.DATA_MGMT,
    description: '학습 내용이나 활동 결과를 계속 추가하고, 전체 목록을 파일로 다운로드합니다.',
    educational: '독서 목록 누적하기, 칭찬 통장 기록하기, 관찰 일지 작성 후 엑셀로 저장하기 등에 활용됩니다.',
    vibePrompt: '날짜, 활동명, 내용을 입력하고 "추가" 버튼을 누르면 아래 표에 계속 쌓이는 기능을 만들어줘. "다운로드" 버튼을 누르면 내용을 엑셀(CSV)파일로 저장해줘.'
  },
  {
    id: 'json-quiz',
    title: '문제은행 (JSON 로드)',
    category: CategoryType.DATA_MGMT,
    description: '텍스트로 된 문제 데이터를 붙여넣으면 자동으로 퀴즈 화면을 만들어줍니다.',
    educational: '선생님이 문제를 엑셀이나 메모장에서 작성한 뒤, 복사/붙여넣기만 하면 바로 앱으로 변환할 수 있습니다.',
    vibePrompt: 'JSON 형식의 문제 데이터를 입력받아서 자동으로 객관식 퀴즈 화면을 만들어주는 기능을 구현해줘. 데이터 구조는 질문, 보기, 정답으로 되어있어.'
  },
  {
    id: 'certificate',
    title: '수료증 이미지 저장',
    category: CategoryType.DATA_MGMT,
    description: '학생의 이름을 입력하고 버튼을 누르면 상장 이미지를 생성하여 다운로드합니다.',
    educational: '수업 과정을 마친 학생에게 즉석에서 수료증을 발급하거나, 칭찬 쿠폰을 만들어 이미지 파일로 전송할 수 있습니다.',
    vibePrompt: '학생 이름을 입력하면 상장 양식에 이름을 넣어서 보여주고, "저장하기" 버튼을 누르면 그 화면을 이미지 파일(PNG)로 다운로드하게 해줘.'
  }
];