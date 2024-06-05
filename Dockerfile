# Use uma imagem de Node.js como base
FROM node:latest as build

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json (se existir) para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código-fonte para o diretório de trabalho
COPY . .

# Construa a aplicação
RUN npm run build

# Use uma imagem de Nginx como base para servir o aplicativo React
FROM nginx:latest

# Copie o build do React para o diretório onde o Nginx serve arquivos estáticos
COPY --from=build /app/build /usr/share/nginx/html

# Exponha a porta 80 para que o Nginx possa servir o aplicativo
EXPOSE 80

# O comando CMD é executado quando um contêiner é iniciado
CMD ["nginx", "-g", "daemon off;"]
