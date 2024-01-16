# Ezports Front-end Repository

## Getting Start

### 1. Node.js 설치

> 이미 Node.js 20 설치되어 있으면 스킵

#### 1-1. [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) 설치

리눅스(WSL 포함)나 맥의 경우 아래의 스크립트중 하나 실행

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

```shell
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

윈도우면 아래에서 nvm-windows 인스톨러 다운로드 후 설치    
https://github.com/coreybutler/nvm-windows/releases

#### 1-2. NVM을 이용해서 Node.js 20 설치

아래의 명령어 실행

```shell
nvm install --lts 20
```

#### 1-3. 버전 선택하기

아래의 명령어 실행

```shell
nvm alias default 20
```

### 2. yarn 설치/업데이트 하기

> yarn: npm과 똑같이 Node.js의 패키지 매니저    
> 마찬가지로 yarn 1.22.21 이상이 설치되어 있으면 스킵

아래의 명령어 실행

```shell
npm install -g yarn
```

### 3. 프로젝트 Dependencies 설치

CWD가 프로젝트 루트인 상태로 아래의 명령어 실행

```shell
yarn
```

### 4. 개발서버 시작

아래의 명령어 실행 후 http://localhost:3000 접속

```shell
yarn run dev
```

## 소스코드 정리하기

아래의 명령어 실행 시,

```shell
yarn run lint
```

`.eslintrc.json`에 설정된 내용대로 소스코드가 정리됨

## 소스 구조

* **public/** : static resources (이미지 등)
* **app/ : next.js app router path** (페이지, 레이아웃 등)
    * **page.jsx : index page** (인덱스 페이지 = *http://{url}/*)
    * **layout.jsx : root layout**
    * **league/\[leagueId\]/page.jsx : league page** (리그 페이지 = *http://{url}/league/{리그ID}*)
    * **match/\[matchId\]/page.jsx : match page** (매치 페이지 = *http://{url}/match/{매치ID}*)
    * **team/\[teamId\]/page.jsx : team page** (팀 페이지 = *http://{url}/team/{팀ID}*)
    * **sport/page.jsx : sport page** (종목 페이지 = *http://{url}/sport*)
    * **component/** : JSX elements (JSX 컴포넌트)
    * **config/** : configs
    * **util/** : utility functions
