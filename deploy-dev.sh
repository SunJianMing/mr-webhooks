echo 开始构建。。。
echo 拉取代码
git pull
echo 关闭容器 重新构建容器
docker-compose down
docker-compose up -d --focre-recreate --build
