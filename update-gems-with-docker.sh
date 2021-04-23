#!/usr/bin/env bash

JEKYLL_VERSION=`grep FROM _docker/Dockerfile  | sed $'s/^[^0-9]*//'`

docker run --rm \
  --volume="$PWD:/srv/jekyll" \
  -it jekyll/jekyll:$JEKYLL_VERSION \
  jekyll build
