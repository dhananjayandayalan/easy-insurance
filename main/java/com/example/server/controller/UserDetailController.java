package com.example.server.controller;

import com.example.server.entities.UserDetail;
import com.example.server.service.UserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserDetailController {

    @Autowired
    private UserDetailService userDetailService;



    //add user
    @PostMapping("/signup")
    public UserDetail.UserDetail addUserDetail(@RequestBody UserDetail userDetail){

        return this.userDetailService.addUserDetail(userDetail);
    }

}

