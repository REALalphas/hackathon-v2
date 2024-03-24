# Hackathon V2 (second year)
*We took second place in the Hackathon championship hosted by Astral*

Theme: Cellular network map and speed test with geodata export.

Tools used:
- Qwik (Main framework)
- Fastify (For production rendering)
- Maptiler (For map, no cell tower data in this version)
- Maptiler JS SDK (For point data)
- Axios (for browser to talk with server)

## Install
```shell
npm i
```

## Start
### Dev

```shell
npm run dev
```
Go to [localhost:5173](http://127.0.0.1:5173) (+?)

### Prod

Build project
```shell
npm run build
```
Run server
```shell
npm run serve
```
Go to [localhost:3000](http://127.0.0.1:3000)
