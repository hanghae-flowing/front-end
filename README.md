# Front-end

![KakaoTalk_20220405_214246514](https://user-images.githubusercontent.com/94155128/161767560-76757978-4ac3-4f5a-ae27-0048c1980906.png)


항해5기 D반 5조 실전프로젝트 기린이

브레인 스토밍을 기반으로 한 협업 워크 스페이스

<a href="https://kirini.co.kr/">기린이의 기획 바로가기</a>
<br>

 <image src="https://img.shields.io/website?down_message=DOWN&up_message=UP&label=server&url=http://52.79.220.93:8888/health"/>  
 <image src="https://img.shields.io/website?down_message=DOWN&up_message=UP&label=testServer&url=http://13.209.41.157"/>

<br>

##  📅 프로젝트 기간

MVP 개발 : 2022년 3월 4일 - 2022년 4월 8일

유지 보수 및 기능 개선 : 2022년 4월 18일 - 2022년 5월 29일 (변동 가능)

<br>
<h2>프로젝트 소개</h2>
떠오르는 아이디어는 있는데 어떻게 기록하고 정리하면 좋을지에대해 고민해보신적 있으실 거라 생각합니다. 
그리고 이미 시중에는 아이디에이션을 위한 좋은 협업툴들이 존재합니다. 
하지만 많은 툴들은 나누어져 있어서 이리저리 옮겨 다니며 기록해야 한다는 불편함이 존재합니다.
어려운 사용법과 떨어지는 접근성으로 인해 좋은 프로그램들을 제대로 활용하지 못한다는 단점도 존재합니다.
그래서 저희는 만약 파편화된 툴에서 필요한 기능들만 넣어서 하나로 합친다면 어떨까 하는 생각을 했습니다. 
그렇게 기린이의 기획 이라는 프로젝트를 기획하게 되었습니다. 
기린이의 기획은 기획이 처음인 사람들을 위한 브레인 스토밍 기반 실시간 협업툴입니다. 

<br>

## ⚛️ 기술 스택
<span><img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"></span>
<span><img src="https://img.shields.io/badge/Redux toolkit-764ABC?style=for-the-badge&logo=Redux&logoColor=white"></span>
<span><img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white"></span>
<span><img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"></span>
<span><img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=Amazon AWS&logoColor=white"></span>
<span><img src="https://img.shields.io/badge/S3-569A31?style=for-the-badge&logo=Amazon S3&logoColor=white"></span>
<span><img src="https://img.shields.io/badge/GitHub Actions-2088FF?style=for-the-badge&logo=GitHub Actions&logoColor=white"></span>


<br>
<h2> 기술 스택 선정 이유 </h2>
1.React
<br>
2.React Query
<br>
 - 본 프로젝트의 가장 큰 특징은 실시간으로 협업이 가능하다는 점입니다.
기획 초기 단계에 sockjs와 stomp를 활용하여 소켓 통신으로 협업을 구현하려 했으나
mvp까지의 개발 시간을 고려하여 데이터 폴링 방식으로 적용하는 것으로 스펙 다운을 진행했습니다.
데이터 폴링을 위해 데이터 캐싱에 용이하고 필요한 데이터만 업데이트할 수 있는 리액트 쿼리가 적합하다고 판단하여 적용하였습니다.
그리고 쿼리를 커스텀 훅으로 분리하여 코드를 최적화하였습니다.
<br>
3.Redux-toolkit
<br>
4.React-router-dom(V5)
<br>
 - UI를 url에 따라 분기 처리하여 렌더링하기 위해 선택.
<br>
5.axios
<br>
6.react-dnd
<br>
 - drag and drop을 구현하기 위해 프로젝트를 선택하고 drag 함수가 동작할 때 리덕스에 해당 프로젝트 Id 값을 저장하도록 하였고
특정한 폴더 위에 겹쳐진 상태를 useState를 이용하여 감지한 후 폴더에 onDrop 함수가 실행되면 프로젝트 ID와 폴더 ID를 mutate하여 db에 저장해주도록 하였습니다.

<br>
7.react-draggable
<br>


## 🏄‍ 팀원

<table>
  <tr>
    <td align="center"><a href="https://github.com/mael1657"><img src="https://avatars.githubusercontent.com/u/81210350?v=4" width="100px" /></a></td>
    <td align="center"><a href="https://github.com/eehs2000"><img src="https://avatars.githubusercontent.com/u/35942942?v=4" width="100px" /></a></td>
   
  </tr>
  <tr>
    <td align="center"><b>이주현</b></td>
    <td align="center"><b>이한솔</b></td>
    
  </tr>
  <tr>
    <td align="center"><b>🪓Frontend</b></td>
    <td align="center"><b>🔨Frontend</b></td>
   
  </tr>
</table>

### 📬 커밋 종류
> 수정한 종류에 따라 커밋 메시지를 선택

|메시지명|설명|
|---|---|
|feat|새로운 기능 추가 관련|
|fix|버그 수정|
|test|테스트 코드, 리팩토링 테스트 코드 추가|
|refactor|코드 리팩토링(기능향상)|
|chore|빌드 업무 수정, 패키지 매니저 수정|
|docs|문서 수정(md, git관련 파일, 이미지파일 수정)|
|style|코드 formatting, 세미콜론(;) 누락, 코드 변경이 없는 경우|

### 📢관련 이슈
> 작성한 커밋과 관련된 이슈 번호를 매핑

- 이슈 번호뒤에 아래에 써놓은 명령어를 붙여서 커밋 날리면 자동으로 이슈가 close 된다.   
`close / closes / closed / fix / fixes / fixed / resolve /resolves / resolved`
```
< 예시 >
[BE] feat: Flowing close #1
```
