> show dbs                               //생성된 DB를 모두 보여준다
admin     0.000GB
airUsers  0.000GB
config    0.000GB
local     0.000GB
testDB1   0.000GB
> db                                     // 사용중인 db 검색
test
> use airUsers                            //사용할 db 선택 및 생성
switched to db airUsers
> db.person.insert({id:"aaa",pwd:"aaa"})  //airUsers라는 DB에 person이                           //                                          라는 collection생성하고 
//                                          거기에 id, pwd 데이터 넣기
WriteResult({ "nInserted" : 1 })

> db.getCollectionNames()         //db에 collections 확인
[ "airUsers" ]
> db.airUsers.drop()              //db에 airUsers 라는 Collection 삭제true
// Collections 가 삭제 되었다.
> show collections
> db.getCollectionNames()
[ ]
>