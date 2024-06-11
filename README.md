## HTMX EXPRESS Hello World with TS

An starting point I would use to develop Express Apps using HTMX and TS.  

I spent a couple of hours trying to set up a simple page using HTMX without any success, turns out the error was on the console and I didn't realized for a good time:  

```
Access to XMLHttpRequest at 'http://localhost:3000/' from origin 'null' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

Using a `CORS` lib is sufficient to resolve the problem.
