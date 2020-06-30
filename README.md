# 스토리북과 크로매틱을 이용한 비주얼 UI 테스팅

- [스토리북 StoryBook](https://storybook.js.org/)
- [크로매틱 Chromatic](https://www.chromatic.com/)

## 테스팅 프로세스

- 본 저장소를 클론
- 스토리북 작성
- `npm run storybook` 으로 로컬 테스트
- [UI 테스트] 개인 크래매틱 계정으로 배포
  - 예: package.json 파일 scripts.onlydel
- storybook 브랜치로 commit and push
- master 브랜치로 머지 PR 요청
  - github action 으로 크로매틱 계정 배포
  - 또는 수동으로 `npm run chromatic` 실행 배포
- [크로매틱 마지막 빌드](https://www.chromatic.com/builds?appId=5ebd775e742ec8002267b88d&branch=storybook) 에서 UI 테스트
- [크로매틱 PR](https://www.chromatic.com/pullrequests?appId=5ebd775e742ec8002267b88d) 에서 PR 승인

_## 스토리북 저장소 포크_

_- PR을 위해 포크해서 사용합니다._
_- `https://github.com/realgrid/realgrid2-storybook` 저장소를 포크_
_- `cd realgrid2-storybook` 폴더로 이동_
_- `yarn` 또는 `npm install` 로 종속 패키지 설치_
_- 저장소에 코드를 커밋 할 때 자동으로 배포되는 기능(Action)은 제거. 추후 필요시 저장소 settings에서 수정 가능._

## 크로매틱 프로젝트 로그인

- https://www.chromatic.com/start 깃허브 아이디로 로그인
- https://www.chromatic.com/builds?appId=5eb96783c6eb1f0022e3e8a4 접속
- 깃허브 저장소의 참여자(contributor) 정보를 기반으로 크로매틱 참여자가 자동으로 매핑됨

## 스토리북 만들기

- 새로운 스토리 파일 만들기
  - 파일명 규칙은 본인 아이디를 붙여서 다른 사람과 충돌을 최소화.
  - 폴더명에 번호는 큰 의미는 없고 폴더 정렬과 구분을 위한 용도
  - 혹시 중복 되는 내용이라도 상관 없다. 하지만 중복을 최소화 하기 위해서는 기능별로 작성자를 구분 하는 것도 방법
  - 파일 확장명은 \*.stories.js 로 해야한다.
- 스토리 추가하기
  - 컴포넌트명, 스토리명 한글 가능
  - 필드, 데이터, 공용 모듈등 파일은 공유 폴더 `_common`에 생성하고 가능한 하나의 파일에 하나의 정보를 담는다.
- 스토리 로컬 테스트
- 노트 애드온 사용
- 액션 애드온 사용
- 애드온의 문제점
  - 빌드 화면에서 특정 컴포넌트의 스토리로 들어 갔을때 애드온이 실행되지 않는다.
  - ViewStoryBook으로 들어가야만 애드온 확인 가능
  - 따라서 애드온 보다는 화면에 정보를 표시하는 방법으로 전환

## 크로매틱 배포하기

- 배포는 수정된 그리드의 기능에 대한 전체 리뷰를 위한 것임.
- `yarn chromatic` 또는 `npm run chromatic` 으로 배포 실행
- https://www.chromatic.com/builds?appId=5eb96783c6eb1f0022e3e8a4 에 접속해서 빌드 확인
- 개인적인 테스트는 개인 계정에서 해 볼수 있다.
  - onlydel: chromatic --project-token=k8g8fv8hty

## 크로매틱 사용하기

- 깃허브 연동 로그인
- 빌드 목록 화면
- 빌드 결과 화면
- PR 사용 리뷰

## 계속 업데이트

- 이 테스팅 방법의 효과에 대해서는 긍정적이긴 하지만 실측된 근거가 없다.
- 실제 적용하고 실행 하면서 더 좋은 방향으로 조금씩 수정되면 좋겠다.

## 코드 작성 팁, 주의사항

### setTimeout()을 이용한 이벤트 테스트

- setTimeout() 100ms 정도는 스냅샷 캡쳐가 된다.
- 예1) 특정 셀을 선택해서 에디터가 보이도록 동작을 구현할 경우 에디터가 보이는 상태로 스냅샷을 찍을 수 있다.
- 예2) 그리드에 포커스되었는지 확인할 경우, 포커스 될때 화면의 특정 부위에 메시지를 표시하는등 방법으로 스냅샷을 찍을 수 있다.
- 즉, 특성 상태를 만드는 api 가 있는 경우에는 setTimeout()에서 api 호출 후 상태를 확인하는 자동 테스팅이 가능하다.

### body 에 직접 element를 추가 하는 방식은 주의 필요

- 스토리가 변경될때 body에 추가된 모든 노드를 새로 랜더링 하지 않는것 같다.
- 아마 id=root 인 노드의 자식만 다시 만드는것 같다.
- 즉, body.addendChild() 같은 함수를 쓰면 노드가 누적될 수 있다.론

- `git clone https://github.com/realgrid/realgrid2-storybook.git` 으로 클론하세요.
- `cd realgrid2-storybook` 폴더로 이동
- `yarn` 또는 `npm install` 로 종속 패키지 설치
- 저장소에 코드를 커밋 할 때 자동으로 배포되는 기능(Action)은 제거. 추후 필요시 저장소 settings에서 수정 가능.
