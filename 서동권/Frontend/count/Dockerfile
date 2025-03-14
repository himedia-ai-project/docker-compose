# 1. Node.js 이미지를 기반으로 사용 (버전은 프로젝트에 맞게 조정)
FROM node:18-alpine

# 6. 컨테이너에서 사용할 포트 설정
EXPOSE 3000

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. 패키지 파일 복사 및 의존성 설치
COPY package.json package-lock.json ./
RUN npm install

# 4. 소스 코드 복사
COPY . .

# 5. React 개발 서버 실행
CMD ["npm", "start"]



