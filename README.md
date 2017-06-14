# Herein I shall play around with React and Redux and theoretically learn something useful.

### Collection of videos that I've used to get a bearing.
- [Traversy Media -- Useful standalone video that uses sublime.](https://www.youtube.com/watch?v=NCshQ290g38)
- [thenewboston -- Nice general overview (source of this fork)](https://www.youtube.com/playlist?list=PL6gx4Cwl9DGBbSLZjvleMwldX8jGgXV6a)
- [Kurt Weiberth -- More in depth overview (haven't completed)](https://www.youtube.com/playlist?list=PLQDnxXqV213JJFtDaG0aE9vqvp6Wm7nBg)

----------

## TODO:
- Learn why this has Sass and why I should learn that too.
   - Looks like it's just better css. Looks nice.
   - [thenewboston -- Just the intro video in a series. I won't watch it all.. maybe later.](https://www.youtube.com/watch?v=sCbXTrsl7NU)

----------

##### Old README summary:
```npm install; webpack; npm run start```

(I will keep this here, moved to the end, moreso just to keep terminology fresh)

<img src="http://i.imgur.com/DUiL9yn.png" width="300px" />

##### Extracted READMEs from js folders:

----------

# Containers

Containers fetch state data and use it to render (display) components.
- state data will become components props

Containers are similar to components. However, only containers have access to state data in Redux.
- components are sometimes called "dumb components" or "presentational components"

----------

## Containers vs. Components

Containers are very similar to components, the only difference is that containers are aware of application state. If
part of your webpage is only used for displaying data (dumb) then make it a component. If you need it to be smart and
aware of the state (whenever data changes) in the application then make it a container.

----------

# Reducers

Reducers take in actions and update part of application state.
- We combine all reducers into a single object before updated data is dispatched (sent) to store
- Your entire applications state (store) is just whatever gets returned from all your reducers

```
const allReducers = combineReducers({
    users
});
```

----------

# Actions

Actions are just things that happen *(seriously, that's it)*.
- most actions are user events (clicked a button, submitted a form, etc...)
- can also be other events such as an API call returning data

### Actions are (usually) made up of two parts


**type** - describes the action that occurred
```
ADD_USER_BUTTON_CLICKED
```


**payload** - *(optional)* any extra data that is needed
```
{
    first: "Samantha",
    last: "Williams",
    age: 52,
    description: "Samantha is a good woman with a heart of gold."
}
```

## Actions vs. Action Creators

Action creators are functions that create objects, actions are the objects that get created.

**Action creator**
```
export default function () {
    return {
        first: "Samantha",
        last: "Williams",
        age: 52,
        description: "Samantha is a good woman with a heart of gold."
    }
}
```

**Action**
```
{
    first: "Samantha",
    last: "Williams",
    age: 52,
    description: "Samantha is a good woman with a heart of gold."
}
```

## What happens next?

All actions are automatically sent to **all** reducers. It is the reducers job to determine how to handle that action
(can also just ignore it).
