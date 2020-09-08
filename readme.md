# css-ddd

Domain Driven Development is easy to reason about because the code reflects the domain of the application. As the css web specifications have to be backwards compatible and they only support key-value properties, it's hard to appraoch it with a domain driven mindset.

This package can help developers understand how the web spec works, as well as use the functionality within to create domain driven applications.

What will happen over time is that the overhead of understanding the type structure will ensure that code is as bug free as possible: Exceptions will be visible at compile time.

If you have your css reset (remove browser specific elements), then you'll be able to use an additive approach.

The first half of the project is to get most of the types in a DDD structure. The second half will be adding a parser so it's W3C CSS compliant.
