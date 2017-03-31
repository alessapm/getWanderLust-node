A site that uses the kayak widget API and either Instagram or Flickr API to 
pair image searches with flight searches. getWanderLust is the first truly 
photo-inspired travel site, allowing you to feed your Wanderlust by viewing 
crave-worthy photos of your desired destinations. 

Notes 
*use geolocation for site?
*OR have popup at the beginning for input city
*When photos are loaded have a button for "Let's Go!" that sparks the Kayak API call
*have an animation in WanderLust icon for pink green and blue, whimsical 
*Users can store past searches(just the name of the place and the date searched
with a button for "checkout ${place} again") and pin photo (saves photo URL to 
load on dashboard)
*would need Users 
    (first_name, 
    last_name, 
    email, 
    password_digest, 
    place_origin)
*would need table saved_searches 
(user_id, place_destination, date)--need timestampz
*would need table saved_photos 
(user_id, photo_location, url)


pink: #FF8686
 navyish rgb(37,3,94)
cornfeild ish- rgb(253,213,51)


font-family: 'Pacifico', cursive;
font-family: 'Maven Pro', sans-serif;
