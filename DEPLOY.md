# 무료 배포 가이드

이 프로젝트를 무료로 배포하는 방법입니다.

## 🚀 방법 1: Vercel (가장 추천)

Next.js 개발사가 만든 플랫폼으로, Next.js 프로젝트에 최적화되어 있습니다.

### 준비 사항
1. GitHub 계정
2. Vercel 계정 (GitHub로 가입 가능)

### 배포 단계

#### 1. GitHub에 프로젝트 업로드

```bash
# 프로젝트 폴더로 이동
cd my-app

# Git 초기화 (이미 되어있다면 생략)
git init

# 모든 파일 추가
git add .

# 커밋
git commit -m "Initial commit"

# GitHub에서 새 저장소 생성 후:
# 1. GitHub.com에서 새 Repository 생성
# 2. 저장소 URL 확인 (예: https://github.com/yourusername/style-house.git)

# 원격 저장소 추가
git remote add origin https://github.com/yourusername/style-house.git

# 메인 브랜치 설정
git branch -M main

# GitHub에 푸시
git push -u origin main
```

#### 2. Vercel에 배포

1. **Vercel 사이트 접속**: https://vercel.com
2. **"Sign Up"** 클릭 → GitHub로 로그인
3. **"Add New..." → "Project"** 클릭
4. **GitHub 저장소 선택** (방금 업로드한 프로젝트)
5. **프로젝트 설정**:
   - Framework Preset: Next.js (자동 감지됨)
   - Root Directory: `./` (기본값)
   - Build Command: `npm run build` (자동 설정됨)
   - Output Directory: `.next` (자동 설정됨)
6. **"Deploy"** 버튼 클릭
7. **완료!** 몇 분 후 배포 URL이 생성됩니다.

### Vercel 무료 플랜 장점
- ✅ 무료 도메인 제공 (예: your-project.vercel.app)
- ✅ HTTPS 자동 적용
- ✅ GitHub Push 시 자동 배포
- ✅ 전 세계 CDN
- ✅ 무료 SSL 인증서
- ✅ 월 100GB 대역폭
- ✅ 무제한 배포

---

## 🌐 방법 2: Netlify

### 배포 단계

1. **Netlify 사이트 접속**: https://netlify.com
2. **GitHub로 로그인**
3. **"Add new site" → "Import an existing project"**
4. **GitHub 저장소 선택**
5. **빌드 설정**:
   - Build command: `cd my-app && npm run build`
   - Publish directory: `my-app/.next`
6. **"Deploy site"** 클릭

---

## 🚂 방법 3: Railway

### 배포 단계

1. **Railway 사이트 접속**: https://railway.app
2. **GitHub로 로그인**
3. **"New Project" → "Deploy from GitHub repo"**
4. **저장소 선택**
5. **자동으로 빌드 및 배포 시작**

---

## 📦 방법 4: Render

### 배포 단계

1. **Render 사이트 접속**: https://render.com
2. **GitHub로 로그인**
3. **"New +" → "Web Service"**
4. **GitHub 저장소 연결**
5. **설정**:
   - Name: 원하는 이름
   - Environment: Node
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
6. **"Create Web Service"** 클릭

---

## ⚠️ 주의사항

### 환경 변수
만약 환경 변수가 필요하다면:
- Vercel: Project Settings → Environment Variables에서 추가
- Netlify: Site Settings → Build & Deploy → Environment에서 추가

### 이미지 파일
현재 `public` 폴더에 이미지 파일이 없습니다. 배포 전에 필요한 이미지를 추가하세요:
- `public/elegant-fashion-store-interior-with-minimalist-des.jpg`
- `public/elegant-fashion-designer-working-on-clothes-in-mod.jpg`
- `public/elegant-women-formal-business-wear-fashion.jpg`
- `public/elegant-men-formal-business-suit-fashion.jpg`
- `public/luxury-fashion-accessories-bags-and-shoes.jpg`

### 커스텀 도메인
무료 플랜에서도 커스텀 도메인을 연결할 수 있습니다:
- Vercel: Project Settings → Domains에서 추가
- Netlify: Site Settings → Domain Management에서 추가

---

## 🎯 추천: Vercel

Next.js 프로젝트라면 **Vercel을 가장 추천**합니다:
- ✅ Next.js에 최적화
- ✅ 가장 쉬운 설정
- ✅ 빠른 배포
- ✅ 자동 HTTPS
- ✅ 무료 도메인
- ✅ 자동 배포 (GitHub Push 시)

---

## 💡 빠른 배포 (Vercel CLI)

터미널에서 바로 배포할 수도 있습니다:

```bash
# Vercel CLI 설치
npm i -g vercel

# 프로젝트 폴더로 이동
cd my-app

# 배포 시작
vercel

# 첫 배포 후
vercel --prod
```

---

## 📝 체크리스트

배포 전 확인 사항:
- [ ] `package.json`의 스크립트가 올바른지 확인
- [ ] `.gitignore`에 `.env*` 파일이 포함되어 있는지 확인
- [ ] 필요한 이미지 파일이 `public` 폴더에 있는지 확인
- [ ] GitHub에 코드가 올라가 있는지 확인
- [ ] 빌드 테스트: `npm run build` 실행해서 에러가 없는지 확인

---

## 🔗 유용한 링크

- [Vercel 공식 문서](https://vercel.com/docs)
- [Next.js 배포 가이드](https://nextjs.org/docs/deployment)
- [Netlify 공식 문서](https://docs.netlify.com)
- [Render 공식 문서](https://render.com/docs)

