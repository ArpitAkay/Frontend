package com.backend.survey.form.service.impl;

import com.backend.survey.form.entity.UserInfo;
import com.backend.survey.form.repository.UserInfoRepository;
import com.backend.survey.form.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserInfoServiceImpl implements UserInfoService {

    @Autowired
    private UserInfoRepository userInfoRepository;
    @Override
    public UserInfo saveUserInfo(UserInfo userInfo) {
        return userInfoRepository.save(userInfo);
    }
}
