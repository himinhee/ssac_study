# SSAC Front-end study

## md 파일(Markdown) 문법
- '#' 갯수는 많을수록 작은 글씨 & 소제목
- `(backtick) : 소스코드 표시를 위한 박스표시를 아래와 같이 생성

## 표기법

- 사용자가 이름을 지정하는 경우
- 여러 단어를 사용해서 이름을 지정하는 경우

```
html-css : kebab case

html_css : snake case - Python

htmlCss : camel case - Java script, JAVA, C, C++, etc. (가장 흔히 사용)

HtmlCss : Pascal case - Java script, JAVA, C, C++ (특히 class 이름으로 사용)
```

```
In this Front End classroom, 
- HTML( Class, id ) : kebab case
- File/Folder name : snake case
- Javascript : Camel case
- Javascript Class : Pascal Case
```

## HTML

### HTML Introduction
https://www.w3schools.com/html/html_intro.asp

> 웹페이지 구조 표시
> 
> 웹페이지 컨텐츠 표시
> - 텍스트 컨텐츠
> - 멀티미디어 컨텐츠 : 이미지, 비디오, 오디오

```
An HTML element is defined by a start tag, some content, and an end tag:
<tagname>CONTENTS</tagname>

** Empty element : start tag만으로 구성된 
```

** Empty element : start tag만으로 구성된 
```
### HTML Elements
https://www.w3schools.com/html/html_elements.asp
> 포함관계
> - 기준에 따라서 조상요소(ancestor), 부모요소(parent), 자식요소(child), 자손요소(decendant)
```
<html>
  <body>
    <h1>Web page</h1>
  </body>
</html>

* html : body의 부모요소, h1의 조상요소
* body : html이 자식요소, h1의 부모요소

### HTML Headings
https://www.w3schools.com/html/html_headings.asp
### HTML Attributes
https://www.w3schools.com/html/html_attributes.asp
- HTML attributes provide additional information about HTML elements.
- cf) HTML 속성은 attribute라고 불리나, CSS 속성은 property로 불림
- Attributes usually come in name/value pairs like: name="value"
### HTML Paragraphs
https://www.w3schools.com/html/html_paragraphs.asp
### HTML Hyperlinks
https://www.w3schools.com/html/html_links.asp
- Use 'a' tag : stems from anchor
- 'href' attribute : hyperlink reference
- 'target' attribute " target = "_blank" 새창에서 열기
### HTML URL
https://www.w3schools.com/html/html_urlencode.asp
인터넷주소
- IP(Internet Protocol) 주소 : 192.168.0.1 - 이게 원래 주소
- 도메인(Domain name) 주소 : www.naver.com
- DNS(Domain Name Server/System) : domain->ip 로 바꿔주는 기능
URL(Uniform Resource Locators)
- 자세한 주소 : 도메인주소 + 해당 페이지 폴더위치/파일위치
- 인터넷 주소를 표현하는 가장 큰 범위
- 프로토콜 : http, https, ftp, etc.
### HTML File Path
https://www.w3schools.com/html/html_filepaths.asp
Absolute Path : the full URL to a file
- 출발 지점에 상관없이 항상 같은 리소스를 찾을 수 있도록 표시하는 주소/경로
- ex) https://www.w3schools.com/images/picture.jpg
- 장점 : 항상 같은 자원의 위치로 찾아올 수 있음
- 단점 : 주소 표시 길이가 길다
Relative Path points to a file relative to the current page
- 출발 지점을 기준으로 리소스 경로를 표시하는 주소/경로
- Case 1 : images/picture.jpg - "images" folder located in the current folder, or ../images/picture.jpg
- Case 2 : /images/picture.jpg - "images" folder located at the root of the current web
- 장점 : 주소 표시 길이가 짧다
- 단점 : 기준에 따라서 표시 방식이 매번 달라짐
### HTML Table
https://www.w3schools.com/html/html_tables.asp
HTML Table Generator
https://www.tablesgenerator.com/html_tables
### HTML Lists
https://www.w3schools.com/html/html_lists.asp
Description List 
The dl tag defines the description list, the dt tag defines the term (name), and the dd tag describes each term:
### HTML Media
https://www.w3schools.com/html/html_media.asp
HTML Video : Video tag를 이용
- 주요 attributes : controls, autoplay, muted, loop (자동 재생을 원하는 경우, 크롬정책때문에 autoplay와 함께 꼭 muted가 있어야 한다.)
- 배경으로 비디오를 쓸 경우, 당연히 controls 생략
HTML Images
- alt : alternative for blind 
HTML Youtube
- Youtube에서 공유-퍼가기-iframe tag 내용 그대로 활용
- ?autoplay=1&mute=1 을 주소에 추가

### HTML Forms
각종 입력을 받는 기능
Javascript와 연동되어 있음

### HTML Video

https://www.w3schools.com/html/html5_video.asp

### HTML Youtube

https://www.w3schools.com/html/html_youtube.asp

alt : alternative

### HTML Video

https://www.w3schools.com/html/html5_video.asp

### HTML Youtube

https://www.w3schools.com/html/html_youtube.asp

### HTML Semantics

https://www.w3schools.com/html/html5_semantic_elements.asp

### HTML Block & Inline

https://www.w3schools.com/html/html_blocks.asp

> 포함관계에 대한 특성
>
> - 블럭요소 : 다른 블럭요소, 인라인 요소, 콘텐츠 모두 포함 가능
> - 인라인 요소 : 다른 인라인 요소, 콘텐츠는 포함 가능, 블럭 요소는 포함 불가능
> - 예외 : a - 인라인 요소이지만 블럭요소도 포함 가능

### HTML Entities

https://www.w3schools.com/html/html_entities.asp

> HTML 마크업 용도로 Fix된 기호는 대체 코드를 사용
> <, >, &, ", '
> 공백을 여러칸 띄울 때 : 대체코드를 사용
> 브라우저 렌더링용 대체코드 : ⓒ => &copy;

### HTML id, class

https://www.w3schools.com/html/html_id.asp
https://www.w3schools.com/html/html_classes.asp

> id 특성
>
> - 하나의 HTML 문서 내에서 동일한 id 이름을 사용할 수 없음.
> - 하나의 HTML 문서 내에서 고유해야 함.
> - 하나의 HTML Element에 id이름을 여러 개 붙일 수 없음.
>
> class 특성
>
> - 하나의 HTML 문서 내에서 동일한 class이름을 여러번 사용할 수 있음.
> - 하나의 HTML Element에 여러가지 class이름을 붙일 수 있음.

## CSS

### CSS Introduction

https://www.w3schools.com/css/css_intro.asp

### CSS Syntax

https://www.w3schools.com/css/css_syntax.asp

### CSS Selector

https://www.w3schools.com/css/css_selectors.asp
표기는 모두 kebab case : '-' 으로 모두 연결

### CSS How To

https://www.w3schools.com/css/css_howto.asp

> js에서 css를 제어할 때 인라인 방식으로 제어함.

### CSS Text

https://www.w3schools.com/css/css_text.asp

### CSS Font

https://www.w3schools.com/css/css_font.asp

> Web Font
>
> - Goolgle Font : https://fonts.google.com/ (영문, 한글)
> - Noonnu Font : https://noonnu.cc/ (한글)

### CSS Box Model

https://www.w3schools.com/css/css_boxmodel.asp

> Box Model 구성 요소
>
> - Content(width/height)
> - padding
> - border
> - margin

### CSS width/height

https://www.w3schools.com/css/css_dimension.asp

> width/height 기본특성
>
> - 블럭 요소 : width는 부모요소에 맞춰져서 채워짐, height는 자식요소에 맞춰짐.
> - 인라인 요소 : width/height 적용되지 않음 - 레이아웃 구성 용도로 사용하지 않음.

> 단위
>
> - px : px 값으로 고정
> - % : 부모요소를 기준으로 특정 비율크기로 설정

### CSS Padding

https://www.w3schools.com/css/css_padding.asp

### CSS Margin

https://www.w3schools.com/css/css_margin.asp

### CSS Border

https://www.w3schools.com/css/css_border.asp

> border 축약 표현에 방향을 더해서 표현하는 내용으로 정리

### CSS Background

https://www.w3schools.com/css/css_background.asp

\*\* CSS 상속

> 부모요소에 적용된 CSS style이 자식요소에 적용되는 것
> 모든 css 속성이 상속되는 것은 아님

\*\* color 코드값

> CSS에서 16진수 코드값과 10진수 코드값을 사용할 수 있음.
> 16진수 코드값 : #16진수 숫자 6자리(0~9, a~f).
> 10진수 코드값 : rgb(10진수숫자,10진수숫자,10진수숫자)
> 10진수 코드값 + 투명도 표시 : rgba(10진수숫자,10진수숫자,10진수숫자,0.0~1.0)

### CSS Flexbox

https://www.w3schools.com/css/css3_flexbox_container.asp

> 박스 배치 제어를 위한 display:flex 속성및 배치 관련 속성을 부모요소에 적용함.

> flex-direction 속성
>
> - 박스 배치 방향 제어
> - 가로배치, 세로배치 모두 제어가 가능함
> - 가로배치가 기본 값

> justify-content, align-items 의 방향이 flex-direction의 설정에 의해서 뒤바뀔수 있음

### 반응형 웹

> 반응형 웹, 적응형 웹
> OSMU(One Source Multi Use) 여부로 반응형과 적응형을 구분
> Web Front End 에서의 OSMU의 기준은 HTML Source code => Contents

### RWD Viewport

https://www.w3schools.com/css/css_rwd_viewport.asp

### Media Query

https://www.w3schools.com/css/css_rwd_mediaqueries.asp

> @media 키워드를 사용해서 break point를 설정을 하고, 그에 따른 독리된 코드 블럭을 실행할수 있게 하는 것
> break point(변경점)

```
Ex) pc 해상도 : 1024px ~ 1920px / phone 해상도 : 320px ~ 640px

@media screen and (min-width:1024px) and (max-width:1920px){}
@media screen and (min-width:320px) and (max-width:640px){}

Ex) pc 해상도(기준) : 해상도 설정 하지 않음 / tablet 해상도 : ~ 900px / phone 해상도 : ~ 640px

body{color:red;}

@media screen and (max-width:900px){}

@media screen and (max-width:640px){}

```

\*\* 가운데 배치/정렬 방식

> 가로방향
>
> text-align:center - 텍스트, 인라인요소
> margin-left:auto, margin-right:auto - 가로길이가 정해진 블럭요소
> justify-content:center - flex 박스 배치

> 세로방향
> align-items:center - flex 박스 배치
> line-height : 텍스트

### CSS display

https://www.w3schools.com/cssref/pr_class_display.asp

### 복합(조합) 선택자

> div p : 공백 - 자손 선택자 : 자식요소, 자손요소 모두 선택
> div>p : > - 자식 선택자 : 자식요소만 선택

### 가상 클래스

> Element의 상태 구분
>
> - a:link
> - a:visited
> - a:hover
> - a:active

> Element의 특정 요소를 선택
>
> - .list-item:first-child(첫번째 요소 선택)
> - .list-item:last-child(마지막 요소 선택)

### Github 용어정리

> repository : 저장소
>
> - local repository
> - remote repository
>
> clone : 복제
>
> - remote repository를 local repository로 복제
>
> staging : commit할 파일을 선택하는 것(<-> unstaging)
>
> commit : staging된 파일의 업데이트를 Fix(확정)하는 것
>
> push : commit된 snapshot(업데이트 완료된 상태)을 remote repository에 업로드(업데이트) 하는 것
>
> pull : remote repository의 상태를 다운로드하여 local repository의 상태를 업데이트 하는것(fetch + merge)
>
> fetch : remote repository의 상태를 가져오기만 하는 것
>
> merge : 가져온 업데이트된 상태들을 하나로 합치는 것
>
> pull request : 각각 업데이트된 서로 다른 개발 내용을 remote repository 관리자가 merge 하도록 요청하는 것

# Front End Effect

### CSS Animation

https://www.w3schools.com/css/css3_animations.asp

> keyframe : 특정한 상태의 변화가 발생되는 부분의 프레임

### CSS 2D transform

https://www.w3schools.com/css/css3_2dtransforms.asp

> 변형 적용하는 메소드 종류
>
> - translate(), rotate(), scale() ...

### CSS Transition

https://www.w3schools.com/css/css3_transitions.asp

> Timing Function : 등속/가속/감속 속도 개념이 적용된 모션
>
> motion 구현
>
> - 2가지 상태 표현 : 시작 상태 / 변형된 상태
> - 2가지 상태 사이에 과정을 표현

> motion 적용 시기를 제어 => javascript 로 제어

### CSS Position

https://www.w3schools.com/css/css_positioning.asp

> position 속성값
>
> - absolute : 문서에 포함되기 때문에 스크롤시 같이 움직임
> - fixed : 문서에 포함되지 않기 때문에 스크롤시 고정됨
>
> - 좌표로 위치를 설정 : top, right, bottom, left 키워드
> - 박스와 박스를 포갤 수 있음.
> - 포개진 박스의 순서를 설정할 수 있음
