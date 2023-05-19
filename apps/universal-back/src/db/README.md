# simple Setup db

### first get docker desktop from link [DockerDesktop](https://www.docker.com/products/docker-desktop/)
### then pull mongo image:
``` 
docker pull mongo
```
### then run:
```
docker run --name my-mongo -d -p 27017:27017 mongo
```

### if you want starter data run:
```
npx md-seed run
```

### clear db:
```
npx md-seed run --dropdb
```