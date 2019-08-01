import React from "react";
import Images from "../../image";
import Typist from 'react-typist';

const Content = {
  home: {
    title: "IU",
    image: Images.main.home
  },

  lostChild: {
    title: "미아",
    descriptions: (
      <div>
      <Typist cursor={{ show: false}} avgTypingDelay={100}>
        <Typist.Delay ms={18000} />
<p>우리 둘 담아 준 사진을 태워</p>
<Typist.Delay ms={5000} />
<Typist.Backspace count={16} delay={100} />
<p>하나 둘 모아 둔 기억을 지워</p>
<Typist.Delay ms={3000} />
<p>그만 일어나 가야 하는 걸</p> 
<Typist.Delay ms={1000} />
<p>너무 잘 알고 있는데</p>
<Typist.Delay ms={3000} />
<p>왜 난 주저 앉고 마는지</p> 
<Typist.Delay ms={1000} />
<Typist.Backspace count={60} delay={100} />
<Typist.Delay ms={1000} />
<p>쏟아지는 빗물은</p>
<p>날 한치 앞도 못 보게 해</p>
<Typist.Delay ms={3000} />
<p>몰아치는 바람은</p>
<Typist.Delay ms={1500} />
<p>단 한 걸음도 못 가게 해</p>
<Typist.Delay ms={1500} />
<p>벼랑 끝에 서 있는 듯이</p>
<Typist.Delay ms={1500} />
<p>난 무서워 떨고 있지만</p>
<Typist.Delay ms={1500} />
<p>작은 두 손을 모은</p>
<Typist.Delay ms={1500} />
<p>내 기도는 하나 뿐이야 돌아와...</p>

이제는 눈물도 나오지 않아<br/>
울먹일 힘마저 없는것 같아<br/>
우리 이별이 꿈이 아닌 걸<br/>
너무 잘 알고 있는데<br/>
왜 난 깨어나길 비는지<br/>
쏟아지는 빗물은<br/>
날 한치 앞도 못 보게 해<br/>
몰아치는 바람은<br/>
단 한 걸음도 못 가게 해<br/>
벼랑 끝에 서 있는 듯이<br/>
난 무서워 떨고 있지만<br/>
작은 두 손을 모은<br/>
내 기도는 하나 뿐이야<br/>
아픈 내 가슴도 깊은 상처들도<br/>
나쁜 널 미워하는데<br/>
사진을 태우고 기억을 지워도<br/>
널 잊을 수 없나 봐 사랑해
쏟아지는 빗물은<br/>
날 한치 앞도 못 보게 해<br/>
몰아치는 바람은<br/>
단 한 걸음도 못 가게 해<br/>
벼랑 끝에 서 있는 듯이<br/>
난 무서워 떨고 있지만<br/>
작은 두 손을 모은<br/>
내 기도는 하나 뿐이야<br/>
돌아와 돌아와<br/>
      </Typist>
      </div>
    ),
    url: "lostChild",
    video: {
      url: "https://youtu.be/0ZukHxqOA0o",
      playing: true,
      next: "Parting"
    },
    // image: Images.main.LostChild
  },

  Parting: {
    title: "첫 이별 그날 밤",
    descriptions: (
      <div>
        수고했어 사랑<br/> 고생했지 나의 사랑<br/>
        우리 이별을 고민했던 밤<br/>
        서로를 위한 이별이라고 <br/>
        사랑했단 너의 말을 믿을게... <br/>
      </div>
    ),
    url: "Parting",
    video: {
      // url: "https://youtu.be/_NKkbDLaFFQ",
      playing: true,
      next: "Story"
    },
    image: Images.main.Parting
  },

  Story: {
    title: "나만 몰랐던 이야기",
    descriptions: (
      <div>
        내가 너무 뜰떴었나 봐<br/>
        떠나는 순간마저 기대를 했었다니<br/>
        얼마나 우스웠던 거니<br/>
        좋은 이별이란 거<br/>
        결국 세상엔 없는 일이라는 걸...<br/>
      </div>
    ),
    url: "Story",
    video: {
      // url: "https://youtu.be/qGWZUtfV3IU",
      playing: true,
      next: "LastFantasy"
    },
    image: Images.main.Story
  },

  LastFantasy: {
    title: "Last Fantasy",
    descriptions: (
      <div>
        아직 겁이 많은 이런 나<br/>
        그대라면 내가 기대도 될까요<br/>
        더 조금만 맘을 열어 줄래요<br/>
        그댄 누군가 필요하지 않나요<br/>
        꼭 나처럼...<br/>
      </div>
    ),
    url: "LastFantasy",
    video: {
      // url: "https://youtu.be/AWtwkrGpp4w",
      playing: true,
      next: "Day"
    },
    image: Images.main.LastFantasy
  },

  Day: {
    title: "하루 끝",
    descriptions: (
      <div>
        바보 같은 네가 난 답답해<br/>
        너무 좋아서 그래<br/>
        나 시무룩한 얼굴하고 있지만<br/>
        또 기다리다 고민만 하다<br/>
        흘러가는 하루 끝에서 하는 말<br/>
        내가 널 사랑해<br/>
      </div>
    ),
    url: "Day",
    video: {
      // url: "https://youtu.be/mzYM9QKKWSg",
      playing: true,
      next: "ModernTimes"
    },
    image: Images.main.Day
  },

  ModernTimes: {
    title: "Voice Mail",
    descriptions: (
      <div>
          근데 솔직히 조금은<br/>
          헷갈리게 만든 네 책임도 있는 거 아냐<br/>
          늦은 밤 진동 소리에<br/>
          은근한 목소리로 나를 깨웠잖아<br/>
          아침은 꼭 먹고 다니라며<br/>
          다정했던 걱정 정말 넌 아무 뜻도 없었냐 ㅡㅡ<br/>
      </div>
    ),
    url: "ModernTimes",
    video: {
      // url: "https://youtu.be/PBgv9Ey-Hb8",
      playing: true,
      next: "ModernTimesEpilogue"
    },
    image: Images.main.ModernTimes
  },

  ModernTimesEpilogue: {
    title: "금요일에 만나요",
    descriptions: (
      <div>
        이번 주 금요일<br/>
        금요일에 시간 어때요<br/>
        딱히 보고 싶은 영화는 없지만<br/>
        딱히 먹고 싶은 메뉴는 없지만<br/>
        주말까지 기다리긴 힘들어<br/>
      </div>
    ),
    url: "ModernTimesEpilogue",
    video: {
      // url: "https://youtu.be/EiVmQZwJhsA",
      playing: true,
      next: "Flower"
    },
    image: Images.main.ModernTimesEpilogue
  },

  Flower: {
    title: "나의 옛날 이야기",
    descriptions: (
      <div>
        무정한 사람아 <br/>
        이 밤도 나의 모든 것을 앗으려 <br/>
        하나 철 없던 사람아<br/>
        오늘 밤도 내일 밤도 그리고 그 <br/>
        다음 밤도<br/>
        영원히 난 기다립니다<br/> 
      </div>
    ),
    url: "Flower",
    video: {
      // url: "https://youtu.be/t0lP9sCsj6E",
      playing: true,
      next: "Sogyeokdong"
    },
    image: Images.main.Flower
  },

  Sogyeokdong: {
    title: "소격동",
    descriptions: (
      <div>
        어느 날 갑자기 그 많던 냇물이<br/>
        말라갔죠<br/>
        내 어린 마음도 그 시냇물처럼<br/>
        그렇게 말랐겠죠<br/>
        너의 모든 걸 두 눈에 담고 있었죠<br/>
        소소한 하루가 넉넉했던 날...<br/>
      </div>
    ),
    url: "Sogyeokdong",
    video: {
      // url: "https://youtu.be/-8gfDgAODg0",
      playing: true,
      next: "Mind"
    },
    image: Images.main.Sogyeokdong
  },

  Mind: {
    title: "마음",
    descriptions: (
      <div>
        나를 알아주지 않으셔도 돼요<br/>
        찾아오지 않으셔도<br/>
        다만 꺼지지 않는 작은 불빛이<br/>
        여기 반짝 살아있어요<br/>
        영영 살아있어요<br/>
      </div>
    ),
    url: "Mind",
    video: {
      // url: "https://youtu.be/he2C4lx63M0",
      playing: true,
      next: "ChatShire"
    },
    image: Images.main.Mind
  },

  ChatShire: {
    title: "푸르던",
    descriptions: (
      <div>
        너는 조용히 내려<br/>
        나의 가물은 곳에 고이고<br/>
        나는 한참을 서서<br/>
        가만히 머금은 채로 그대로<br/>
        나의 여름 가장 푸르던...<br/>
      </div>
    ),
    url: "ChatShire",
    video: {
      // url: "https://youtu.be/1MnzUWjBQog",
      playing: true,
      next: "NightLetter"
    },
    image: Images.main.ChatShire
  },

  NightLetter: {
    title: "밤편지",
    descriptions: (
      <div>
        난 파도가 머물던<br/>
        모래 위에 적힌 글씨처럼<br/>
        그대가 멀리 사라져 버릴 것 같아<br/>
        늘 그리워 그리워<br/>
      </div>
    ),
    url: "NightLetter",
    video: {
      // url: "https://youtu.be/NnRjwEhFU70",
      playing: true,
      next: "Palette"
    },
    image: Images.main.NightLetter
  },

  Palette: {
    title: "이름에게",
    descriptions: (
      <div>
        수없이 잃었던<br/>
        춥고 모진 날 사이로<br/>
        조용히 잊혀진 네 이름을 알아<br/>
        멈추지 않을게<br/>
        몇 번이라도 외칠게..<br/>
      </div>
    ),
    url: "Palette",
    video: {
      // url: "https://youtu.be/0w627XlZphs",
      playing: true,
      next: "Flowertwo"
    },
    image: Images.main.Palette
  },

  Flowertwo: {
    title: "가을 아침",
    descriptions: (
      <div>
        파란 하늘 바라보며<br/> 커다란 숨을 쉬니<br/>
        드높은 하늘처럼<br/> 내 마음 편해지네<br/>
        텅 빈 하늘 언제 왔나<br/> 고추잠자리 하나가<br/>
        잠 덜 깬 듯 엉성히 돌기만<br/> 비잉비잉 음~<br/>
      </div>
    ),
    url: "Flowertwo",
    video: {
      // url: "https://youtu.be/ZDoH5dQ58ps",
      playing: true,
      next: "Flowertwos"
    },
    image: Images.main.Flowertwo
  },

  Flowertwos: {
    title: "비밀의 화원",
    descriptions: (
      <div>
        어제의 일들은 잊어<br/>
        누구나 조금씩은 틀려<br/>
        완벽한 사람은 없어<br/>
        실수투성이고 외로운 나를 봐<br/>
      </div>
    ),
    url: "Flowertwos",
    video: {
      // url: "https://youtu.be/eGXJs7zOHC4",
      playing: true,
      next: "Beep"
    },
    image: Images.main.Flowertwos
  },

  Beep: {
    title: "삐삐",
    descriptions: (
      <div>
        당신의 비밀이 뭔지<br/>
        저마다의 사정 역시<br/>
        정중히 사양할게요<br/>
        not my business<br/>
        이대로 좋아요<br/>
      </div>
    ),
    url: "Beep",
    video: {
      // url: "https://youtu.be/nM0xDI5R50E",
      playing: true,
      next: ""
    },
    image: Images.main.Beep
  }
};

export default Content;
