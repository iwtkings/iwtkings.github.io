#!/bin/sh

git pull

yarn build

git add .
git commit -m 'update'
git push

echo '更新成功'
