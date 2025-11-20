import { Button } from "@/components/ui/button"
import { ArrowLeft, Briefcase, Users, Target, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "채용정보 - STYLE HOUSE",
  description: "STYLE HOUSE와 함께 성장할 인재를 찾습니다. 마케팅 디렉터(MD) 채용 정보를 확인하세요.",
}

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-xl font-serif font-bold tracking-tight">
              STYLE HOUSE
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                홈으로
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground mb-6">
            <Briefcase className="w-10 h-10" />
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-normal mb-4">채용정보</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            STYLE HOUSE와 함께 성장할 인재를 찾습니다
          </p>
        </div>
      </section>

      {/* Job Posting Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Job Card */}
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-sm">
            <div className="mb-8">
              <h2 className="font-serif text-3xl md:text-4xl font-normal mb-2">마케팅 디렉터 (MD)</h2>
              <p className="text-muted-foreground">Marketing Director</p>
            </div>

            {/* Job Overview */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 pb-8 border-b border-border">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">경력</p>
                  <p className="font-semibold">5년 이상</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">근무지</p>
                  <p className="font-semibold">서울 본사</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">고용형태</p>
                  <p className="font-semibold">정규직</p>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="mb-8">
              <h3 className="font-serif text-2xl mb-4">주요 업무</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>브랜드 마케팅 전략 수립 및 실행</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>시장 조사 및 트렌드 분석을 통한 제품 기획</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>디지털 마케팅 캠페인 기획 및 운영</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>온라인/오프라인 마케팅 채널 관리</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>브랜드 이미지 관리 및 PR 활동</span>
                </li>
              </ul>
            </div>

            {/* Qualifications */}
            <div className="mb-8">
              <h3 className="font-serif text-2xl mb-4">자격 요건</h3>
              <div className="bg-secondary/50 rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">패션/뷰티/라이프스타일 브랜드 마케팅 경력 5년 이상</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">디지털 마케팅 및 소셜 미디어 마케팅 경험 필수</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">데이터 분석 및 마케팅 성과 측정 역량</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">크리에이티브 기획 및 콘텐츠 제작 경험</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">프로젝트 관리 및 팀 협업 능력</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">영어 커뮤니케이션 가능자 우대</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Preferred Qualifications */}
            <div className="mb-8">
              <h3 className="font-serif text-2xl mb-4">우대 사항</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>프리미엄 브랜드 마케팅 경험</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>인플루언서 마케팅 및 협업 경험</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>글로벌 브랜드 마케팅 경험</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>마케팅 자동화 도구 활용 경험</span>
                </li>
              </ul>
            </div>

            {/* Benefits */}
            <div className="mb-8 pb-8 border-b border-border">
              <h3 className="font-serif text-2xl mb-4">복리후생</h3>
              <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>4대 보험</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>퇴직금</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>연차 및 휴가</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>교육비 지원</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>건강검진</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>사내 카페테리아</span>
                </div>
              </div>
            </div>

            {/* Application */}
            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                지원서는 이메일로 접수해주세요
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="mailto:careers@stylehouse.com?subject=MD 지원 - [이름]">
                    이메일로 지원하기
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/">돌아가기</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                이메일: careers@stylehouse.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 mt-20">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="text-xl font-serif font-bold mb-4">STYLE HOUSE</div>
          <p className="text-sm text-muted-foreground">
            © 2025 STYLE HOUSE. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

