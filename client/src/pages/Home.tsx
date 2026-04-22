/*
Design Philosophy: Campus Editorial Breeze
- 밝은 아이보리 배경과 딥 그린 포인트를 유지한다.
- 중앙 정렬 일변도를 피하고, 비대칭 여백과 에디토리얼 카드 구성을 사용한다.
- 사진 위 텍스트는 항상 높은 대비를 유지하며, 과장된 장식보다 정제된 디테일을 우선한다.
*/
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

type Slide = {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
};

type Club = {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
};

const heroOneUrl =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663586085724/H654X2Z7TbhTWmTkQswMXY/udream-hero-01-QSXFh3taGJzdyTf2JUpsC9.webp";
const heroTwoUrl =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663586085724/H654X2Z7TbhTWmTkQswMXY/udream-hero-02-cRjLyyUTxBqiAbqi9grjBn.webp";
const clubsGridUrl =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663586085724/H654X2Z7TbhTWmTkQswMXY/udream-clubs-grid-kdGf8YdLNkS2y9gjnKtpuS.webp";

const navigationItems = ["서브페이지 1", "서브페이지 2", "서브페이지 3"];

const slides: Slide[] = [
  {
    image: heroOneUrl,
    eyebrow: "U-DREAM MAIN COMMUNITY",
    title: "함께 만드는 대학 생활의 새로운 흐름",
    description:
      "유드림은 동아리와 학생 커뮤니티를 더 가깝게 연결하는 시작점입니다. 참여하고, 탐색하고, 연결되는 흐름을 하나의 메인페이지에 담았습니다.",
  },
  {
    image: heroTwoUrl,
    eyebrow: "CLUBS · PEOPLE · STORY",
    title: "관심 있는 활동을 더 쉽게 찾고 연결하세요",
    description:
      "학술, 공연, 봉사, 체육 등 다양한 동아리의 분위기와 활동을 직관적으로 확인하고, 오픈채팅과 인스타그램으로 자연스럽게 이어지도록 구성했습니다.",
  },
];

const clubs: Club[] = [
  {
    id: "01",
    label: "ACADEMIC",
    title: "학술 동아리",
    description:
      "스터디와 프로젝트를 중심으로 지식을 나누고, 진로와 실무 역량을 함께 넓혀가는 커뮤니티를 소개하는 영역입니다.",
    image: clubsGridUrl,
  },
  {
    id: "02",
    label: "PERFORMANCE",
    title: "공연 · 문화 동아리",
    description:
      "음악, 무대, 사진, 콘텐츠 제작처럼 개성을 표현할 수 있는 활동을 담는 자리로 구성했습니다.",
    image: heroOneUrl,
  },
  {
    id: "03",
    label: "COMMUNITY",
    title: "봉사 · 교류 동아리",
    description:
      "사람을 연결하고 함께 경험을 쌓는 활동을 강조해 유드림의 따뜻한 커뮤니티 이미지를 전달합니다.",
    image: heroTwoUrl,
  },
];

const kakaoQrUrl =
  "https://quickchart.io/qr?text=https%3A%2F%2Fopen.kakao.com%2Fo%2Fplaceholder&size=280";

function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-11 w-11 items-center justify-center">
        <span className="absolute left-1 top-5 h-5 w-5 rounded-full bg-[var(--udream-soft-cream)] shadow-sm" />
        <span className="absolute left-3 top-2 h-4 w-4 rounded-full bg-[var(--udream-coral)]" />
        <span className="absolute right-1 top-11 h-4 w-6 -translate-y-1/2 rotate-[36deg] rounded-[999px] bg-[var(--udream-coral)]" />
        <span className="absolute left-0 top-10 h-4 w-6 -translate-y-1/2 -rotate-[28deg] rounded-[999px] bg-[var(--udream-soft-cream)]" />
        <span className="absolute left-7 top-0 h-3.5 w-3.5 rotate-45 rounded-[0.35rem] bg-[var(--udream-coral)]" />
        <span className="absolute bottom-2 left-2 h-2 w-7 rounded-full bg-[var(--udream-deep-green)]/22" />
      </div>
      {!compact && (
        <span>
          <span className="block font-brand text-2xl leading-none text-[var(--udream-deep-green)]">
            U-Dream
          </span>
          <span className="mt-1 block text-xs tracking-[0.24em] text-[var(--udream-muted-green)] uppercase">
            Student Community Archive
          </span>
        </span>
      )}
    </div>
  );
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const currentSlide = slides[activeSlide];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const showPlaceholderToast = (label: string) => {
    toast(`${label} 메뉴는 나중에 이름과 연결 경로를 변경할 수 있습니다.`);
    setMobileMenuOpen(false);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="udream-page min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-white/50 bg-[rgba(249,246,238,0.86)] backdrop-blur-xl">
        <div className="container flex h-20 items-center justify-between gap-6">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 text-left"
            aria-label="유드림 홈으로 이동"
          >
            <BrandLogo />
          </button>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigationItems.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => showPlaceholderToast(item)}
                className="nav-link text-sm font-medium text-[var(--udream-deep-green)]"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                document
                  .getElementById("social")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="border-[var(--udream-line)] bg-white/70 text-[var(--udream-deep-green)] hover:bg-white"
            >
              문의 채널 보기
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--udream-line)] bg-white/70 text-[var(--udream-deep-green)] lg:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-[var(--udream-line)] bg-[rgba(249,246,238,0.96)] lg:hidden">
            <div className="container flex flex-col gap-3 py-5">
              {navigationItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => showPlaceholderToast(item)}
                  className="flex items-center justify-between rounded-2xl border border-[var(--udream-line)] bg-white px-4 py-3 text-left text-sm font-medium text-[var(--udream-deep-green)]"
                >
                  <span>{item}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden pb-10 pt-6 md:pb-14 md:pt-8">
          <div className="hero-noise pointer-events-none absolute inset-0 opacity-60" />
          <div className="container">
            <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
              <div className="relative min-h-[540px] overflow-hidden rounded-[2rem] editorial-shadow ring-1 ring-black/5 md:min-h-[640px]">
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,42,33,0.78)_0%,rgba(12,42,33,0.52)_34%,rgba(12,42,33,0.18)_58%,rgba(12,42,33,0.05)_100%)]" />
                <div className="absolute inset-0 flex items-end p-6 md:p-10 lg:p-12">
                  <div className="max-w-xl text-white">
                    <p className="mb-4 text-xs font-semibold tracking-[0.36em] text-white/75 uppercase md:text-sm">
                      {currentSlide.eyebrow}
                    </p>
                    <h1 className="max-w-lg text-4xl font-black leading-[1.08] tracking-[-0.03em] md:text-6xl">
                      {currentSlide.title}
                    </h1>
                    <p className="mt-5 max-w-md text-sm leading-7 text-white/82 md:text-base">
                      {currentSlide.description}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <Button
                        type="button"
                        onClick={() =>
                          document
                            .getElementById("about")
                            ?.scrollIntoView({ behavior: "smooth", block: "start" })
                        }
                        className="rounded-full bg-white px-6 text-[var(--udream-deep-green)] hover:bg-[var(--udream-soft-cream)]"
                      >
                        유드림 소개 보기
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() =>
                          document
                            .getElementById("clubs")
                            ?.scrollIntoView({ behavior: "smooth", block: "start" })
                        }
                        className="rounded-full border-white/40 bg-white/10 px-6 text-white backdrop-blur hover:bg-white/16"
                      >
                        동아리 둘러보기
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-3 md:bottom-8 md:left-8 md:right-8">
                  <div className="flex items-center gap-2">
                    {slides.map((slide, index) => (
                      <button
                        key={slide.eyebrow}
                        type="button"
                        aria-label={`${index + 1}번 슬라이드 보기`}
                        onClick={() => setActiveSlide(index)}
                        className={`h-2.5 rounded-full transition-all ${
                          activeSlide === index
                            ? "w-10 bg-white"
                            : "w-2.5 bg-white/45"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrevSlide}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/15 text-white backdrop-blur transition hover:bg-black/25"
                      aria-label="이전 슬라이드"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextSlide}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/15 text-white backdrop-blur transition hover:bg-black/25"
                      aria-label="다음 슬라이드"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              <aside className="grid gap-4 lg:pb-4">
                <div className="rounded-[1.75rem] border border-[var(--udream-line)] bg-white/80 p-6 editorial-shadow backdrop-blur md:p-7">
                  <p className="text-xs font-semibold tracking-[0.3em] text-[var(--udream-muted-green)] uppercase">
                    Editorial Notice
                  </p>
                  <h2 className="mt-4 text-2xl font-bold leading-tight text-[var(--udream-deep-green)]">
                    메인페이지는 정보보다 먼저 분위기와 연결감을 전달하도록 설계했습니다.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    상단 네비게이션, 배너 슬라이드, 소개 문단, 동아리 소개, 오픈채팅과 인스타 연결,
                    그리고 푸터까지 한 화면의 흐름으로 이어지도록 구성했습니다.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div className="rounded-[1.75rem] bg-[var(--udream-deep-green)] p-6 text-white editorial-shadow">
                    <Sparkles className="h-6 w-6 text-[var(--udream-coral)]" />
                    <p className="mt-5 text-sm uppercase tracking-[0.24em] text-white/68">
                      Responsive Ready
                    </p>
                    <p className="mt-2 text-2xl font-semibold leading-tight">
                      모바일부터 데스크톱까지 자연스럽게 반응합니다.
                    </p>
                  </div>
                  <div className="rounded-[1.75rem] border border-[var(--udream-line)] bg-[var(--udream-soft-cream)] p-6 editorial-shadow">
                    <Users className="h-6 w-6 text-[var(--udream-muted-green)]" />
                    <p className="mt-5 text-sm uppercase tracking-[0.24em] text-[var(--udream-muted-green)]">
                      Expandable Structure
                    </p>
                    <p className="mt-2 text-2xl font-semibold leading-tight text-[var(--udream-deep-green)]">
                      서브페이지 3개 구조로 확장하기 좋은 시작 화면입니다.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="about" className="pb-8 pt-10 md:pb-14 md:pt-16">
          <div className="container grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
            <div className="rounded-[2rem] border border-[var(--udream-line)] bg-white/75 p-7 editorial-shadow backdrop-blur md:p-10">
              <p className="section-kicker">ABOUT U-DREAM</p>
              <h2 className="section-title mt-4">
                유드림은 학생들이 원하는 활동을 더 쉽고 따뜻하게 만나는 출발점입니다.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                이 영역에는 유드림이 어떤 사이트인지, 누구를 위한 공간인지, 그리고 왜 필요한지에 대한 설명이 들어갑니다.
                현재는 메인페이지 시안 단계이므로 추후 실제 소개 문구로 바로 교체할 수 있도록 문단 구조를 여유 있게 잡아두었습니다.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <article className="offset-card md:translate-y-8">
                <p className="offset-index">01</p>
                <h3 className="text-xl font-bold text-[var(--udream-deep-green)]">
                  동아리를 찾는 흐름을 단순하게
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  방문자가 처음 들어왔을 때 무엇을 할 수 있는지 바로 이해하도록 구조를 단순화했습니다.
                </p>
              </article>
              <article className="offset-card">
                <p className="offset-index">02</p>
                <h3 className="text-xl font-bold text-[var(--udream-deep-green)]">
                  사람 중심의 커뮤니티 이미지
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  실제 학생 활동의 분위기를 먼저 전달해 브랜드가 차갑지 않도록 구성했습니다.
                </p>
              </article>
              <article className="offset-card">
                <p className="offset-index">03</p>
                <h3 className="text-xl font-bold text-[var(--udream-deep-green)]">
                  이후 서브페이지 확장에 유리한 섹션 구조
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  동아리 상세 소개, 공지, 신청 안내 등 후속 페이지로 연결될 수 있도록 기본 동선을 설계했습니다.
                </p>
              </article>
              <article className="offset-card md:-translate-y-8">
                <p className="offset-index">04</p>
                <h3 className="text-xl font-bold text-[var(--udream-deep-green)]">
                  텍스트와 이미지의 균형감
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  설명 문구를 넣어도 답답하지 않도록 충분한 여백과 가독성 중심의 폭을 유지했습니다.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="clubs" className="pb-10 pt-8 md:pb-16 md:pt-14">
          <div className="container">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="section-kicker">CLUBS AT U-DREAM</p>
                <h2 className="section-title mt-4">
                  어떤 동아리들이 있는지 직관적으로 보여주는 소개 영역입니다.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-600">
                현재는 예시 카테고리와 설명으로 구성되어 있으며, 나중에 실제 동아리명과 활동 사진으로 교체하기 쉽도록 카드형 구조로 만들었습니다.
              </p>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="overflow-hidden rounded-[2rem] border border-[var(--udream-line)] bg-white editorial-shadow">
                <img
                  src={clubsGridUrl}
                  alt="유드림 동아리 대표 이미지"
                  className="h-full min-h-[320px] w-full object-cover"
                />
              </div>

              <div className="grid gap-5">
                {clubs.map((club, index) => (
                  <article
                    key={club.id}
                    className={`group overflow-hidden rounded-[1.75rem] border border-[var(--udream-line)] bg-white editorial-shadow ${
                      index === 1 ? "lg:translate-x-6" : ""
                    }`}
                  >
                    <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
                      <div className="p-6 md:p-7">
                        <p className="text-xs font-semibold tracking-[0.28em] text-[var(--udream-muted-green)] uppercase">
                          {club.label}
                        </p>
                        <div className="mt-4 flex items-end gap-3">
                          <span className="text-4xl font-black leading-none text-[var(--udream-sand)]">
                            {club.id}
                          </span>
                          <h3 className="pb-1 text-xl font-bold text-[var(--udream-deep-green)]">
                            {club.title}
                          </h3>
                        </div>
                        <p className="mt-4 text-sm leading-7 text-slate-600">
                          {club.description}
                        </p>
                      </div>
                      <div className="relative min-h-[220px] overflow-hidden">
                        <img
                          src={club.image}
                          alt={club.title}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,42,33,0.05),rgba(12,42,33,0.22))]" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="social" className="pb-16 pt-8 md:pt-14">
          <div className="container">
            <div className="social-panel grid gap-6 rounded-[2rem] p-6 md:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
              <div className="rounded-[1.75rem] bg-white/80 p-6 editorial-shadow backdrop-blur md:p-8">
                <p className="section-kicker">CONTACT & SOCIAL</p>
                <h2 className="section-title mt-4">
                  오픈채팅과 인스타그램으로 이어지는 참여 동선을 배치했습니다.
                </h2>
                <p className="mt-5 text-sm leading-7 text-slate-600">
                  카카오톡 오픈채팅 QR은 현재 예시 링크로 연결되어 있습니다. 실제 오픈채팅 주소가 정해지면 QR과 버튼 링크를 바로 교체할 수 있습니다.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-[var(--udream-line)] bg-[var(--udream-soft-cream)] p-5">
                    <div className="flex items-center gap-3 text-[var(--udream-deep-green)]">
                      <MessageCircle className="h-5 w-5" />
                      <span className="font-semibold">카카오톡 오픈채팅</span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      새 학기 안내, 문의 응답, 빠른 참여 유도를 위한 채널입니다.
                    </p>
                    <a
                      href="https://open.kakao.com/o/placeholder"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--udream-deep-green)]"
                    >
                      예시 링크 열기 <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="rounded-[1.5rem] border border-[var(--udream-line)] bg-[rgba(255,255,255,0.82)] p-5">
                    <div className="flex items-center gap-3 text-[var(--udream-deep-green)]">
                      <Instagram className="h-5 w-5" />
                      <span className="font-semibold">인스타그램 소개</span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      카드뉴스, 활동 스케치, 모집 소식 등을 전달하는 대표 SNS 채널 영역입니다.
                    </p>
                    <a
                      href="https://instagram.com/udream_official"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--udream-deep-green)]"
                    >
                      예시 계정 보기 <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-[0.95fr_1.05fr]">
                <div className="flex flex-col items-center justify-center rounded-[1.75rem] border border-[var(--udream-line)] bg-white p-6 text-center editorial-shadow">
                  <img
                    src={kakaoQrUrl}
                    alt="카카오톡 오픈채팅 QR 코드 예시"
                    className="h-44 w-44 rounded-2xl border border-[var(--udream-line)] bg-white p-3"
                  />
                  <p className="mt-4 text-sm font-semibold text-[var(--udream-deep-green)]">
                    카카오톡 오픈채팅 QR
                  </p>
                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    실제 주소로 교체하면 자동으로 새 QR을 적용할 수 있습니다.
                  </p>
                </div>

                <div className="rounded-[1.75rem] bg-[var(--udream-deep-green)] p-6 text-white editorial-shadow md:p-8">
                  <p className="text-xs font-semibold tracking-[0.3em] text-white/70 uppercase">
                    U-DREAM SNS GUIDE
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold leading-tight">
                    참여를 시작하는 가장 빠른 방법을 한 섹션에 모았습니다.
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-white/80">
                    메인페이지 하단에 문의 채널을 배치해 사용자가 스크롤 끝에서 바로 행동할 수 있도록 구성했습니다. 실제 운영 정보가 생기면 계정명, 링크, 소개 문구만 교체하면 됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--udream-line)] bg-white/70 py-8 backdrop-blur">
        <div className="container grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <BrandLogo />
          </div>

          <div className="grid gap-4 text-sm text-slate-600 md:grid-cols-3">
            <div>
              <p className="font-semibold text-[var(--udream-deep-green)]">주소</p>
              <p className="mt-2 leading-7">
                서울시 예시구 유드림로 123
                <br />
                유드림 학생회관 2층
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--udream-deep-green)]">운영 정보</p>
              <p className="mt-2 leading-7">
                대표 문의: contact@udream.kr
                <br />
                운영 시간: 평일 10:00 - 18:00
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--udream-deep-green)]">안내</p>
              <p className="mt-2 leading-7">
                © {currentYear} U-Dream.
                <br />
                메인페이지 시안으로 제작되었습니다.
              </p>
              <div className="mt-3 flex items-center gap-2 text-[var(--udream-muted-green)]">
                <MapPin className="h-4 w-4" />
                <span>추후 실제 주소와 정보로 교체 가능</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
