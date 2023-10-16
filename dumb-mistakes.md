# Dumb Mistakes

I was passing an object inside of props to a child component but then trying to access the properties in the object without destructuring first. So I was doing this: (data)=> blah, blah, but I needed to do this: ({data})=> blah, blah. That was when I was passing image info from ImageList to ImageShow. It took me ridiculous amount of time to figure out what was wrong.

I just spent an hour trying to figure out why Unsplash API request wasn't working, when I'd somehow copied the access key incorrectly.

It took me forever to figure out how to conditionally call <ImageShow> in the ImageList component. I needed to do photos.length > 0 ? <ImageShow ...> : []. I was trying for a long time to leave out the length property and rely on the truthy-ness of photos, totally forgetting that an empty array is truthy.

