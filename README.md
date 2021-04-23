GrUSP partners helpers
---

####Site notes

To run [Jekyll][jekyll] from terminal:

```
$ jekyll serve
```

or, via Docker:

```
docker-compose up -d
```


When [Jekyll][jekyll] is up, the site can be tested locally to [0.0.0.0:4000](http://0.0.0.0:4000)

---


### Using Docker to build the website:

```
docker-compose run --rm site jekyll build
```

In case of Ruby / Gems errors:

```
./update-gems-with-docker.sh
```
