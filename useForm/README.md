# useForms Hook

example:

```
    const initialState = {
        name: '',
        lastName: '',
        email: ''
    }

    const [ values, handleInputChange, reset ] = useForms(initialState);
```

initialState is optional, if not provided, the hook will use an empty object as initial state.
