Adding data to Firebase via curl:

curl -X POST -d '{"name": "Joe Ward", "email" : "jo "@joewardpr", "title" : "Founder, Social Response App","avatar_url" : "https://pbs.twimg.com/profile_images/623286900221198336/xv9PL-26_400x400.jpg" }' 'https://cbvoice.firebaseio.com/politicos.json'