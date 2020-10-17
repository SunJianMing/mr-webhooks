echo '开始构建。。。'

#拉取代码
echo 'pull code'
git pull

echo '开始构建'
docker-compose down
docker-compose up -d --force-recreate --build
