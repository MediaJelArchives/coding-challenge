### Wine Taster Form

Current Flow: Choose wines -> choose wine tester -> fill out reviews.

Given more time I would implement:

- Better validation and type checking (Flow/TypeScript)
- Full CRUD
- More DRY using recompose patterns for HOC: https://www.apollographql.com/docs/react/recipes/recompose.html
- Better error handling: https://www.apollographql.com/docs/react/features/error-handling.html
- Testing
- Styling. I envision the following grid based UX that would pop up modal style.

![alt text](/resources/UX.jpg "UX mockup")

I was between several approaches to having a larger "session" filled with other form data (reviews):

- Use local data (apollo-link) to build up and then submit all at once
- Create the session first and then update the database on each change

Other package options for forms which could speed up the development process:

- https://github.com/final-form/react-final-form
- https://jaredpalmer.com/formik
- https://github.com/wittydeveloper/react-apollo-form

I went without using them for simplicity and in case the code needs to be re-used for Native.
Another approach to using apollo-link resolvers would be to use the <Query> component to directly mutate state, but using resolvers gives more flexibility later if full CRUD was added.

Also see comments on the data model for ideas on future expansion there.
