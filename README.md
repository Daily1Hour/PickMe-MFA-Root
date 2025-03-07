# 마이크로 프론트엔드 통합

> Single-Spa Root 구성

## 🛠️ 기술 스택

[![Single-SPA](https://img.shields.io/badge/Single_SPA-f5bcd3.svg?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgODExLjIxIj48c2NyaXB0IHhtbG5zPSIiIGlkPSJjdXN0b20tdXNlcmFnZW50LXN0cmluZy1wYWdlLXNjcmlwdCIvPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZWU2ODlmO308L3N0eWxlPjwvZGVmcz48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEwOC41NCwyMDAuMzMsNTI4LjQyLDQ3MC40Miw0NDkuMjcsNTgzLjg0LDU5LjM5LDM4Ni4yMmw0OS4xNS0xODUuODlNNzcuNCwxMjAuMTIsMCw0MTIuODZsNDY1LjYxLDIzNkw2MDAsNDU2LjI4LDc3LjQsMTIwLjEyWiIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIyODQuODQgNTU2LjM0IDQ2NS42IDY0OC44NSAxNTQuNjkgODExLjIxIDI4NC44NCA1NTYuMzQiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iNDAxLjA2IDMyOC44NSA3Ny40IDEyMC4xMiA1NjkuMDkgMCA0MDEuMDYgMzI4Ljg1Ii8+PC9nPjwvZz48L3N2Zz4=&style=flat-square&logoColor)](https://single-spa.js.org/)
[![Module Federation](https://img.shields.io/badge/Module_Federation-bfeaf9.svg?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxNTkgMTUyIj4KICA8cGF0aCBzdHJva2U9IiMxMDhDQjkiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIzLjIiIGQ9Ik05Ni4zIDEyLjcgNzkgMy4ybS0xNyA5LjYgMTctOS42bTE3LjMgMTM2LjFMNzkgMTQ4LjhtLTE3LTkuNiAxNy4xIDkuNk0zMi43IDI5LjYgMTYgMzkuOG0tLjMgMTkuNi4yLTE5LjZtLjEgMC0xMy44LThtMTQwLjQgNjAuOS0uMyAxOS42bS0xNi45IDEwLjEgMTYuOS0xMC4xbTAgMCAxMy43IDcuOU0xNS43IDkzbC40IDE5LjVNMzMgMTIyLjZsLTE3LTEwbTAtLjEtMTMuNiA4bTEyMi45LTkxLjEgMTYuOCAxMC4ybS4zIDE5LjYtLjMtMTkuNm0wIDAgMTMuNy04Ii8+CiAgPHBhdGggZmlsbD0iIzk1ODlFQyIgZD0iTTk2LjUgNDMuMyA3OSAzMy4zbC0xNy41IDEwTDc5IDUzLjRsMTcuNS0xMFoiLz4KICA8cGF0aCBmaWxsPSIjMUMyMTM1IiBkPSJNNzkgMzIuOCA2MS4yIDQzLjF2MjAuNkw3OSA3NC4xbDE4LTEwLjRWNDMuMUw3OSAzMi44Wm0xNi44IDEwLjVMNzkgNTNsLTE2LjctOS43TDc5IDMzLjdsMTYuOCA5LjZabS0zMy45LjcgMTYuNyA5LjZWNzNMNjIgNjMuM1Y0NFptMTcuNSAyOVY1My41TDk2LjEgNDR2MTkuM2wtMTYuNyA5LjZaIi8+CiAgPHBhdGggZmlsbD0iIzk1ODlFQyIgZD0iTTU5LjggMTA3LjRWODcuMkw0Mi40IDc3djIwLjJsMTcuNCAxMFoiLz4KICA8cGF0aCBmaWxsPSIjMUMyMTM1IiBkPSJNNTkuOCA2Ni42IDQyIDc2Ljl2MjAuNmwxNy44IDEwLjMgMTgtMTAuM1Y3Ni45bC0xOC0xMC4zWk03Ni42IDc3bC0xNi44IDkuNkw0My4xIDc3bDE2LjctOS43TDc2LjYgNzdabS0zMy45LjcgMTYuOCA5LjZ2MTkuM0w0Mi43IDk3Vjc3LjhabTE3LjUgMjguOVY4Ny40TDc3IDc3LjhWOTdsLTE2LjcgOS43WiIvPgogIDxwYXRoIGZpbGw9IiM5NTg5RUMiIGQ9Ik05OC4yIDEwNy40Vjg3LjJMMTE1LjcgNzd2MjAuMmwtMTcuNSAxMFoiLz4KICA8cGF0aCBmaWxsPSIjMUMyMTM1IiBkPSJNOTguMiA2Ni42IDgwLjMgNzYuOXYyMC42bDE4IDEwLjNMMTE2IDk3LjVWNzYuOUw5OC4yIDY2LjZaTTExNSA3N2wtMTYuNyA5LjZMODEuNiA3N2wxNi43LTkuN0wxMTUgNzdabS0zMy44LjcgMTYuNyA5LjZ2MTkuM0w4MS4yIDk3Vjc3LjhabTE3LjUgMjguOVY4Ny40bDE2LjctOS42Vjk3bC0xNi43IDkuNloiLz4KICA8cGF0aCBmaWxsPSIjOTU4OUVDIiBkPSJtMTE1LjcgNTQuOC0xNy41LTEwLTE3LjUgMTBMOTguMiA2NWwxNy41LTEwWiIvPgogIDxwYXRoIGZpbGw9IiM5NTg5RUMiIGQ9Ik05OC4yIDg1LjFWNjVsMTcuNS0xMHYyMEw5OC4yIDg1LjFaIi8+CiAgPHBhdGggZmlsbD0iIzFDMjEzNSIgZD0iTTk4LjIgNDQuMyA4MC4zIDU0LjZ2MjAuNmwxOCAxMC40TDExNiA3NS4yVjU0LjZMOTguMiA0NC4zWk0xMTUgNTQuOGwtMTYuNyA5LjctMTYuNy05LjcgMTYuNy05LjYgMTYuNyA5LjZabS0zMy44LjcgMTYuNyA5Ljd2MTkuM2wtMTYuNy05LjdWNTUuNVptMTcuNSAyOVY2NS4ybDE2LjctOS43djE5LjNsLTE2LjcgOS43WiIvPgogIDxwYXRoIGZpbGw9IiM5NTg5RUMiIGQ9Im03Ny4zIDU0LjgtMTcuNS0xMC0xNy40IDEwTDU5LjggNjVsMTcuNS0xMFpNNTkuOCA4NS4xVjY1TDQyLjQgNTV2MjBsMTcuNCAxMC4xWiIvPgogIDxwYXRoIGZpbGw9IiMxQzIxMzUiIGQ9Ik01OS44IDQ0LjMgNDIgNTQuNnYyMC42bDE3LjggMTAuNCAxOC0xMC40VjU0LjZsLTE4LTEwLjNabTE2LjggMTAuNS0xNi44IDkuNy0xNi43LTkuNyAxNi43LTkuNiAxNi44IDkuNlptLTMzLjkuNyAxNi44IDkuN3YxOS4zbC0xNi44LTkuN1Y1NS41Wm0xNy41IDI5VjY1LjJMNzcgNTUuNXYxOS4zbC0xNi43IDkuN1oiLz4KICA8cGF0aCBmaWxsPSIjOTU4OUVDIiBkPSJNNzkgMTE4LjVWOTguM2wtMTcuNS0xMHYyMC4xbDE3LjUgMTBabTAgMFY5OC4zbDE3LjUtMTB2MjAuMWwtMTcuNSAxMFoiLz4KICA8cGF0aCBmaWxsPSIjMUMyMTM1IiBkPSJNNzkgNzcuNyA2MS4yIDg4djIwLjZMNzkgMTE5bDE4LTEwLjRWODhMNzkgNzcuN1ptMTYuOCAxMC41TDc5IDk4bC0xNi43LTkuN0w3OSA3OC42bDE2LjggOS42Wm0tMzMuOS43IDE2LjcgOS42djE5LjNMNjIgMTA4LjJWODguOVptMTcuNSAyOVY5OC40TDk2LjEgODl2MTkuM2wtMTYuNyA5LjZaIi8+CiAgPHBhdGggZmlsbD0iIzcxQkVEQiIgZD0iTTEzNC41IDQzLjIgODAgMTEuNnYyMEwxMTcuMyA1M2wxNy4yLTEwWm0tOTMuNyAxMCAzNy41LTIxLjdWMTEuNkwyMy41IDQzLjJsMTcuMyAxMFptNzcuMiAxLjN2NDMuM2wxNy4zIDEwVjQ0LjRsLTE3LjMgMTBabS03Ny44LjEtMTcuMy0xMHY2M2wxNy4zLTEwdi00M1pNMjMuNyAxMDlsNTQuNiAzMS40di0yMEw0MSA5OWwtMTcuMyAxMFptNTYuMiAxMS41djIwbDU0LjUtMzEuNUwxMTcgOTlsLTM3IDIxLjVaIi8+CiAgPHBhdGggZmlsbD0iIzk1ODlFQyIgZD0iTTk2LjUgNjYuNCA3OSA1Ni4zbC0xNy41IDEwTDc5IDc2LjVsMTcuNS0xMFoiLz4KICA8cGF0aCBmaWxsPSIjOTU4OUVDIiBkPSJNNzkgOTYuNlY3Ni40bC0xNy41LTEwdjIwLjFMNzkgOTYuNlptMCAwVjc2LjRsMTcuNS0xMHYyMC4xTDc5IDk2LjZaIi8+CiAgPHBhdGggZmlsbD0iIzFDMjEzNSIgZD0iTTc5IDU1LjggNjEuMiA2Ni4xdjIwLjdMNzkgOTdsMTgtMTAuMlY2Nkw3OSA1NS44Wm0xNi44IDEwLjZMNzkgNzZsLTE2LjctOS42TDc5IDU2LjdsMTYuOCA5LjdabS0zMy45LjYgMTYuNyA5LjdWOTZMNjIgODYuM1Y2N1ptMTcuNSAyOVY3Ni43TDk2LjEgNjd2MTkuM0w3OS40IDk2WiIvPgo8L3N2Zz4K&style=flat-square&logoColor)](https://module-federation.io/)  
[![EJS](https://img.shields.io/badge/EJS-B4CA65?style=flat-square&logo=ejs&logoColor=a91e50)](https://ejs.co/)
[![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=flat-square&logo=webpack&logoColor=blue)](https://webpack.kr/)

## 💡 주요 기능

1. **Single-Spa Root**

   - Single-SPA 응용 프로그램을 시작하는 루트 HTML
   - `singleSpa.registerApplication`을 호출

2. **Single-SPA**

   - 여러 JavaScript 마이크로프론트엔드를 동적으로 통합하는 프레임워크
   - 페이지 새로고침 없이 Vue, Svelte, React 등 프레임워크 사용
   - 마이크로프론트엔드를 독립적으로 개발 및 배포 가능
   - Application, Parcel, Root로 구분

     - 각 싱글페이지를 책임 단위로 나누어 서로 다른 프레임워크로 구현 및 배포

3. **Module Federation**

   - Webpack 5 기반의 탈중앙화 아키텍처 패턴
   - 애플리케이션 간 코드 및 리소스 공유
   - 런타임에서 원격 모듈을 동적으로 로드
   - Remote와 Host로 구분

     - 스타일가이드를 공유하기 위해 사용

## 🧩 마이크로 프론트 애플리케이션 구성

![components](https://github.com/user-attachments/assets/0d7c340f-2e62-456e-98d1-d20480e39e9a)

## 📦 프로젝트 의존 그래프

### 개괄

```mermaid
flowchart BT
    Nav ==> Auth -.-> Style-Guide
    MFA-Root ==> Nav & Chat & Reminder & Record & Report & Review
    MFA-Root -...-> Style-Guide
    Record & Report & Review & Chat & Reminder --> Auth
    Record & Report & Review -.-> Style-Guide

    click MFA-Root "https://github.com/Daily1Hour/PickMe-MFA-Root"
    click Style-Guide "https://github.com/Daily1Hour/PickMe-Style-Guide"
    click Nav "https://github.com/Daily1Hour/PickMe-Nav-Application"
    click Auth "https://github.com/Daily1Hour/PickMe-Auth-Parcel"
    click Record "https://github.com/Daily1Hour/PickMe-Record-Application"
    click Report "https://github.com/Daily1Hour/PickMe-Report-Application"
    click Review "https://github.com/Daily1Hour/PickMe-Review-Application"
    click Reminder "https://github.com/Daily1Hour/PickMe-Reminder-Application"
    click Chat "https://github.com/Daily1Hour/PickMe-Chat-Application"

    subgraph info[<화살표 안내>]
        style info fill:#FAFAFA,stroke:#9F9F9F,stroke-width:1px
        direction BT
        A ==Single-SPA mount==> B
        A --Single-SPA utility--> C
        A -.Module Federation.-> D
    end
```

- 노드 클릭 시 각 프로젝트 이동
- 연관 관계는 [Single-SPA](https://single-spa.js.org/)와 [Module Federation](https://module-federation.io/)

- svelte: _Nav_
- vue: _Report_, _Chat_
- react: _Auth_, _Record_, _Review_

### 개요

```mermaid
flowchart BT
    %% 스타일 및 컴포넌트 공유
    subgraph styleguide[@pickme/style-guide]
        subgraph styles["/styles"]
            styleguide/styles/global.ts[global.css]
        end
        subgraph vue["/vue-components"]
            styleguide/vue/components[Shared Components]
        end
        subgraph react["/react-components"]
            styleguide/react/chakra-ui-system.jsx[chakra-ui-system.jsx]
            styleguide/react/components[Shared Components]
        end
    end

    %% Single-SPA Parcel 앱
    subgraph auth[@pickme/auth]
        auth/ChakraProvider[ChakraProvider]
    end
    auth/ChakraProvider -.-> styleguide/react/chakra-ui-system.jsx

    %% Svelte 앱
    subgraph nav[@pickme/nav]
        nav/auth[parcel/auth]
    end
    nav/auth ==>|object| auth

    %% React 앱
    subgraph record[@pickme/record]
        record/ChakraProvider[ChakraProvider]
        record/Components[Components]
    end
    record:::delegate -->|utility| auth
    record/ChakraProvider -.-> styleguide/react/chakra-ui-system.jsx
    record/Components -.-> styleguide/react/components

    %% Vue 앱
    subgraph report[@pickme/report]
        report/Components[Components]
    end
    report:::delegate -->|utility| auth
    report/Components -.-> styleguide/vue/components

    %% Microfrontend 루트 앱
    subgraph mfa-root[@pickme/mfa-root]
        mfa-root/microfrontend-layout.html[microfrontend-layout.html]
        mfa-root/index.ejs[index.ejs]
    end
    mfa-root ==> nav
    mfa-root ==> record
    mfa-root ==> report
    mfa-root/index.ejs -.-> styleguide/styles/global.ts

    %% 대표 앱 표시
    classDef delegate stroke-width:3px;
```

- 각 애플리케이션(_Nav_, _Chat_, _Reminder_, _Record_, _Report_, _Review_)들은 **MFA-Root**에서 Single-SPA 애플리케이션으로써 동적 호출됨.
- *Auth*는 *Nav*에 Single-SPA 파셀로써 동적 호출됨.
- *Auth*는 각 애플리케이션들에 유틸리티로써 동적 호출됨.
- **Style-Guide**는 MFA-Root에 스타일 제공을 위해 Module Federation으로 동적 호출됨.
- *Style-Guide*는 각 애플리케이션에 공유 컴포넌트 제공을 위해 Module Federation으로 동적 호출됨.

## 🏗️ 아키텍처 다이어그램

![fe](https://github.com/user-attachments/assets/8986df40-26e4-4cdf-8d4d-1ad97b4f5f1b)

1. 각 마이크로프론트엔드는 _GitHub Actions_ CI/CD를 통해 빌드되어 *S3*에 정적 파일로 저장됨.
2. *CloudFront*가 *S3*의 정적 파일을 CDN으로 배포함.
3. Importmap 타입의 JSON을 *CloudFront*를 통해 배포하여 동적 리소스 매핑 제공.
4. Root 프로젝트의 레포지토리 변경 사항을 *Amplify*가 감지하여 자동 배포함.
5. 사용자가 _Route53_ DNS로 접근하면 *Amplify*가 루트 파일을 클라이언트에 전송함.
6. 클라이언트는 Importmap을 통해 각 Single-SPA 리소스를 동적으로 불러옴.
7. `singleSpa.registerApplication`을 사용해 개별 마이크로프론트엔드를 동적으로 통합함.

## 🚀 실행 방법

### 환경변수

```python
IMPORT_MAPS_URL= # 개별 애플리케이션 리소스 매핑 주소
```

### 서버 실행

```sh
$ npm run start
```
