docker stop $(docker ps -aq) && docker rm $(docker ps -aq)
docker rmi $(docker images -a -q)
docker build -t react-task-manager .
docker run --name task-manager-dashboard -p 3000:80 react-task-manager