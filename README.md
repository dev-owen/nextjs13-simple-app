## ElasticSearch 프로젝트

### 주제 : ES를 활용하여 피드백 리스트에서 검색 기능을 구현한다.

### 기술 스택

- TypeScript
- Next.js(FE + API)
- ElasticSearch
- Prisma ORM
- SQLite DB
- pnpm
- zustand (Global State Management)

### 기능

1. 피드백 인덱스에서 키워드 필드 기반 도큐먼트 검색(텍스트 타입)
2. 검색 결과 내에서의 점수 집계(검색으로 나온 결과들의 max, min, avg 등)
3. 점수를 바탕으로 피드백 집계 (범위 형태로 구현, 예를 들면 7~10점 사이의 피드백만 검색)
4. 2, 3번 작업을 키바나로 시각화
5. 운영 환경 배포

## 1. Build a Simple API in Next.js 13 App Directory

In this article, you will learn how to build a basic RESTful API in the new Next.js 13 app directory. Next.js 13.2 introduced a new approach to building APIs in the App Router (app), where we can create custom request handlers for a given route using the Web Request and Response APIs.

![Build a Simple API in Next.js 13 App Directory](https://codevoweb.com/wp-content/uploads/2023/04/Build-a-Simple-API-in-Next.js-13-App-Directory.webp)

### Topics Covered

- Run the API Project on your Machine
- Setup the Next.js 13 Project
- Database Migration with Prisma ORM
- Initialize the Prisma Client
- Create the CRUD API in Next.js 13 Route Handlers
    - Handle GET and POST Requests
    - Handle GET, PATCH, and DELETE Requests
- Test the CRUD API
    - Add a Feedback Item
    - Get a Feedback Item
    - Edit a Feedback Item
    - Fetch All the Feedback Items
    - Delete a Feedback Item
- Conclusion


Read the entire article here: [https://codevoweb.com/build-a-simple-api-in-next-js-13-app-directory/](https://codevoweb.com/build-a-simple-api-in-next-js-13-app-directory/)


## 2. Build a Simple Frontend App in Next.js 13 App Directory

In this tutorial, you'll learn how to create a frontend application in the new Next.js 13 app directory. Specifically, we'll be building a feedback application that allows users to create and delete feedback.

![Build a Simple Frontend App in Next.js 13 App Directory](https://codevoweb.com/wp-content/uploads/2023/05/Build-a-Simple-Frontend-App-in-Next.js-13-App-Directory.webp)

### Topics Covered

- Run the Full-Stack Next.js 13 Project Locally
- Testing the Feedback Application
- Install Dependencies and Configure Tailwind CSS
- Create the HTTP Request Functions
- Setup Application State with Zustand
- Create the Client-Side Components
        - Create the Rating Component
        - Create the Statistics Component
        - Create the Form Component
        - Create the Feedback Item Component
        - Create the Feedback List Component
        - Group the Client-Side Components Together
- Render the Feedback Components in a Server-Side File
- Conclusion

Read the entire article here: [https://codevoweb.com/build-a-simple-frontend-app-in-nextjs13-app-directory/](https://codevoweb.com/build-a-simple-frontend-app-in-nextjs13-app-directory/)

## 3. Elastic Search in Nextjs

[Article](https://makerkit.dev/blog/tutorials/nextjs-elasticsearch)
