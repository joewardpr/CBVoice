Adding data to Firebase via curl:

curl -X POST -d '{"name": "Joe Ward", "email" : "joewardpr@gmail.com", "twitter" : "@joewardpr", "title" : "Founder", "org" : "SocialResponseApp.com", "avatar_url" : "https://pbs.twimg.com/profile_images/623286900221198336/xv9PL-26_400x400.jpg" }' 'https://cbvoice.firebaseio.com/politicos.json'
curl -X POST -d '{"name": "Cecil Clarke", "email" : "", "twitter" : "@mayorcbrm", "title" : "Mayor", "org" : "CBRM", "avatar_url" : "/img/cecil_clarke.png" }' 'https://cbvoice.firebaseio.com/politicos.json'
curl -X POST -d '{"name": "Ray Paruch", "email" : "", "twitter" : "", "title" : "Councillor District 1", "org" : "CBRM", "avatar_url" : "/img/ray_paruch.png" }' 'https://cbvoice.firebaseio.com/politicos.json'
curl -X POST -d '{"name": "Eldon MacDonald", "email" : "", "twitter" : "", "title" : "Councillor District 5", "org" : "CBRM", "avatar_url" : "/img/eldon_macdonald.png" }' 'https://cbvoice.firebaseio.com/politicos.json'
curl -X POST -d '{"name": "Mae Rowe", "email" : "", "twitter" : "", "title" : "Councillor District 3", "org" : "CBRM", "avatar_url" : "/img/rae_rowe.png" }' 'https://cbvoice.firebaseio.com/politicos.json'