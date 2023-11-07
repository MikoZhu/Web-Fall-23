# Week 12 Class

### useRef Hook

Before Changes:

- We had `useState` to keep track of what was typed into the form fields. Whenever you typed something, it updated the state.
- There was a function called `handleInputChange` that updated this state every time you typed or made changes to any input field.

After Changes:

- Now, we use `useRef` instead. This creates a sort of "bookmark" in each form field, which lets us see what's in there without needing to store it in a state that updates all the time.
- We got rid of `handleInputChange` because, with `useRef`, the form fields keep track of what's typed in without our help.
- When the form is submitted, `handleSubmit` now just looks at each "bookmark" to get the current values and then clears the fields by setting them back to the start.

Why did we make these changes?

- `useState` makes the component update every time you type something. But `useRef` doesn't do that; it just keeps an eye on the form field quietly.
- When you only want to know what's in the form at the end when it's submitted, `useRef` can make things simpler because it doesn't bother updating every single time you press a key. It's like taking a picture at the end instead of taking a video the whole time.
- If the form was really big, `useRef` might make it work faster because it's not constantly updating.

What's better about using `useRef` here?

- It's simpler if you don't need to watch the form fields closely as they change.
- It's a bit quicker for big forms because there's less updating going on.

But remember, if you want to do things like check what's being typed right away (like showing an error if the email doesn't look right), `useState` is usually the better choice because it's designed for that kind of thing. `useRef` is good for when you want to just let the form do its thing and only care about the values at the end.
