 Assignment-005

Answer to the Question no (05)

 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
 getElementById→ Selects only one element by its unique id.  
 getElementsByClassName → Selects all elements with the same class, returns an HTMLCollection.  
 querySelector → Selects the first element that matches a CSS selector.  
 querySelectorAll → Selects all elements that match a CSS selector, returns a NodeList.  


 2. How do you create and insert a new element into the DOM?
 Use `document.createElement() to create a new element.  
 Then use appendChild() or `append() to insert it into the DOM.  


 3. What is Event Bubbling and how does it work?
 Event Bubbling means when an event happens on a child element, it moves up (bubbles) to its parent elements.  
 Example: click on button → goes to div → body → document.  


4. What is Event Delegation in JavaScript? Why is it useful?
 Event Delegation means placing a single event listener on a parent element to handle events from its child elements.  
 It is useful because it saves performance and avoids adding multiple listeners to many child elements.  


 5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() → Stops the default action of an element (like stopping a link from redirecting).  
stopPropagation()→ Stops the event from bubbling up to parent elements.  
