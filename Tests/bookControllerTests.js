var should=require('should'),
    sinon=require('sinon');

describe('Book Controller Tests:', function () {
   describe('Post', function () {
       it('should not allow an empty tilte on Post',function () {
           var Book=function (book) {this.save=function(){}};

           var req= {
               body:{
                   author:'Akshay'
               }
           };

           var res={
               status: sinon.spy(),
                        send: sinon.spy()
           }
           var bookController=require('../controller/bookController')(Book);

           bookController.post(req,res);

           res.status.calledWith(400).should.equal(true, 'Bad status'+ res.status.args[0][0]);
           res.send.calledWith('Title is required').should.equal(true);
       })
   })
});