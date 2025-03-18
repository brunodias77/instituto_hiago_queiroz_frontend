# Usa uma imagem do Node.js como base para a construção da aplicação Angular
FROM node:18 AS build

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia apenas arquivos essenciais primeiro (evita build desnecessário ao mudar código)
COPY package*.json ./

# Instala as dependências da aplicação
RUN npm install --frozen-lockfile

# Copia o restante do código da aplicação
COPY . .

# Compila a aplicação Angular
RUN npm run build --configuration=production

# Usa uma imagem do Nginx como base para servir a aplicação Angular
FROM nginx:1.23

# Remove o arquivo padrão de configuração do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos da build Angular para a pasta do Nginx
COPY --from=build /app/dist/frontend_hiago_queiroz /usr/share/nginx/html

# Copia o arquivo de configuração personalizado do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80 para acesso à aplicação
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]
