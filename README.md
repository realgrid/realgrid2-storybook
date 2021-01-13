# Lxper front-end storybook 

## How to run 

localhost에서 확인 시 

```
1. npm install 
2. npm run storybook  
```

정적파일로 제공 시 
```
1. npm install
2. npm run build-storybook
3. storybook-static 폴더를 제공 
```

## How to use 

스토리북에 올릴 컴포넌트를 src/stories에 
컴포넌트.js, 컴포넌트.stories.js 쌍으로 대응시켜서 작성 

```
ex) 
src/stories/Button.js
src/stories/Button.stories.js 
src/stories/Header.js
src/stories/Header.stories.js 
src/stories/Page.js
src/stories/Page.stories.js 
```