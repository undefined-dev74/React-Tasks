## With the basic understanding of react by your side, let’s dive deeper into the world of React. Let’s read below topics in detail:

1: JSX
Ans: JSX stands for Javascript extended, JSX is an extension in Javascript, It's also know as Synthetic Sugar, JSX help in writing markup language and syntex in form of
HTML. Javascript Does not intrepreat directly JSX code because browser will not understand code written in JSX. With the help of
Babel and webpack it's transpile into normal Javascript code than browser understand it.
State
Ans: In the world of React State is heart of any App, State is a plain object which store information of App and it's properties.State is a single source of truth, means it should not update directly. Instead we can use `setState` function to update the state.

Props
Ans: `props` is known as data of any component, a props holds some information about it's component so that we can render it.`Props` can hold user click event, anytype of ID, and component , function itself.

Class Components
Ans: A Class based component is knows as Stateful component. Every react app should have atleast one Class based component. Class components extends `React.extends` function from React library. we can create Class based component using `Class` reserve keyword in Javascript. It has it's own lifecycle method such as `componentShouldUpdate`, `ComponentDidMount`, `ComponentWillUpdate`.It's make task easy in react maintain resuable code and so.

Functional Components
Ans: Functional based components in React knows as \*Dumb, Stateless Component. Since functional based components does not have it's own lifecycle method.We use to create functional component when we have to render some information and only share props to the children component.We can create
functional component using following syntext:

`const App = function(){}` // Normal functional declaration
`const App = () => {}` // Using Arrow function

Virtual DOM
Ans: Virtual DOM usages Real presentation of DOM (Document Object Modal) in it's keep copy of RealDOM in memory,whenever a compoenent get update
it's does not load entire DOM insted it's refresh only part of DOM which get updated.It's fast and update browser content smooth than Real DOM.

# ##Assignment no 3

React Deep Dive - Assignment -
Send us the answers to the questions above.

Can we write code without JSX?
Yes, but using `{}` braces, Although it does effect the React performance and code will look unmanagble and less understable.

What is the benefit of writing ReactJs code with JSX?
Since JSX is Javascritpt extended markup so it usages JS beind the scene and we don't have to DOM concept for writing a componenet.

Does Browser understand JSX?
No Broweser does not understand JSX it needs to be transpile behind the scene using babel and Bebpack.

What would happen if we directly run JSX in Browser?
It will throw error.

What is state and why do we use it?
React State is heart of any App, State is a plain object which store information of App and it's properties.State is a single source of truth, means it should not update directly. Instead we can use `setState` function to update the state.
We use state to maintain data of React in it's application .

Can we directly modify or update the state?
Although we can update directly the state but it's not a good approach basically, because we should not mutate the state directly instead we should use setState method or UseState react hooks.

How do you update a state variable?
let take an example,
`let state = {counter :0} setState(counter++)`
Can anyone update the state variable?
No

Are props mutable?
What can we pass in Props? (object, Components, string, functions)
What is the use of state variables?? Can’t we use normal variables?
What is the use of props?
Is there any other way of passing data between components?
When to use functional Components?
Are there any advantages or disadvantages of using functional components?
What are the lifecycle methods of class components and in which order are they called?
What are keys and why do we use them in lists?
Why does React maintain a Virtual DOM?
