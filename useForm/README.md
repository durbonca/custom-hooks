# useCounter Hook

example:

```
    const initialState = {
        name: '',
        lastName: '',
        email: ''
    }

    const { values, handleInputChange, reset } = useCounter(initialState);
```

initialState is optional, if not provided, the hook will use an empty object as initial state.