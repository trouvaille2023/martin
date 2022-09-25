docker stop martin-vue

sleep 2
docker rm martin-vue

docker rmi martin-vue


echo "demo-vue packing..."
sleep 3
docker build -t martin-vue .
echo ""

echo "demo-vue running..."
sleep 3

docker run \
  -p 80:80 \
  --name martin-vue \
  -d martin-vue
