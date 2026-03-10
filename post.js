function createPost(){

const text = document.getElementById("postInput").value;

db.collection("posts").add({

text:text,
time:Date.now()

});

}

function loadPosts(){

db.collection("posts")
.orderBy("time","desc")
.onSnapshot(snapshot=>{

const container=document.getElementById("posts");

container.innerHTML="";

snapshot.forEach(doc=>{

const post=doc.data();

container.innerHTML+=`
<div class="post">
${post.text}
</div>
`;

});

});

}

loadPosts();