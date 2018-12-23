import mongoose from 'mongoose';

import User from '../models/user.server.model';
export const getUsers = (req,res) => {
    User.find().exec((err,users) => {
        if(err){
            return res.json({'success':false,'message':'Some Error'});
        }
        return res.json({'success':true,'message':'Users List fetched successfully',users});
});
}
export const addUser = (req,res) => {
    const newTodo = new User(req.body);
    newTodo.save((err,usr) => {
        if(err){
            return res.json({'success':false,'message':'Some Error'});
        }
        return res.json({'success':true,'message':'Todo added successfully',usr});
})
}
export const updateUser = (req,res) => {
    User.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,usr) => {
        if(err){
            return res.json({'success':false,'message':'Some Error','error':err});
        }
        console.log(usr);
    return res.json({'success':true,'message':'Updated successfully',usr});
})
}
export const getUser = (req,res) => {
    User.find({_id:req.params.id}).exec((err,usr) => {
        if(err){
            return res.json({'success':false,'message':'Some Error'});
        }
        if(usr.length){
            return res.json({'success':true,'message':'Todo fetched by id successfully',usr});
    }
else{
        return res.json({'success':false,'message':'Todo with the given id not found'});
    }
})
}
export const deleteUser = (req,res) => {
    User.findByIdAndRemove(req.params.id, (err,usr) => {
        if(err){
            return res.json({'success':false,'message':'Some Error'});
        }
        return res.json({'success':true,'message':usr.todoText+' deleted successfully'});
})
}