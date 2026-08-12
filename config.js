/**
 * Nature Green Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "조성은",
    nameEn: "Groom",
    father: "조준연",
    mother: "이범자",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "김정은",
    nameEn: "Bride",
    father: "김진우",
    mother: "안인숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-12-19",
    time: "12:30",
    venue: "해군호텔 W웨딩홀",
    hall: "노블레스홀",
    address: "서울시 영등포구 가마산로 538",
    tel: "02-841-4114",
    mapLinks: {
      kakao: "https://kko.to/Nt1W4fphBM",
      naver: "https://naver.me/FN7XMp7f"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks와 캘린더는 location 섹션 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "조성은", bank: "농협은행", number: "352-0835-8696-13" },
      { role: "아버지", name: "조준연", bank: "농협은행", number: "352-0691-6537-73" },
      { role: "어머니", name: "이범자", bank: "농협은행", number: "352-0023-5060-93" }
    ],
    bride: [
      { role: "신부", name: "김정은", bank: "농협은행", number: "172080-56-047781" },
      { role: "아버지", name: "김진우", bank: "우리은행", number: "062-21-0106-627" },
      { role: "어머니", name: "안인숙", bank: "농협은행", number: "172080-51-007453" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "조성은 ♥ 김정은 결혼합니다",
    description: "2026년 12월 19일, 소중한 분들을 초대합니다."
  }
};
