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
