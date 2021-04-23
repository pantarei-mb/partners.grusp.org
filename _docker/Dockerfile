FROM jekyll/jekyll:3.8

RUN apk add --update ruby-dev build-base libffi-dev cmake

RUN apk add --update python pixman-dev cairo-dev pango-dev jpeg-dev libpng-dev giflib-dev

CMD ["jekyll", "serve"]
