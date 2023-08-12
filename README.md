# Todo!

간단한 회원가입/로그인과 Todo CRUD를 구현한 페이지입니다.

- [배포링크](http://wanted-pre-onboarding-intern-12.s3-website.ap-northeast-2.amazonaws.com/)
- [원티드 프리온보딩 인턴십 8월](https://www.wanted.co.kr/events/pre_ob_fe_12) 사전과제를 수행한 결과물입니다.
- 개발 기간 : 약 6일 (2023.08.07 ~ 2023.08.12)
- 개발 인원 : 김수진 [https://github.com/notusing11](@notusing11)

## 실행 방법
- 실행하기 위해서는 Node.js가 설치된 환경이 필요합니다. (LTS, 18.17.0 버전 기준)

- 해당 레포지토리를 클론 후 디렉토리로 이동합니다.
- `npm install & npm start` 명령어로 실행하실 수 있습니다.
```
  git clone https://github.com/notusing11/wanted-pre-onboarding-frontend.git && cd wanted-pre-onboarding-frontend;
  npm install & npm start;
```

## 주요 기능
- 로그인 및 회원가입
- TODO CRUD 
- 접근 제어
  - 로그인한 사용자만 todo 기능 접근 가능
  - 로그인하지 않은 사용자만 로그인/회원가입 기능 접근 가능

자세한 내용은 [과제 요구사항](https://github.com/walking-sunset/selection-task#%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C---%EC%84%A0%EB%B0%9C-%EA%B3%BC%EC%A0%9C)을 참고해주세요

## 기술 스택 및 사용한 라이브러리

- Create React App (+ typescript)
- react-router-dom : client-side routing용
- axios : HTTP client 라이브러리, 직렬화 및 에러처리 편의
- nock : 테스트과정 HTTP mock
- styled-components : 컴포넌트 기반 css 처리

## 폴더 구조
```
src
├── __tests__ 
├── api
├── components
│   ├── auth
│   ├── main
│   ├── notFound
│   └── todo
├── constants
├── contexts
├── fixtures
├── hooks
├── routers
└── types

```
### 폴더 구조별 설명
- \_\_tests\_\_ : 과제 요구사항별 테스트 코드들
- api : 네트워크 api 호출관련 로직
- components : 페이지별 분리
- constants : 상수값이나 인스턴스
- contexts : React context 및 provider
- fixtures : 테스트에 필요한 mock 데이터
- hooks : api 호출과 상관없는 로직
- routers : 라우팅 구조
- types : 필요한 타입들


## 추가 정보
### 배포
- 해당 프로젝트는 AWS S3를 통해 배포되었습니다. [배포링크](http://wanted-pre-onboarding-intern-12.s3-website.ap-northeast-2.amazonaws.com/)

### 테스트
- 해당 프로젝트는 테스트코드를 포함하고 있습니다. 
- 사전과제의 요구사항을 구현하였는지 확인하는 테스트입니다.
- 테스트는 실행과 마찬가지로 Node.js와 레포지토리 클론이 필요합니다.
- `npm test` 명령어로 테스트를 실행하실 수 있습니다.
```
  git clone https://github.com/notusing11/wanted-pre-onboarding-frontend.git && cd wanted-pre-onboarding-frontend;
  npm install & npm test;
```