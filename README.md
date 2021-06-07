# React + Typescript + Apollo Client + Next.js 테스트 예제

해당 프로젝트는 다음 프로젝트들을 참고하여 제작되었습니다.

1. 벨로퍼트 리액트 튜토리얼 : [멋진 투두리스트 만들기](https://react.vlpt.us/mashup-todolist/01-create-components.html) > CSS는 거의 다 해당 앱을 참조하였습니다.
2. Apollo graphql 공식 튜토리얼 프로젝트 : [apollo-graphql-fullstack-official-tutorial](https://github.com/stemmlerjs/fullstack-tutorial)
3. stemmlerjs Apollo 상태 관리 예제 : [https://github.com/apollographql/ac3-state-management-examples]
4. Apollo 블로그 게시물
   1. [Testing Apollo Client Application](https://www.apollographql.com/blog/frontend/introduction-to-testing/)
   2. [Apollo Client & Client-side Architecture Basics](https://www.apollographql.com/blog/apollo-client/architecture/client-side-architecture-basics/)
5. [프론트엔드에서도 TDD가 가능하다는 것을 보여드립니다.](https://github.com/CodeSoom/frontend-tdd-feconf2020/blob/todo-app/src/Item.test.jsx)

## Context API

### from...

![props drilling](https://i.imgur.com/hX8jjXG.png)

### to...

![contextAPI](https://i.imgur.com/lYiiIZF.png)

## 아폴로 클라이언트를 이용한 테스트 방법

### unit test

- 1. ReactiveVar (전역변수 테스트)
  - 해당 객체의 Mock을 만든다.
- 2. query / mutation test (hook test)
  - operation을 통해 연산이 되는지를 확인한다.
  - query는 query결과 data를 mock 하는 경우 아니면 테스트 할 필요 없음
- 3. component test
  - component의 관심사는 `상태`의 반영이다.
    - There are two things we could test for in React components: `presentation` and `(optionally) behavior.`
  - 이벤트 핸들러와 데이터를 `mock`하여 해당 핸들러가 호출되는지, 데이터가 `render`되는지 테스트 한다.

### 테스트 타입

- Unit Test

  - 컴포넌트 자체만 테스트
    - presentation component : render 여부와 handler 호출 여부
    - container component :
      - query : success / error / loading
      - mutation : data
    - page component : render 여부

- Integration Test

  - Page 단위로 UseCase 기반 `feature` 테스트

- End-to-end testing

  - 백엔드와 DB 전체 연동해서 `feature` 테스트
    ![E2E](https://wp.apollographql.com/wp-content/uploads/2021/04/end-to-end_test.png)

- 아폴로 테스트 특징
  - 클라이언트 (로컬변수)를 쓰면 cache 설정도 해줘야 함.
