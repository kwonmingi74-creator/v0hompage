# Vercel 배포 완전 초보 가이드 📚

이 가이드는 완전 초보자를 위한 단계별 Vercel 배포 가이드입니다.

---

## 준비물 ✅

1. **GitHub 계정** (없으면 https://github.com 에서 가입)
2. **Vercel 계정** (GitHub로 가입 가능, 배포 과정에서 생성)
3. **이미 설치된 것**: Node.js, npm (이미 설치되어 있음)

---

## STEP 1: GitHub에 프로젝트 업로드하기

### 1-1. GitHub에서 새 저장소 만들기

1. **브라우저**에서 https://github.com 접속
2. **로그인** (계정이 없으면 가입 먼저)
3. 우측 상단의 **"+ "(플러스 아이콘)** 클릭
4. **"New repository"** 클릭
5. 다음 정보 입력:
   - **Repository name**: 원하는 이름 입력 (예: `style-house` 또는 `my-website`)
   - **Description**: 설명 (선택사항, 예: "STYLE HOUSE 패션 브랜드 웹사이트")
   - **Public** 선택 (무료 사용 시)
   - ⚠️ **"Add a README file" 체크박스는 꺼두세요** (이미 파일이 있으므로)
   - ⚠️ **"Add .gitignore"도 꺼두세요** (이미 있음)
   - ⚠️ **"Choose a license"도 None으로 두세요**
6. **"Create repository"** (초록색 버튼) 클릭
7. **중요!** 저장소 주소를 복사해두세요!
   - 페이지에 나오는 주소를 복사 (예: `https://github.com/yourusername/style-house.git`)
   - 또는 저장소 이름 아래에 나오는 주소 복사

### 1-2. 프로젝트를 Git으로 초기화하기

**PowerShell 또는 명령 프롬프트**를 엽니다:

1. **Windows 키** 누르기
2. **"PowerShell"** 또는 **"cmd"** 입력 후 Enter

다음 명령어를 **하나씩** 입력하고 Enter를 누르세요:

```bash
# 1. 프로젝트 폴더로 이동
cd C:\Users\mang-\Desktop\v0홈페이지\my-app

# 2. Git 초기화 (처음 한 번만)
git init

# 3. 모든 파일 추가
git add .

# 4. 첫 커밋
git commit -m "Initial commit"

# 5. 메인 브랜치로 이름 변경 (GitHub 기본 브랜치)
git branch -M main

# 6. GitHub 저장소 연결 (여기에 아까 복사한 주소 붙여넣기)
# 예시: git remote add origin https://github.com/yourusername/style-house.git
git remote add origin [여기에_복사한_주소_붙여넣기]

# 7. GitHub에 업로드
git push -u origin main
```

**6번 명령어 예시:**
```bash
git remote add origin https://github.com/honggildong/style-house.git
```

**중요한 팁:**
- `[여기에_복사한_주소_붙여넣기]` 부분을 실제 GitHub 주소로 바꿔야 합니다
- 각 명령어는 Enter를 누른 후 다음 명령어를 입력하세요
- 에러가 나면 아래 "문제 해결" 섹션을 확인하세요

### 1-3. 업로드 확인

1. GitHub 웹사이트로 돌아가기
2. **새로고침** (F5)
3. 파일들이 보이면 성공! ✅

---

## STEP 2: Vercel 계정 만들기 및 로그인

1. **브라우저**에서 https://vercel.com 접속
2. 우측 상단의 **"Sign Up"** 또는 **"Log In"** 클릭
3. **"Continue with GitHub"** 클릭 (GitHub 계정으로 로그인)
4. GitHub 로그인 화면에서 **권한 승인** 클릭
5. Vercel 대시보드가 나타나면 성공! ✅

---

## STEP 3: Vercel에 프로젝트 배포하기

### 3-1. 새 프로젝트 시작

1. Vercel 대시보드에서 **"Add New..."** 버튼 클릭
2. **"Project"** 선택

### 3-2. GitHub 저장소 선택

1. **"Import Git Repository"** 화면에서
2. **"GitHub"** 탭이 선택되어 있는지 확인
3. 아까 업로드한 저장소를 찾아서 클릭
   - 만약 안 보이면 "Configure GitHub App" 클릭하고 권한 승인

### 3-3. 프로젝트 설정

1. **"Configure Project"** 화면에서:
   - **Project Name**: 원하는 이름 (기본값 사용 가능)
   - **Framework Preset**: 자동으로 "Next.js"로 감지됨 (변경 불필요)
   - **Root Directory**: `./` (변경 불필요)
   - **Build Command**: `npm run build` (자동 설정됨)
   - **Output Directory**: `.next` (자동 설정됨)
   - **Install Command**: `npm install` (자동 설정됨)

2. ⚠️ **중요**: "Override"는 건드리지 마세요! 자동으로 잘 설정되어 있습니다.

### 3-4. 배포 시작

1. 하단의 **"Deploy"** 버튼 클릭
2. 잠시 기다리기 (1-3분 정도)
3. 배포가 완료되면 **"Congratulations!"** 메시지가 나타남
4. **"Visit"** 또는 **"Go to Dashboard"** 버튼 클릭

### 3-5. 배포 확인

1. 배포된 사이트 URL 확인 (예: `https://style-house.vercel.app`)
2. URL을 클릭해서 사이트가 제대로 열리는지 확인
3. 완료! 🎉

---

## STEP 4: 자동 배포 설정 (선택사항)

이제부터는 코드를 변경하고 GitHub에 푸시하면 자동으로 배포됩니다!

### 새로운 변경사항 배포하는 방법:

```bash
# 1. 프로젝트 폴더로 이동
cd C:\Users\mang-\Desktop\v0홈페이지\my-app

# 2. 변경된 파일 추가
git add .

# 3. 커밋 (변경사항 설명)
git commit -m "설명 입력 (예: 이미지 추가, 디자인 변경 등)"

# 4. GitHub에 푸시
git push

# 5. 자동으로 Vercel이 배포 시작! (1-2분 소요)
```

---

## 문제 해결 🔧

### 문제 1: "git: command not found" 오류

**해결책:**
1. Git이 설치되어 있지 않습니다
2. https://git-scm.com/download/win 에서 다운로드
3. 설치 후 PowerShell 재시작

### 문제 2: "git push" 할 때 인증 요구

**해결책:**
1. GitHub에서 Personal Access Token 생성 필요
2. https://github.com/settings/tokens 접속
3. "Generate new token" → "Generate new token (classic)"
4. 이름 입력, "repo" 체크박스 선택
5. "Generate token" 클릭
6. 토큰 복사 (다시 볼 수 없으니 저장!)
7. 비밀번호 대신 이 토큰 사용

### 문제 3: "git remote add origin" 오류

**해결책:**
- "fatal: remote origin already exists" 오류가 나면:
```bash
git remote remove origin
git remote add origin [GitHub_주소]
```

### 문제 4: Vercel 빌드 실패

**해결책:**
1. Vercel 대시보드에서 "Deployments" 클릭
2. 실패한 배포 클릭
3. "Build Logs" 확인
4. 에러 메시지 확인
5. 보통 `npm run build`를 로컬에서 먼저 테스트:
```bash
cd C:\Users\mang-\Desktop\v0홈페이지\my-app
npm run build
```
6. 에러가 나면 수정 후 다시 푸시

### 문제 5: 이미지가 안 보임

**해결책:**
- 이미지 파일을 `public` 폴더에 추가해야 합니다
- 이미지 파일명이 코드와 일치하는지 확인

---

## 유용한 팁 💡

### 1. 커스텀 도메인 연결 (선택사항)

1. Vercel 대시보드에서 프로젝트 선택
2. "Settings" → "Domains"
3. 원하는 도메인 입력 (예: `www.mywebsite.com`)
4. 도메인 제공업체에서 DNS 설정 (안내 따라하기)

### 2. 환경 변수 설정 (필요한 경우)

1. Vercel 대시보드에서 프로젝트 선택
2. "Settings" → "Environment Variables"
3. 이름과 값 입력
4. 저장

### 3. 배포 로그 확인

1. Vercel 대시보드에서 프로젝트 선택
2. "Deployments" 탭
3. 각 배포의 로그 확인 가능

---

## 체크리스트 ✅

배포 전 확인:

- [ ] GitHub 계정이 있나요?
- [ ] GitHub에 코드가 올라갔나요?
- [ ] Vercel 계정이 있나요?
- [ ] 로컬에서 `npm run build`가 성공하나요?
- [ ] 필요한 이미지 파일이 `public` 폴더에 있나요?

---

## 다음 단계 🚀

배포가 성공했다면:

1. ✅ 사이트 URL 공유하기
2. ✅ 커스텀 도메인 연결하기 (선택)
3. ✅ 코드 수정 후 자동 배포 테스트
4. ✅ Google Analytics 추가하기 (선택)
5. ✅ SEO 최적화하기 (선택)

---

## 도움이 필요하면 📞

- Vercel 문서: https://vercel.com/docs
- Next.js 문서: https://nextjs.org/docs
- GitHub 도움말: https://docs.github.com

---

**축하합니다! 🎉 웹사이트가 인터넷에 배포되었습니다!**

