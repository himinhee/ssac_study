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
``` 

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
The <dl> tag defines the description list, the <dt> tag defines the term (name), and the <dd> tag describes each term:
  

### HTML Media
https://www.w3schools.com/html/html_media.asp

......
