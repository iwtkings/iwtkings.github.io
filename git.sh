#!/bin/sh

git pull

rm -rf docs
yarn build

git add .
git commit -m 'update'
git push
git push

echo '更新成功'
