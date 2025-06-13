const quizData = {
  categories: ["맞춤법", "순우리말", "속담", "외래어"],
  quizzes: [
    // 맞춤법 카테고리
    {
      id: 1,
      category: "맞춤법",
      question: "'부기'와 '붓기' 어떤 것이 맞는 말?",
      choices: ["손의 붓기가 심해졌어", "손의 부기가 심해졌어"],
      answerIndex: 1,
      answer: "손의 부기가 심해졌어",
      explanation:
        "'부종(浮腫)으로 인하여 부은 상태'를 뜻하는, 의학 전문어 '부기(浮氣)'로 사용합니다.",
    },
    {
      id: 2,
      category: "맞춤법",
      question: "'책을 읽고'와 '책을 읽으시고' 어떤 것이 맞는 말?",
      choices: ["선생님은 책을 읽고 계셨다.", "선생님은 책을 읽으시고 계셨다."],
      answerIndex: 0,
      answer: "선생님은 책을 읽고 계셨다.",
      explanation:
        "용언마다 '-시-'를 넣는 것이 더 높이는 말이라고 생각하여 그렇게 말하는 사람들이 있으나 그것은 옳지 않습니다.",
    },
    {
      id: 3,
      category: "맞춤법",
      question: "어떤 것이 맞는 말?",
      choices: [
        "문을 확 열어젖히다.",
        "문을 확 열어제끼다.",
        "문을 확 열어제치다.",
      ],
      answerIndex: 0,
      answer: "문을 확 열어젖히다.",
      explanation:
        "'문이나 창문 따위를 갑자기 벌컥 열다.'를 뜻하는 표준어는 '열어젖히다'입니다.",
    },
    {
      id: 4,
      category: "맞춤법",
      question: "'잃어버리다'와 '잊어버리다' 어떤 것이 맞는 말?",
      choices: ["길에서 돈을 잃어버렸다.", "길에서 돈을 잊어버렸다."],
      answerIndex: 0,
      answer: "길에서 돈을 잃어버렸다.",
      explanation:
        "기억하지 못한다는 의미로는 '잊어버리다'를 사용하고, 어떤 대상을 아주 갖지 아니하게 된다는 의미로는 '잃어버렸다'를 사용합니다.",
    },
    {
      id: 5,
      category: "맞춤법",
      question: "'끔찍이'와 '끔찍히'어떤 것이 맞는 말?",
      choices: ["나를 끔찍이 귀여워하셨다.", "나를 끔찍히 귀여워하셨다."],
      answerIndex: 0,
      answer: "나를 끔찍이 귀여워하셨다.",
      explanation: "'하다'가 붙는 어근의 끝소리가 'ㄱ'인 경우 이로 적습니다.",
    },

    // 순우리말 카테고리
    {
      id: 6,
      category: "순우리말",
      question: "마음씨가 너그럽고 미덥다",
      choices: ["선겁다", "슬겁다", "불겁다", "헐겁다"],
      answerIndex: 1,
      answer: "슬겁다",
    },
    {
      id: 7,
      category: "순우리말",
      question: "조금도 틀림이 없다",
      choices: ["가없다", "낯없다", "얼없다", "위없다"],
      answerIndex: 2,
      answer: "얼없다",
    },
    {
      id: 8,
      category: "순우리말",
      question: "어찌어찌하여 연분이 닿는 먼 친척",
      choices: ["날찌", "눈찌", "결찌", "별찌"],
      answerIndex: 2,
      answer: "결찌",
    },
    {
      id: 9,
      category: "순우리말",
      question: "'콩팔칠팔'의 뜻으로 알맞은 것은?",
      choices: [
        "갈피를 잡을 수 없도록 마구 지껄이는 모양",
        "자꾸 함부로 마구 쑤시거나 훑는 짓",
        "생각이나 정신이 있다 없다 하는 모양",
      ],
      answerIndex: 0,
      answer: "갈피를 잡을 수 없도록 마구 지껄이는 모양",
    },
    {
      id: 10,
      category: "순우리말",
      question: "물을 끌어 올리기 위하여 위에서 붓는 물",
      choices: ["붉덩물", "우물물", "마중물", "나비물"],
      answerIndex: 2,
      answer: "마중물",
    },

    // 속담 카테고리
    {
      id: 11,
      category: "속담",
      question: "눈은 있어도 [ ? ]이 없다",
      choices: ["눈썹", "망울", "중심", "의지"],
      answerIndex: 1,
      answer: "눈은 있어도 망울이 없다",
      explanation:
        "있기는 있는데 가장 중요한 것이 빠져서 없는 것과 마찬가지라는 말",
    },
    {
      id: 12,
      category: "속담",
      question: "바람은 [ ? ] 불다 그친다",
      choices: ["많이", "불다", "잠깐", "조금"],
      answerIndex: 1,
      answer: "바람은 불다 불다 그친다",
      explanation:
        "성이 나서 펄펄 뛰어도 가만두면 제풀에 사그라져 조용해지는 경우를 비유적으로 이르는 말",
    },
    {
      id: 13,
      category: "속담",
      question: "쥐구멍에 [ ? ] 세우겠다",
      choices: ["홍살문", "마루문", "남대문", "유리문"],
      answerIndex: 0,
      answer: "쥐구멍에 홍살문 세우겠다",
      explanation: "가당치 아니한 일을 주책없이 함을 비유적으로 이르는 말",
    },
    {
      id: 14,
      category: "속담",
      question: "[ ? ] 껍데기는 녹슬지 않는다",
      choices: ["빈", "깨진", "달걀", "조개"],
      answerIndex: 3,
      answer: "조개껍데기는 녹슬지 않는다",
      explanation:
        "천성이 착하고 어진 사람은 다른 사람의 나쁜 습관에 물들지 않음을 비유적으로 이르는 말",
    },
    {
      id: 15,
      category: "속담",
      question: "어두운 밤에 [ ? ] 내미는 격",
      choices: ["돈", "손", "칼", "혀"],
      answerIndex: 1,
      answer: "어두운 밤에 손 내미는 격",
      explanation: "느닷없이 불쑥 무엇을 요구하고 나섬을 비유적으로 이르는 말",
    },

    // 외래어 카테고리
    {
      id: 16,
      category: "외래어",
      question: "올바른 외래어 표기는?",
      choices: ["녹다운", "넉다운"],
      answerIndex: 0,
      answer: "녹다운 (knockdown)",
      explanation:
        "상대편에게 맞아 바닥에 넘어지거나 링 밖으로 나가떨어진 상태로 '녹다운(knockdown)'으로 표기 합니다.",
    },
    {
      id: 17,
      category: "외래어",
      question: "올바른 외래어 표기는?",
      choices: ["초콜렛", "초코렛", "쵸콜릿", "초콜릿"],
      answerIndex: 3,
      answer: "초콜릿 (chocolate)",
      explanation:
        "카카오나무 열매의 씨를 볶아 만든 가루에 우유, 설탕, 향료 따위를 섞어 만든 것으로 '초콜릿(chocolate)'으로 표기 합니다.",
    },
    {
      id: 18,
      category: "외래어",
      question: "올바른 외래어 표기는?",
      choices: ["콘텐츠", "컨텐츠"],
      answerIndex: 0,
      answer: "콘텐츠 (contents)",
      explanation:
        "인터넷이나 컴퓨터 통신 등을 통하여 제공되는 각종 정보나 그 내용물로 '콘텐츠(contents)'로 표기 합니다.",
    },
    {
      id: 19,
      category: "외래어",
      question: "올바른 외래어 표기는?",
      choices: ["라이센스", "라이선스"],
      answerIndex: 1,
      answer: "라이선스 (license)",
      explanation:
        "행정상의 허가나 면허. 또는 그것을 증명하는 문서로 '라이선스(license)'로 표기 합니다.",
    },
    {
      id: 20,
      category: "외래어",
      question: "올바른 외래어 표기는?",
      choices: ["후라이팬", "프라이팬"],
      answerIndex: 1,
      answer: "프라이팬 (frypan)",
      explanation:
        "'프라이팬에 데지 않게 조심해'처럼 '프라이팬'이라고 써야 합니다.",
    },
  ],
};

export default quizData;
