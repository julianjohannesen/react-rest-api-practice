Dev Notes


We're using Unsplash's API. The documentation is here: https://unsplash.com/documentation

Steps:

- create an account and register a new application (https://unsplash.com/oauth/applications)
- get the API endpoint for searches from the Unsplash docs (https://api.unsplash.com/search/photos)
- get the accept version header info: Accept-Version: v1
- get the authentication header info: Authorization: Client-ID YOUR_ACCESS_KEY That can be included in the URL like this: https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
- NOTE: Searching for and downloading images doesn't require authorization, only authentication. If you want users to be able to interact with photos, e.g. "like" a photo, then you have to use the [authorization workflow](https://unsplash.com/documentation/user-authentication-workflow)
- get the 

Errors will look like this:
```js
{
  "errors": ["Username is missing", "Password cannot be blank"]
}
```

## Other Notes
I spent a lot of time early on learning how to use uuid to generate keys and how to use useEffect to generate those keys only once each time the component receives new data. What a long side track.
