# Week 7 - Q&A

## netlify.toml file

The netlify.toml file contains configurations specific to Netlify deployments. In the context of React SPAs:

- [[redirects]]: This denotes a redirect rule.

- from = "/\*": This wildcard pattern means that any route the user tries to access will be considered.

- to = "/index.html": This means that any route the user tries to access will always be redirected to the main index.html file.

- status = 200: This is the HTTP status code for "OK". It means the redirect will be treated as a standard route change, not as an error or temporary redirect.
