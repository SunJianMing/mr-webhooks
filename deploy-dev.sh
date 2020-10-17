echo 开始构建。。。

git pull

docker-compose down
docker-compose up -d --force-recreate --build
