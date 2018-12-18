### Wine Taster Form

Flow: Choose wines -> choose wine tester -> fill out reviews.

UX mockup:

Approaches to having a larger "session" filled with other form data (reviews):

- Use local data (apollo-link) to build up and then submit all at once
- Create the session first and then update the database on each change

Given more time I would implement:

- Styling as per mockup
- Better validation and type checking
- Full CRUD
- More DRY using recompose patterns: https://www.apollographql.com/docs/react/recipes/recompose.html
- Better error handling: https://www.apollographql.com/docs/react/features/error-handling.html
- Testing

Other package options for forms which could speed up the development process:

- https://github.com/final-form/react-final-form
- https://jaredpalmer.com/formik
- https://github.com/wittydeveloper/react-apollo-form

I went without using them for simplicity and in case the code needs to be re-used for Native.
Another approach to using apollo-link resolvers would be to use the <Query> component to directly mutate state, but using resolvers gives more flexibility later if full CRUD was added.

Also see notes on the data model for ideas on future expansion here.
