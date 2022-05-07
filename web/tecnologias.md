#Tecnologias:
tailwind 
css
typescript
acessibilidade no ambiente web
headless UI 
Solid
Testes automatizados


#Comandos:
npm create vite@latest


dar nome ao projeto (web)
Done. Now run:
  cd web
  npm install
  npm run dev


npm install -D tailwindcss
npx tailwindcss init -p
npm install -D tailwindcss postcss
npm install -D tailwindcss postcss autoprefixer



#tentando desbugar
npm i (remover os pacotes do package json e deixar ele add denovo repetindo os comandos acima)

 

npm install phosphor-react
❯ npm install --save-dev tailwind-scrollbar

❯ npm install -D @tailwindcss/forms


  plugins: [

    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),


  ],

  ❯ npm install html2canvas


  
Componentes:
Função que retorna HTML 

function Button() {

  <h1>hello</h1>
  
}

Por padrão o nome do arquivo tem letra maíuscula



Propriedades:

Não pode ter varios componentes um embaixo do outtro, por exemplo tem de ter uma <div>.







#aula 3

❯ npm i typescript @types/node ts-node-dev -D
npx tsc --init

tsconfig.json 

"outdir": "./dist"
"rootDir": "./src",


npm i express

npm i -D @types/express

npm i prisma -D
npm i @prisma/client

npx prisma init 

criar o banco de dados através do comando model
npx prisma migrate dev

❯ npm install nodemailer
❯ npm install @types/nodemailer -D


❯ npm install jest -D
npx jest --init


❯ npm install ts-node -D

npm i -D jest @swc/jest
npm i @types/jest -D

npm i cors
npm i types@/cors -D



DATABASE_URL= "file:./dev.db"