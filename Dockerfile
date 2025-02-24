ARG APP_ENV=dev

FROM kmamiz-web AS web
FROM node:lts-alpine AS base

WORKDIR /kmamiz
COPY .env .
COPY package.json package-lock.json ./

FROM base AS installed
RUN ["npm", "i"]
COPY . .

FROM installed AS dev-installed
RUN ["npm", "run", "test"]

FROM installed AS prod-installed

FROM ${APP_ENV}-installed AS build
RUN ["npm", "i", "-g", "typescript"]
RUN ["tsc"]

FROM base AS prod
ENV NODE_ENV=production
RUN ["npm", "i"]
COPY --from=build /kmamiz/dist .
COPY --from=web /kmamiz-web/dist dist
COPY ./src/services/worker/*.js ./src/services/worker/
COPY ./envoy/wasm/*.wasm ./wasm/
CMD ["node", "index.js"]