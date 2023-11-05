# Clone Minimal

# Table of contents


# Muc dich: 
- Clone lai du an Minimal dua tren source code
- Thuc hanh du an giong thuc te de nam bat flow lam viec trong du an, cach to chuc code va lam viec nhom


# Day 1:
## Init, Setup project, Config
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
  - Create branch dev: git checkout -b dev
  - Lock branch main
  - Require a pull request before mergin to branch dev
- Create issue "config eslint, prettierrc, editorconfig"
  - install modules: npm install
  - npm i prettier
    - Config prettier: .prettierrc, .prettierignore
  - npm i eslint-config-airbnb-typescript
    - Config Eslint: convert .eslintrc.cjs -> .eslintrc, .eslintignore
  - add editorconfig to VSC
    - Config editorconfig: .editorconfig
  - npm run dev (start project)
  - CTRL + C to end the server
  - push to git/ repo gihub
    - edit gitignore  
    - Create branch : git checkout -b config/formatter
    - git branch (config/formatter)
    - git add .
    - git status git commit -m "#2 feat(eslint, prettier, editorconfig,...) - config code format, ide, gitignore"
    - git push origin config/formatter
    - Compare a pull request (leader) -> Merge to dev branch
    - Compare a pull request (leader) -> Merge to main branch (warning)
  ---
  - Edit the tscofig, viteconfig to like minimal (by guide (history commit))
  - Config file: tsconfig.json, vite.config.ts 
    - npm i @types/node (to add path)
  - push to git/ repo gihub

## Config structure
- Structure react file (Youtube WEB Dev Simplified)
- Folder structure
  - src
    - assets : chua cac files tinh
    - api
      - auth
    - components
    - hooks
    - layouts
    - locales (times and languages)
      - use-locales.ts
    - pages
    - sections (elements of pages)
    - routes : duong dan
      - sections
        - index.tsx
    - themes
      - index.tsx
      - typography.tsx
      - palette.ts (color schema)
      - shadow.ts
    - types
    - utils : ham phu tro, ho tro
    - mocks: dua du lieu data ao vao de hien thi len trang web (api ao)
- Create folders follow the stucture
- Structuer themes (SETUP base Of CSS)
  - download MUI: 
    - npm i @mui/types
    - npm install @mui/material @emotion/react @emotion/styled
    - npm install @mui/material @mui/styled-engine-sc styled-components
    - npm install @mui/base 
    - Copy config @mui/* to package.json
    - npm i | reset setup MUI like minimal project
  - dowload emotion, babel, .... (see in the package.json)
    - npm i @emotion/cache @emotion/react @emotion/styled
    - npm i @babel/core
    - npm i @babel/plugin-syntax-flow @babel/plugin-transform-react-jsx
    - npm i @vitejs/plugin-react
    - npm i @types/lodash.merge
  - SETUP typography.tsx
    - Convert px to em : remToPx, pxToRem
    - const `primaryFont`
    - Watch font config in Figma design H1: font-family, font-size, font-weight, line-height, 
      - font-weigh: bold(700), regular(400), medium(500)
    - const `typography`
    - function `responsiveFontSizes`
    - Declare typography - font-weight `TypographyVariants`

  - SET pallete.ts (color schema) : class children inherit class father by rest and spread
    - Watch color schema in figma design
    - type ColorSchema : bang mau
    - const GREY, PRIMARY, ... , ERROR
    - Add more color to text: ligter, darker ...
    - const COMMON
      - Add action: hover, focus ...
      - function palette : dark - light mode
  
  - SET shadow.ts
    - 
  - themes/index.tst
    - ThemeProvider
  - Fix '@mui/material/styles' : invalid module name in augmentation (optional)

- Demo a page 
- push to git/ repo gihub in branch config/


## Demo a page
- src/ Route
  - npm i react-router-dom@6.15.0
  - index.tsx
    - function SimpleLayout
  - main.tsx
    - const mainRoutes
    - Suspense: show a loading content before the page loaded
  - src/layout/main/layout.tsx
    - function MainLayout (cau truc)
  - Add BrowerRouter to Main.tsx to navigate router
  - Edit App.tsx
  - Flow main.tsx - App.tsx - sections/index.tsx - Mainlayout

- npm i react-helmet-async (allow manage head tags : title)
  - add <HelmetProvider> to main.tsx
  - add <Helmet> to pages

- Home page
  - create pages/home.tsx
    - function HomePage()
  - create Homeview ()
    - Export from homeview.tsx to index.tsx
  - Analysis layout in figma design
    - Header
    - Footer
  - npm i framer-motion | roll effection in page


## Review design
- Overall to Details
- Overview the website design (Minimal design system | page 1): app, layout
- Review SETUPS: GuIDLINE, COLOR, TYPOGRAPHY, SHADOW, COMPONENTS
  - Base on setup to config colors (primary, secondary, ....) in projects
- Review LAYOUTS: 

## Error that may occur
- version MUI
- '@mui/material/styles' : invalid module name in augmentation
  - check error: 
    - npm run dev
    - npm build
  - possible resolution: 
    - npm i (the error resolved)
    - delete nodemulde -> npm i
    - config file: tsconfig.json, vite.config.ts 
      - npm i @types/node (to add path)
  - reason: version does not match "typescript": "^5.0.2" -> "typescript": "^5.2.2",

## Notes
- .ts : define a funtion, config, ... , .tsx (embeded JSX) return a jsx coponents (UI element)
- every folder need a index.tsx file to export other files to apply detructuring


-----------------------
# Day 2
- Clone a repo | pull from dev branch
- change to dev branch

- Create a demo page (about-us)
  - Create a route
    - routes/sections/main.tsx
  - Create a button in home page to navigate
    - sections/home/home-view.tsx: <Link>
  - Create a page
    - pages/about-us.tsx
  - Create a view
    - section/about/about-view.tsx

- Push to github in feature branch

- Pull a request to github
  - Close pull request (project do not approve)
  - In case that the pull request can be approved
    - Resolve conflicts in the pull request
    - Check conflict and edit/delete
    - Commit merge
    - Review and merge to dev branch (Leader)
    - Delete branch if need (Leader)

### Create home page
- Review layout in design | src/layout/main/layout.tsx
  - config-layout.tsx
- Add <ThemeProvider> to App.tsx
  - theme/index.tsx
  - shadow.tsx
  - Create ThemeProvider - import to App
  - Dua vao theme nay update sau nay

- Create the logo
  - Export svg file from figma
  - src/components/logo
    - logo.tsx, index.ts

- Custome Router Link
  - routes/component/router-link.tsx


- Create nav Deck
  - layout/desktop/nav-desktop.tsx
  - types.ts
  - layout/main/config-navigation.tsx

- Install Icontify
  - npm i @iconify/react
  - Custom icontify 
    - components/icontify

- Create header
  - src/layout/main/header.tsx
  - 

-------------
# Fix bug
- Copy package.json, package-lock.json
- Reset node modules
```
npm install -g rimraf
rimraf node_modules 
```
- Khi tạm thời cần tạm dừng công việc hiện tại và chuyển sang một branch khác
```
# Tạm thời lưu lại các phần công việc còn đang làm dở
$ git stash -u

# Chuyển sang một branch khác và làm việc
$ git checkout -b other-branch
~làm việc, làm việc, làm việc~
$ git add <các file cần thiết>
$ git commit -m "commit message"

# Trở về branch cũ
$ git checkout origin-branch

# Lấy lại các nội dung công việc đang làm dở trước đó
$ git stash pop

Source: https://viblo.asia/p/19-bi-kip-ban-co-the-dung-khi-pham-sai-lam-voi-git-dWrvwdmPRw38
```

- Change branch when the file is edited
  - git log --oneline
  - git reset -soft head
  - git restore . (unstage)
  - git checkout branch_name



---------------


# Day 4: Build Nav Bar
- Config theme
  - css.ts: 
    - Theme: from material/styles
    - MenuItemClass, checkBoxClass, .... : from material
    - code bgBlur: độ mờ

  - custom-shadow.ts
    - customsize palete from palete.ts
    - create light mode and dark mode
    - createShadow
    - export customShadow
    - declare module: extend Theme of MUI/material
  - index.tsx
    - import customShadow
    - add CSSBaseLine lib
- Header.tsx
  - style: sx
  - Container
  - Badge
    - style
    - badge content
    - Label
      - create src/component/label
  - Loggin button: layout/_commen/login-button
  - Setting button: layout/_commen/setting_button
  - Build Navbar indesktop
    - type.ts
    - styles.ts
    - nav-item.tsx
    - nav-list.tsx
    - nav-desktop.tsx

- src/config-global.ts
  - cau hinh chung cho du an

- src/components/animate
- edit error in lazy moion

# 30/10/2023
- build footer


## Note:
- https://css-tricks.com/using-react-portals-to-render-children-outside-the-dom-hierarchy/
