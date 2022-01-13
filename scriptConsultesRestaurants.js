//1.
db.restaurants.find().pretty()

//2.
db.restaurants.find({},{restaurant_id:1,name:1,borough:1,cuisine:1})

//3.
db.restaurants.find({},{_id:0,restaurant_id:1,name:1,borough:1,cuisine:1})

//4.
db.restaurants.find({},{_id:0,restaurant_id:1,name:1,borough:1,"address.zipcode":1})

//5.
db.restaurants.find({borough:"Bronx"})

//6.
db.restaurants.find({borough:"Bronx"}).limit(5)

//7.
db.restaurants.find({borough:"Bronx"}).skip(5).limit(5)

//8.
db.restaurants.find({'grades.score':{$gt:90}})

//9.
db.restaurants.find( { "grades": { $elemMatch: { score: { $gt: 80, $lt: 100 } } } } )

//10.
db.restaurants.find({'address.coord.0':{$lt:-95.754168}})

//11.
db.restaurants.find({$and : [{cuisine:{$ne:'American '}}, {'grades.score':{$gt:70}}, {'address.coord.0':{$lt:-65.754168}}]  })

//12.
db.restaurants.find({cuisine:{$ne:'American '},'grades.score':{$gt:70},'address.coord.0':{$lt:-65.754168}})

//13.
db.restaurants.find({cuisine:{$ne:'American '},'grades.grade':'A',borough:{$ne:'Brooklyn'}}).sort({cuisine:-1})

//14.
db.restaurants.find({name:/^Wil/},{_id:0, restaurant_id:1, name:1, borough:1, cuisine:1})

//15.
db.restaurants.find({name:/ces$/},{_id:0, restaurant_id:1, name:1, borough:1, cuisine:1})

//16.
db.restaurants.find({name:/Reg/},{_id:0, restaurant_id:1, name:1, borough:1, cuisine:1})

//17.
db.restaurants.find({borough:'Bronx',"$or": [{cuisine: 'American '}, {cuisine: 'Chinese'}]})

//18.
db.restaurants.find({"$or":[{borough:'Staten Island'},{borough:'Queens'},{borough:'Bronx'},{borough:'Brooklyn'}]},{_id:0, restaurant_id:1, name:1, borough:1, cuisine:1})

//19.
db.restaurants.find({"$nor":[{borough:'Staten Island'},{borough:'Queens'},{borough:'Bronx'},{borough:'Brooklyn'}]},{_id:0, restaurant_id:1, name:1, borough:1, cuisine:1})

//20.
db.restaurants.find({'grades.score':{$not: {$gt:10}}},{_id:0, restaurant_id:1, name:1, borough:1, cuisine:1})

//21.
db.restaurants.find({cuisine:'Seafood', "$nor":[{cuisine: 'American '},{cuisine:'Chinese'},{name:/^Wil/}] })

//22.
db.restaurants.find({'grades':{'date': ISODate("2014-08-11T00:00:00.000Z"), 'grade':'A','score': 11, }},{_id:0, restaurant_id:1, name:1, grades:1})

//23.
db.restaurants.find({'grades.1':{'date': ISODate("2014-08-11T00:00:00.000Z"), 'grade':'A','score': 9, }},{_id:0, restaurant_id:1, name:1, grades:1})

//24.
db.restaurants.find({"address": { $elemMatch: { "coord.1": { $gt: 42.0000000, $lt: 52.0000000000} } } } ,{_id:0, restaurant_id:1, name:1, 'address.coord':1})

//25.



