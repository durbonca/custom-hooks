# useFetch Hook

example:

```
    const url = 'https://api.github.com/users/octocat/repos'
    const { data, loading, error } = useFetch(url);
```

url is required, data, loading and error are optional.