Learning AngularJS
===========

### Controller

Controllers should be fine grained units of business logic that are easy to test. Keep the controller small and focused
specifically on the business logic of the view that it is responsible for. Controllers should never manipulate the DOM.

### Scope

Scope ($scope) is the glue between application controller and the view. It is responsible for storing application models
and providing a context for the expressions that operate on those models.

### View

The View is the HTML after Angular compiles it. Created with HTML templates using directives, two-way data binding and filters.

### Model

The Model in an AngularJS application is nothing more than native JavaScript data structures such as arrays and objects
that you expose via Services and dependency injection. Most often it is a remote server.

