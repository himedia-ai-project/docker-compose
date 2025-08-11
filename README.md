# docker-compose 프로젝트

이 프로젝트는 Docker Compose를 활용하여 백엔드(Spring Boot)와 프론트엔드(React)를 통합 개발/배포할 수 있도록 구성되어 있습니다.

## 주요 변경점 및 구조

### 1. 불필요한 파일 정리
- `.idea/workspace.xml`, `.env`, `src/setupProxy.js` 등 개발 환경 및 개인 설정 파일이 삭제되어 버전 관리가 깔끔해졌습니다.

### 2. Backend(Spring Boot)
- `서동권/Backend/demo/`
- `config/WebConfig.java`에서 CORS 설정이 주석 처리되어 있습니다. 실제 배포 환경에서는 주석을 해제하고 환경에 맞게 CORS를 적용해야 합니다.

### 3. Frontend(React)
- `서동권/Frontend/count/`
- `Dockerfile`이 단일 스테이지로 변경되어 개발 서버(npm start)로 실행됩니다. 실제 배포 시에는 정적 파일 빌드 후 serve 등으로 제공하는 것이 더 안전합니다.
- `setupProxy.js`가 Docker 환경에 맞게 backend 서비스로 프록시를 설정하며, 에러 핸들러가 추가되어 있습니다.
- `src/Components/Count.tsx`에서 API URL 기본값 및 콘솔 로그 추가, useEffect 의존성 배열 수정, POST 요청 경로 및 응답 처리 방식이 개선되었습니다.

### 4. Docker Compose
- 프론트엔드와 백엔드가 Docker Compose 네트워크 내에서 통신할 수 있도록 구성되어 있습니다.

## 개발 및 배포 팁

- 환경 변수는 Docker/CI 환경에서 안전하게 주입하는 것이 좋습니다.
- 개발용과 배포용 Dockerfile을 분리하면 더 효율적으로 관리할 수 있습니다.
- 프록시 경로와 백엔드 주소가 Docker Compose 네트워크와 일치하는지 항상 확인하세요.

---

더 궁금한 점이나 추가 설명이 필요하면 말씀해 주세요!
