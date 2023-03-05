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