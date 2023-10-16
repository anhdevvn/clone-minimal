# Clone Minimal

# Table of contents


# Muc dich: 
- Clone lai du an Minimal dua tren source code
- Thuc hanh du an giong thuc te de nam bat flow lam viec trong du an, cach to chuc code va lam viec nhom


# Day 1:
## Init, Setup project
- npm create vite@latest
- Init project
  - Create repo in github (leader)
  - Create issue "Init project" (leader)
  - ```git
    git init
    git add README.md
    git status
    git commit -m "#1 feat(readme.md) - init project"
    git branch -M main
    git remote add origin https://github.com/anhdevvn/clonimal.git
    git push -u  origin main | git push -f origin main (warning in using)
  ```
- - Review and comment (leader)
- - Create branch dev: git checkout -b dev
- Create issue "config eslint, prettierrc, editorconfig"
  - install modules: npm install
  - npm i prettier
    - Config prettier: .prettierrc, .prettierignore
  - npm i eslint-config-airbnb-typescript
    - Config Eslint: convert .eslintrc.cjs -> .eslintrc, .eslintignore
  - add editorconfig to VSC
    - Config editorconfig: .editorconfig
  - npm run dev (start project)
  - edit gitignore  
  - Create branch : git checkout -b config/formatter
  - git branch
  - git add .

