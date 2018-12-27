import mongoose from 'mongoose';
import User from '../models/user.server.model';

export const getUsers = (req, res) => {
    User.find().exec((err, users) => {
        if (err) {
            return res.json({'success': false, 'message': 'Some Error'});
        }
        console.log(users);
        return res.json({'success': true, 'message': 'Users List fetched successfully', users});
    });
}
export const addUser = (req, res) => {
    const newUser = new User(req.body);
    newUser.save((err, usr) => {
        if (err) {
            return res.json({'success': false, 'message': 'Some Error'});
        }
        console.log(usr);
        return res.json({'success': true, 'message': 'User added successfully', usr});
    })
}
export const updateUser = (req, res) => {
    User.findOneAndUpdate({_id: req.body.id}, req.body, {new: true}, (err, usr) => {
        if (err) {
            return res.json({'success': false, 'message': 'Some Error', 'error': err});
        }
        console.log(usr);
        return res.json({'success': true, 'message': 'Updated successfully', usr});
    })
}
export const getUser = (req, res) => {
    User.find({_id: req.params.id}).exec((err, usr) => {
        if (err) {
            return res.json({'success': false, 'message': 'Some Error'});
        }
        if (usr.length) {
            console.log(usr);
            return res.json({'success': true, 'message': 'Users fetched by id successfully', usr});
        }
        else {
            return res.json({'success': false, 'message': 'Users with the given id not found'});
        }
    })
}
export const deleteUser = (req, res) => {
    user.findByIdAndRemove(req.params.id, (err, usr) => {
        if (err) {
            return res.json({'success': false, 'message': 'Some Error'});
        }
        console.log(usr);
        return res.json({'success': true, 'message': usr.firstName + ' deleted successfully'});
    })
}