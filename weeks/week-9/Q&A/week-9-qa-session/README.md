# Week 9 - Q&A

## Question 1 - .env file setup

Create a .env at the root of this folder and add your env Variables :)

Like this:

VITE_OPENDB_KEY=yourKeyHere

### example

VITE_OPENDB_KEY=b8b70837ecdf33d41538d9964f7c8a94

### Importing in a component

`const apiEnv = import.meta.env.VITE_OPENDB_KEY`

Let's break down the sequence const apiEnv = import.meta.env.VITE_OPENDB_KEY; into its individual components and explain each one.

`import.meta`:

- `import.meta` is an object in ES modules that holds metadata about the current module. In the context of tools like Vite, it provides access to environment variables and other configurations.

`.env`:

- The `.env` property on `import.meta` is used by tools like Vite to expose environment variables to the application.

`VITE_OPENDB_KEY`:

- This represents a specific environment variable. When using Vite, variables prefixed with `VITE_` are made available to the frontend. Thus, `import.meta.env.VITE_OPENDB_KEY` retrieves the value of the `VITE_OPENDB_KEY` environment variable.

---

In essence, the sequence fetches the value of the `VITE_OPENDB_KEY` environment variable and assigns it to `apiEnv`, making it accessible within the application.

## Question 3 - netlify.toml file

The netlify.toml file contains configurations specific to Netlify deployments. In the context of React SPAs:

- [[redirects]]: This denotes a redirect rule.

- from = "/\*": This wildcard pattern means that any route the user tries to access will be considered.

- to = "/index.html": This means that any route the user tries to access will always be redirected to the main index.html file.

- status = 200: This is the HTTP status code for "OK". It means the redirect will be treated as a standard route change, not as an error or temporary redirect.
