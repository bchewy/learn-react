# Brian's React Notes

Just some notes on react, what to take note of and what's new and what's cool and what's amazing.
I am following [these]() tutorials on React from youtube. This is all free and all can be found on youtube.

### How do i note things down?

I note the things down right in the code-file itself, you'll spot comments like this...

```javascript
//Arrow function syntax fix 'this' binding event handler's problem
handleIncrement = () => {
  console.log("Increment Clicked", this);
  //this.state.count++; // -- Do not modify state like this directly
  // Why not? --React does not call render() method and view is not method

  // Tells react that state of component is going to change
  // and thus render() method will be
  this.setState({ count: this.state.count + 1 });
};
```

Taken from `counter-app/src/components/counter.jsx`
