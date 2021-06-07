# NodeJS Boilerplate

## Stack
- [x] Typescript
- [x] EsLint
- [x] Prettier
- [x] Webpack
- [x] ExpressJS
- [x] Sequelize Typescript + Migration
- [x] Test in PostgreSQL
- [x] CORS
- [x] Morgan
- [x] Helmet
- [x] Bcrypt

## Development

### Install

```
git clone git@github.com:JuniYadi/nodejs-express-sequelize-typescript.git
cd nodejs-express-sequelize-typescript
npm ci
```

### Environment

```
cp .env.example .env
```

### Start Server

```
// compile typescript
npm run watch

// running expressjs
npm run dev
```

### Sequelize Migration

```
// compile `/src/database` directory to `/sequelize`
npm run sequelize-gen

// sequelize migrate database
npm run sequelize-migrate 
```

## Production

### Build Source

```
npm run build
```

### Install Package

```
cd dist
npm install
```

### Start Server

```
npm run start
```

## FAQ

#### Why Need Install Package Again in Production?

Because we only need the application needed by our source code, in the "dist" folder there is a "package.json" file that has been optimized by webpack.

## Author
- Juni Yadi @ https://github.com/JuniYadi
- License: MIT