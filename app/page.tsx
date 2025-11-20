import { Button } from "@/components/ui/button"
import { ArrowRight, Menu } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-xl font-serif font-bold tracking-tight">STYLE HOUSE</div>
            <div className="hidden md:flex items-center gap-8">
              <a href="/about" className="text-sm hover:text-accent transition-colors">
                회사소개
              </a>
              <a href="/values" className="text-sm hover:text-accent transition-colors">
                가치
              </a>
              <a href="/collections" className="text-sm hover:text-accent transition-colors">
                컬렉션
              </a>
              <a href="/contact" className="text-sm hover:text-accent transition-colors">
                문의
              </a>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-tight mb-8 text-balance">
            완벽한 스타일과
            <br />
            세련된 품격의 만남
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
            STYLE HOUSE는 당신의 일상을 특별하게 만드는
            <br />
            프리미엄 패션 브랜드입니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group" asChild>
              <a href="/collections">
                컬렉션 보기
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/about">브랜드 스토리</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="aspect-[16/9] bg-muted rounded-sm overflow-hidden flex items-center justify-center">
            <div className="text-muted-foreground text-center p-8">
              <p className="text-lg mb-2">STYLE HOUSE 매장</p>
              <p className="text-sm">이미지를 추가해주세요</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-normal mb-6">우리의 이야기</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                2015년 설립된 STYLE HOUSE는 한국 패션 산업의 새로운 기준을 제시하고 있습니다. 우리는 단순히 옷을
                판매하는 것이 아니라, 고객의 라이프스타일과 개성을 표현하는 방법을 제안합니다.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                지속가능한 소재와 윤리적인 생산 과정을 통해 만들어진 우리의 제품은 품질과 디자인 모두에서 최고의 가치를
                제공합니다.
              </p>
            </div>
            <div className="aspect-[3/4] bg-muted rounded-sm overflow-hidden flex items-center justify-center">
              <div className="text-muted-foreground text-center p-8">
                <p className="text-lg mb-2">패션 디자이너</p>
                <p className="text-sm">이미지를 추가해주세요</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-center mb-4">우리의 가치</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            STYLE HOUSE가 추구하는 핵심 가치입니다
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-serif">
                1
              </div>
              <h3 className="text-xl font-serif mb-3">품질 우선</h3>
              <p className="text-muted-foreground leading-relaxed">
                최고급 원단과 정교한 재봉 기술로 완성되는 프리미엄 품질
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-serif">
                2
              </div>
              <h3 className="text-xl font-serif mb-3">지속가능성</h3>
              <p className="text-muted-foreground leading-relaxed">
                환경을 생각하는 친환경 소재와 윤리적 생산 프로세스
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-serif">
                3
              </div>
              <h3 className="text-xl font-serif mb-3">타임리스 디자인</h3>
              <p className="text-muted-foreground leading-relaxed">
                유행을 넘어 오래도록 사랑받는 클래식한 디자인 철학
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section id="collections" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-center mb-4">컬렉션</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            시즌마다 선보이는 우리의 특별한 컬렉션
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <a href="/collections/women" className="group cursor-pointer">
              <div className="aspect-[3/4] bg-muted rounded-sm overflow-hidden mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <div className="text-muted-foreground text-center p-8">
                  <p className="text-lg mb-2">Women's Collection</p>
                  <p className="text-sm">이미지를 추가해주세요</p>
                </div>
              </div>
              <h3 className="font-serif text-xl mb-2">Women's Collection</h3>
              <p className="text-muted-foreground">우아함과 세련미를 담은 여성 컬렉션</p>
            </a>

            <a href="/collections/men" className="group cursor-pointer">
              <div className="aspect-[3/4] bg-muted rounded-sm overflow-hidden mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <div className="text-muted-foreground text-center p-8">
                  <p className="text-lg mb-2">Men's Collection</p>
                  <p className="text-sm">이미지를 추가해주세요</p>
                </div>
              </div>
              <h3 className="font-serif text-xl mb-2">Men's Collection</h3>
              <p className="text-muted-foreground">모던하고 클래식한 남성 컬렉션</p>
            </a>

            <a href="/collections/accessories" className="group cursor-pointer">
              <div className="aspect-[3/4] bg-muted rounded-sm overflow-hidden mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <div className="text-muted-foreground text-center p-8">
                  <p className="text-lg mb-2">Accessories</p>
                  <p className="text-sm">이미지를 추가해주세요</p>
                </div>
              </div>
              <h3 className="font-serif text-xl mb-2">Accessories</h3>
              <p className="text-muted-foreground">스타일을 완성하는 프리미엄 액세서리</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-normal mb-6">
            당신만의 스타일을
            <br />
            발견해보세요
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            STYLE HOUSE의 최신 컬렉션과 특별한 프로모션 소식을
            <br />
            가장 먼저 받아보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="이메일 주소"
              className="flex-1 px-4 py-3 border border-border rounded-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button size="lg">구독하기</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-serif font-bold mb-4">STYLE HOUSE</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                당신의 스타일을 완성하는
                <br />
                프리미엄 패션 브랜드
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">회사</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/about" className="hover:text-foreground transition-colors">
                    회사 소개
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:text-foreground transition-colors">
                    채용
                  </a>
                </li>
                <li>
                  <a href="/stores" className="hover:text-foreground transition-colors">
                    매장 안내
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">고객 지원</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/support" className="hover:text-foreground transition-colors">
                    고객센터
                  </a>
                </li>
                <li>
                  <a href="/shipping" className="hover:text-foreground transition-colors">
                    배송 안내
                  </a>
                </li>
                <li>
                  <a href="/returns" className="hover:text-foreground transition-colors">
                    반품/교환
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">소셜 미디어</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://instagram.com/stylehouse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com/stylehouse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://pinterest.com/stylehouse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Pinterest
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 STYLE HOUSE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
