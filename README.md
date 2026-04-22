# U-Dream Website - HTML/CSS/JavaScript 버전

React + Tailwind 프로젝트를 순수 HTML, CSS, JavaScript로 변환한 정적 웹사이트입니다.

## 📁 프로젝트 구조

```
u-dream-website의-복사본/
├── index.html          # 메인 페이지
├── subpage1.html       # 서브페이지 1
├── subpage2.html       # 서브페이지 2
├── subpage3.html       # 서브페이지 3
├── styles.css          # 모든 페이지의 공유 스타일
├── script.js           # 모든 기능 (슬라이더, 메뉴, 애니메이션)
└── README.md           # 이 파일
```

## ✨ 포함된 기능

- ✅ **배너 슬라이더**: 자동 전환 (5초) + 수동 조작 (이전/다음 버튼, 인디케이터)
- ✅ **모바일 반응형 메뉴**: 768px 이하에서 햄버거 메뉴로 변환
- ✅ **부드러운 스크롤**: 앵커 링크 클릭 시 부드러운 스크롤 애니메이션
- ✅ **완벽한 반응형 디자인**: 모바일, 태블릿, 데스크톱 모두 지원
- ✅ **Campus Editorial Breeze 디자인**: 아이보리 배경, 딥 그린, 코랄 포인트
- ✅ **모든 색상 및 스타일 유지**: 원본 React 프로젝트와 동일한 디자인

## 🚀 사용 방법

### 로컬에서 테스트하기

#### 1. Python HTTP 서버 사용 (권장)
```bash
cd /path/to/u-dream-website의-복사본
python3 -m http.server 8000
```
브라우저에서 `http://localhost:8000` 접속

#### 2. Node.js HTTP 서버 사용
```bash
cd /path/to/u-dream-website의-복사본
npx http-server
```

#### 3. 직접 파일 열기
`index.html` 파일을 브라우저에서 직접 열기 (제한된 기능)

### 배포하기

이 프로젝트는 정적 파일만으로 구성되어 있어 모든 호스팅 환경에서 배포 가능합니다:

- **Netlify**: 폴더를 드래그 앤 드롭
- **Vercel**: GitHub 연동 또는 폴더 업로드
- **GitHub Pages**: 저장소에 파일 업로드
- **AWS S3**: 정적 웹사이트 호스팅
- **일반 웹 호스팅**: FTP로 파일 업로드
- **Manus**: 프로젝트 폴더 업로드

## 📝 파일 설명

### index.html
- 메인 페이지
- 배너 슬라이더, 소개, 동아리 소개, 소셜 채널, 푸터 포함
- 모든 섹션이 하나의 페이지에 구성

### subpage1.html, subpage2.html, subpage3.html
- 서브페이지 템플릿
- 헤더와 푸터는 메인 페이지와 동일
- 중앙 콘텐츠 영역을 자유롭게 수정 가능

### styles.css
- 모든 페이지에서 사용하는 공유 스타일
- CSS 변수로 색상 정의 (`:root` 섹션)
- 반응형 미디어 쿼리 포함

### script.js
- 슬라이더 기능 (HeroSlider 클래스)
- 모바일 메뉴 기능 (MobileMenu 클래스)
- 네비게이션 기능 (Navigation 클래스)
- 외부 링크 처리 (ExternalLinks 클래스)

## 🎨 색상 커스터마이징

`styles.css`의 `:root` 섹션에서 색상을 변경할 수 있습니다:

```css
:root {
  --udream-deep-green: #0c2a21;      /* 메인 색상 */
  --udream-muted-green: #7a9e94;     /* 보조 색상 */
  --udream-sand: #c7a86d;            /* 강조 색상 */
  --udream-soft-cream: #f8f5f0;      /* 배경 색상 */
  --udream-coral: #d97a4a;           /* 포인트 색상 */
  /* ... 기타 색상 */
}
```

## 📱 반응형 브레이크포인트

- **모바일**: 640px 이하
- **태블릿**: 641px ~ 1023px
- **데스크톱**: 1024px 이상

## 🔧 주요 수정 포인트

### 배너 슬라이더 이미지 변경
`script.js`의 `HeroSlider` 클래스에서 `slides` 배열 수정:

```javascript
this.slides = [
  {
    image: "새로운-이미지-URL",
    eyebrow: "제목",
    title: "큰 제목",
    description: "설명",
  },
  // ...
];
```

### 네비게이션 링크 변경
`index.html`과 `subpage*.html`에서 `<nav>` 섹션 수정:

```html
<nav>
  <a href="subpage1.html" class="nav-link">실제 페이지명 1</a>
  <a href="subpage2.html" class="nav-link">실제 페이지명 2</a>
  <a href="subpage3.html" class="nav-link">실제 페이지명 3</a>
</nav>
```

### 소셜 링크 변경
`index.html`의 소셜 섹션에서 링크 수정:

```html
<a href="https://open.kakao.com/o/YOUR_LINK" target="_blank">
  예시 링크 열기
</a>
```

### 푸터 정보 변경
모든 HTML 파일의 `<footer>` 섹션 수정:

```html
<p>서울시 예시구 유드림로 123<br />유드림 학생회관 2층</p>
```

## 🐛 트러블슈팅

### 슬라이더가 작동하지 않음
- 브라우저 콘솔에서 에러 확인
- `script.js`가 정상적으로 로드되었는지 확인
- 이미지 URL이 유효한지 확인

### 스타일이 적용되지 않음
- `styles.css` 파일이 같은 디렉토리에 있는지 확인
- 브라우저 캐시 삭제 (Ctrl+Shift+Delete)
- 개발자 도구에서 CSS 로드 상태 확인

### 모바일 메뉴가 작동하지 않음
- JavaScript가 활성화되어 있는지 확인
- 브라우저 콘솔에서 에러 확인

## 📚 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, 미디어 쿼리
- **Vanilla JavaScript**: 프레임워크 없음
- **Google Fonts**: Cormorant Garamond, Noto Sans KR

## 📄 라이선스

이 프로젝트는 U-Dream 커뮤니티를 위해 제작되었습니다.

## 💡 팁

1. **이미지 최적화**: 배너 이미지는 WebP 형식으로 변환하여 로딩 속도 개선
2. **SEO 최적화**: 각 페이지의 `<title>`과 `<meta name="description">` 수정
3. **성능**: 불필요한 이미지 제거, CSS 최소화 고려
4. **접근성**: 모든 이미지에 `alt` 텍스트 추가, 색상 대비 확인

---

**문의**: contact@udream.kr
