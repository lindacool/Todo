const express = require("express"); 
const newTodos = require("../model/newtodos");

const router = express.Router(); 

const item = 3; 

router.route("/todolist")

.get(async(req,res)=> {
    const sort = req.query.sort;
    const page = req.query.page;
    // Hitta alla dok i databasen. De kommer soteras i bokstavsordnig
    const findAllTodos = await newTodos.find().skip((page-1) *item ).limit(5).sort({text:sort});
    // Rendera todos.ejs och skicka in objektet findAllTodos som innehåller alla newtodos sin finns sparade på databasen. 
    res.render("todos", {findAllTodos}); 
})


.post(async(req,res)=>{
    await new newTodos(
        {text: req.body.text}).save((error,success)=>{
            if(error){
                res.send(error.message)
            }
            else
           res.redirect("/todolist")
        })
                
    res.redirect("/todolist");

});

router.get("/delete/:id", async(req,res)=>{
    await newTodos.deleteOne({_id:req.params.id})
    res.redirect("/todolist")
})

router.get("/edit/:id", async (req,res)=>{
    //hämta en data från databasen
    const response = await newTodos.findById({_id:req.params.id})
    //const response = await Comment.findById({_id: req.params.id})
   console.log(response)

  res.render("edit", {response})
  //res.send("test");
})

router.post("/edit/:id", async(req,res)=>{
    console.log(req.body)
     await  newTodos.updateOne({_id:req.body._id} , {$set:{text: req.body.text}})

     res.redirect("/todolist")
    //res.send("test")
})

module.exports = router;