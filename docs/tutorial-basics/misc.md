---
sidebar_position: 20
---

# Miscellaneous

### zsh completion: `httpx --completions zsh`

![Shell Completion](../../static/img/shell-completion.png)

# Request/data pipeline

You can use request/data pipeline in your shell script code.

### request from pipeline

Read request from stdin: `echo "GET https://httpbin.org/ip" | httpx`
You can integrate httpx with your editor plugin by this way.

### request body from pipeline

You can overwrite request body from pipeline. For example:

```
### inspection http post
# @name post
POST https://httpbin.org/post
Content-Type: application/json

[ 1 ]
```

Then set request body from pipeline with `echo '[2]' | httpx post` or `httpx post < ./demo.json` .

### request body overwrite from data option

`--data` or `-d` option is used to read body data from text, file and http URL, and it is same with curl.

* Read text: `--data hello` or `--data=[1,2]`
* Read file: `--data @/path/to/file` or `--data ./demo.json`
* Read from HTTP URL: `--data https://httpbin.org/ip`

### default target to run

You can set default target to run by `--t ` option.

```
#!/usr/bin/env httpx --t myip --httpfile

### get my internet ip
# @name myip
GET https://httpbin.org/ip
```

### Generate http file OpenAPI

You can generate http file from OpenAPI json file by [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator)

```bash
$ openapi-generator-cli generate -i http://localhost:8080/v3/api-docs -g jetbrains-http-client -o openapi-testing
```
