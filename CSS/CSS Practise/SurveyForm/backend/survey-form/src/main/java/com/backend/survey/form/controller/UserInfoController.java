package com.backend.survey.form.controller;

import com.backend.survey.form.entity.UserInfo;
import com.backend.survey.form.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user-info")
@CrossOrigin(origins = "http://localhost:5500")
public class UserInfoController {

    @Autowired
    private UserInfoService userInfoService;

    @PostMapping("/save")
    public UserInfo saveUserInfo(@RequestBody UserInfo userInfo) {
        return userInfoService.saveUserInfo(userInfo);
    }
}
