---
sidebar_position: 7
---

# Spring HTTP Interface with httpfile

[Spring 6.0 HTTP Interface](https://docs.spring.io/spring-framework/docs/6.0.0-M5/reference/html/integration.html#rest-http-interface)
is a very important feature of Spring 6.0.  You don't need to use WebClient to do HTTP requests, but instead adjust to Interface + Annotation style, 
example code is as follows:

```java
@HttpExchange("https://httpbin.org")
public interface HttpBinClient {
    @GetExchange("/ip")
    MyIp myIp();

    @PostExchange("/post")
    PostResponse post(@RequestBody String body);

    record MyIp(String origin) {
    }

    record PostResponse(String url, Map<String, String> headers, String data) {
    }
}
```

Now you can use HTTP interface with httpfile, just like this:

```java
@HttpExchange("https://httpbin.org")
public interface HttpBinClient {
    @GetExchange("/ip")
    MyIp myIp();

    @PostExchange("/post")
    Mono<PostResponse> post(@RequestBody String body);

    record MyIp(String origin) {
    }

    record PostResponse(String url, Map<String, String> headers, String data) {
    }
}
```

Pros:

* No need to introduce lots of HTTP annotations: `@RequestHeader`, `@RequestBody`, `@PathVariable`
* Reuse existing http file, and http file is easy for test
* GraphQL over HTTP support too
* Misc: yes, you can use `//@mock ` to introduce mock for request

Project repository: https://github.com/servicex-sh/httpfile-spring