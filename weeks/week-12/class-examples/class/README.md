# Week 12 Class

## The UseRef Hook

### What is it ?

In really simple terms, the useRef hook allows us to interact with DOM Elements easily and it saves us computing power

The useRef is a hook provided by React that returns a mutable ref object. This object has a property called .current, which is initialized to the argument passed into useRef. "mutable" refers to the ability of the ref object's .current property to be changed or modified. When you have a mutable object in programming, it means that the object's state or contents can be altered after it's been created.

- You create a `ref` by calling `useRef()`, and you initialize its `.current` property to whatever you pass as an argument to `useRef()`.
- The `.current` property is mutable, meaning you can later change what it holds. For example, if you initially set it to `useRef(0)`, `.current` starts off as 0. Later on, you could change it to any other value, like `.current = 5`, and `.current` will now be 5.
- Despite these changes, React won't re-render the component just because a `ref`'s `.current` property was mutated. This is different from state variables created with `useState`, which do cause re-renders when they are updated.

### Why do we use it ?

- Persistence Without Rerenders: Unlike state variables managed by `useState`, updates to a ref's `.current` property do not trigger component rerenders. This persistent state is ideal for values that you want to keep track of across renders without causing a rerender each time the value changes.
- Direct DOM Access: `useRef` can be used to store a direct reference to a DOM node. This is particularly useful when you need to interact with an element imperatively, such as setting focus, reading values, or integrating with third-party DOM libraries. Once you pass a ref object to an element via the `ref` attribute, you can interact with that element directly through `useRef.current`.

In summary the useRef hook is handy in React when you want to remember something without constantly telling the whole app about it. It lets you quietly keep track of things or talk to parts of your webpage directly, without the usual update announcements that can slow things down.

### useRef Hook Example

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

## The `useLayoutEffect` Hook

### What is it?

Much like `useRef` simplifies interactions with DOM elements, `useLayoutEffect` is another hook React provides to handle updates that need to be synchronized with DOM changes. It's quite similar to the `useEffect` hook but with a key difference in timing.

`useLayoutEffect` is called right after all DOM mutations. This means it executes before the browser has a chance to paint the changes to the screen. This timing is crucial for certain operations that need to measure or modify the DOM before it becomes visible to the user.

### Why do we use it?

Synchronized DOM Updates: `useLayoutEffect` ensures that any changes you make to the DOM are completed and applied before the browser updates the screen. This is especially important if you need to measure the DOM elements, like their height or width, and then make some changes based on those measurements. If you did this in `useEffect`, you might see a flicker on the screen because the DOM would be measured and altered in separate screen updates.
